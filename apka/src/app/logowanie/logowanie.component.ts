import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  logowanie() {
    if (this.formData.username === 'admin' && this.formData.password === 'admin') {
      console.log(`Zalogowano pomyślnie`);
    } else {
      console.log(`Błąd logowania. Sprawdź dane`);
    }
  }
}
