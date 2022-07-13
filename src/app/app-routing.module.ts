import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { AllComponent } from './components/all/all.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { EditFriendComponent } from './components/edit-friend/edit-friend.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all',
    component: AllComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addFriend',
    component: AddFriendComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:id/edit',
    component: EditFriendComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
