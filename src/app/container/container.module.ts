import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { HomeModule } from '../home/home.module';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'confirmation', component: ConfirmationComponent }
    ]
  },
];


@NgModule({
  declarations: [ContainerComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class ContainerModule { }
