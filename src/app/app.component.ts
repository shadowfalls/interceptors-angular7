import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-interceptor';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getData()
      .subscribe((res:any) => {
        console.log(res);
      });
  }
}
