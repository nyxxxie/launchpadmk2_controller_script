/**
 * First file loaded by bitwig.  Defines controller options and initializes it.
 */

loadAPI(1);

/* Do some required stuff so bitwig can recognise this controller script. */
host.defineController('nyx-industries', 'Launchpad MKII', '1.0',
                      'ddd601d6-ae83-42f4-9e77-de5ae054b5b3');
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["Launchpad MK2 MIDI 1"], ["Launchpad MK2 MIDI 1"]);

var onMidiIn = function(status, data1, data2) {
    println(status + ' ' + data1 + '' + data2);
}

/**
 * Entry point
 */
function init() {
    /* Set up midi */
    host.getMidiInPort(0).setMidiCallback(onMidiIn);
    note_in = host.getMidiInPort(0).createNoteInput('Launchpad');
    note_in.setShouldConsumeEvents(false);
}

/**
 * Called on exit
 */
function exit() {
    sendMidi(0xb8, 0x00, 0x00);
}
