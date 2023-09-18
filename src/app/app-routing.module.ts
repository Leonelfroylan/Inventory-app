import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewUsersComponent } from './page/Users/view-users/view-users.component';
import { AddUsersComponent } from './page/Users/add-users/add-users.component';
import { UsersComponent } from './page/Users/users/users.component';
import { ViewClientesComponent } from './page/clientes/view-clientes/view-clientes.component';
import { AddClientesComponent } from './page/clientes/add-clientes/add-clientes.component';
import { EntradasSalidasComponent } from './page/almacen/entradas-salidas/entradas-salidas.component';
import { CategoriasComponent } from './page/almacen/categoriass/categorias/categorias.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "usuarios", component: ViewUsersComponent},
  {path: "add-user", component: AddUsersComponent},
  {path: "user", component: UsersComponent},
  {path: "clientes", component: ViewClientesComponent},
  {path: "add-clientes", component: AddClientesComponent},
  {path: "entrada-salida", component: EntradasSalidasComponent  },
  {path: "categorias", component: CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
