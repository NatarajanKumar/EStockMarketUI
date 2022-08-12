import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { NetworthService } from '../services/networth.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
//import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  amount:any;

  constructor() {
    };
    ngOnInit(): void {
    }

   }

