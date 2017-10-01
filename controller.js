/**
 * Master event callback function.
 */
var eventListener = function(event) {

    // TODO: use this to dispatch events to the currently active view

    /* Test event event listener, get rid of this later */
    if (event instanceof InitEvent) {
        for (var i=0; i < GRID_BUTTONS.length; i++) {
            setButtonColor(GRID_BUTTONS[i], Color.MAGENTA);
        }
        for (var i=0; i < SIDE_BUTTONS.length; i++) {
            setButtonColor(SIDE_BUTTONS[i], Color.RED);
        }
        for (var i=0; i < TOP_BUTTONS.length; i++) {
            setButtonColor(TOP_BUTTONS[i], Color.AMBER);
        }
        setButtonColor(BUTTON_REC_ARM, Color.MAGENTA);
    }
    else if (event instanceof ButtonEvent) {
        var button = event;
        if (button.isDown()) {
            if (button.getCode() == BUTTON_REC_ARM) {
                resetButtons();
                setButtonColor(BUTTON_REC_ARM, Color.MAGENTA);
            }
            else if (isGridButton(button.getCode())) {
                setButtonColor(button.getCode(), Color.RED);
            }
            else if (isSideButton(button.getCode())) {
                setButtonColor(button.getCode(), Color.CYAN);
            }
            else if (isTopButton(button.getCode())) {
                setButtonColor(button.getCode(), Color.AMBER);
            }
        }
    }
    else {
        println('Unknown event caught.');
    }
}

registerEventListener(eventListener);
