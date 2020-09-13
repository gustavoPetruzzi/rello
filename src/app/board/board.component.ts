import { Component, OnInit } from '@angular/core';
import { BoardSandbox } from '../rello.sandbox';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public boardSandbox: BoardSandbox) { }

  ngOnInit(): void {
    this.boardSandbox.cards$.subscribe(cards =>{
      console.log(cards);
    })
  }

}
