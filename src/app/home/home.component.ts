import { Component, OnInit } from '@angular/core';
import { EventBus, State } from 'vertx3-eventbus-rx-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eb: any;
  apiCallResult: any;
  EVENT_BUS_URL = 'http://ddcf6d23-cf77-405c-a22f-772a66df8e89.cloudapp.net:10063/eb';
  rates: any;
  constructor() { }

  ngOnInit() {
    this.initEventBus();
    this.eventBusStateSubscription();
  }

  initEventBus() {
    this.eb = EventBus.create(this.EVENT_BUS_URL);
  }

  eventBusStateSubscription() {
    let ebState;
    // get current state
    ebState = this.eb.state;

    // get current state and future changes
    this.eb.state$.subscribe(state => {
      ebState = state;

      if (ebState === State.OPEN) {
        this.sendStaticDataRequest();
        this.getRates();
      }
    });
  }
  sendStaticDataRequest() {
    // send and expect a reply
    this.eb.rxSend('in.Node1', {type: 'getStaticData' }).subscribe(
      (reply: { body: any; }) => {
        this.apiCallResult = reply.body;
      },
      error => {
        // received an error
        console.log(error);
      }
    );
  }
  getRates() {
    this.eb.rxSend('in.Node1', {type: 'getRates', currency: 'IBM1'}).subscribe(
      reply => {
        this.rates = JSON.stringify(JSON.parse(reply.body), undefined, 4);
      },
      error => {
        console.log(error);
      }
    );
  }
}
