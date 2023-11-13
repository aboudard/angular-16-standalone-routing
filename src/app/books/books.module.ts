import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';


@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        BooksComponent
    ]
})
export class BooksModule { }
