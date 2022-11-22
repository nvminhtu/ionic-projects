import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguageFilterPageRoutingModule } from './language-filter-routing.module';

import { LanguageFilterPage } from './language-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageFilterPageRoutingModule
  ],
  declarations: [LanguageFilterPage]
})
export class LanguageFilterPageModule {}
