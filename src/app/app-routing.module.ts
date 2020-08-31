import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { PivoTableDemoComponent } from './examples/pivo-table-demo/pivo-table-demo.component';
import { CallingEventsComponent } from './examples/calling-events/calling-events.component';
import { UsingApiCallsComponent } from './examples/using-api-calls/using-api-calls.component';

const appRoutes: Routes = [
    { path: 'pivot-table-demo', component: PivoTableDemoComponent },
    { path: 'calling-events', component: CallingEventsComponent },
    { path: 'using-api-calls', component: UsingApiCallsComponent },
    { path: 'highcharts', component: HighchartsComponent },
    { path: '**', redirectTo: 'pivot-table-demo' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }