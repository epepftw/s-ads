import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayComponent } from './pages/play/play.component';
import { PartitionComponent } from './components/partition/partition.component';
import { SetupComponent } from './pages/setup/setup.component';
import { EnterKeyFormComponent } from './pages/enter-key-form/enter-key-form.component';
import { FileDownloadComponent } from './components/file-download/file-download.component'
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { ImagePipe } from './core/pipe/image/image.pipe';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ZoneTemplateComponent } from './components/zone-template/zone-template.component';
import { ScreenComponent } from './components/screen/screen.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    PartitionComponent,
    SetupComponent,
    FileDownloadComponent,
    EnterKeyFormComponent,
    ImagePipe,
    PlaylistComponent,
    ZoneTemplateComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
