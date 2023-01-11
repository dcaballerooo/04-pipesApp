import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


// Cambiar el local de la app
import  localEs  from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEs );



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
