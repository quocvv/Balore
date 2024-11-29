import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],
})
.catch((err) => console.error(err));
