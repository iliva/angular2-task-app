import { NgModule }      from '@angular/core';
import { inputSearch } from './shared/search.pipe';

 @NgModule({
     imports:        [],
     declarations:   [inputSearch],
     exports:        [inputSearch],
 })

 export class PipeModule {

 static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
  }