import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './shared/services/auth.service';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { DetailsCardSmallComponent } from './components/details-card-small/details-card-small.component';
import { DetailsComponent } from './components/details/details.component';
import { AllComponent } from './components/all/all.component';
import { DetailsCardListComponent } from './components/details-card-list/details-card-list.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { EditFriendComponent } from './components/edit-friend/edit-friend.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotlightFriendComponent } from './components/spotlight-friend/spotlight-friend.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    BodyComponent,
    LoginComponent,
    DashboardComponent,
    DetailsCardComponent,
    DetailsCardSmallComponent,
    DetailsComponent,
    AllComponent,
    DetailsCardListComponent,
    AddFriendComponent,
    EditFriendComponent,
    SpotlightFriendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
