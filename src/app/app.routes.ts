import { Home } from './home/home';

import { Routes } from '@angular/router';
import { FormEmpleado } from './catalogos/empleado/form-empleado/form-empleado';
import { ListEmpleado } from './catalogos/empleado/list-empleado/list-empleado';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'empleados/list', component: ListEmpleado},
    { path: 'empleados/form', component: FormEmpleado}
];


