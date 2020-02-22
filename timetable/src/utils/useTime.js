
export function UTCminNow () {
  var now = new Date()
  return now.getTime()
}

export function dateNow () {
  var now = new Date()
  var ss = String(now.getSeconds()).padStart(2, '0')
  var mins = String(now.getMinutes()).padStart(2, '0')
  var hh = String(now.getHours()).padStart(2, '0')
  var dd = String(now.getDate()).padStart(2, '0')
  var mm = String(now.getMonth() + 1).padStart(2, '0')
  var yyyy = now.getFullYear()
  const dateNow = yyyy + '-' + mm + '-' + dd
  const timeNow = hh + ':' + mins + ':' + ss

  return {
    date: dateNow,
    time: timeNow
  }
}

export function dateAt (UTCmil) {
  var date = new Date()
  date.setTime(UTCmil)
  var ss = String(date.getSeconds()).padStart(2, '0')
  var mins = String(date.getMinutes()).padStart(2, '0')
  var hh = String(date.getHours()).padStart(2, '0')
  var dd = String(date.getDate()).padStart(2, '0')
  var mm = String(date.getMonth() + 1).padStart(2, '0')
  var yyyy = date.getFullYear()
  const dateNow = yyyy + '-' + mm + '-' + dd
  const timeNow = hh + ':' + mins + ':' + ss

  return {
    date: dateNow,
    time: timeNow
  }
}
