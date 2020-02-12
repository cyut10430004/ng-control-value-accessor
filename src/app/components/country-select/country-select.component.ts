import { Component, OnInit, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountrySelectItem } from '../register/register.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CountrySelectComponent,
      multi: true
    }
  ]
})
export class CountrySelectComponent implements OnInit, ControlValueAccessor {
  // 國家列表 Obs
  countryListObs$: Observable<CountrySelectItem[]>;

  // 選取的國家
  selectedCountry: string;

  // 元件是否鎖定
  disabled = false;

  // 用來接收 registerOnChange 和 onTouched 傳入的方法
  output: (value) => {};
  onTouched: () => {};

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getCountryList();
  }

  // 拿到 formControl 給的 value
  writeValue(obj: any) {
    this.selectedCountry = obj;
  }

  // formControl 給的 fn , fn(value) 就能把值傳回去給 formControl
  registerOnChange(fn: any) {
    this.output = fn;
    console.log('registerOnChange');
  }

  // formControl 給的 fn , fn(value) 就能把值傳回去給 formControl
  registerOnTouched(fn: any) {
    this.onTouched = fn;
    console.log('registerOnTouched');
  }

  // 拿到 formControl 給的 disable
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    console.log('setDisabledState');
  }

  // 取得國家清單
  getCountryList() {
    this.countryListObs$ = this.httpClient.get<CountrySelectItem[]>('https://next.json-generator.com/api/json/get/VkgTFqnGO');
  }
}
