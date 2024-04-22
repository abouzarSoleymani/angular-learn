import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgIf, NgForOf, NgSwitchCase, NgSwitch],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'my angular app';
  num: number = 10
  isDisable: boolean = false;

  isActive: boolean = true;

  style = {
    'font-size': '70px'
  }

  names : string[] = ['ali', 'mohamad', 'reza', 'hosein'];

  userStatus: number = 2;

  hasError: boolean = false;
  errorMessage: string = '';

  isShow = false
  public onChange(event: Event): void {
    this.title = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.errorMessage = 'service has error'
      this.hasError = true;
    }, 8000)
  }



}
