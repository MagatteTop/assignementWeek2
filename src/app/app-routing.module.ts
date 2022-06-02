import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {SingleClasseComponent} from "./single-classe/single-classe.component";
import {ClassComponent} from "./class/class.component";
import {SingleStudentComponent} from "./single-student/single-student.component";

const routes: Routes = [
  { path:'classes/:id', component: SingleClasseComponent },
  { path:'classes', component: ClassComponent },
  { path:'students/:id', component: SingleStudentComponent},
  { path:'students', component: StudentComponent},
  { path:'home', component: ClassComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignUpComponent },
  { path:'add-student', component: AddStudentComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `home-component`
  { path: '**', component: NotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
