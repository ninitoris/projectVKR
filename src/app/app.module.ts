import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './shared/components/main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ESKDClassElementComponent } from './eskdclass-element/eskdclass-element.component';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreefilterComponent } from './shared/components/treefilter/treefilter.component';
import { FulltreeComponent } from './shared/components/fulltree/fulltree.component';
import { ScrollSpyDirective } from './shared/directivs/scrollspy.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ESKDClassElementComponent,
    MyfilterPipe,
    TreefilterComponent,
    FulltreeComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
