import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TopnavComponent } from './home/topnav/topnav.component';
import { CustomerRegisterComponent } from './home/customer-register/customer-register.component';
import { LoginComponent } from './home/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiDispatcherService } from './service/api-dispatcher.service';
import { ConfigService } from './config/config.service';
import { AuthServiceService } from './service/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from './service/user.service';
import { RemarkspipePipe } from './shared/pipe/remarkspipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchpipePipe } from './shared/pipe/searchpipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    CustomerRegisterComponent,
    LoginComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    Ng2SearchPipeModule
  ]
  // ,exports:[RemarkspipePipe]
  ,
  providers: [ApiDispatcherService,ConfigService,AuthServiceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
