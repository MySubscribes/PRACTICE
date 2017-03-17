import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import {Houses, HoussesService} from "../shared/houses.service";

@Component({
    moduleId: module.id,
    selector: "houses-list",
    templateUrl: "houses-list.component.html",
    styleUrls: ["houses-list.component.css"]
})

export class HouseListComponent implements OnInit {

    houses: Houses[];
    constructor(private router: Router,
                private housesService:HoussesService ) {
    }

    ngOnInit() {
      this.housesService.getHouses().subscribe(houses => {
        this.houses = houses;
      });
    }

    onSelect(selected: Houses) {
        // this.router.navigate(["home", selected.name]);
        this.router.navigate(["home"]);
    }
}


