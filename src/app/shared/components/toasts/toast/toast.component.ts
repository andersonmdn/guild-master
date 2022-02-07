import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
})
export class ToastComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
