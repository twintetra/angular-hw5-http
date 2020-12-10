import {AfterViewInit, Component, Inject} from '@angular/core';
import {MapService} from "../map.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit{
  constructor(public mapService: MapService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngAfterViewInit(): void {
    this.mapService.initMap(this.data);
  }
}
