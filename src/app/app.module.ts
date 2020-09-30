import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { RforyouComponent } from './components/rforyou/rforyou.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { ContactusComponent } from './components/contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    LoginComponent,
    BannerComponent,
    HowitworksComponent,
    ReferralsComponent,
    RforyouComponent,
    Footer1Component,
    Footer2Component,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
