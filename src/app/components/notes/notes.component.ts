import { Component, OnInit, } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '44px' })),
      transition('false <=> true', animate('450ms ease'))
    ]),
    trigger('beforeClose', [
      transition(':leave', [
        animate('80ms')
      ])
    ])]
})
export class NotesComponent implements OnInit {


  sections = ['', '', '']

  show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
