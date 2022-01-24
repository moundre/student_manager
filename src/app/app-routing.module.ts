import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addstudent',
    loadChildren: () => import('./addstudent/addstudent.module').then( m => m.AddstudentPageModule)
  },
  {
    path: 'updatestudent',
    loadChildren: () => import('./updatestudent/updatestudent.module').then( m => m.UpdatestudentPageModule)
  },
  {
    path: 'listestudent',
    loadChildren: () => import('./listestudent/listestudent.module').then( m => m.ListestudentPageModule)
  },
  {
    path: 'deletestudent',
    loadChildren: () => import('./deletestudent/deletestudent.module').then( m => m.DeletestudentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
