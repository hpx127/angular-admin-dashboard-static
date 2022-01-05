import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rdataModel } from '../regi/rdata';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  fslist:rdataModel[]=[];

  constructor(private fs:StoreService,private _roter:Router) { }
  rdata:rdataModel = new rdataModel;

  fogpswd()
  {
       for(var i=0;i<=this.fslist.length;i++)
       {
           
           if(this.fslist[i].email1 == this.rdata.email1 && this.fslist[i].number1 == this.rdata.number1 )
           {
            alert("create your password...!");
            this._roter.navigate(['/confirm']);
           }

           else{
             alert("plese enter valide email or number");
           }
       }
  }

  ngOnInit(): void {

    this.fslist  = this.fs.rlist;
  }

}
