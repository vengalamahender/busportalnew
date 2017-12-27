import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  Http   } from '@angular/http';
import { FileUploader } from 'ng2-file-upload';
import { Headers,Response, RequestOptions } from '@angular/http';


const URL = 'http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=uploadFile';
@Component({
  selector: 'audiofiles',
  templateUrl: './audiofiles.component.html',
  styleUrls: ['./audiofiles.component.css']
})
export class AudiofilesComponent implements OnInit {
store:any;
  /*constructor( private http: Http ) { }*/
    uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

constructor ( private http: Http,private router:Router){}
  ngOnInit() {
        this.getAudioFiles();
  }
getAudioFiles(){
         this.http.get('http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=getAudioFiles&fileType=')
        .subscribe((data) => {
        console.log (data.json());
          this.store = data.json();
        });
}
p: number = 1;
type:any;
  fileChange(event) {
  
    console.log(this.type)
    console.log(event);
    let Type = encodeURIComponent(this.type);
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let body = this.type;
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
         //formData.append('name',  this.type);
         console.log(formData);
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
  this.http.post(`http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?fileType=`+Type+'&action=uploadFile', formData, options)
        .subscribe((data) => {
               console.log (data._body);
              if(data._body=='success'){
                $('#exampleModal').modal('hide');
             this.getAudioFiles();
            }
        });
    }
}

logout(){
  this.router.navigate(['loginform']);
}
deleteFile(stores){
  console.log(stores.id);

  let headers = new Headers();
  let options = new RequestOptions({ headers: headers });
  this.http.post(`http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=delete&type=file&id=`+stores.id,options)
.subscribe(data => {
       console.log (data.json());
      if(data.json()==true){
     this.getAudioFiles();
    }
});

}


}

