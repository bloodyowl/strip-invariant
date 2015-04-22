var tape = require("tape")
var babel = require("babel")
var path = require("path")
var fs = require("fs")

tape("invariant", function(test) {
  var file = fs.readFileSync(path.resolve(__dirname, "./source.fixture.js"))
  var transformed = babel.transform(file)
  test.notEqual("invariant(condition)", -1)
  test.notEqual("invariant(true === false)", -1)
  test.end()
})
