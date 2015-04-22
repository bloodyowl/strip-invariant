export default {
  one(condition) {
    invariant(
      condition,
      "foo",
      "bar"
    )
    return condition
  },
  two() {
    invariant(
      true === false,
      "with",
      "many",
      "arguments"
    )
  }
}

