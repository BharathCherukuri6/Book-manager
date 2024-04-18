import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'book-manager';
  constructor(private service:BackendService){}
  users:any[]=[];
  ngOnInit(): void {
  }

  get(){
    this.service.getData().subscribe(data=>{
      this.users=data;
    })
  }

  post(){
    this.service.postData({"author":"Bharath","title":"Dras"}).subscribe(data=>{
      console.log(data)
    })
  }
  deleteBook(id:any){
    this.service.deleteBook(id).subscribe(data=>{
      console.log(data)
      this.get();
    })
  }

}

