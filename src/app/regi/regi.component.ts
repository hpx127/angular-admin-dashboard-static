import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { rdataModel } from './rdata';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {
  confrpwd:any;
  constructor(private up: StoreService) { }

   
  rdata:rdataModel = new rdataModel();

  adrdata(rr:any){

    this.up.strdata(this.rdata);
    this.rdata= new rdataModel();
    rr.reset();
    alert('your data succesfully store');

  }

  ngOnInit(): void {
  }

}
