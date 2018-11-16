import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CarteComponent } from './carte/carte.component';
import { CommanderComponent } from './commander/commander.component';
import { CompteComponent } from './compte/compte.component';
import { ContacterComponent } from './contacter/contacter.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

const routes: Routes = [{path: 'accueil', component: AccueilComponent},
{path: 'carte', component: CarteComponent},
{path: 'commander', component: CommanderComponent},
{path: 'compte', component: CompteComponent},
{path: 'contacter', component: ContacterComponent},
{path: 'login', component: LoginComponent},
{path: 'notification', component: NotificationComponent},
{path: 'suggestion', component: SuggestionComponent},
{path: '', pathMatch: 'full' , redirectTo: '/accueil'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
