import { Routes } from "@angular/router";
import { AccountImgProfileComponent } from "./account/account-img-profile/account-img-profile.component";
import { AccountPlayerComponent } from "./account/account-player/account-player.component";
import { AccountSettingsComponent } from "./account/account-settings/account-settings.component";
import { MatchesHomeComponent } from "./matches/matches-home/matches-home.component";
export const routesHome: Routes = [
    {
        path: 'matches',
        component: MatchesHomeComponent,
    },
    {
        path: 'account-settings',
        component: AccountSettingsComponent,
    },
    {
        path: 'account-profile',
        component: AccountImgProfileComponent,
    },
    {
        path: 'account-player',
        component: AccountPlayerComponent,
    },
    {
        path: 'account-avatar',
        component: AccountImgProfileComponent,
    },





]