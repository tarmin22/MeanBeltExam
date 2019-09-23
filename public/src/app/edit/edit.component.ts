import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatePet: any = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", oldName: "" }
  petInfo: any = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "" }
  editError: string;
  showeditError: boolean;
  errors: any;
  showCreate: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getTasksFromServiceById(params['id'])
    });
  }

  getTasksFromServiceById(id) {
    // this._httpService.getTasks();
    // console.log("This is from getTasksFromServiceById", id)
    let observableID = this._httpService.getPetsByID(id);
    observableID.subscribe((onedata: any) => {
      console.log("Got our one tasks!", onedata);
      this.petInfo = onedata;
      this.updatePet = onedata;
      this.updatePet.oldName = onedata.name;
      if (onedata.err) {
        if (onedata.db_error.name == "CastError") {
          console.log("Got invalid id")
          this.showCreate = true;
        }
      }
    });
  }

  onEdit(id) {

    let observableput = this._httpService.updatePets(id, this.updatePet);
    observableput.subscribe((data: any) => {
      // console.log("Got our out postdata!", puttdata);
      // console.log("This is the post data from app.components for updateTask", this.updateTask)
      if (data['err']) {
        console.log("this was an error", data);
        this.errors = data['errors'];
      }
      else {
        this._router.navigate(['/pets/' + id]);
        this.updatePet = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "" }
      }

    });
  }

}
