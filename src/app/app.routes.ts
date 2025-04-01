import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';


export const routes: Routes = [
  {
    path:'',
    redirectTo: 'data-binding',
    pathMatch: 'full'
  },
  {
     path:'admin',
     component:AdminComponent
  },
  {
    path:'databinding',
    component:DataBindingComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'ngif',
    component:NgIfComponent
  },
  {
    path:'controlstatements',
    component:ControlStatementComponent
  },
  {
    path: 'signal',
    component: SignalComponent
  }



];
