import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request:any =[];
  dataSource:any=[];
  constructor(private prod: GalleryService, private router: Router ) { }

  ngOnInit(): void {
    this.getAllReq()
  }

  displayedColumns: string[] = ['category', 'eventType', 'address', 'message', 'action'];

  getAllReq() {

    return this.prod.getAllRequest().subscribe((res: any[]) => {
      this.dataSource = res.map(request => {
        return {
          ...request.payload.doc.data(),
          id: request.payload.doc.id
        } as Request
      })
      console.log(this.dataSource);
      
    })
  }

  email(){
    this.router.navigate(['/email-reply']);
  }

}
