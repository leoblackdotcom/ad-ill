const sceneConfig = {
  nativeWidth: 1679,
  nativeHeight: 1119,
  scenes: {
    intro: {
      //
    },
    transform: {
      sceneDuration: 7,
    },
    brushes: {
      sceneDuration: 3,
    },
    retouch: {
      sceneDuration: 8,
    },
    ipad: {
      sceneDuration: 3,
    },
  },
  videoBasePath: "assets/videos",
  videos: {
    transform: {
      frames: 60,
      selector: ".transform-sequence.t4",
      framesPath: 'https://wwwimages2.adobe.com/content/dam/acom/target/ace/ace0053/assets/images/transform/frames4/transform5-',
      width: 1280, //native size of images for canvas
      height: 991,
      pad: 2, //leading 0s in sequence filenames
    },
    retouch: {
      frames: 70,
      selector: '.retouch-sequence',
      sequence: 'https://wwwimages2.adobe.com/content/dam/acom/target/ace/ace0046/assets/images/retouch/sequence-retouch.jpg',
      framesPath: 'https://wwwimages2.adobe.com/content/dam/acom/target/ace/ace0053/assets/images/retouch/frames1/retouch',
      width: 1280,
      height: 843,
      pad: 3,
    }
  },
};
