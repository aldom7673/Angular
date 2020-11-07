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
import { StructureDirective } from './directives/structure.directive';
import { UserService } from './services/user.service';
import { SimpleService } from './services/simple.services';

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
    BetterDirective,
    StructureDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService,SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
