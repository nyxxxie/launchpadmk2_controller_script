const TOP_INPUT = 176;
const NOTE_INPUT = 144;
const KEY_UP = 0;
const KEY_DOWN = 127;

/**
 * Represents an event related to a button.
 */
function ButtonEvent(status, data1, data2) {
    this.status = status;
    this.data1 = data1;
    this.data2 = data2;
}

/**
 * Indicates if the button is up.
 * @return true if button is up, false otherwise.
 */
ButtonEvent.prototype.isUp = function() {
    return (this.data2 == KEY_UP);
}

/**
 * Indicates if the button is down.
 * @return true if button is down, false otherwise.
 */
ButtonEvent.prototype.isDown = function() {
    return (this.data2 == KEY_DOWN);
}

/**
 * Returns the button code associated with this event.
 * @return true if button is down, false otherwise.
 */
ButtonEvent.prototype.getCode = function() {
    return this.data1;
}
