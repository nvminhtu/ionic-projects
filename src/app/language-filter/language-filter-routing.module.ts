import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageFilterPage } from './language-filter.page';

const routes: Routes = [
  {
    path: '',
    component: LanguageFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageFilterPageRoutingModule {}
