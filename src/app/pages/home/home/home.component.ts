import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  onRegisterClick() {
    // Aquí puedes manejar la lógica cuando se haga clic en el botón de registro
    console.log('Registro iniciado');
  }
}
