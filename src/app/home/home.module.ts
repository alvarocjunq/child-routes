import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { SmsComponent } from './sms/sms.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'sms', component: SmsComponent }
    ]
  }
];

@NgModule({
  declarations: [LoginComponent, HomeComponent, SmsComponent, FaqComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
