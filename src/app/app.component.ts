import { Component } from '@angular/core';
import { GetDataService } from './service/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  public isMenuCollapsed = true;

  constructor(public getDataService: GetDataService){
    this.getDataService.onGetData();
  }
}
