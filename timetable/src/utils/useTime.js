
export function secsToMins (secs) {
  return Math.ceil(secs/60)
}
export function UTCmilNow () {
  var now = new Date()
  return now.getTime()
}

export function addMinsToDate(date, mins) {
  return date + mins*60000
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
  console.trace(date)
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

export function UTCmilAt(time) {


  const hh = Number(time.split(':')[0])
  const mins = Number(time.split(':')[1])
  var date = new Date()
  date.setMinutes(mins)
  date.setHours(hh)
  date.setSeconds(0)
  //console.log(date)
  return date.getTime()
}
