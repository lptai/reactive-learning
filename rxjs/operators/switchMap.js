// import { of } from 'rxjs';
// import { switchMap } from 'rxjs/operators';

const { of } = require('rxjs');
const { switchMap } = require('rxjs/operators');

const switched = of(1, 2, 3).pipe(switchMap((x) => of(x * 2)));
switched.subscribe((x) => console.log(x));
