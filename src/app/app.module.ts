import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { HomepageComponent } from './homepage/homepage.component';
import {SocialLoginModule,AuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";
import { AutogenerateComponent } from './autogenerate/autogenerate.component';
import {MatTabsModule, MatCardModule,MatTabNav,MatTabContent} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

let config = new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider("1078204311210-1h012vmgmrncursd4tk1jtsgcn7u7s7m.apps.googleusercontent.com")
  }
]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AutogenerateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    {
    provide:AuthServiceConfig,
    useFactory:provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
