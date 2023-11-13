import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app/app-routes';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, RouterModule.forRoot(appRoutes))]
})
  .catch(err => console.error(err));
