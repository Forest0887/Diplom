import {Component, OnInit} from '@angular/core';
import {Jewelry} from "../entity/jewelry";
import {ActivatedRoute, Router} from "@angular/router";
import {JewelryService} from "../service/jewelry.service";

@Component({
  selector: 'app-jew-page',
  templateUrl: './jew-page.component.html',
  styleUrls: ['./jew-page.component.css']
})
export class JewPageComponent implements OnInit {

  id: number;
  jewelry: Jewelry;
  constructor(private route: ActivatedRoute,private router: Router,
              private jewelryService: JewelryService) {
    this.jewelry = new Jewelry();

    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.jewelryService.getJewelryById(this.id)
      .subscribe(data => {
        console.log(data)
        this.jewelry = data;
      }, error => console.log(error));
  }

  deleteJew(id: number) {
    this.jewelryService.deleteJewelryById(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.router.navigate(['/jewelry']);
  }

}
