import { Component } from '@angular/core';
import {Jewelry} from "../entity/jewelry";
import {Router} from "@angular/router";
import {JewelryService} from "../service/jewelry.service";

import {Subject} from "rxjs";
@Component({
  selector: 'app-jewelry-form',
  templateUrl: './jewelry-form.component.html',
  styleUrls: ['./jewelry-form.component.css']
})
export class JewelryFormComponent {

  formData = new FormData();
  protected onDestroy$ = new Subject<boolean>();
  jewelry: Jewelry;

  constructor(
    private router: Router,
    private jewelryService: JewelryService) {
    this.jewelry = new Jewelry();
  }

  uploadPicture(event : any) {
    const file:File = event.target.files[0];

    if (file) {
      this.formData.append("picture", file);
    }
  }

  onSubmit() {
    if (this.formData.get('picture')) {
      const jewelryBlob = new Blob([JSON.stringify(this.jewelry)], {
        type: 'application/json'
      });
      this.formData.append('jewelry', jewelryBlob);
      this.jewelryService.save(this.formData).subscribe(() => this.gotoJewelryList());
    } else {
      alert('Необходимо загрузить картинку перед сохранением нового украшения.')
    }
  }
  gotoJewelryList() {
    this.router.navigate(['/jewelry']);
  }

}
