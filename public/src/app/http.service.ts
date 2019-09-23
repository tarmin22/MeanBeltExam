import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {

  }
  getPets() {
    return this._http.get('/pets');
  }


  getPetsByID(id) {
    return this._http.get(`/pets/${id}`);   //you can also use this format for the parameter   get("/Pets/" + id)
  }

  addPets(newPet) {
    console.log("Post data from newAuthor in http.servic.ts in addTask method.", newPet);
    return this._http.post('/pets', newPet)
  }

  updatePets(id: any, updatePet) {
    console.log("Update data from updatePet in http.servic.ts in updatePet method.", updatePet);
    return this._http.put('/Pets/' + id, updatePet)
  }


  deletePets(id) {
    // console.log("Delete id from newTask in http.servic.ts in addTask method.", id);
    return this._http.delete('/pets/' + id)
  }

}


