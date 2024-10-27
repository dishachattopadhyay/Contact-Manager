import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { AllContactsComponent } from './Components/all-contacts/all-contacts.component';
import { AddContactsComponent } from './Components/add-contacts/add-contacts.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'allContats',
        pathMatch:'full'
    },
    // {
    //     path:'layout',
    //     component:LayoutComponent
    // },
    {
        path:'allContats',
        component:AllContactsComponent
    },
    {
        path:'addContacts',
        component:AddContactsComponent
    }
];
