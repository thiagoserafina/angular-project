import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Search,
  CircleUser,
  Bell,
  Rocket,
  LogOut,
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({ Search, CircleUser, Bell, Rocket, LogOut }),
  ],
  exports: [LucideAngularModule],
})
export class TopbarModule {}
