import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'album',component:AlbumComponent,children:[
   { path:':id', component:PhotoComponent}
  ]},
  {path:'photo',component:PhotoComponent},
  {path: 'login',component:LogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
