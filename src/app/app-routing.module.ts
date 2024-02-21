import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { InvalidURLComponent } from './invalid-url/invalid-url.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:ProductComponent},
  {path:'booklist',component:BooklistComponent},
  {path:'',redirectTo:'home', pathMatch:'prefix'},
  {path:'**', component:InvalidURLComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
