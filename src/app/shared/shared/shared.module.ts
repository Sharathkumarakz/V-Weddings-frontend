import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//forms
import { ReactiveFormsModule } from '@angular/forms';

//http
import {HttpClientModule} from '@angular/common/http'

//guard

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
    providers:[]
})
export class SharedModule { }
