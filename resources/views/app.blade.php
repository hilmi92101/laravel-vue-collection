<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Laravel Vue SPA</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="app">

            


            <router-view></router-view>





        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
