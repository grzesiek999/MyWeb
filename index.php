<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grzegorz Pasich</title>



    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Main.css">
    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Animations.css">

    <link rel="stylesheet" type="text/css" media="screen and (max-width: 850px)" href="./public/css_sheets/Mobile/mobileMain.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 850px)" href="./public/css_sheets/Mobile/header.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 549px)" href="./public/css_sheets/Mobile/Footer.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 850px)" href="./public/css_sheets/Mobile/aboutMe.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 850px)" href="./public/css_sheets/Mobile/skills.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 850px)" href="./public/css_sheets/Mobile/offer.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 850px)" href="./public/css_sheets/Mobile/education.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 850px)" href="./public/css_sheets/Mobile/contact.css">

    <link rel="stylesheet" type="text/css" media="screen and (min-width: 851px)" href="./public/css_sheets/Desktop/desktopMain.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 851px)" href="./public/css_sheets/Desktop/header.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 550px)" href="./public/css_sheets/Desktop/Footer.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 851px)" href="./public/css_sheets/Desktop/aboutMe.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 851px)" href="./public/css_sheets/Desktop/skills.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 851px)" href="./public/css_sheets/Desktop/offer.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 851px)" href="./public/css_sheets/Desktop/education.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 851px)" href="./public/css_sheets/Desktop/contact.css">


    <script async src="./public/scripts/main.js"></script>
    <script async src="./public/scripts/nav.js"></script>
    <script async src="./public/scripts/navMobile.js"></script>
    <script async src="./public/scripts/skills.js"></script>
    <script async src="./public/scripts/education.js"></script>
    <script async src="./public/scripts/offer.js"></script>


</head>
<body>

    <? include("./public/views/header.html") ?>
    <main>
        <? include("./public/views/aboutMe.html") ?>
        <? include("./public/views/skills.html") ?>
        <? include("./public/views/offer.html") ?>
        <? include("./public/views/education.html") ?>
        <? include("./public/views/contact.html") ?>
    </main>    
    <? include("./public/views/footer.html") ?>
    
</body>
</html>


