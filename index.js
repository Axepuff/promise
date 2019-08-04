import Promise from './src/promise';

const prom = new Promise((res, rej) => {
  setTimeout(() => {
    resolve('kek');
  }, 100);
});

prom.then(data => {
  console.log(data);
});