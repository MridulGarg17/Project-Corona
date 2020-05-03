import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [HomeComponent, DashboardComponent, LatestNewsComponent, PrecautionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
        
      }
  ]
),
SharedModule,
MaterialDesignModule
  ]
})
export class HomeModule { }
