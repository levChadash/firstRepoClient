import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainVolunteerComponent } from './main-volunteer/main-volunteer.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatFormFieldModule} from '@angular/material/form-field'


import {HttpClientModule} from '@angular/common/http';

import { ReportComponent } from './report/report/report.component';
import { ProblemComponent } from './problem/problem.component';
import { RouterModule, Routes } from '@angular/router';


import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { VolunteerMenuComponent } from './volunteer-menu/volunteer-menu.component';
import { AbsentComponent } from './absent/absent.component';
import {EditorModule} from 'primeng/editor';


const voluntee_routes: Routes = [
  {path:"report",component:ReportComponent},
  {path:"problem",component:ProblemComponent},
  {path:"absent",component:AbsentComponent},
  ];


@NgModule({
  declarations: [
    MainVolunteerComponent,
   ReportComponent,
    ProblemComponent,
    AbsentComponent,
    VolunteerMenuComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(voluntee_routes),
    
   //Material
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  
   
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatSliderModule,
    EditorModule

    
  ],

  
  exports:
  [
    MainVolunteerComponent,
    VolunteerMenuComponent,
    AbsentComponent
  ]
})
export class VolunteerModule { }
