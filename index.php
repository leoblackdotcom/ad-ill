<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Photoshop Reimagine</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="dist/css/main.css?v=<?php echo filemtime('dist/css/main.css'); ?>" />
  <link rel="icon" href="assets/images/adobe.png" />
  <link rel="stylesheet" href="https://use.typekit.net/etn5htz.css">
</head>

<body>
  <main id="main" class="main">
    <?php require_once('includes/beebly.php') ?>
    <?php require_once('includes/like.php') ?>
  </main>

  <script src="//code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="src/scripts/libs/gsap/gsap.min.js?v=2"></script>
  <script src="src/scripts/libs/gsap/ScrollTrigger.min.js?v=2"></script>
  <script src="src/scripts/libs/gsap/MotionPathPlugin.min.js?v=2"></script>
  <script src="src/scripts/main.js?v=<?php echo filemtime('src/scripts/main.js'); ?>"></script>
  <script src="src/scripts/beebly.js?v=<?php echo filemtime('src/scripts/beebly.js'); ?>"></script>
</body>

</html>