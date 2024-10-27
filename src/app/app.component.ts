import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from './Models/Coontact.model';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Components/layout/layout.component';
import { AllContactsComponent } from "./Components/all-contacts/all-contacts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutComponent, AllContactsComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  
  title = 'ContactManagerUI';
  contactList : Contact[] = [];
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getAllContacts();
  }
  // private getAllContacts():Observable<Contact[]>{
  //   return this.http.get<Contact[]>('https://localhost:7019/api/Contacts');
  // }

  getAllContacts(){
    this.http.get('https://localhost:7019/api/Contacts').subscribe((res:any)=>{
      this.contactList = res;
    })
  }

  OnLogout() {
    alert('logout');
    }
}
