import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core' 
import { Main, GoodsTable, GoodsCreate } from './containers';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '', 
    component: Main,
    children: [
      { path: '', component: GoodsTable },
      { path: 'new', component: GoodsCreate },
    ]
  },
  { path: '**', redirectTo: '' },
  
]);
