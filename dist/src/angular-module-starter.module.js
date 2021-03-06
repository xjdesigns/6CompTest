import { NgModule } from '@angular/core';
import { AngularModuleStarterService } from './angular-module-starter.service';
import { AngularModuleStarterComponent } from './angular-module-starter.component';
import { JasonRocksComponent } from './jason-test.component';
export function asyncLocalStorageFactory() {
    return new AngularModuleStarterService();
}
var AngularModuleStarterModule = (function () {
    function AngularModuleStarterModule() {
    }
    return AngularModuleStarterModule;
}());
export { AngularModuleStarterModule };
AngularModuleStarterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AngularModuleStarterComponent,
                    JasonRocksComponent,
                ],
                exports: [
                    AngularModuleStarterComponent,
                    JasonRocksComponent,
                ],
                providers: [
                    {
                        provide: AngularModuleStarterService,
                        useFactory: asyncLocalStorageFactory
                    }
                ]
            },] },
];
/** @nocollapse */
AngularModuleStarterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=angular-module-starter.module.js.map