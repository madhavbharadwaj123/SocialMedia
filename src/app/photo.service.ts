import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  headers : HttpHeaders;
  url = "https://localhost:5001/User/Image/"
  constructor(private http : HttpClient) {
    this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
   }

  uploadImage(photo : File) {
    this.http.post(this.url,photo).subscribe(response => {console.log(response);
      console.log('response recieved after inserting image')
    },error => console.log('error')
    )
  }
}
