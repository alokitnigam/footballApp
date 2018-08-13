import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
  
  bottomSheetData;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {

  }

  ngOnInit() {
    this.bottomSheetData = this.data;
    console.log(this.bottomSheetData, 'this.bottomSheetData');
  }

}
