<!DOCTYPE html>
<html lang="pt" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="description" content="{{env('APP_NAME')}}">
    <meta name="keywords" content="{{env('APP_NAME')}}">
    <meta name="author" content="{{env('APP_NAME')}}">
    <!-- Viewport-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon and Touch Icons-->
    {{-- <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"> --}}
    <link rel="manifest" href="/build/manifest.json">
    {{-- <link rel="mask-icon" color="#fe6a6a" href="safari-pinned-tab.svg"> --}}
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

    @inertiaHead
    @routes
    @vite(['resources/css/app.scss'])
</head>

<body class="">
    @inertia
    @vite(['resources/js/app.js'])
</body>
</html>


