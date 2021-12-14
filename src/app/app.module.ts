import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './componente/bookings/bookings.component';
import { LoginComponent } from './componente/login/login.component';
import { HomeComponent } from './componente/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
