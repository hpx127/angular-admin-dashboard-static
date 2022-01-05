import { Component, OnInit } from '@angular/core';
import { rdataModel } from 'src/app/regi/rdata';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-culist',
  templateUrl: './culist.component.html',
  styleUrls: ['./culist.component.css']
})
export class CulistComponent implements OnInit {

  constructor(private ii:StoreService) { }

  rvlist:rdataModel[]=[];
  
  ngOnInit(): void {

    this.rvlist= this.ii.rlist;
  }

}
