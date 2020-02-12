import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  countryListObs$: Observable<CountrySelectItem[]>;

  form = this.formBuilder.group({
    account: new FormControl(''),
    password: new FormControl(''),
    country: new FormControl('', Validators.required)
  });

  value: string;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.initForm();
    this.getCountryList();
  }

  initForm() {
    // Listen account change
    this.form.get('account').valueChanges
      .pipe(debounceTime(400))
      .subscribe(account => this.value = account);

    // Listen password change
    this.form.get('password').valueChanges
      .subscribe(password => this.value = password);
  }

  getCountryList() {
    this.countryListObs$ = this.httpClient.get<CountrySelectItem[]>('https://next.json-generator.com/api/json/get/VkgTFqnGO');
  }
}

export interface CountrySelectItem {
  name: string;
  value: string;
}
