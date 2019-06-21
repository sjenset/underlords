import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroFilterComponent } from './components/hero-filter/hero-filter.component';

@NgModule({
  declarations: [HeroFilterComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
