import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  onSubmit(value: any): void {
    console.log('here, ', value);
  }
  ngOnInit(): void {}
}
