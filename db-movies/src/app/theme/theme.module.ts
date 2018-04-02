import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router/src/router_module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationBarComponent],
  exports: [ NavigationBarComponent ]
})
export class ThemeModule { }
