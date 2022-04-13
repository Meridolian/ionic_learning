import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AuthComponent, 
        LoginComponent, 
        SignupComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
})
export class AuthModule {}
