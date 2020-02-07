import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SerService } from '../ser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  addressForm = this.fb.group({
    username: null,
    password: [null, Validators.required],
    
  });

  

  msg:any;
  constructor(private fb: FormBuilder, private ser:SerService,private routes:Router )
     {}

  onSubmit() {
    alert('Thanks!');
  }
  check (uname:string,p:string){
    var output =this.ser.checkuser(uname,p);
    if (output==true){
      this.routes.navigate(['/album']);
    }
    else{
      this.msg='Invalid username or password'
    }
  }
}
