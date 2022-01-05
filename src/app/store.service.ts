import { Injectable } from '@angular/core';
import { dataModel } from './catelogs/data';
import { rdataModel } from './regi/rdata';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

   prlis:dataModel[] = []; // product list
   

   rlist:rdataModel[] = []; // register data

  //  ........................................................................//

  public datastore(xy:dataModel,index:number)
  {
     if( index == -1)
     {
           this.prlis.push(xy);
           console.log(this.prlis);
           alert("data succesfully store");
     }
     else{
      this.prlis[index] = xy; //ahiya xy ni under update ni value avi gai ane te push thai gai
    
     }

     return this.prlis;

  }
// ....................................................................//
  public deleteRow(index:number):dataModel[]
  {
    this.prlis.splice(index,1);//ahiya store service mathi southi pehla delete thavani value 
    return this.prlis;  
  }

  //.....................registarion-data.................................................//

  public strdata(jj:rdataModel){

    this.rlist.push(jj);
    
    console.log(this.rlist);

  }

  public cofdata(mm:rdataModel){
    var flage = true;
     for(var i= 0;i<this.rlist.length;i++)
     {
       if(this.rlist[i].email1 == mm.email1 )
       {
            
           //this.rlist.pop();
           //this.rlist.push(mm.pwd1);

            console.log(this.rlist);
            flage = false;
            break;
       }
     }
     if(flage)
     {
        alert("sorry");
     }  

  }




}
