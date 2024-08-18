import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AdministrationComponent } from './pages/home/administration/administration.component';
import { ToolsComponent } from './pages/home/tools/tools.component';
import { AnalyticsComponent } from './pages/home/analytics/analytics.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'administration', component: AdministrationComponent },
    { path: 'tools', component: ToolsComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
