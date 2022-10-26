import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // path: 'drawing-board',
    path: '',
    loadChildren: () =>
      import('./pages/drawing-board/drawing-board.module').then(
        (m) => m.DrawingBoardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
