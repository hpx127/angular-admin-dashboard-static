import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StoreService } from 'src/app/store.service';
import { dataModel } from '../data';


@Component({
  selector: 'app-prdct-list',
  templateUrl: './prdct-list.component.html',
  styleUrls: ['./prdct-list.component.css']
})
export class PrdctListComponent implements OnInit {

  imageSrc = 'src/assets/img/'
   
  
  

  constructor(private pq:StoreService,private route:Router) { }

   list1:dataModel[]=[];

  ngOnInit(): void {

    this.list1 = this.pq.prlis;
    
  }

}
