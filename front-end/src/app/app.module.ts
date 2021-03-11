import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {VideoPlayerComponent} from './videoplayer/videoplayer.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StreamsListComponent } from './streamslist/streamslist.component';
import { AddStreamComponent } from './addstream/addstream.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StreamCardComponent } from './stream-card/stream-card.component';
@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    StreamsListComponent,
    AddStreamComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LogInComponent,
    SignUpComponent,
    StreamCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
