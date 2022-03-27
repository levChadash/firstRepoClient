import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//design select
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { MainStudentComponent } from './main-student/main-student.component';
import { RegisterComponent } from './register/register.component';





import {InputTextareaModule} from 'primeng/inputtextarea';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialExampleModule } from 'src/app/material.module';
import { FriendVolunteerComponent } from './friend-volunteer/friend-volunteer.component';



const student_routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"main-student",component:MainStudentComponent}
  ];

@NgModule({
  declarations: [
    MainStudentComponent,
    RegisterComponent,
    FriendVolunteerComponent
    // SelectOverviewExample,
  ],
  imports: [
    RouterModule.forChild(student_routes),

    // BrowserModule,

    MatSelectModule,
    HttpClientModule,
 
    MatFormFieldModule,
    MaterialExampleModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    InputTextareaModule
   
  ],

  
  // bootstrap: [SelectOverviewExample],
 
})
export class StudentModule {
 

 }

