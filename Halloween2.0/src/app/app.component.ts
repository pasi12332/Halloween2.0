import { Component } from '@angular/core';
import { TicketPurchaseDialogComponent } from './ticket-purchase-dialog/ticket-purchase-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Halloween2.0';

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  constructor(private modalService: NgbModal) {}

  openTicketPurchaseDialog(eventName: string): void {
    // Replace `this.dialog.open` with `this.modalService.open`
    const modalRef = this.modalService.open(TicketPurchaseDialogComponent);
    // Set any necessary input data using modalRef.componentInstance
    modalRef.componentInstance.eventName = eventName;

    modalRef.result.then((result) => {
      // Handle the result after the modal is closed
    }, (reason) => {
      // Handle the dismiss reason if needed
    });
  }

  


}
