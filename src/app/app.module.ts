import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './pages/play/play.component';
import { PartitionComponent } from './components/partition/partition.component';
import { SetupComponent } from './pages/setup/setup.component';
import { FileDownloadComponent } from './components/file-download/file-download.component'
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    PartitionComponent,
    SetupComponent,
    FileDownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    WavesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
