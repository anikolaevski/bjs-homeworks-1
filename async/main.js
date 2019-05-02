function setAlarm (time, callback) {
    const d = new Date();
    // return () => callback(time,d);
    const makeTimeSecs = (alert) => {return alert + ((alert.length == 5)?':00':'')};
    const get_hhmmss_time = (time) => {
      const f = (x) => { let y = x + ''; return (y.length < 2)? '0' + y: y };
      return f(time.getHours())+':'+f(time.getMinutes())+':'+f(time.getSeconds());
    }
    // console.log(makeTimeSecs(time), get_hhmmss_time(d));
    if(makeTimeSecs(time) == get_hhmmss_time(d)) {
      callback();
    }
}

function setDailyRhythm(arg1, arg2) {
  const GoodMorning = () => alert('Вставай, Вася!');
  const GoodNight = () => alert('Пора ложиться, Вася!');
  const wakeUp = () => setAlarm(arg1, GoodMorning);
  const gotoBed = () => setAlarm(arg2, GoodNight);
  setInterval(wakeUp,1000);
  setInterval(gotoBed,1000);
}

setDailyRhythm('07:00','23:00');
// setDailyRhythm('21:07:55','21:08:15');
