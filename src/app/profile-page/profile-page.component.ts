import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  selectedFile : File
  constructor(private photoService : PhotoService) {
  }

  ngOnInit(): void {
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0]
    console.log('file uploaded')
    this.uploadImage();
  }

  uploadImage(){
    this.photoService.uploadImage(this.selectedFile);
  }
}
