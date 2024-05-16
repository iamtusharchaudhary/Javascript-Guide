<!-- This is very helpful for the beginners to enhance your coding skills -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            cursor: pointer;
        }
        .wrapper {
            min-height: 70vh;
            width: 100%;
            background-color: whitesmoke;
            display: flex;
        }

        .top {
            height: 13vh;
            width: 100%;
            background-color: black;
            margin-bottom: 4vh;
        }

        .wrapper-left {
            min-height: 60vh;
            width: 70%;
            background-color: whitesmoke;
            margin-right: 5vh;
        }

        .boxes-3 {
            display: flex;
        }

        .left-top1 {
            height: 7vh;
            width: 13%;
            background-color: grey;
            margin-right: 1vh;
            text-align: center;
            align-content: center;
        }

        .left-top2 {
            height: 7vh;
            width: 13%;
            background-color: grey;
            margin-right: 1vh;
            text-align: center;
            align-content: center;
        }

        .left-top3 {
            height: 7vh;
            width: 13%;
            background-color: grey;
            margin-right: 1vh;
            text-align: center;
            align-content: center;
        }

        .left-box {
            height: 60vh;
            width: 100%;
            background-color: black;
            margin-top: 2vh;
        }

        .boxes-5 {
            display: flex;
            margin-top: 4vh;
        }

        .box1 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box2 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box3 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box4 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box5 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .boxes-5-1 {
            display: flex;
            margin-top: 2vh;
        }

        .box1-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box2-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box3-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box4-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box5-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .boxes-5-2 {
            display: flex;
            margin-top: 4vh;
        }

        .box1-1-1 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box2-1-1 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box3-1-1 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box4-1-1 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box5-1-1 {
            height: 13vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .boxes-5-1-1-1-1 {
            display: flex;
            margin-top: 2vh;
        }

        .box1-1-1-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box2-1-1-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box3-1-1-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box4-1-1-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .box5-1-1-1 {
            height: 3vh;
            width: 19.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .bottom1 {
            height: 5vh;
            width: 100%;
            background-color: whitesmoke;
        }

        .wrapper-right {
            min-height: 60vh;
            width: 25%;
            background-color: whitesmoke;
        }

        .top-3-boxes {
            display: flex;
            margin-left: 82%;
            margin-top: 7%;
        }

        .box786 {
            height: 4vh;
            width: 23%;
            background-color: grey;
            margin-left: 1vh;
        }

        .box787 {
            height: 4vh;
            width: 23%;
            background-color: grey;
            margin-left: 1vh;
        }

        .box788 {
            height: 4vh;
            width: 23%;
            background-color: grey;
            margin-left: 1vh;
        }

        .right-box {
            height: 59vh;
            width: 100%;
            background-color: grey;
            margin-top: 2vh;
        }

        .right-box-2 {
            height: 5vh;
            width: 100%;
            background-color: grey;
            margin-top: 3vh;
        }

        .tushar {
            display: flex;
            margin-top: 4vh;
            justify-content: space-between;
        }

        .boxx1 {
            height: 15vh;
            width: 50%;
            background-color: grey;
            margin-right: 2vh;
        }

        .ttr {
            /* background-color: black; */
            margin-left: 1vh;
            height: 16vh;
            width: 48%;
        }

        .lines1 {
            height: 2vh;
            width: 100%;
            background-color: grey;
            margin-bottom: 1vh;
        }

        .lines2 {
            height: 2vh;
            width: 100%;
            background-color: grey;
            margin-bottom: 1vh;
        }

        .lines3 {
            height: 2vh;
            width: 100%;
            background-color: grey;
            margin-bottom: 1vh;
        }

        .lines4 {
            height: 2vh;
            width: 100%;
            background-color: grey;
            margin-bottom: 1vh;
        }

        .lines5 {
            height: 2vh;
            width: 100%;
            background-color: grey;
        }

        .devar {
            height: 2vh;
            width: 100%;
            background-color: grey;
            margin-top: 1vh;
        }

        .sector {
            display: flex;
            margin-top: 2vh;
            margin-left: 1vh;
        }

        .boxxx1 {
            height: 8vh;
            width: 35.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .boxxx2 {
            height: 8vh;
            width: 35.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .boxxx3 {
            height: 8vh;
            width: 35.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .sector-2 {
            display: flex;
            margin-top: 1vh;
            margin-left: 1vh;
        }

        .boxxx1-1 {
            height: 2vh;
            width: 35.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .boxxx2-1 {
            height: 2vh;
            width: 35.5%;
            background-color: grey;
            margin-right: 1vh;
        }

        .boxxx3-1 {
            height: 2vh;
            width: 35.5%;
            background-color: grey;
            margin-right: 1vh;
        }
    </style>
    <!-- <link rel="stylesheet" href="text.css"> -->
</head>

<body style="overflow: visible;">
    <div class="top"></div>
    <div class="wrapper">
        <div class="wrapper-left">
            <div class="boxes-3">
                <div onclick="document.getElementById('banner1').style.backgroundColor='red'" class="left-top1">
                    <h4>Red</h4>
                </div>
                <div onclick="document.getElementById('banner1').style.backgroundColor='green'" class="left-top2">
                    <h4>Green</h4>
                </div>
                <div onclick="document.getElementById('banner1').style.backgroundColor='yellow'" class="left-top3">
                    <h4>Yellow</h4>
                </div>
                <!-- <div class="left-top4"></div> -->
            </div>
            <div id="banner1" class="left-box"></div>
            <div class="boxes-5">
                <div class="box1"></div>
                <div class="box2"></div>
                <div class="box3"></div>
                <div class="box4"></div>
                <div class="box5"></div>
            </div>
            <div class="boxes-5-1">
                <div class="box1-1"></div>
                <div class="box2-1"></div>
                <div class="box3-1"></div>
                <div class="box4-1"></div>
                <div class="box5-1"></div>
            </div>
            <div class="boxes-5-2">
                <div class="box1-1-1"></div>
                <div class="box2-1-1"></div>
                <div class="box3-1-1"></div>
                <div class="box4-1-1"></div>
                <div class="box5-1-1"></div>
            </div>
            <div class="boxes-5-1-1-1-1">
                <div class="box1-1-1-1"></div>
                <div class="box2-1-1-1"></div>
                <div class="box3-1-1-1"></div>
                <div class="box4-1-1-1"></div>
                <div class="box5-1-1-1"></div>
            </div>
            <div class="bottom1"></div>
        </div>
        <div class="wrapper-right">
            <div class="top-3-boxes">
                <div class="box786"></div>
                <div class="box787"></div>
                <div class="box788"></div>
            </div>
            <div class="right-box"></div>
            <div class="right-box-2"></div>
            <div class="tushar">
                <div class="boxx1"></div>
                <div class="ttr">
                    <div class="lines1"></div>
                    <div class="lines2"></div>
                    <div class="lines3"></div>
                    <div class="lines4"></div>
                    <div class="lines5"></div>
                </div>
            </div>
            <div class="devar"></div>
            <div class="sector">
                <div class="boxxx1"></div>
                <div class="boxxx2"></div>
                <div class="boxxx3"></div>
            </div>
            <div class="sector-2">
                <div class="boxxx1-1"></div>
                <div class="boxxx2-1"></div>
                <div class="boxxx3-1"></div>
            </div>
        </div>
    </div>
</body>

</html>
