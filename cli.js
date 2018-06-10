#!/usr/bin/env node

const pkg = require('.')
const cowsay = require('./cowsay')

console.log(cowsay);
console.log(pkg());