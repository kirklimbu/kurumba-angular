import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HOME_ITEMS_LINKS } from 'src/app/modules/dashboard/home-items-links';
import { HOME_SUBMENU_ITEMS_LINKS } from 'src/app/modules/dashboard/home-submenu-items-links.model';
import { HomeItem } from 'src/app/modules/home/home-item.model';
import { User } from 'src/app/shared/models/user.model';
import { UserDetialService } from 'src/app/shared/services/user-detial.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  withoutSubMenuRoutes: any[] = [
    "Inventory Transaction Detail", "User", "Tracker Availablity Info"
  ];
  currentUser: User;
  enableSubMenu = false;

  label = '';
  selectedMenu = '';
  latestSelectedMenu = '';

  activeLink: HomeItem;
  filetredLinks: HomeItem[] = [];
  sidebarItems: HomeItem[] = HOME_ITEMS_LINKS;
  sidebarSubMenuItems: HomeItem[] = HOME_SUBMENU_ITEMS_LINKS;
  browserRefresh = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userDetailService: UserDetialService
  ) { }

  ngOnInit(): void {

    this.openMenu(this.sidebarItems);

    // this.currentUser = JSON.parse(localStorage.getItem('user'));
    // this.activeLink = this.userDetailService.getSelectedLink();
    // console.log('active link'+ JSON.stringify(this.activeLink));

    // to keep submenu opened if the Menu with submenu was selected
    // if (this.activeLink != null && (!this.withoutSubMenuRoutes.includes(this.activeLink.label))) {
    //   this.openMenu(this.activeLink);
    // }

    // console.log('current user ' + JSON.stringify(this.currentUser));
    console.log('sidebar items ' + JSON.stringify(this.sidebarItems));
    console.log('active link items ' + JSON.stringify(this.activeLink));  // items not displaying start from here


  }


  openMenu(item) {
    // to set activeRoute
    this.userDetailService.setSelectedLink(item);

    // to keep changing active route on changing menus
    this.activeLink = this.userDetailService.getSelectedLink();

    // openSubMenu only if selected link has subMenu
    if (this.withoutSubMenuRoutes.includes(this.activeLink.label)) {

      console.log('without sub menu block '+ this.activeLink.label);

      this.openTragetRoute(this.activeLink.link)
    }
    else {
      console.log('with sub menu block '+JSON.stringify(this.activeLink));

      // inCase of SubMenu opening
      // if same menu is clicked twice ; check and prevent submenu opening
      if (this.latestSelectedMenu === item.label) {
        this.enableSubMenu = !this.enableSubMenu;
        if (!this.enableSubMenu) {
          this.selectedMenu = '';
        }
        else {
          this.selectedMenu = item.label;
        }
      }
      // for different menus
      else {
        this.enableSubMenu = true;
        this.label = item.label;
        this.selectedMenu = item.label;
        this.latestSelectedMenu = item.label;

      }

    }

  }

  // open menus without submenu directly
  openTragetRoute(link) {
    this.router.navigate(['../' + link], { relativeTo: this.route });
  }

}
