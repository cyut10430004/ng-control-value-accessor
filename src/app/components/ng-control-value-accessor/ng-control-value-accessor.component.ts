import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ng-control-value-accessor',
  templateUrl: './ng-control-value-accessor.component.html',
  styleUrls: ['./ng-control-value-accessor.component.scss']
})
export class NgControlValueAccessorComponent implements OnInit {
  countryListObs$: Observable<CountrySelectItem[]>;

  form = this.formBuilder.group({
    account: new FormControl(''),
    password: new FormControl(''),
    country: new FormControl('', Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getCountryList();
  }

  getCountryList() {
    const apiUrl = 'https://next.json-generator.com/api/json/get/VkgTFqnGO';
    this.countryListObs$ = this.httpClient.get<CountrySelectItem[]>(apiUrl);
  }
}

export interface CountrySelectItem {
  name: string;
  value: string;
}
