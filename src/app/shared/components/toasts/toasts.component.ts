import { ToastsService } from './toasts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.less'],
})
export class ToastsComponent implements OnInit {
  constructor(public toastsService: ToastsService) {}

  ngOnInit() {}
}
