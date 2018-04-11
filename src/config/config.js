export default ({
  a: 'aaaaaa',
  bb: 'BBBBB',
  clear: function (value) {
    return /^\d{11}$/.test(value)
  }
})
