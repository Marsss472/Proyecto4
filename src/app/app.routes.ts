import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { Admin } from "./admin/admin";
import { UserList } from "./admin/user-list/user-list";
import { ProductList } from "./admin/product-list/product-list";



export const routes: Routes = [
      { path: '', component: Home},
        { path: 'home', component: Home},
        { path: 'details/:id', component: Details },
        //Ruta con parámetro
        {
            path: 'admin', component: Admin, 
            children: [
                { path: 'users', component: UserList},
                { path: 'products', component: ProductList}
            ]
        }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}