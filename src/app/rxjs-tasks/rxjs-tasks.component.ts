import { Component, OnInit } from '@angular/core';
import { of, from, interval, concat, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-tasks',
  templateUrl: './rxjs-tasks.component.html',
  styleUrl: './rxjs-tasks.component.css'
})
export class RxjsTasksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

    // Task 1: Creating and Subscribing to an Observable with `of`
    
    const numberObservable = of(1, 2, 3, 4, 5,6,7,8,9,10);

    numberObservable.subscribe({
      next: (value) => console.log(`Task 1 - Number emitted: ${value}`),
      complete: () => console.log('Task 1 Observable completed.')
    });

    // Task 2: Working with `from`
    
    const colors = ['Cyan', 'Green', 'Blue', 'Yellow','Violet'];
    const colorObservable = from(colors);

    colorObservable.subscribe({
      next: (color) => console.log(`Task 2 - Color emitted: ${color}`),
      complete: () => console.log('Task 2 Observable completed.')
    });
    // Task 3: Using `interval`
    
    const intervalObservable = interval(1000).pipe(take(5));

    intervalObservable.subscribe({
      next: (value) => console.log(`Task 3 - Interval emitted: ${value}, Timestamp: ${new Date().toLocaleTimeString()}`),
      complete: () => console.log('Task 3 Observable completed.')
    });
    // Task 4: Combining Observables
    
    const numbers = of(10, 20, 30);
    const moreColors = from(['Orange', 'Purple']);

    const combinedObservable = concat(numbers, moreColors);

    combinedObservable.subscribe({
      next: (value) => console.log(`Task 4 - Combined Observable emitted: ${value}`),
      complete: () => console.log('Task 4 Observable completed.')
    });

    // Task 5: Error Handling
  
    const errorObservable = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('Task 5 - An error occurred!');
    });

    errorObservable.subscribe({
      next: (value) => console.log(`Task 5 - Error Observable emitted: ${value}`),
      error: (err) => console.log(`Error: ${err}`),
      complete: () => console.log('Task 5 Observable completed.')
    });

}
}
