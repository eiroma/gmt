<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>GMT</title>
        <link rel="stylesheet" type="text/css" href="css/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <div class="wrapper">
            <h1>Get More Time</h1>
            <div class="flex">
                <div class="box">
                    <div id="clock" class="clock">
                        <div class="scale">
                            0
                        </div>
                    </div>
                </div>
                <div class="feature">
                    <p class="now">現在の時刻<div id="time" class="time"></div>
                    <div class="form">
                        <button id="start" class="start" type="submit" name="start">START</button>
                        <div class="start_time"></div>
                    </div>
                    <div class="form">
                        <button id="stop" class="stop" type="submit" name="stop">STOP</button>
                        <div class="stop_time"></div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script> 
        <script type="text/javascript" src="js/func.js"></script>
    </body>
</html>