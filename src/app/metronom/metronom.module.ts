import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MetronomComponent } from './metronom/metronom.component';



@NgModule({
  declarations: [MetronomComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MetronomComponent]
})
export class MetronomModule { }
