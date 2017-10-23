import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './shared/auth-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        canActivate: [ AuthGuard ],
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
