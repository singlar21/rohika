import { Routes } from '@angular/router';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonBeautifierComponent } from './json-beautifier/json-beautifier.component';
import { RestTemplateComponent } from './rest-template/rest-template.component';
import { YangValidatorComponent } from './yang-validator/yang-validator.component';

export const routes: Routes = [

    { path: '', redirectTo: 'compare', pathMatch: 'full' },
    { path: 'createUser', component: CreateUsersComponent },
    { path: 'compare', component: JsonFormatterComponent },
    { path: 'beautifier', component: JsonBeautifierComponent },
    { path: 'restTemplate', component: RestTemplateComponent },
    { path: 'yangValidator', component: YangValidatorComponent },

];
