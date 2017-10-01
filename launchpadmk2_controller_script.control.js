/**
 * First file loaded by bitwig.  Defines controller options and initializes it.
 */

loadAPI(1);
load('buttons/init.js');
load('events/init.js');
load('controller.js');

/* Do some required stuff so bitwig can recognise this controller script. */
host.defineController('nyx-industries', 'Launchpad MKII', '1.0',
                      'ddd601d6-ae83-42f4-9e77-de5ae054b5b3');
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["Launchpad MK2 MIDI 1"], ["Launchpad MK2 MIDI 1"]);

/**
 * Midi callback function.  Called when there's a midi event.
 * @param status MIDI status.
 * @param data1 MIDI data1
 * @param data2 MIDI data2
 */
var onMidiIn = function(status, data1, data2) {
    println('status:' + status + ' d1:' + data1 + ' d2:' + data2);
    if (status == TOP_INPUT || status == NOTE_INPUT) {
        event = new ButtonEvent(status, data1, data2);
        dispatchEvent(event);
    }
}

/**
 * Entry point
 */
function init() {
    /* Set up midi */
    host.getMidiInPort(0).setMidiCallback(onMidiIn);
    note_in = host.getMidiInPort(0).createNoteInput('Launchpad');
    note_in.setShouldConsumeEvents(false);

    resetButtons();

    event = new InitEvent();
    dispatchEvent(event);
}

/**
 * Called on exit
 */
function exit() {
    event = new ExitEvent();
    dispatchEvent(event);

    resetButtons();
    sendMidi(0xb8, 0x00, 0x00);
}
