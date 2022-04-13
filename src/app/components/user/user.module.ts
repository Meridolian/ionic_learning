import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UserRoutingModule
    ],
})
export class UserModule {}
