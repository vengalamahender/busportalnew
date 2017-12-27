import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BusdepotComponent } from './busdepot/busdepot.component';
import { BusesComponent } from './buses/buses.component';
import { PlaylistFilesComponent } from './playlist-files/playlist-files.component';
import { AudiofilesComponent } from './audiofiles/audiofiles.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpModule} from '@angular/http';
import { HeadersComponent } from './headers/headers.component';
import { BusdeposComponent } from './busdepos/busdepos.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { PlayinghoursconnfigComponent } from './playinghoursconnfig/playinghoursconnfig.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DndModule} from 'ng2-dnd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { BusdepotpublishComponent } from './busdepotpublish/busdepotpublish.component';
import { BuspublishComponent } from './buspublish/buspublish.component';
import { PlayauditsummeryComponent } from './playauditsummery/playauditsummery.component';
import { PlayauditlistComponent } from './playauditlist/playauditlist.component';
import { LoginformComponent } from './loginform/loginform.component';
import { BusComponent } from './bus/bus.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import * as $ from "jquery";


/*const appRoutes: Routes = [
  { path: 'audiofiles', component: AudiofilesComponent },
  { path: 'busdepos',      component: BusdeposComponent },
  { path: 'playlist-files',      component: PlaylistFilesComponent },
  { path: 'buses',      component: BusesComponent }

  
];
*/


@NgModule({
  declarations: [
  
    AppComponent,
    HeadersComponent,
    BusdepotComponent,
    BusesComponent,
    PlaylistFilesComponent,
    AudiofilesComponent,
    DialogComponent,
    
    BusdeposComponent,
    
    PlayinghoursconnfigComponent,
    
    BusdepotpublishComponent,
    
    BuspublishComponent,
    
    PlayauditsummeryComponent,
    
    PlayauditlistComponent,
    
    LoginformComponent,
    
    BusComponent
  ],
  imports: [
  AngularDateTimePickerModule,
  FileUploadModule,
      FormsModule,
    ReactiveFormsModule,
  DndModule.forRoot(),
 NgbModule.forRoot(),
  HttpModule,
  NgxPaginationModule,
  Ng2TableModule,
  NgxDatatableModule,
FormsModule,
Ng2SearchPipeModule,
   BrowserAnimationsModule,
  Ng2SmartTableModule,
    BrowserModule,
    Ng2OrderModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot([
  {path:'audiofiles',component:AudiofilesComponent},
 {path:'buses',component:BusesComponent},
 {path:'playlist-files',component:PlaylistFilesComponent},
 {path:'busdepos',component:BusdeposComponent},

 ]),
 RouterModule.forRoot([
  {path:'audiofiles',component:AudiofilesComponent},
 {path:'buses',component:BusesComponent},
 {path:'playlist-files',component:PlaylistFilesComponent},
 {path:'busdepos',component:BusdeposComponent},
 {path:'playinghoursconnfig',component:PlayinghoursconnfigComponent},
  {path:'buspublish',component:BuspublishComponent},
   {path:'busdepotpublish',component:BusdepotpublishComponent},
   {path:'playauditsummery',component:PlayauditsummeryComponent},
   {path:'playauditlist',component:PlayauditlistComponent},
   {path:'loginform',component:LoginformComponent}
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
