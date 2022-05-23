import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './pages/get-all/get-all.component';
import { HomeComponent } from './pages/home/home.component';
import { HoodComponent } from './pages/hood/hood.component';
import { LoginComponent } from './pages/login/login.component';
import { PostalcodeComponent } from './pages/postalcode/postalcode.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '', component: WelcomePageComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'getAll', component: GetAllComponent},
  {path: 'hood/:name', component: HoodComponent},
  {path: 'postalcode/:id', component: PostalcodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
