import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Home } from './home/home';
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
    FormsModule,
    ReactiveFormsModule,
    Home,
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
