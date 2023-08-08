import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { CourseComponent } from './views/course/course.component';
import { AmateurComponent } from './views/amateur/amateur.component';
import { BeginnerComponent } from './views/beginner/beginner.component';
import { IntermediateComponent } from './views/intermediate/intermediate.component';
import { ExpertComponent } from './views/expert/expert.component';
import { CommunityComponent } from './views/community/community.component';
import { SingUpComponent } from './views/sing-up/sing-up.component';
import { LoginComponent } from './views/login/login.component';
import { RequirementComponent } from './views/requirement/requirement.component';
import { CursodetalleComponent } from './views/cursodetalle/cursodetalle.component';
import {AngularFireModule} from '@angular/fire/compat';


const firebaseConfig = {
  apiKey: "AIzaSyAtBkUuE41iEa2H0a3VIX8o3tTcBzIa1Kk",
  authDomain: "pluralcafe-5fc56.firebaseapp.com",
  projectId: "pluralcafe-5fc56",
  storageBucket: "pluralcafe-5fc56.appspot.com",
  messagingSenderId: "838977455483",
  appId: "1:838977455483:web:2725a9b59d545630a729de"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    AmateurComponent,
    BeginnerComponent,
    IntermediateComponent,
    ExpertComponent,
    CommunityComponent,
    SingUpComponent,
    LoginComponent,
    RequirementComponent,
    CursodetalleComponent
    //ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
