const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('kan.adedeji@gmail.com'))
console.log(chalk.green('Success'))
console.log(yargs.argv)