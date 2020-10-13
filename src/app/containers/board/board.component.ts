import { Component, OnInit } from '@angular/core';
import { BoardSandbox } from '../../core/sandbox/rello.sandbox';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards = [];
  constructor(public boardSandbox: BoardSandbox) { }

  ngOnInit(): void {
    this.boardSandbox.cards$.subscribe(cards =>{
      console.log(cards);
      this.cards = cards;
    });
  }

}
