import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
    //definimos las rutas como forChild a diferencia de forRoot como en el modulo principal de la app
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [

  ]
})
export class UserModule {

}
