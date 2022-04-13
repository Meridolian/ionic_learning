import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HomeRoutingModule
    ],
})
export class HomeModule {}
