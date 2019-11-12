import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { CustomerRegisterComponent } from './home/customer-register/customer-register.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:CustomerRegisterComponent},
  {
    path: 'layout',
      loadChildren: './layout/layout.module#LayoutModule',
      canActivate: [AuthGuard],
     
    
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
