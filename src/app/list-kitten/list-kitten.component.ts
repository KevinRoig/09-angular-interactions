import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/create-kitten';
import { every } from 'rxjs';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  @Input() kitty?: Kitten;
  @Output() sendKittenToUserList = new EventEmitter();

  adoptKitten() {
    this.sendKittenToUserList.emit({
      name: this.kitty?.name,
      race: this.kitty?.race,
      birth_date: this.kitty?.birth_date,
      photo: this.kitty?.photo
    })
  }
  constructor() { }

  ngOnInit(): void { }
}
