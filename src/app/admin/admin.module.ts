import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,MaterialDesignModule,
    ReactiveFormsModule,RouterModule.forChild([
      {
        path: '',
        component: AdminComponent
        
      }
  ]
),
  ]
})
export class AdminModule { }
