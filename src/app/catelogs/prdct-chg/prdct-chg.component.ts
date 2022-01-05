import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store.service';
import { dataModel } from '../data';

@Component({
  selector: 'app-prdct-chg',
  templateUrl: './prdct-chg.component.html',
  styleUrls: ['./prdct-chg.component.css']
})
export class PrdctChgComponent implements OnInit {

  constructor(private prc:StoreService) { }

  data:dataModel = new dataModel();

  lis:dataModel[]=[];

  btn:string = 'Add';
  index:number = -1;


// ..............ADD-BUTTON...............//
  adddata(uu:any){
    this.onFileChange;
     this.prc.datastore(this.data,this.index);
     this.data = new dataModel();
     if(this.index == -1)
     {
      
      
     }
     else{
       alert("updated data");
        this.btn = 'Add';
        
     }
     uu.reset();

     

  }

  // ..............update-button..............//

  updateData(o:dataModel,index:number)
  {
     this.data=o; //datamodel na object value update karvai te push thai
     this.index=index; //je dharo ke index baniye like 1 to te pan push thayoo
     this.btn='Update'; //add na btn ni jagyaee update thai gayu but apdu function etle adddata vadu j rehvanuu barabar have tema value lai ne jaseeee
     

  }

  // .................delete -button..........//
  deleteData(index:number)
  {
    alert("product deleted")
    this.lis = this.prc.deleteRow(index);//store service ni under javani barabar tya lai java pade value pa6i aa service store mathi thi delete thai
  }
  

  //......................image-add to data:datamoddel.......//

  onFileChange(e:any)
   {
       let fileIn = e.target.files[0];
      console.log(fileIn);
       this.data.image1 = fileIn;
     }
  

  ngOnInit(): void {
    this.lis = this.prc.prlis;//service na marfate apde value lavela 6eeeee etle service no data aa {lis} ma store karelo 6eee
  }

}
