import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {Http} from '@angular/http';
import { FileUploader } from 'ng2-file-upload';
import { Headers,Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'

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
	  	 this.http.get('http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=getAudioFiles&fileType=')
	  		.subscribe((data) => {
	 			console.log (data.json());
	  			this.store = data.json();
		  	});
  }
   p: number = 1;
type:any;
 /*public uploader:FileUploader = new FileUploader({url: URL});*/
/*submitSong(store){
  console.log(store)

  let addFiles = {
    fileType:this.type,
    uploader:this.uploader.queue[0].file.rawFile;
  }
  console.log(addFiles);
   let headers = new Headers({ 'Content-Type': 'multipart/mixed' });
    let options = new RequestOptions({ headers: headers });
  let data = encodeURIComponent(addFiles);
  return this.http.post('http://10.0.1.142:8089/ivis-bus-broadcasting/FileUploadHandlerServlet?action=uploadFile',{'uploader':data},options)
        .subscribe((data) => {

        });
}
*/
/*Name:string; 
myFile:File; 
fileChange(event: any){
    console.log(event);
    let fileList: FileList = event.target.files;
    let file:File = fileList[0];
    this.myFile = file;
    
}
*/
/* Now send your form using FormData */
/*onSubmit(yourForm): void {
    let _formData = new FormData();*/
    //_formData.append("Name", this.Name);
/*    _formData.append("MyFile", this.myFile, this.myFile.name);
    console.log(yourForm);
    let body = this._formData;
    let headers = new Headers();
    let options = new RequestOptions({
        headers: headers
    });*/
    // this.http.post("http://10.0.1.142:8089/ivis-bus-broadcasting/FileUploadHandlerServlet?action=uploadFile", body, options)
    //   .map((response:Response) => <string>response.json())
    //   .subscribe((data) => this.message = data);


  fileChange(event) {
  
    console.log(this.type)
    console.log(event);
    
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let body = this.type;
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
         formData.append('name',  this.type);
         console.log(formData);
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=uploadFile`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
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
            .map(res => res.json())
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    

}




}

