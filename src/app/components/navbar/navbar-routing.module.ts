import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { NavbarComponent } from "./navbar.component"

const routes: Routes = [
    {
        path: "",
        redirectTo: "/app/home",
        pathMatch: "full",
    },
    {
        path: "app",
        component: NavbarComponent,
        children: [
            {
                path: "home",
                loadChildren: () => import("src/app/components/home/home.module").then((m) => m.HomeModule)
            },
            {
                path: "exercise",
                loadChildren: () => import("src/app/components/exercise/exercise.module").then((m) => m.ExerciseModule)
            },
            {
                path: "user",
                loadChildren: () => import("src/app/components/user/user.module").then((m) => m.UserModule)
            },
            {
                path: "",
                redirectTo: "/app/home",
                pathMatch: "full",
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class NavbarRoutingModule {}
