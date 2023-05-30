import { Component, Input, LOCALE_ID } from '@angular/core';
import { Kitten } from '../models/create-kitten';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
  newKitten: Kitten = {
    name: "",
    race: "",
    birth_date: new Date,
    photo: ""
  }

  listKitten: Kitten[] = []
  userList: Kitten[] = []

  saveKitten() {
    this.listKitten.push(this.newKitten)
    this.newKitten = new Kitten(
      "",
      "",
      this.newKitten.birth_date,
      ""
    )
  }

  onDataChange(event: Kitten): void {
    this.userList.push(event);
    for (let i = 0; i < this.listKitten.length; i++) {
      if (event.name === this.listKitten[i].name) {
        this.listKitten.splice(i, 1)
      }
    }
  }

  constructor() { }

}


