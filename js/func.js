//https://gpaim.com/javascript-timer/
//https://webdesignmagazine.net/jquery_function/
//5/17日作成開始

'use strict';

//シンプルに考える

$(function() { //htmlを読み込んでから処理を実行する //$マークはjQueryを表す
    
    var id;
    var now = 0; //明示的に初期化する

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    
    
    var ms = 0;
    var sec =  0;
    
    var start = 0;
    var stop = 0;

    var start_sec = 0;
    var stop_sec = 0;
    
    var calc = 0;
    
    var h = 0;
    var min = 0;
    var s = 0;
    
    var mins;


    function clock(){
        //リアルタイムの時刻を取得するためにsetIntervalを使う //特定の間隔で処理を行う(実行タイミングを選ぶ = イベント)
        setInterval(function date() { //時刻を取得する
            now = new Date(); //現在時刻の文字列
            hours = now.getHours();
            minutes = now.getMinutes();
            seconds = now.getSeconds();
            
            if(hours < 10){
                hours = ('0' + hours);
            };
            if(minutes < 10){
                minutes = ('0' + minutes);
            };
            if(seconds < 10){
                seconds = ('0' + seconds);
            };
            
            $('#time').text(hours + ':' + minutes + ':' + seconds);
        })
    , 1000; };
    
    clock();
    
    
    //スタートボタンを押したら .start_time に値が書き込まれ
    $('#start').on('click', function(){ //click.(function)はこれのショートカットキー
        $(this).css({'background':'skyblue', 'color':'white'});

        now = new Date(); //現在時刻の文字列
        ms = now.getTime();
        hours = now.getHours();
        minutes = now.getMinutes();
        seconds = now.getSeconds();
        
        if(hours < 10){
            hours = ('0' + hours);
        };
        if(minutes < 10){
            minutes = ('0' + minutes);
        };
        if(seconds < 10){
            seconds = ('0' + seconds);
        };
        
        start_sec = Math.floor(ms / 1000);
        start = $('.start_time').html(hours + ':' + minutes + ':' + seconds); //htmlに入れているので文字列になる
        
        
        //スタートボタンが押された後に、ストップボタンが押せるようになる
        $('#stop').on('click', function(){
            $(this).css({'background':'#a8bf93', 'color':'white'});
            now = new Date(); //現在時刻の文字列
            ms = now.getTime();
            hours = now.getHours();
            minutes = now.getMinutes();
            seconds = now.getSeconds();

            if(hours < 10){
                hours = ('0' + hours);
            };
            if(minutes < 10){
                minutes = ('0' + minutes);
            };
            if(seconds < 10){
                seconds = ('0' + seconds);
            };

            stop_sec = Math.floor(ms / 1000);
            stop = $('.stop_time').html(hours + ':' + minutes + ':' + seconds);

            //時間の計算
            calc = (stop_sec - start_sec); 

            //「秒」を「分」に、「分」を「時」にする
            //もしcalcが60以上だったら
            if((calc >= 60)){
                //sは60の余り
                s = calc % 60;
                //minはsを60を割った時の整数
                min = Math.floor(calc / 60);
                //hはminを60で割った時の整数
                h = Math.floor(min / 60);
                //もしsが0 minが60より少ない場合は
                if((s === 0) && (min < 60)){
                    $('.scale').text(min + '分');
                }else if((min % 60) === 0){
                    $('.scale').text(h + '時間' + '0分' + s + '秒');
                }else if(min > 60) {
                    mins = min % 60;
                    $('.scale').text(h + '時間' + mins + '分' + s + '秒');
                }else{
                    $('.scale').text(min + '分' + s + '秒');
                };
            }else{
                s = calc;
                $('.scale').text(s + '秒');
            };
        
         });
    });
    
    
});

