import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { StudentGuard } from './guards/student.guard';
import { VolunteerGuard } from './guards/volunteer.guard';
// import { MainAdminComponent } from './main-admin/main-admin.component';
import { MainStudentComponent } from './modules/student/main-student/main-student.component';

import { LogInComponent } from './modules/user/log-in/log-in.component';
import { MainVolunteerComponent } from './modules/volunteer/main-volunteer/main-volunteer.component';
import { ProblemComponent } from './modules/volunteer/problem/problem.component';
import { ReportComponent } from './modules/volunteer/report/report/report.component';

const routes: Routes = [
  {path:"",component:LogInComponent},
  {path:"log-in",component:LogInComponent},
  {path:"student",loadChildren:()=>import("./modules/student/student.module").then((m:any)=>m.StudentModule), canActivate: [StudentGuard]},
  {path: "volunteer",loadChildren:()=>import("./modules/volunteer/volunteer.module").then((m:any)=>m.VolunteerModule), canActivate: [VolunteerGuard]},
  {path: "admin",loadChildren:()=>import("./modules/admin/admin.module").then((m:any)=>m.AdminModule), canActivate: [AdminGuard]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
