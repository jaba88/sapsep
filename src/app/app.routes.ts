import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

import { Routes } from '@angular/router';
import { FormEmpleado } from './catalogos/empleado/form-empleado/form-empleado';
import { ListEmpleado } from './catalogos/empleado/list-empleado/list-empleado';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about/:cel', component: About },
    { path: 'contact', component: Contact},
    { path: 'empleados/list', component: ListEmpleado},
    { path: 'empleados/form', component: FormEmpleado}
];


