import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
photo:any;
  constructor(private ser:SerService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.ser.photoId(data.get('id')).subscribe(a=>{
        this.photo=a;
              
      })

    })
  }}
  


