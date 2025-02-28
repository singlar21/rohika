import { Routes } from '@angular/router';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonBeautifierComponent } from './json-beautifier/json-beautifier.component';

export const routes: Routes = [


    {path: 'createUser', component: CreateUsersComponent},
    {path: '', component: JsonFormatterComponent},
    {path: 'beautifier', component: JsonBeautifierComponent},

];
