import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';


bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));