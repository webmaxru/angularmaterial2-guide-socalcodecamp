import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from "@angular/material";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  level:number = 200;
  title:string = 'Angular Material 2: Reward your app with high-quality UI in minutes';
  tags:string = 'material design, angular material 2, Angular 2, accessibility';

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {}

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(ConfirmationDialogComponent, config);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'confirmation-dialog',
  template: `
    <p>Would you like to delete your session?</p>
    <button md-raised-button>No</button>
    <button md-raised-button color="warn">Yes, please</button>
  `
})
export class ConfirmationDialogComponent {

}
