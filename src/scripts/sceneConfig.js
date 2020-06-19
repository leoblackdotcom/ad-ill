const sceneConfig = {
  nativeWidth: 1679,
  nativeHeight: 1119,
  scenes: {
    intro: {
      //
    },
    transform: {
      sceneDuration: 15,
    },
    brushes: {
      sceneDuration: 5,
    },
    retouch: {
      sceneDuration: 10,
    },
    ipad: {
      sceneDuration: 7,
    },
  },
  videoBasePath: "assets/videos",
  videos: {
    transform: {
      frames: 83,
      selector: ".transform-sequence.t4",
      framesPath: 'assets/images/transform/frames/transform5-',
      width: 1280, //native size of images for canvas
      height: 991,
      pad: 2, //leading 0s in sequence filenames
    },
    retouch: {
      frames: 129,
      selector: '.retouch-sequence',
      sequence: 'assets/images/retouch/sequence-retouch.jpg',
      framesPath: 'assets/images/retouch/frames/retouch',
      width: 1280,
      height: 843,
      pad: 3,
    }
  },
};
