const tick = setInterval(() => {
    console.log("tick");
},3000); // будет выполнятся каждые 3 секунды

const interval = setInterval(() => {
    console.log("interval");
},1000); // будет выполнятся каждые 1 секунды

setTimeout(() => {
    clearInterval(tick);
    clearInterval(interval);
},5000) // остановили tick, interval