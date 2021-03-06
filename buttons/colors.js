/**
 * Constants and utility functions relating to button colors.  Color values
 * obtained from https://github.com/Nettsu/launchpad-mk2-bitwig
 */

/** Launchpad color indices */
var Color = {
    BLACK:            0,
    GREY_LO:          1,
    GREY_MD:          2,
    WHITE:            3,
    ROSE:             4,
    RED_HI:           5,
    RED:              6,
    RED_LO:           7,
    RED_AMBER:        8,
    AMBER_HI:         9,
    AMBER:            10,
    AMBER_LO:         11,
    AMBER_YELLOW:     12,
    YELLOW_HI:        13,
    YELLOW:           14,
    YELLOW_LO:        15,
    YELLOW_LIME:      16,
    LIME_HI:          17,
    LIME:             18,
    LIME_LO:          19,
    LIME_GREEN:       20,
    GREEN_HI:         21,
    GREEN:            22,
    GREEN_LO:         23,
    GREEN_SPRING:     24,
    SPRING_HI:        25,
    SPRING:           26,
    SPRING_LO:        27,
    SPRING_TURQUOISE: 28,
    TURQUOISE_LO:     29,
    TURQUOISE:        30,
    TURQUOISE_HI:     31,
    TURQUOISE_CYAN:   32,
    CYAN_HI:          33,
    CYAN:             34,
    CYAN_LO:          35,
    CYAN_SKY:         36,
    SKY_HI:           37,
    SKY:              38,
    SKY_LO:           39,
    SKY_OCEAN:        40,
    OCEAN_HI:         41,
    OCEAN:            42,
    OCEAN_LO:         43,
    OCEAN_BLUE:       44,
    BLUE_HI:          45,
    BLUE:             46,
    BLUE_LO:          47,
    BLUE_ORCHID:      48,
    ORCHID_HI:        49,
    ORCHID:           50,
    ORCHID_LO:        51,
    ORCHID_MAGENTA:   52,
    MAGENTA_HI:       53,
    MAGENTA:          54,
    MAGENTA_LO:       55,
    MAGENTA_PINK:     56,
    PINK_HI:          57,
    PINK:             58,
    PINK_LO:          59
};

/** Mapping between Bitwig colors and Launchpad color indices. */
var BITWIG_COLOR_MAP = [
    [ 0.000 , 0.000 , 0.000 , 0],   // Black
    [ 0.329 , 0.329 , 0.329 , 1],   // Dark Gray
    [ 0.478 , 0.478 , 0.478 , 2],   // Gray
    [ 0.500 , 0.500 , 0.500 , 2],   // Gray
    [ 0.788 , 0.788 , 0.788 , 3],   // Light Gray
    [ 0.525 , 0.537 , 0.674 , 40],  // Silver
    [ 0.639 , 0.474 , 0.262 , 11],  // Dark Brown
    [ 0.776 , 0.623 , 0.439 , 12],  // Brown
    [ 0.341 , 0.380 , 0.776 , 80],  // Dark Blue
    [ 0.517 , 0.541 , 0.878 , 49],  // Light Blue
    [ 0.584 , 0.286 , 0.796 , 81],  // Purple
    [ 0.850 , 0.219 , 0.443 , 54],  // Magenta
    [ 0.850 , 0.180 , 0.141 , 6],   // Red
    [ 1.000 , 0.341 , 0.023 , 60],  // Orange
    [ 0.850 , 0.615 , 0.062 , 14],  // Yellow
    [ 0.450 , 0.596 , 0.078 , 18],  // Green
    [ 0.000 , 0.615 , 0.278 , 26],  // Cold Green
    [ 0.000 , 0.650 , 0.580 , 34],  // Bluish Green
    [ 0.000 , 0.600 , 0.850 , 41],  // Light Blue
    [ 0.737 , 0.462 , 0.941 , 94],  // Light Purple
    [ 0.882 , 0.400 , 0.568 , 56],  // Light Pink
    [ 0.925 , 0.380 , 0.341 , 4],   // Skin
    [ 1.000 , 0.513 , 0.243 , 10],  // Redish Brown
    [ 0.894 , 0.717 , 0.305 , 61],  // Light Brown
    [ 0.627 , 0.752 , 0.298 , 18],  // Light Green
    [ 0.243 , 0.733 , 0.384 , 25],  // Bluish Green
    [ 0.262 , 0.823 , 0.725 , 32],  // Light Blue
    [ 0.266 , 0.784 , 1.000 , 37]   // Blue
];

/**
 * Given a set of RGB values from Bitwig, determines the nearest Launchpad
 * color index.
 * @param r Red value.
 * @param g Green value.
 * @param b Blue value.
 */
function getColorIndex(r, g, b) {
    for (var i = 0; i < BITWIG_COLOR_MAP.length; i++)
    {
        var color = BITWIG_COLOR_MAP[i];
        if (Math.abs(color[0] - r) < 0.001 &&
            Math.abs(color[1] - g) < 0.001 &&
            Math.abs(color[2] - b) < 0.001) {
            return color[3];
        }
    }

    return 0;
};
