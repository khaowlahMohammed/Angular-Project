import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { SkinComponent } from './skin/skin.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component'; 
import { PerfumesComponent } from './perfumes/perfumes.component';



const routes: Routes = [
 
  {path : '' ,component:WelcomeComponent},
  {path : 'list/:str' ,component:ListComponent},
  {path : 'details/:id' ,component:DetailsComponent},
  {path:'skin',component:SkinComponent},// تعريف المسار
  {path:'payment', component:PaymentComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'perfumes', component: PerfumesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } ,



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
