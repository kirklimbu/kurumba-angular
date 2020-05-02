import { Injectable } from '@angular/core';
import { HomeItem } from 'src/app/modules/home/home-item.model';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetialService {

  public user: User;

  userFromLocalStorage: User;

  private user$: BehaviorSubject<User> = new BehaviorSubject(null);

  private selectedLink$: BehaviorSubject<String> = new BehaviorSubject(null);
  activeLink: HomeItem;

  constructor() { }



  setSelectedLink(link) {

    console.log('link values ' + JSON.stringify(link));

    localStorage.setItem('activeLink', JSON.stringify(link));

    // this.selectedLink$.next(link);

  }

  getSelectedLink(): any {
    console.log('localstorage ative link value ' + JSON.stringify(localStorage.getItem('activeLink')));

    return this.activeLink = JSON.parse(localStorage.getItem('activeLink'));
    // return this.selectedLink$.asObservable();

  }
}
