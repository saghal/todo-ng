import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-form-component',
  templateUrl: './new-form-component.component.html',
  styleUrls: ['./new-form-component.component.css'],
})
export class NewFormComponentComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([]),
  });
  constructor() {}
  addTopic(topic: HTMLInputElement): void {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    //above line can alter with this.topic ---> come from get topics()
  }
  removeTopic(topic: AbstractControl): void {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }

  ngOnInit(): void {}
}
