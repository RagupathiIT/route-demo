import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { InvalidURLComponent } from './invalid-url/invalid-url.component';
import { BooklistComponent } from './booklist/booklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModelComponent } from './bootstrap-model/bootstrap-model.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    NavComponent,
    InvalidURLComponent,
    BooklistComponent,
    BootstrapModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
