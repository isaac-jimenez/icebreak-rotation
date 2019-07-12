import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HOME } from './_constants/url-paths';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: SplashComponent},
  {path: HOME, component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
