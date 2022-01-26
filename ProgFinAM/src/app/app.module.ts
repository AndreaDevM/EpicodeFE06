import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component'
import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';
import { NewClientComponent } from './new-client/new-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { HomeComponent } from './home/home.component';
import { ComuniComponent } from './comuni/comuni.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    NewClientComponent,
    ClientDetailsComponent,
    HomeComponent,
    ComuniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
