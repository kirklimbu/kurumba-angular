import { Component, OnInit } from '@angular/core';
import { HomeItem } from '../../home-item.model';
import { Router, ActivatedRoute } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  label = '';
  selectedMenu = '';
  filetredLinks: HomeItem[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }


  openMenu(item){

  }

}
