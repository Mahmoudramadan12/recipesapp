import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('ServerContent') ServerContentinput: ElementRef;
  @Output() serverCreated = new EventEmitter<{
    servername: string;
    servercontent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{}>();

  onAddServer(nameinput: HTMLInputElement) {
    this.serverCreated.emit({
      servername: nameinput.value,
      servercontent: this.ServerContentinput.nativeElement.value,
    });
  }

  onAddBlueprint(nameinput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      servername: nameinput.value,
      servercontent: this.ServerContentinput.nativeElement.value,
    });
  }
}
