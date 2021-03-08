import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGalleryComponent } from './add-gallery/add-gallery.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { QuotationComponent } from './quotation/quotation.component';
import { RequestComponent } from './request/request.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path:"", component: LoginComponent },
  { path:"home", component: MainComponent },
  { path: "add-gallery", component: AddGalleryComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "request", component: RequestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
