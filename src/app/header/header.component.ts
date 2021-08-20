import { BackendService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backendService: BackendService) { }
  
  ngOnInit(): void {
    this.onFetch();
  }
  onSave(){
    console.log('onSave() called');
    this.backendService.saveData();
  }
  onFetch(){
    console.log('onFetch() called');
    this.backendService.fetchData();
  }
}
