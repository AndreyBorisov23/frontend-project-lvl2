#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
    .version('0.0.1', '-v, --version', 'output the current version')
    .helpOption('-h, --help', 'output usage information')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>');

program.parse(process.argv);