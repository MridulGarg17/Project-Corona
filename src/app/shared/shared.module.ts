import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { CityTableComponent } from './city-table/city-table.component';
import { MaterialDesignModule } from '../material-design/material-design.module';




@NgModule({
  declarations: [TableComponent, CityTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialDesignModule
  ],
  exports:[TableComponent]
})
export class SharedModule { }
