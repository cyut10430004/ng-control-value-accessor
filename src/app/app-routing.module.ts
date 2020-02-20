import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgControlValueAccessorComponent } from './components/ng-control-value-accessor/ng-control-value-accessor.component';
import { RxDebounceTimeComponent } from './components/rx-debounce-time/rx-debounce-time.component';

const routes: Routes = [
  {
    path: 'ngCVA',
    component: NgControlValueAccessorComponent
  },
  {
    path: 'rxDT',
    component: RxDebounceTimeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
