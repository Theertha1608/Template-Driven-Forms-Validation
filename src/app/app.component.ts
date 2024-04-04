import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form ={
    fullname:'',
    username:'',
    email:'',
    address:'',
    dob:'',
    password:'',
    phoneNumber:'',

  };
  onSubmit() :void {
    console.log(this.form);
  }
}
