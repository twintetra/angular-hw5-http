import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'address'];
  searchText = '';
  constructor(public httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.httpService.getData();
  }

  openDialog(data) {
    this.dialog.open(ModalComponent, {
      data: data
    });
  }
}
