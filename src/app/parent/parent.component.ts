import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, OnDestroy, AfterViewInit{
  message: string = 'new message to child';
  messageFromChild: string = '';
  @ViewChild('pTag', { static: true }) pTag!: ElementRef;
  @ViewChild('childComponentRef') childComponentRef!: ChildComponent;
  childMessage(e: string) {
    this.messageFromChild = e;
  }

  ngOnInit(): void {
    this.pTag.nativeElement.style.color = 'blue';
  }

  ngOnDestroy(): void {
    console.log('on Destroy')
  }

  ngAfterViewInit(): void {

  }

  onClickParent() {
    this.childComponentRef.emitMessageToParent();
    this.childComponentRef.updateCount()
  }
}
