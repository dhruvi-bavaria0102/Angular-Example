import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'SampleApplication';
  currentItem = "HeadPhones";
  @ViewChild('nameRef') nameElementRef:ElementRef;

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
  }
  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
