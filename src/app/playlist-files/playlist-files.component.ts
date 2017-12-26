import { Component, OnInit } from '@angular/core';
	import { Router } from '@angular/router';
  import {Http} from '@angular/http';
  import {FormArray, FormControl} from '@angular/forms';
import {  RequestOptions } from '@angular/http';
import {Headers} from '@angular/http';


@Component({
  selector: 'app-playlist-files',
  templateUrl: './playlist-files.component.html',
  styleUrls: ['./playlist-files.component.css']
})
export class PlaylistFilesComponent implements OnInit {
songslist:any;
sourceList: any=[];
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {

    this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&fileName=')
        .subscribe((data) => {
        console.log (data.json());
          this.songslist = data.json();
        });
  }



  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
   p: number = 1;

/*    transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];
 
    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }*/
    audiofiles:any;
getAudiofiles(){
       this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=getAudioFiles&fileType=')
        .subscribe((data) => {
        console.log (data.json());
          this.audiofiles = data.json();
          for(let a of this.audiofiles){
            this.sourceList.push(a);
          }
          console.log(this.sourceList);
          /*this.transferData = this.audiofiles.pFileName;  */
        });


}

  goPlayList(){
  this.router.navigate(['playlist-files']);
}
buses(){
  this.router.navigate(['buses']);
}
busDepos(){
  this.router.navigate(['busdepos']);
}
playCon(){
  this.router.navigate(['playinghoursconnfig']);
}
logout(){
  this.router.navigate(['loginform']);
}

 

 
    targetList: Widget[] = [];
    addTo($event: any) {
        this.targetList.push($event.dragData);
        console.log($event.dragData)
    }
playlist:any;
List:any
source:any = [];
Addplaylist(){
  console.log(this.targetList);

            for(let i = 0;i < this.targetList.length;i++){
            this.source.push(this.targetList[i].id);
          }
          console.log(this.source);



  console.log(this.playlist);

let data = 'ADD';
  
  console.log(data);
        let addplaylist = encodeURIComponent(JSON.stringify(this.source));
        let operation = encodeURIComponent(data);
        let fileName = encodeURIComponent(this.playlist);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: h });
    return this.http.post('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=assignPlayList&operation='+operation+'&fileName='+fileName+'&audioFiles='+addplaylist, options)
              .subscribe((data) => {
                
              });
}

}


class Widget {
  constructor(public name: string,public id:string) {}
}