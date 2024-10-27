import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Contact } from '../../Models/Coontact.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-contacts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css'
})
export class AddContactsComponent {

 http = inject(HttpClient);
 addContact : Contact[]=[];

 contactsForm : FormGroup = new FormGroup({
  
  name: new FormControl(''),
  email: new FormControl(''),
  phoneNumber: new FormControl(''),
  favorite: new FormControl<boolean>(false),

 })



 OnSubmit() {
   console.log(this.contactsForm.value)
  const addContactRequest = {
    name : this.contactsForm.get('name')?.value,
    email : this.contactsForm.get('email')?.value,
    phoneNumber : this.contactsForm.get('phoneNumber')?.value,
    favorite : this.contactsForm.get('favorite')?.value,
    
  }

  this.http.post('https://localhost:7019/api/Contacts',addContactRequest).subscribe({
    next:(value)=>{
      console.log(value);
      this.contactsForm.reset;
    }
  })
  }
}
