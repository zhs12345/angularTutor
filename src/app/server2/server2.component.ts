import { Component } from '@angular/core';
import {equal} from 'assert';
import {equalSegments} from '@angular/router/src/url_tree';


@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component {

  inPut: string;
  isSearch = false;
  isReset = false;
  flag = '此菜不提供';
  list: string[] = ['番茄炒蛋', '土豆牛肉', '干锅包菜', '大盘鸡'];

  constructor() { }

  search() {

    for ( let i = 0; i < this.list.length; i++) {
      if (this.inPut !== this.list[i]) {
        // return this.isSearch = true;
        return this.isReset = true;
      } else {
        return this.isSearch = true;
        // return this.isReset = true;
      }
    }
  }
  reSet() {
    this.isReset = false;
    this.isSearch = false;
  }

 }
