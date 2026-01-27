import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { Contador } from './contador/contador';
import { Botones } from "./botones/botones";
import { Formulario } from "./formulario/formulario";
import { Formulario2 } from "./formulario2/formulario2";
import { Formulario3 } from "./formulario3/formulario3";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Children } from "./children/children";
import { AddMessage } from "./add-message/add-message";
import { ListMessage } from "./list-message/list-message";
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Header } from './core/header/header';
import { Navbar } from './core/navbar/navbar';
import { Sidebar } from './core/sidebar/sidebar';
import { Head } from './core/head/head';
import { Footer } from './core/footer/footer';
import { ThemeSelector } from './core/theme-selector/theme-selector';
import { FormEmpleado } from './catalogos/empleado/form-empleado/form-empleado';
import { ListEmpleado } from './catalogos/empleado/list-empleado/list-empleado';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Contador,
    Botones,
    Formulario,
    Formulario2,
    Formulario3,
    FormsModule,
    ReactiveFormsModule,
    Children,
    AddMessage,
    ListMessage,
    Home,
    About,
    Contact,
    Header,
    Navbar,
    Sidebar,
    Head,
    Footer,
    ThemeSelector,
    FormEmpleado,
    ListEmpleado
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso');

  curso = 'Curso Angular'

}
