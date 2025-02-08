import { Routes } from '@angular/router';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';

export const routes: Routes = [


    {path: 'createUser', component: CreateUsersComponent},
    {path: 'json', component: JsonFormatterComponent},

];
