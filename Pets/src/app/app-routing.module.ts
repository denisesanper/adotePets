import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [

  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component:HomeComponent },
  { path:'contato', component:ContatoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
