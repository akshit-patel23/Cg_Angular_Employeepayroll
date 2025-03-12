import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list..component';
import { EmployeeFormComponent } from './employee-form.component';

export const routes: Routes = [
    {path:'',component:EmployeeListComponent},
    {path:'add',component:EmployeeFormComponent}
];
