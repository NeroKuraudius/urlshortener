function transferUrl() {
  const dataList = '1234567890qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP'
  let randomNumber = ''
  for (let i = 0; i < 5; i++) {
    randomNumber += dataList[Math.floor(Math.random() * dataList.length)]
  }
  return randomNumber
}

module.exports = transferUrl