import { Component, OnInit } from '@angular/core';
import { Gallery } from '../gallery';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galleryPic: any = [];
  constructor(private prod: GalleryService,) { }

  ngOnInit(): void {
    this.getGallery();
  }



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
