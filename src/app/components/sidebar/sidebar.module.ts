import { NgModule } from '@angular/core';
import { LucideAngularModule, MenuIcon, X } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ MenuIcon, X })],
  exports: [LucideAngularModule],
})
export class SidebarModule {}
