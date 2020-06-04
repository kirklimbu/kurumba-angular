import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     FontAwesomeModule,
     NgbModule,
     AppRoutingModule,
    //  FormsModule,
     HttpClientModule

  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
