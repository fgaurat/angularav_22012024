

const { Observable,tap,map } = require('rxjs');



const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);

  
});



observable.pipe(
    tap(d => console.log(`valeur de ${d}`)),
    map( d => d*2),
    tap(d => console.log(`valeur*2 de ${d}`)),
).subscribe(console.log)