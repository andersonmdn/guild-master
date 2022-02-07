import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastsService } from './../../shared/components/toasts/toasts.service';
import { SharedModule } from './../../shared/shared.module';
import { ExpeditionsRoutingModule } from './expeditions-routing.module';
import { ExpeditionsComponent } from './expeditions.component';

@NgModule({
  declarations: [ExpeditionsComponent],
  providers: [ToastsService],
  imports: [CommonModule, ExpeditionsRoutingModule, SharedModule],
})
export class ExpeditionsModule {}
