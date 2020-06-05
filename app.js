const fs = require('fs')
const validator = require('validator')
const noteTemplate = require('./notes.js')


// const noteT = noteTemplate()

fs.writeFileSync('notes.txt', noteTemplate())
