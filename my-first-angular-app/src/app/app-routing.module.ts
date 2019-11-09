import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopnavComponent } from './home/topnav/topnav.component';


const routes: Routes = [
  {path:'topnav',component:TopnavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
