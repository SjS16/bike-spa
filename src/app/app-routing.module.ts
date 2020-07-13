import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutPageComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contact-us', component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
