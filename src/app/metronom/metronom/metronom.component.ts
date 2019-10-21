import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, sequence } from '@angular/animations';
import { MetronomService } from '../services/metronom.service';

@Component({
  selector: 'app-metronom',
  templateUrl: './metronom.component.html',
  styleUrls: ['./metronom.component.scss'],
})
export class MetronomComponent implements OnInit {
  audio: HTMLAudioElement;
  accent: HTMLAudioElement;
  isRed = false;
  beats: number = 60;
  constructor(
    private readonly metronomService: MetronomService
  ) { }

  ngOnInit() {
    this.audio = new Audio("../../assets/clickShortSilence1.mp3");
    this.accent = new Audio("../../assets/clickShortSilenceHigh1.mp3");

    this.metronomService.getMetronom(this.beats).subscribe(() => {
      this.clickSound();
    });
  }

  clickSound() {
    this.audio.play();

    // this.setRed();
  }

  changeMetronom() {
    this.metronomService.setBpm(this.beats);
  }

  setRed() {
    this.isRed = true;
    setTimeout(() => {
      this.isRed = false;
    }, 200);
  }
}
