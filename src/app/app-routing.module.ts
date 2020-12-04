import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
// COMPONENTS
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [

  // path: '/dashboard' PagesRouting'
  // path: '/grafica1'  PagesRouting'
  // path: '/login' AuthRouting'
  // path: '/register AuthRouting'
  {path: '' , redirectTo: '/dashboard',pathMatch: 'full'},
  {path: '**' , component: NotpagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ) ,
    PagesRoutingModule ,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
