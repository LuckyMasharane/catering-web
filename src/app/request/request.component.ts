import { Component, OnInit } from '@angular/core';
import { Gallery } from '../gallery';
import { GalleryService } from '../gallery.service';



// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request:any =[];
  dataSource:any=[];
  constructor(private prod: GalleryService) { }

  ngOnInit(): void {
    this.getAllReq()
  }

  displayedColumns: string[] = ['category', 'eventType', 'address', 'message', 'action'];
  //dataSource =  ELEMENT_DATA;


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

}
