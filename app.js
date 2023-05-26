"use strict";
const e1 = {
    name: "Yann",
    privileges: ['create-server'],
    startDate: new Date(),
};
function addibou(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
