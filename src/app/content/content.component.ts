import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../package.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  packageDetail!: string;

  ngOnInit(): void {
    this.packageDetail = `${packageInfo.name} v${packageInfo.version}-${environment.production ? 'Prod.': 'Desenv.'}`
  }

}
