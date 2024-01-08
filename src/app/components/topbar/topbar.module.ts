import { NgModule } from '@angular/core';
import { LucideAngularModule, Search, CircleUser, Bell } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Search, CircleUser, Bell })],
  exports: [LucideAngularModule],
})
export class TopbarModule {}
