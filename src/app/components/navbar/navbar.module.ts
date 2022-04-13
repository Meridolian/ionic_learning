import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { NavbarComponent } from "./navbar.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NavbarRoutingModule
    ],
})
export class NavbarModule {}
