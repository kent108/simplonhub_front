import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { UserService } from './services/user.service';
import { PageSubscribeComponent } from './pages/page-subscribe/page-subscribe.component';
import { PageInfosComponent } from './pages/page-infos/page-infos.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { PageStoreComponent } from './pages/page-store/page-store.component';
import { PageAddStoreComponent } from './pages/page-add-store/page-add-store.component';
import { FormStoreComponent } from './components/form-store/form-store.component';
import { AdmintableComponent } from './components/admintable/admintable.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { StoreEditComponent } from './components/store-edit/store-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    PageNotFoundComponent,
    PageConnectComponent,
    PageHomeComponent,
    CarousselComponent,
    PageSubscribeComponent,
    PageInfosComponent,
    StoreListComponent,
    PageStoreComponent,
    PageAddStoreComponent,
    FormStoreComponent,
    AdmintableComponent,
    PageAdminComponent,
    StoreDetailComponent,
    StoreEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
