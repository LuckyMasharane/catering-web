import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGalleryComponent } from './add-gallery/add-gallery.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path:"", component: LoginComponent },
  { path:"home", component: HomeComponent },
  { path: "add-gallery", component: AddGalleryComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "request", component: RequestComponent },
  { path: "email-reply", component: EmailReplyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
