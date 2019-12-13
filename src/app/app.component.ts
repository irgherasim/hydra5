import { Component, OnInit } from '@angular/core';

// import EventBus from 'vertx3-eventbus-client';
import { EventBus, State } from 'vertx3-eventbus-rx-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  eb: any;
  constructor() {}

  //   ngOnInit() {
  //     const eb = new EventBus(
  //       'http://ddcf6d23-cf77-405c-a22f-772a66df8e89.cloudapp.net:10063/eb'
  //     );
  //     eb.onopen = () => {
  //     eb.send(
  //       'in.Node2',
  //       {
  //         type: 'getStaticData'
  //       },
  //       {},
  //       (error, reply) => {
  //         if (reply === undefined) {
  //           console.log(error);
  //         } else {
  //           console.log(reply.body);
  //         }
  //       }
  //     );
  //   }
  // }
  ngOnInit() {
    this.initEventBus();
    this.eventBusStateSubscription();
  }

  initEventBus() {
    this.eb = EventBus.create(
      'http://ddcf6d23-cf77-405c-a22f-772a66df8e89.cloudapp.net:10063/eb'
    );
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
      }
    });
  }
  sendStaticDataRequest() {
    // send and expect a reply
    this.eb.rxSend('in.Node2', { type: 'getStaticData' }).subscribe(
      reply => {
        console.log(reply.body);
      },
      error => {
        // received an error
        console.log(error);
      }
    );
  }
}
