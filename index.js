#!/usr/bin/env node

var args = process.argv,
    childProcess = require('child_process');
    finished = require('tap-finished');

var child = childProcess.spawn(args[2], args.slice(3));
process.stdin.pipe(child.stdin);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
child.stdout.pipe(finished(function(results) {
    process.exit(results.ok ? 0 : 1);
}));