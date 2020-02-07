import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from './info';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SerService {
 albumURL="https://jsonplaceholder.typicode.com/albums";
 photoURL="https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient, private routes:Router) { }
  getUsers():Observable<Info[]>{
    return this.http.get<Info[]>(this.albumURL);
  }
  photoId(albumId){
    return this.http.get(`${this.photoURL}/?albumId=${albumId}`);
  }
  checkuser(uname:string,pwd:string){
    if(uname=="admin" && pwd=="admin123"){
      localStorage.setItem('username',"admin");
   
    return true;
  }
  else{
    return false;
  }
  }
 getUsername(){
   localStorage.getItem('username');
 }
 destroyToken(){
   localStorage.removeItem('username');
   this.routes.navigate(['home'])
   return false;
 }
}
