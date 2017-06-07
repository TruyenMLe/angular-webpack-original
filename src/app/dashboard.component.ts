import { Component, OnInit } from '@angular/core';
import { SnapLightboxService } from 'snap';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private snapLightboxService: SnapLightboxService) {}

  ngOnInit(): void {}

  openNewRequestModal() {
    this.snapLightboxService.open('new-request-modal');
  }
}

