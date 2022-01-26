import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ProvinceComponent } from './province/province.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'client/new', component: NewClientComponent},
  { path: 'client/:id/details', component: ClientDetailsComponent},
  { path: 'province', component: ProvinceComponent},
  { path: 'municipality', component: MunicipalityComponent},
  { path: 'invoices', component: InvoicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
