var babel = require("babel-core")

var Transformer = babel.Transformer
var types = babel.types

module.exports = new Transformer("strip-invariant", {
  CallExpression: function(node, parent) {
    if(node.callee.name) {
      return types.callExpression(types.identifier("invariant"), [
        node.arguments[0]
      ])
    }
  },
})
