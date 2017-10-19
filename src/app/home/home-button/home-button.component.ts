import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-home-button',
    templateUrl: './home-button.component.html',
    styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {
    interval: any;

    @Output() homeUpdated = new EventEmitter();

    private count: number;

    constructor() {
    }

    ngOnInit() {
        this.count = 0;
    }

    btnClick() {
        console.log('Btn Cicked');
        clearInterval(this.interval);
        if (this.count % 2 === 1) {
            this.interval = setInterval(() => {
                this.homeUpdated.emit('count: ' + this.interval);
            }, 2000);
        }

        this.count++;
    }
}
