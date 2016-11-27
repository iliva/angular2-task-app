import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent},
  { path: 'update/:id', component: EditComponent}
];

export const routing = RouterModule.forRoot(routes);
