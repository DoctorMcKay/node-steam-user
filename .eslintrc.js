module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended'],
	root: true,
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	ignorePatterns: [
		'dev/*'
	],
	rules: {
		'prefer-const': 'off',
		'no-case-declarations': 'off',
		'no-async-promise-executor': 'off',

		// Use tabs for indentation and require 'case' in switch to be indented 1 level (default 0)
		indent: ['error', 'tab', {SwitchCase: 1}],
		// Single quotes for strings
		quotes: ['error', 'single'],
		// Always require semicolons
		semi: ['error', 'always'],
		// Don't use 'var'
		'no-var': 'error',
		// Only use quotes in object literal keys as needed
		'quote-props': ['error', 'as-needed'],
		// Don't allow trailing spaces after a line
		'no-trailing-spaces': 'error',
		// Require spaces before and after keywords (like "if")
		'keyword-spacing': 'error',
		// Don't allow unused variables, but allow unused function args (e.g. in callbacks) and global vars
		'no-unused-vars': ['error', {vars: 'local', args: 'none', varsIgnorePattern: '^_'}],
		// Require using dot notation (obj.prop instead of obj['prop']) where possible
		'dot-notation': 'error',
		// Don't use spaces before parens in anonymous or named functions
		'space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}]

		// We will NOT be using eqeqeq for a few reasons:
		//  1. I'm only using ESLint to enforce style, not actual differences in functionality. ==/=== is not merely a style choice.
		//       Yes, I know that 'no-var' is actually enforcing a difference in functionality, but in practice nobody uses
		//       (or even knows about) var's hoisting functionality, so at this point it's effectively a style choice.
		//  2. A lot of the time, you actually *want* loose equality checks, especially when interacting with a web server
		//       (as HTTP as no concept of anything but strings). Yes, most of our interaction is JSON, but not all. And even then,
		//       not all JSON actually serializes numbers as numbers.
		//  3. `==` is really nowhere near as dangerous as memes would lead you to believe, if you know what you're doing.
		//  4. If the idea behind enforcing `===` is to prevent inexperienced developers from unwittingly introducing bugs
		//       via loose quality checks, in my opinion it could be just as harmful to instruct a code quality tool to
		//       naively demand that all `==` become `===`. If a developer were to build code that works, but upon opening
		//       a pull request they see that ESLint demands they use `===` instead, they might just click "fix" and resubmit,
		//       expecting the code quality tool to know what it's doing. But it *doesn't* know what it's doing, since it's
		//       just blindly alerting when it sees `==`. The change in functionality from `==` to `===` could very well
		//       introduce a bug by itself.
	}
};
