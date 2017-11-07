import { InjectionToken } from '@angular/core';

export const TEST_FACTORY = new InjectionToken<string>('testFactory');

export function testFactory() {

    function logMe(msg) {
        console.log(msg);
    }

    return {
        logger: logMe,
        userId: 1,
        content: 2
    };
}
