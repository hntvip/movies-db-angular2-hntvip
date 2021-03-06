import { NavigationBarComponent } from './theme/navigation-bar/navigation-bar.component';
import { ThemeModule } from './theme/theme.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DbMoivesService } from './shared/db-moives.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppFontSizeDirective } from './shared/directives/app-font-size.directive';
import { CardBorderDirective } from './shared/directives/card-border.directive'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ThemeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
