import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleApplication';
  currentItem = "HeadPhones";
  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
