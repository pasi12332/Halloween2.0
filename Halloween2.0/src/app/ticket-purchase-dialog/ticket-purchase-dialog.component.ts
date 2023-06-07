
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ticket-purchase-dialog',
  templateUrl: './ticket-purchase-dialog.component.html',
  styleUrls: ['./ticket-purchase-dialog.component.css']
})
export class TicketPurchaseDialogComponent implements OnInit  {
  ticketForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.ticketForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      quantity: [1, Validators.required]
    });
  }

  purchaseTicket(): void {
    if (this.ticketForm.valid) {
      // Form is valid, perform the ticket purchase logic
      console.log('Ticket purchase submitted:', this.ticketForm.value);
    } else {
      // Form is invalid, handle validation errors or display error messages
      console.log('Invalid form. Please fill in all required fields.');
    }
  }
}
