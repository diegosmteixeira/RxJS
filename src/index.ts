import { Observable, from } from "rxjs";

let numbers = [1, 5, 10];
let source = from(numbers)

// error will stop subscriber function
// complete will also stop subscriber
// subscriber -> observable function
let sourceInstance = new Observable(subscriber => {
  for (let n of numbers) {
    if (n > 5)
      subscriber.error('Unexpected error');
    subscriber.next(n);
    subscriber.complete();
  }
  subscriber.complete();
});

const myObserver = {
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log('Complete')
}

function component() {
    source.subscribe(myObserver);

    // Observable(subscriber) will be executed when .subscribe
    sourceInstance.subscribe(myObserver);
  }

component();