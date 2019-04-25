function setAlarm (time, message, callback) {
    const ct = get_hhmm_time();
    if(ct == time) {
      callback(message);
    }
 }

 function get_hhmm_time() {
  const now = new Date();
  let now_hours = now.getHours()+'';
  let now_mins = now.getMinutes()+'';
  while (now_hours.length < 2) { now_hours  = "0" + now_hours;}
  while (now_mins.length < 2) { now_mins  = "0" + now_mins;}
 return now_hours+':'+now_mins;
}
 
//тест

setAlarm('23:29', 'Пора сдавать работу!', (message) => {alert(message)});

function setDailyRhythm(wakeUpTime, bedTime) {
  setInterval(setAlarm(wakeUpTime, 'Пора просыпаться!', (message) => {alert(message)}), 60000); 
  setInterval(setAlarm(bedTime, 'Пора в кровать!', (message) => {alert(message)}), 60000);
}
