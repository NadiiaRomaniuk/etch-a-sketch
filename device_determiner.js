import { mobile } from './mobile_mode.js'
import { desktop } from './desktop_mode.js';

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    mobile();
} else {
    desktop();
    
}
