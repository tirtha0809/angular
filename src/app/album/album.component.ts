import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{SerService} from '../ser.service';
import { from } from 'rxjs';
import { Info } from '../info';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
album:Info[];
  constructor(private details:SerService) { }

  ngOnInit() {
    this.details.getUsers()
    .subscribe(a=>{
      this.album=a;
    })
  }

}
