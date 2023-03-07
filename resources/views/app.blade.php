<!DOCTYPE html>
<html lang="pt" class="i-amphtml-singledoc i-amphtml-standalone">

<head>
    <meta charset="utf-8">
    <meta name="description" content="Pico">
    <meta name="keywords" content="Pico, Pico portugal">
    <meta name="author" content="Pico">
    <!-- Viewport-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon and Touch Icons-->
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="mask-icon" color="#fe6a6a" href="safari-pinned-tab.svg">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <!-- Vendor Styles including: Font Icons, Plugins, etc.-->
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">

    <!-- Main Theme Styles + Bootstrap-->

    @inertiaHead
    @vite(['resources/css/app.scss'])
</head>

<body class="">

    @inertia

    @vite(['resources/js/app.js'])
</body>

</html>


