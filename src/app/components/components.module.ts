import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
