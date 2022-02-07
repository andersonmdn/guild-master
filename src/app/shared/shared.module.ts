import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastComponent } from './components/toasts/toast/toast.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { ToastsService } from './components/toasts/toasts.service';
import { TitlePipe } from './pipes/title.pipe';

@NgModule({
  declarations: [ToastsComponent, ToastComponent, TitlePipe],
  imports: [CommonModule],
  providers: [ToastsService],
  exports: [ToastsComponent, TitlePipe],
})
export class SharedModule {}
