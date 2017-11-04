import { Subject } from 'rxjs/Subject';

export class JobAlert {
    private eventSubject: Subject<any>;

    constructor() {
        this.eventSubject = new Subject<any>();
    }

    doAlert() {
        console.log('alert');
    }

    setMyEventSubject(val) {
        this.eventSubject.next(val);
    }

    getMyEventSubject() {
        return this.eventSubject.asObservable();
    }
}


export class TestJobAlert extends JobAlert {
    constructor() {
        super();
    }

}
