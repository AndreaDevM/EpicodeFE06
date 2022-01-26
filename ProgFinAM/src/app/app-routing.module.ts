import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { NewClientComponent } from './new-client/new-client.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'client/new', component: NewClientComponent},
  { path: 'client/:id/details', component: ClientDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
