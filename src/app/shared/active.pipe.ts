import {Pipe, PipeTransform} from '@angular/core';
import { Task } from './task';

@Pipe({
    name: "FilterActive"
})
export class FilterActive implements PipeTransform {
	transform(arr: Task[], value: string) {
		if (arr==null) return null;	
		switch(value){
			case 'active': return arr.filter(task => task.active); break;
			case 'unactive': return arr.filter(task => !task.active); break;
			default: return arr; break;
		}		
	}
}