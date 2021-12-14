import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { BookingsComponent } from './componente/bookings/bookings.component';
import { HomeComponent } from './componente/home/home.component';

const routes: Routes = [
  {
    path:'bookings',
    component: BookingsComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
