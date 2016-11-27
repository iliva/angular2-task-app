import {Pipe, PipeTransform} from '@angular/core';
import { Task } from './task';

@Pipe({
    name: "InputSearch"
})
export class InputSearch implements PipeTransform {
	transform(arr: Task[], value: string) {
		if (arr==null) return null;
		if (value == undefined ) return arr;	
		value = value.toLocaleLowerCase();
		return arr.filter(task=> task.name.toLocaleLowerCase().indexOf(value) != -1);
	}
}
