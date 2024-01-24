const { Observable } = require('rxjs');

const simulateInputChanges = new Observable((subscriber) => {
  subscriber.next("Value 01");
  subscriber.next("Value 02");
  subscriber.next("Value 03");
  subscriber.complete()
});

simulateInputChanges.subscribe( data => console.log(data))


// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');