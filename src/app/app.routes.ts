import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LoginComponent } from './pages/login/login.component';
import { CanActivate } from './auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';

const docTitle = '| Rocket Store';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: `Login ${docTitle}`,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [CanActivate],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: `Home ${docTitle}`,
      },
      {
        path: 'about',
        component: AboutComponent,
        title: `About ${docTitle}`,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        title: `Gallery ${docTitle}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
