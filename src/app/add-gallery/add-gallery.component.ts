import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.css']
})
export class AddGalleryComponent implements OnInit {

  public contactForm!: FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private gallery: GalleryService, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      id: Math.floor(Math.random() * 50),
      name: "",
      category:"",
      description: "",
      picture: ""
    });
  }

  onSubmit() {
    this.gallery.addGallery(this.contactForm?.value);
    this.router.navigate(['/home']);
  }

}
