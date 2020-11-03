import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { CustomPropertyComponent } from './custom-property/custom-property.component';
import { UserGeneratorComponent } from './user-generator/user-generator.component';

import { BasicDirective } from './directives/basic.directive';
import { BetterDirective } from './directives/better.directive';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    CustomPropertyComponent,
    UserGeneratorComponent,
    BasicDirective,
    BetterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
