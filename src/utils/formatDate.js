export const formatDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const d = new Date(date)
  let currentDay = d.getDate()
  let currentMonth = months[d.getMonth()]

  if (('0' + currentDay).slice(-1) === '1') {
    currentDay = `${currentDay}st`
  } else if (('0' + currentDay).slice(-1) === '2') {
    currentDay = `${currentDay}nd`
  } else if (('0' + currentDay).slice(-1) === '3') {
    currentDay = `${currentDay}rd`
  } else {
    currentDay = `${currentDay}th`
  }

  return `${currentMonth}, ${currentDay} ${d.getFullYear()}`
}
