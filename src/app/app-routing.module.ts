import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { CompanyComponent } from './company/company.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'stock', component:StockComponent,canActivate:[AuthGuard]},
  {path:'company', component:CompanyComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
