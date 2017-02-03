import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, providers, routes } from './app'
import { Main, GoodsTable, GoodsCreate } from './app/containers'
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppBar, GoodsRow } from './app/ui'

@NgModule({
  declarations: [
    App,
    Main,
    AppBar,
    GoodsTable,
    GoodsCreate,
    GoodsRow
  ],
  imports: [
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        }),
    BrowserModule,
    FormsModule,
    routes
  ],
  providers,
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
