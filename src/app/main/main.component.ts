import { Component, OnInit } from '@angular/core';
import { Gallery } from '../gallery';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  galleryPic: any = [];
  constructor(private prod: GalleryService,) { }

  ngOnInit(): void {
    this.getGallery();
  }

  pic= [
    { empImage: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" },
    { empImage: "https://images.unsplash.com/photo-1603164221652-29b420f213da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" },
    { empImage: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3775534.jpg&fm=jpg" },
    { empImage: "https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?cs=srgb&dl=pexels-graham-wizardo-1081188.jpg&fm=jpg" }
  ]

  getGallery() {

    return this.prod.getAllGallery().subscribe((res: any[]) => {
      this.galleryPic = res.map(gallery => {
        return {
          ...gallery.payload.doc.data(),
          id: gallery.payload.doc.id
        } as Gallery
      })
    })
  }

}
