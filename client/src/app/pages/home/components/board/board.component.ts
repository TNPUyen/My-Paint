import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() board: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // openBoard(board: any) {
  //   this.router.navigate(['/drawing-board', board.id]);
  // }

  openBoard(){
    this.router.navigate(['/drawing-board']);
  }

}
