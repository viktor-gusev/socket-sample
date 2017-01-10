import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

// Main bootstrap function
platformBrowserDynamic().bootstrapModule(AppModule);