import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './page/Users/users/users.component';
import { ViewUsersComponent } from './page/Users/view-users/view-users.component';
import { AddUsersComponent } from './page/Users/add-users/add-users.component';
import { ViewClientesComponent } from './page/clientes/view-clientes/view-clientes.component';
import { AddClientesComponent } from './page/clientes/add-clientes/add-clientes.component';
import { EntradasSalidasComponent } from './page/almacen/entradas-salidas/entradas-salidas.component';
import { CategoriasComponent } from './page/almacen/categoriass/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NavigationComponent,
    HomeComponent,
    UsersComponent,
    ViewUsersComponent,
    AddUsersComponent,
    ViewClientesComponent,
    AddClientesComponent,
    EntradasSalidasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
