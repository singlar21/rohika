import { Routes } from '@angular/router';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonBeautifierComponent } from './json-beautifier/json-beautifier.component';

export const routes: Routes = [

    {path: '', redirectTo:'compare',pathMatch:'full'},
    {path: 'createUser', component: CreateUsersComponent},
    {path: 'compare', component: JsonFormatterComponent},
    {path: 'beautifier', component: JsonBeautifierComponent},

];
