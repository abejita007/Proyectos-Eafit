import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'course', component:CourseComponent},
  {path:'amateur', component:AmateurComponent},
  {path:'beginner',component:BeginnerComponent},
  {path:'intermediate',component:IntermediateComponent},
  {path:'expert',component:ExpertComponent},
  {path:'community',component:CommunityComponent},
  {path:'sing-up',component:SingUpComponent},
  {path:'login',component:LoginComponent},
  {path:'requirement',component:RequirementComponent},
  {path:'detallecurso',component:CursodetalleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
