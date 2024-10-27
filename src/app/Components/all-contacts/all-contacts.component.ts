import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Contact } from '../../Models/Coontact.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-contacts',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './all-contacts.component.html',
  styleUrl: './all-contacts.component.css'
})
export class AllContactsComponent implements OnInit{
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
}

