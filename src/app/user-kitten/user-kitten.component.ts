import { Component, Input } from '@angular/core';
import { Kitten } from '../models/create-kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {
@Input() userKitten? :Kitten
}
