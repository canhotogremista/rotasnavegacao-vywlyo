import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import { AplicativoModule } from './aplicativo/aplicativo.module';

platformBrowserDynamic().bootstrapModule(AplicativoModule).catch((err) => console.error(err));