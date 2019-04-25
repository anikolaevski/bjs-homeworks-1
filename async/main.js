//Task#1
function setAlarm(time, callback) {
  const curTime = new Date();
  const curYear = curTime.getFullYear();
  const curMonth = curTime.getMonth();
  const curDay = Math.floor(curTime.getDate());
  const paramTime = time.split(':');
  const paramHour = parseInt(paramTime[0],10);
  const paramMin = parseInt(paramTime[1],10);
  const calcDate = new Date(curYear, curMonth, curDay, paramHour, paramMin,0,0);
  const diff = Math.abs(calcDate - curTime);
  const f = function() {
    const args = Array.from(arguments);
    const result = callback.apply(null, args);
    return result;
  }
//  console.log(diff);
  if(diff < 5000) {
    return f();
  }
}
//тест
const workCheck = '10:00';
const StartWorking = () => alert('Хорош околачивать груши! Работать!'); 
const checkTime = () => setAlarm(workCheck, StartWorking);

console.log(checkTime);

function setDailyRhythm(wakeUpTime, bedTime) {
  const wakeUp = () => alert('Просыпайся!');
  const go2bed = () => alert('Спокойной ночи!');
  const checkTime01 = () => setAlarm(wakeUpTime, wakeUp);
  const checkTime02 = () => setAlarm(bedTime, go2bed);
  setInterval(checkTime01, 5000); // Каждые 5 сек
  setInterval(checkTime02, 5000);
}

setDailyRhythm('07:00', '23:00');
