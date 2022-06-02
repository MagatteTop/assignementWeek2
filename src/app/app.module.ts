import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { AdminComponent } from './admin/admin.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingleClasseComponent } from './single-classe/single-classe.component';
import { SingleStudentComponent } from './single-student/single-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StudentComponent,
    ClassComponent,
    AdminComponent,
    ListStudentComponent,
    AddStudentComponent,
    SignUpComponent,
    LoginComponent,
    NotfoundComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SingleClasseComponent,
    SingleStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
