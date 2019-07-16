import { Component, OnInit } from '@angular/core';
import { ApiService, Sum } from '../../service/api.service';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-actionbutton',
  templateUrl: './actionbutton.component.html'
})
export class ActionbuttonComponent implements OnInit {

  title = 'OutPut';
  sumList: Sum[];
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getSumList();
  }

}
