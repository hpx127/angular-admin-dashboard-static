import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rdataModel } from '../regi/rdata';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private kl:StoreService,private _roter:Router) { }

  llist:rdataModel[]=[];

  rdata:rdataModel = new rdataModel();

   color:any;
   color1:any;

   show: boolean = false;
    
  

     password()
     {
       this.show = !this.show;
       return this.show;
     }

     
    


  chekdata(mm:any)
  {
    var flage = true;
     for(var i=0;i<this.llist.length;i++)
     {
       if(this.llist[i].email1 == this.rdata.email1 && this.llist[i].pwd1 == this.rdata.pwd1 )
       {
         
         alert("login succesfully.......!");
         this._roter.navigate(['/catelogs/prdct-list']);
         flage = false;
         break;

       }
      }
      
      if(flage)
      {
         alert("you are not login");
         this.color='red';
         this.color1='yellow';
      }
     
  }





  ngOnInit(): void {
    this.llist=this.kl.rlist;
  }

}
