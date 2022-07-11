import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { MemoryGameModule } from './app/memoryGame/memoryGame.module';

const platfrom = platformBrowserDynamic();
platfrom.bootstrapModule(MemoryGameModule);