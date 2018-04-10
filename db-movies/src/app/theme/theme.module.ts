import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DbMoivesService } from '../shared/db-moives.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [NavigationBarComponent],
  exports: [ NavigationBarComponent ],
  providers: [DbMoivesService]
})
export class ThemeModule { }
