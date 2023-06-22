import {Component, OnInit} from '@angular/core';
import {Jewelry} from "../entity/jewelry";
import {JewelryService} from "../service/jewelry.service";

@Component({
  selector: 'app-jewelry-list',
  templateUrl: './jewelry-list.component.html',
  styleUrls: ['./jewelry-list.component.css']
})
export class JewelryListComponent implements OnInit {

  jewelryList: Jewelry[] | undefined;

  constructor(private jewelryService: JewelryService) {
  }

  ngOnInit() {
    this.jewelryService.findAll().subscribe(data =>{
      this.jewelryList = data;
    });
  }
}
