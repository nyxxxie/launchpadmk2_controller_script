load('grid.js');
load('top.js');
load('side.js');
load('colors.js');

const NOTE_CHANNEL = 0x90;
const TOP_CHANNEL = 0xB0;
const NOTE_BLINK_CHANNEL = 0x91;
const TOP_BLINK_CHANNEL = 0xB1;


/**
 * Determines if button is on the top row of buttons.
 * @param button Button code.
 */
function isTopButton(button) {
    return (button >= BUTTON_UP && button <= BUTTON_MIXER);
}

/**
 * Determines if button is on the side row of buttons.
 * @param button Button code.
 */
function isSideButton(button) {
    return (button < 100 && (button - 9) % 10 == 0);
}

/**
 * Determines if button is on the middle grid of buttons.
 * @param button Button code.
 */
function isGridButton(button) {
    return !(isTopButton(button) || isSideButton(button))
}

/**
 * Sets a button's color.
 * @param button Button code.
 * @param button Color index.
 */
function setButtonColor(button, color) {
    if (isGridButton(button) || isSideButton(button)) {
        sendMidi(NOTE_CHANNEL, button, color);
    }
    else  {
        sendMidi(TOP_CHANNEL, button, color);
    }
}

/**
 * Sets a button's color and makes it blink..
 * @param button Button code.
 * @param button Color index.
 */
function setButtonBlink(button, color) {
    if (isGridButton(button) || isSideButton(button)) {
        sendMidi(NOTE_BLINK_CHANNEL, button, color);
    }
    else {
        sendMidi(TOP_BLINK_CHANNEL, button, color);
    }
}

/**
 * Resets a button's color.
 * @param button Button code.
 */
function resetButton(button) {
    setButtonColor(button, Color.BLACK);
}

/**
 * Reset all of the grid buttons' colors.
 */
function resetGridButtons() {
    for (var i=0; i < GRID_BUTTONS.length; i++) {
        resetButton(GRID_BUTTONS[i]);
    }
}

/**
 * Reset all of the side buttons' colors.
 */
function resetSideButtons() {
    for (var i=0; i < SIDE_BUTTONS.length; i++) {
        resetButton(SIDE_BUTTONS[i]);
    }
}

/**
 * Reset all of the top buttons' colors.
 */
function resetTopButtons() {
    for (var i=0; i < TOP_BUTTONS.length; i++) {
        resetButton(TOP_BUTTONS[i]);
    }
}

/**
 * Reset all of the buttons' colors.
 */
function resetButtons() {
    resetGridButtons();
    resetSideButtons();
    resetTopButtons();
}
