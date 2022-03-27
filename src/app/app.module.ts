import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { StudentModule } from './modules/student/student.module';
import { AdminModule } from './modules/admin/admin.module';
import { VolunteerModule } from './modules/volunteer/volunteer.module';

import { FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MaterialExampleModule } from './material.module';



import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    AppComponent,

    // VolunteerMenuComponent


  ],
  imports: [
    UserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    VolunteerModule,
    StudentModule,
    AdminModule,
    MaterialExampleModule,

    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatSliderModule,

    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


