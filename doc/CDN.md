# Steam CDN Client

As of v3.16.0, a `SteamUser` can interact with Steam's CDN and download content.
**This is currently experimental.**

## Properties

### contentServersReady

A boolean indicating whether or not the preliminary list of content servers has been received. If this is true, then you
can safely use `getContentServers`.

## Methods

### getContentServers(callback)
- `callback` - A function to be called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `servers` - An array of objects, each of which contains info about a content server

Requests a list of 20 content servers from Steam for your current region. Can only be called after [`contentServersReady`](#contentserversready-1) has been emitted.
The first time this returns success, the list will be cached in memory indefinitely, and subsequent calls will return
the cached data immediately in the callback.

### getDepotDecryptionKey(appID, depotID, callback)
- `appID` - The AppID of the app for which you want a decryption key
- `depotID` - The ID of the depot in the app for which you want a key
- `callback` - Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `key` - On success, the requested decryption key as a `Buffer`

Requests the decryption key for a particular depot. Depot decryption keys are required to decrypt filenames in manifests
and content in data chunks.

On success, this will be saved to disk (in the designated `dataDirectory`) and the local data will be returned to the
callback immediately for subsequent requests for this appID/depotID pair.

Locally cached data expires after 14 days, after which time it will be re-requested.

### getCDNAuthToken(appID, depotID, hostname, callback)
- `appID` - The ID of the app for which you want an auth token
- `depotID` - The ID of the depot for which you want an auth token
- `hostname` - The hostname of the content server for which you want an auth token
- `callback` - Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `token` - The requested auth token on success, as a string
    - `expires` - On success, this is the time when this token will expire, as a `Date` object

Requests an auth token for a particular DepotID to be downloaded from a given content server. One token is required per
depot and per content server. On success, the token will be cached in memory until it expires or the SteamUser disconnects.

### getManifest(appID, depotID, manifestID, callback)
- `appID` - The AppID of the app for which you want a manifest
- `depotID` - The ID of the depot for which you want a manifest
- `manifestID` - The ID of the manifest you want, as a string
- `callback` - Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `manifest` - The manifest, as an object

Performs the following:

1. Retrieves a list of content servers (via `getContentServers`)
2. Chooses a random content server from the list
3. Retrieves a CDN auth token for the chosen content server
4. Downloads the specified manifest from the chosen content server
5. Decompresses the manifest
6. Parses the manifest into an object
7. If the filenames in the manifest are encrypted, retrieves the depot's decryption key (via `getDepotDecryptionKey`) and decrypts the filenames

A **manifest ID** is essentially a revision number. Every time a depot is updated, a new manifest ID is issued. You can
download any manifest if you have its ID (and you own the app). A manifest contains a listing of all files in the depot,
their sizes, and metadata about the chunks which make them up.

### getRawManifest(appID, depotID, manifestID, callback)
- `appID` - The AppID of the app for which you want a manifest
- `depotID` - The ID of the depot for which you want a manifest
- `manifestID` - The ID of the manifest you want, as a string
- `callback` - Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `manifest` - The manifest, as an object

Same as `getManifest`, but stops after step 5 (e.g. decompresses the manifest but doesn't parse it).

### downloadChunk(appID, depotID, chunkSha1[, contentServer], callback)
- `appID` - The AppID of the app from which you want a chunk
- `depotID` - The ID of the depot from which you want a chunk
- `chunkSha1` - The SHA1 hash of the chunk you want to download, as a string. You can get this from a manifest.
- `contentServer` - Optional. Should be an object returned by `getContentServers`. Omit to choose a random one.
- `callback` - Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `data` - The chunk's data, as a `Buffer`

Performs the following:

1. If `contentServer` was not provided, retrieves the content server list (via `getContentServers`) and chooses a random one
2. Retrieves a CDN auth token for the specified appID and content server
3. Retrieves the depot's decryption key
4. Downloads the chunk data from the chosen content server
5. Decrypts the downloaded data
6. Decompresses the decrypted data
7. Verifies the decompressed data with the provided SHA1 hash

### downloadFile(appID, depotID, fileManifest[, outputFilePath], callback)
- `appID` - The AppID of the app from which you want a file
- `depotID` - The ID of the depot from which you want a file
- `fileManifest` - Should be an object from the `files` array of a manifest, as-is
- `outputFilePath` - Optional. If you want to write this file to disk, this should be a string containing the desired destination path (all directories must exist). If the file already exists, it will be overwritten. If omitted, then the downloaded file will be stored in memory.
- `callback` - Called when the download is complete
    - `err` - An `Error` object on failure, or `null` on success
    - `data` - If `outputFilePath` was omitted, this is a `Buffer` containing the downloaded file on success

Downloads a particular file from the CDN. Retrieves the content server list (via `getContentServers`) and chooses 4
servers at random. Then, downloads up to 4 chunks concurrently from the chosen servers (one chunk per server) via
`downloadChunk` until the entire file is downloaded. If a chunk fails, its content server is discarded and a new one is
chosen. If it continues to fail, the entire download is aborted.

If you opt to write the download to disk (by providing `outputFilePath`), then the space is pre-allocated before any
chunks are downloaded. As chunks finish downloading, they are patched into the pre-allocated space. The maximum amount
of memory that should be in use at a time due to downloads which are being written to disk is ~4-5 MB.

If you do not provide an `outputFilePath`, then the entire file will be stored in memory. The memory will be pre-allocated
before any chunks are downloaded. If you opt to download a very large file this way, be sure that you have enough
memory available.

The file's checksum is validated with the one in the `fileManifest` before success is returned to the callback.

Note that on failure, any allocated disk space will not be automatically cleaned up. The garbage collector will reclaim
any memory, however.

This method returns an EventEmitter which emits `progress` events as chunks finish downloading. Each `progress` event has these arguments:
- `bytesDownloaded` - How many bytes have finished downloading
- `totalSize` - The total file size in bytes

### getAppBetaDecryptionKeys(appID, password, callback)
- `appID` - The AppID of the app for which you want beta decryption keys
- `password` - The password you want to use to get keys, as a string
- `callback` - Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `branches` - An object whose keys are branch names and values are `Buffer`s containing keys

Given a beta access code (password), requests decryption keys for matching branches. Those keys can be used to decrypt
the `encrypted_gid_2` value in those branches (in the data retrieved from `getProductInfo`).

You can use [`symmetricDecryptECB`](https://github.com/DoctorMcKay/node-steam-crypto#symmetricdecryptecbinput-sessionkey)
in `@doctormckay/steam-crypto` to decrypt those values, which are manifest IDs. Just read the decrypted data as an
unsigned little-endian 64-bit integer.

## Events

### contentServersReady

Emitted when the preliminary content server list is received from Steam. You can't use `getContentServers` before this
is emitted. When this is emitted, the [`contentServersReady`](#contentserversready) property is set to true.
