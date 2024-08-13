import {TypedEmitter} from 'tiny-typed-emitter';

interface FileManagerEvents {
	read: (filename: string, callback: (err: Error|null, contents?: Buffer) => void) => void;
	save: (filename: string, contents: Buffer, callback: (err: Error|null) => void) => void;
}

export interface Stringifiable {
	toString(): string;
}

declare class FileManager extends TypedEmitter<FileManagerEvents> {
	directory: string;

	constructor(storageDirectory: string);
	isEnabled(): boolean;
	saveFile(filename: string, contents: Buffer|Stringifiable): Promise<void>;
	writeFile(filename: string, contents: Buffer|Stringifiable): Promise<void>;
	saveFiles(files: {[filename: string]: Buffer|Stringifiable}): Promise<void>;
	writeFiles(files: {[filename: string]: Buffer|Stringifiable}): Promise<void>;
	readFile(filename: string): Promise<Buffer>;
	readFiles(filenames: string[]): Promise<{filename: string, contents?: Buffer, error?: Error}[]>;
}

export default FileManager;
