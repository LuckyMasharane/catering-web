import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddGalleryComponent } from './add-gallery/add-gallery.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  declarations: [
    AppComponent,
    AddGalleryComponent,
    LoginComponent,
    RequestComponent,
    HomeComponent,
    ResetPasswordComponent,
    EmailReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
  ],
  providers: [ EmailComposer],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
