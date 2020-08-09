import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerComponent } from "./shared/components/ngx-spinner/ngx-spinner.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AppComponent,
     NgxSpinnerComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule,
    //  FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
