import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
//COMPONENTES
import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';



@NgModule({
  declarations: [
    AppComponent,
   
    NotpagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
