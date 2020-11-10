import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { Student, StudentComponent } from './student/student.component';
import {MustMatchDirective} from './directives/match-value.directive';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodoTaskComponent } from './todo/todo-task/todo-task.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'todo', component:TodoListComponent},
  {path: 'student', component:StudentComponent, canActivate : [AuthGuard]},
  {path: 'about', component:AboutComponent, canActivate : [AuthGuard]},

  {path: '', redirectTo: '/todo', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    StudentComponent,
    MustMatchDirective,
    AboutComponent,
    TodoTaskComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
