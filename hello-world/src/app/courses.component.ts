import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>ok courses</h2>
    <button (click)="onFire()" [class.btn-primary]="isActive">
      click this!
    </button>
    <input [(ngModel)]="email" (keyup.enter)="onInput()" />
  `,
})
export class CoursesComponent {
  isActive = true;
  email = 'a@a.com';
  onFire() {
    console.log('ok this is clicked');
  }
  onInput() {
    console.log(this.email);
  }
}
