import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      {id: 1, name: 'Task1', description: 'TaskDescription1', active: true},
      {id: 2, name: 'Task2', description: 'TaskDescription2', active: true},
      {id: 3, name: 'Task3', description: 'TaskDescription3', active: false},
      {id: 4, name: 'Task4', description: 'TaskDescription4', active: true}
    ];
    return {tasks};
  }
}