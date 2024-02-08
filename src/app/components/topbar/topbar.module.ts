import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Search,
  CircleUser,
  Bell,
  Rocket,
} from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Search, CircleUser, Bell, Rocket })],
  exports: [LucideAngularModule],
})
export class TopbarModule {}
