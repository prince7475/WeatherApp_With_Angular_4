import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import { BootstrapOptions } from '@angular/core/src/application_ref';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pictures: Picture
  constructor(private dataservice : DataService) { 
    console.log("constructor ran")
  }

  ngOnInit() {
    this.dataservice.getPictures().subscribe((picture)=> {
      this.pictures = picture 
    })
  }

}

interface Picture{
  albumId: Number
  id: Number
  thumbnailUrl: String
  title: String
  url: String
}