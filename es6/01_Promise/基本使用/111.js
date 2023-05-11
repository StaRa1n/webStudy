function demo(test) {
  test(222)
}

demo((value) => {
  console.log(value);
})