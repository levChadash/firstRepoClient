import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: 
  [
    ReactiveFormsModule,
    CommonModule,FormsModule,
  ],
  exports:
  [
    LogInComponent
  ]
})
export class UserModule { }
