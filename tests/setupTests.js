/* global jest */

var fetchMock = require('fetch-mock')
var fs = require('fs')
var glob = require('glob')
var path = require('path')

var filenames = glob.sync('src/*.csv').map(name => path.basename(name))

filenames.forEach(mockFilename => {
  // Parcel makes us use require() for filenames, so it knows the files are
  // there. If I use require('data.csv'), it will convert it to something like
  // data-8ea342cd.csv.

  // Normal node code doesn't understand 'require' the same
  // way, so we need to trick it and give it back the real filename.

  jest.mock('../src/' + mockFilename, () => {
    return mockFilename
  })

  // Read in the contents of the file. When it asks for the 'fake' file,
  // just give it back the real file's contents.

  var contents = fs.readFileSync('src/' + mockFilename, 'utf8')
  fetchMock.get(mockFilename, contents)
})
