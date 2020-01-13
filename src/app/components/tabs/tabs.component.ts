import {Component, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeedPage} from '../../pages/feed/feed.page';
import {HomePage} from '../../home/home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    }
  //   {
  //       path: 'feed',
  //       redirectTo: 'home/feed',
  //       pathMatch: 'full'
  //   },
  // {
  //   path: 'messages',
  //   redirectTo: 'home/messages',
  //   pathMatch: 'full'
  // }
];

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})


export class TabsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
