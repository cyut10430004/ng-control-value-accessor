import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CountrySelectItem } from '../ng-control-value-accessor/ng-control-value-accessor.component';

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
  @Input()
  disabled = false;

  // 國家列表 Obs
  countryListObs$: Observable<CountrySelectItem[]>;

  // 選取的國家
  selectedCountry: string;

  // 用來接收 registerOnChange 和 registerOnTouched 傳入的方法
  output: (value) => {};
  onTouched: () => {};

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getCountryList();
  }

  // 拿到父層 formControl 給的 value
  writeValue(obj: any) {
    console.log('writeValue', obj);
    this.selectedCountry = obj;
  }

  // 父層 formControl 給的 fn , 使用 fn(value) 就能把值傳回去給父層
  registerOnChange(fn: any) {
    console.log('registerOnChange', fn);
    this.output = fn;
  }

  // 父層 formControl 給的 fn , 使用 fn(value) 就能把值傳回去給父層
  registerOnTouched(fn: any) {
    console.log('registerOnTouched', fn);
    this.onTouched = fn;
  }

  // 拿到父層 formControl 給的 disable
  setDisabledState(isDisabled: boolean) {
    console.log('setDisabledState', isDisabled);
    this.disabled = isDisabled;
  }

  // 取得國家清單
  getCountryList() {
    this.countryListObs$ = this.httpClient.get<CountrySelectItem[]>('https://next.json-generator.com/api/json/get/VkgTFqnGO');
  }
}
