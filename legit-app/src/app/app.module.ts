import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MdTabsModule, MdButtonModule, MdInputModule, MdProgressBarModule, MdChipsModule, MdCardModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule, MdCheckboxModule } from '@angular/material';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPopupComponent } from './login/login-popup.component';
import { AlertComponent } from './alert/alert.component';
import { ProfileComponent } from './profile/profile.component'
import { ProductListComponent } from './product-list/product-list.component';
import { InlineEditComponent } from './custom/inline-edit.component';

import { CONFIG } from './config/config.component';

import { AuthenticationService } from './authentication.service'
import { RegistrationService } from './registration.service'
import { ProfileService } from './profile.service'
import { ProductService } from './product.service'
import { FabricService } from './fabric.service'
import { CartService } from './cart.service'
import { StorageService } from './storage.service'
import { AuthGuard } from './guard/auth.guard'
import { ShoppingCartService } from './shopping-cart.service';
import { OrderService } from './order.service';
import { SharedService } from './shared.service'

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CarouselModule } from 'ngx-bootstrap'; 

import { EqualValidator } from './register/equal-validator.directive';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { LoadingComponent } from './loading/loading.component';
import { DeleteConfirmationPopupComponent } from './delete-confirmation-popup/delete-confirmation-popup.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { TrackOrderDetailComponent } from './track-order-detail/track-order-detail.component';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ResultComponent } from './result/result.component';
import { BotComponent } from './bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    LoginPopupComponent,
    AlertComponent,
    ProfileComponent,
    EqualValidator,
    InlineEditComponent,
    ProductListComponent,
    FooterComponent,
    ProductDetailComponent,
    MyaccountComponent,
    TrackOrderComponent,
    AboutUsComponent,
    StoreLocatorComponent,
    CheckoutComponent,
    PaymentComponent,
    CartComponent,
    CartPopupComponent,
    ConfirmationPopupComponent,
    LoadingComponent,
    DeleteConfirmationPopupComponent,
    AddressBookComponent,
    TrackOrderDetailComponent,
    AccountVerificationComponent,
    ResultComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BootstrapModalModule,
    CommonModule,
    MdTabsModule, 
    MdButtonModule, 
    MdProgressBarModule, 
    MdChipsModule, 
    MdCardModule,
    CarouselModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdCheckboxModule,
    MdInputModule
  ],
  providers: [
    AuthenticationService,
    RegistrationService,
    ProfileService,
    ProductService,
    FabricService,
    CartService,
    StorageService,
    AuthGuard,
    ShoppingCartService,
    SharedService,
    OrderService
  ],
 
  bootstrap: [AppComponent],
  entryComponents: [
    LoginPopupComponent, 
    CartPopupComponent,
    ConfirmationPopupComponent,
    DeleteConfirmationPopupComponent
  ]
})
export class AppModule { }
