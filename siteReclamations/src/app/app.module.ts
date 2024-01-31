import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ReclamationsViewComponent } from './views/reclamations-view/reclamations-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { HomeService } from './services/home/home.service';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HowComponent } from './components/how/how.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    ReclamationsViewComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HowComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
