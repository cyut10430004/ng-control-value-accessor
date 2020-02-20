import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-rx-debounce-time',
  templateUrl: './rx-debounce-time.component.html',
  styleUrls: ['./rx-debounce-time.component.scss']
})
export class RxDebounceTimeComponent implements OnInit {
  form = this.formBuilder.group({
    normal: new FormControl(''),
    useDebounce: new FormControl(''),
  });

  normalValue: string;
  useDebounceValue: string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form.get('normal').valueChanges
      .subscribe(value => this.normalValue = value);
    this.form.get('useDebounce').valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => this.useDebounceValue = value);
  }
}
