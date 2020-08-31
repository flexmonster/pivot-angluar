import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { AppRoutingModule } from './app-routing.module';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { SideMenuComponent } from './common/side-menu/side-menu.component';
import { PivoTableDemoComponent } from './examples/pivo-table-demo/pivo-table-demo.component';
import { CallingEventsComponent } from './examples/calling-events/calling-events.component';
import { UsingApiCallsComponent } from './examples/using-api-calls/using-api-calls.component';
import { UpdatingDataComponent } from './examples/updating-data/updating-data.component';
import { CustomizingToolbarComponent } from './examples/customizing-toolbar/customizing-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    HighchartsComponent,
    TopMenuComponent,
    SideMenuComponent,
    PivoTableDemoComponent,
    CallingEventsComponent,
    UsingApiCallsComponent,
    UpdatingDataComponent,
    CustomizingToolbarComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTabsModule, FlexmonsterPivotModule, AppRoutingModule
  ],
  exports: [MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
