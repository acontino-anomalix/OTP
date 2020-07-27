import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiscreensComponent } from './uiscreens/uiscreens.component';
import { OtpinitialComponent } from './otpinitial/otpinitial.component';
import { FailscreenComponent } from './failscreen/failscreen.component';

const routes: Routes = [
  {path: 'otp', component: OtpinitialComponent},

  {path: 'ui-screens', component: UiscreensComponent},
  {path: 'fails-screens', component: FailscreenComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
