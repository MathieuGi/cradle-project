import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import {UsersService} from './shared/users-service/users.service';
import { DashboardComponent } from './dashboard/dashboard.component'

import {AppRoutingModule} from './app-routing.module'

import {MaterialModule} from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }