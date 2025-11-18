import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes";
import { CommonModule } from '@angular/common';

import { App } from './app';
import { Details } from './details/details';
import { Admin } from './admin/admin';
import { UserList } from './admin/user-list/user-list';
import { ProductList } from './admin/product-list/product-list';

@NgModule({
    declarations: [
    ],
    imports:[
    AppRoutingModule,
    CommonModule,
    App,
    Details,
    Admin,
    UserList,
    ProductList

    ],
    providers: [],
    bootstrap: []

})
export class AppModule { }