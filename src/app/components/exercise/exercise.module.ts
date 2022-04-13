import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExerciseRoutingModule } from "./exercise-routing.module";
import { ExerciseComponent } from "./exercise.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ExerciseComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExerciseRoutingModule
    ],
})
export class ExerciseModule {}
