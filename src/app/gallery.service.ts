import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Gallery } from './gallery'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  gallery:any
  request:any;

  constructor(private db: AngularFirestore) { }

   // firebase

   getAllGallery() {
    this.gallery = this.db.collection("gallery").snapshotChanges()  
    
    
    return this.gallery;  
  }

  // firebase

  addGallery(prod: Gallery) {
    let Id = Math.floor(Math.random() * 50);
    this.db.collection("gallery").doc(Id.toString()).set({
      // id: this.productLists.length + 1,
      name: prod.name,
      category:prod.category,
      description: prod.description,
      picture: prod.picture,

    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  // firebase
  updateProduct(prod:Gallery){
    
    this.db.doc('gallery/' + prod).update(prod);

  }
  // firebase
  deleteProduct(id: number){
    this.db.doc('gallery/' + id).delete()
  }
  getAllRequest(){
    this.request = this.db.collection("Request").snapshotChanges()  
    return this.request;
  }
}
