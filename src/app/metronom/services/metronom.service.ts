import { Injectable } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetronomService {

  constructor() { }
  private subject$: BehaviorSubject<number>;

  getMetronom(beats: number) {
    this.subject$ = new BehaviorSubject(beats)
    return this.subject$.pipe(
      share(), switchMap(
        bpm => {
          return interval(this.bpmToMiliseconds(bpm));
        }
      )
    )
  };

  setBpm(beats: number) {
    this.subject$.next(beats);
  }

  bpmToMiliseconds(bpm: number) {
    return (bpm * -100) / 3 + 3000
  }

}
