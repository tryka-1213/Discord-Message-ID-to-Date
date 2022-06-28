module.exports = (id) => {
  const epoch = 1420070400000 // Discord's epoch
  const milliseconds = BigInt(args[0]) >> 22n

  let result = new Date(Number(milliseconds) + epoch)

  return result
}
