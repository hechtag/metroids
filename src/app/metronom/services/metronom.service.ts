import { Injectable } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetronomService {

  constructor() { }
  private subject$ = new BehaviorSubject(1000);

  getMetronom() {
    return this.subject$.pipe(share(), switchMap(bpm => interval(bpm)))
  };

  setBpm(beats: number) {
    this.subject$.next(beats);
  }
}
