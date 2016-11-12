import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionService } from './session.service';
import { SessionDetailComponent, ConfirmationDialogComponent } from './session-detail/session-detail.component';
import { MyAccountComponent } from './my-account/my-account.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent,
    SessionDetailComponent,
    MyAccountComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [SessionService],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    ConfirmationDialogComponent
  ]
})
export class AppModule { }
