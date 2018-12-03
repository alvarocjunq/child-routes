import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goConfirmation() {
    this.router.navigate(['confirmation']);
  }

}
