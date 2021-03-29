const loader = {
    loaded: true,
    loadedCount: 0, // Assets that have been loaded so far
    totalCount: 0, // Total number of assets that need loading

    init() {
        // check for sound support
        let mp3Support;
        let oggSupport;
        const audio = document.createElement('audio');

        if  (audio.canPlayType) {
            // Currently canPlayType() returns: ' ', 'maybe' or 'probably'
            mp3Support = audio.canPlayType('audio/mpeg') !== '';
            oggSupport = audio.canPlayType('audio/ogg; codecs="vorbis"') !== '';
        } else {
            // The audio tag is not supported
            mp3Support = false;
            oggSupport = false;
        }

        // Check for ogg, then mp3, and finally set soundFileExtn to undefined
        if (oggSupport) {
            loader.soundFileExtn = '.ogg';
        } else if (mp3Support) {
            loader.soundFileExtn = '.mp3';
        } else {
            loader.soundFileExtn = undefined;
        }
    },

    loadImage(url) {
        this.loaded = false;
        this.totalCount += 1;

        game.showScreen('loadingscreen');

        const image = new Image();

        image.addEventListener('load', loader.itemLoaded, false);
        image.src = url;

        return image;
    },

    soundFileExtn: '.ogg',

    loadSound(url) {
        this.loaded = false;
        this.totalCount += 1;

        game.showScreen('loadingscreen');

        const audio = new Audio();

        audio.addEventListener('canplaythrough', loader.itemLoaded, false);
        audio.src = url + loader.soundFileExtn;

        return audio;
    },

    itemLoaded(ev) {
        // Stop listening for event type (load or canplaytrough)
        // for this item now that it has been loaded
        ev.target.removeEventListener(ev.type, loader.itemLoaded, false);

        loader.loadedCount += 1;

        document.getElementById('loadingmessage').innerHTML = `${loader.loadedCount} of ${loader.totalCount}`;

        if (loader.loadedCount === loader.totalCount) {
            // Loader has loaded completely..
            // Reset and clear the Loader
            loader.loaded = true;
            loader.loadedCount = 0;
            loader.totalCount = 0;

            // Hide the loading screen
            game.hideScreen('loadingscreen');

            // and call the loader.onload method if it exists
            if (loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    },
};
