import { Observable, filter, from, map } from "rxjs";

let numbers = [1, 5, 10, 15, 20, 25, 30];

class x {
  y() {
  }
}

let axy = new x();
axy.y()

// error will stop subscriber function
// complete will also stop subscriber
// subscriber -> observable function
let source = new Observable(subscriber => {
  let index = 0;
  let produceValue = () => {
    subscriber.next(numbers[index++])
    if (index < numbers.length) {
      setTimeout(produceValue, 500);
    } else {
      subscriber.complete();
    }
  }
  produceValue();
});




// Observable(subscriber) will be executed when .subscribe
source.pipe(
  map((n: number) => n * 2)
  ).subscribe({
    next: (x: number) => console.log(x),
    error: (e: Error) => console.log(e),
    complete: () => console.log('Complete')
  });
  
  source.pipe(
    filter((n: number) => n > 4)
  ).subscribe({
    next: (x: number) => console.log(`filter: ${x}`),
    error: (e: Error) => console.log(e),
    complete: () => console.log('Complete')
  });