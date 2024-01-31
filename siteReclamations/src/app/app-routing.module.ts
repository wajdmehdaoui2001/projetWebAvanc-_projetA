import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuardService } from './services/auth-guard/auth-gard.service';

import { ReclamationsViewComponent } from './views/reclamations-view/reclamations-view.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'auth',component:AuthViewComponent},
  {path:'reclamations',canActivate:[AuthGuardService],component:ReclamationsViewComponent},
  { path: '**', redirectTo: '/home' },
  {path:'reclamations',canActivate:[AuthGuardService],component:ReclamationsViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
