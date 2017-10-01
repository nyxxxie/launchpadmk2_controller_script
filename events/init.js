load('button.js');
load('controller.js');

var _event_listeners = [];


/**
 * Registers an event listener.
 * @param event_listener Event listener to register.
 */
function registerEventListener(event_listener) {
    _event_listeners.push(event_listener);
}

/**
 * Dispatches an event.
 * @param event Event to dispatch
 */
function dispatchEvent(event) {
    for (var i = 0; i < _event_listeners.length; i++) {
        _event_listeners[i](event);
    }
}
