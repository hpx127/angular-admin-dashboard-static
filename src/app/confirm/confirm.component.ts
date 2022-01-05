import { Component, OnInit } from '@angular/core';
import { rdataModel } from '../regi/rdata';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private cp:StoreService) { }

  cdata:rdataModel = new rdataModel;

  conForm(rp:any)
  {
    this.cp.cofdata(this.cdata);
    console.log(this.cdata);
    this.cdata= new rdataModel();
    rp.reset();
    alert('your password succesfully store');
  }

  ngOnInit(): void {
  }

}
