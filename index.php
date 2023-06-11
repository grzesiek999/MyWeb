<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grzegorz Pasich</title>



    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Main.css">
    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Desktop/Animations.css">
    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Desktop/header.css">
    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Desktop/Footer.css">
    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Desktop/aboutMe.css">
    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Desktop/skills.css">
    <link rel="stylesheet" type="text/css" href="./public/css_sheets/Desktop/contact.css">

    <script async src="./public/scripts/main.js"></script>
    <script async src="./public/scripts/nav.js"></script>
    <script async src="./public/scripts/skills.js"></script>


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