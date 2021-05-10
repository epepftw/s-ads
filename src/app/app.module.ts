import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './pages/play/play.component';
import { PartitionComponent } from './components/partition/partition.component';
import { SetupComponent } from './pages/setup/setup.component';
import { FileDownloadComponent } from './components/file-download/file-download.component'
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
