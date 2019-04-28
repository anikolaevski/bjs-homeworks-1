function setAlarm (time, callback) {
  const ct = get_hhmm_time();
  if(ct == time) {
    return callback;
  }
}

function get_hhmm_time() {
  const now = new Date();
  const f = (x) => { let y = x + ''; return (y.length < 2)? '0'+y: y };
  return f(now.getHours())+':'+f(now.getMinutes());
}

function setDailyRhythm(wakeUpTime, bedTime) {
  const f1 = setAlarm(wakeUpTime, () => alert('Пора просыпаться!'));
  if(f1) {f1()};
  const f2 = setAlarm(bedTime, () => alert('Пора в кровать!'));
  if(f2) {f2()};
}

setInterval(setDailyRhythm('07:00','23:00'),60000); // 1 раз в минуту
