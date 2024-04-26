
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* @import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen&family=Teko:wght@300&family=Tilt+Prism&display=swap');/ */
      </style>
    <style>
        *{
          cursor: pointer;
        }
        .h1 {
            text-transform: capitalize;
            text-align: center;
            background-color: yellowgreen;
            /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
        }
    </style>
</head>

<body>
    <h1 id="tushar" class="h1">welcome to coding blocks</h1>
    <ul>
        <li onclick="document.getElementById(`tushar`).style.color='red'"
            style="text-transform: capitalize; list-style: none;">red</li>
        <li onclick="document.getElementById('tushar').style.color='green'"
            style="text-transform: capitalize; list-style: none;">green</li>
        <li onclick="document.getElementById('tushar').style.color='blue'"
            style="text-transform: capitalize; list-style: none;">blue</li>
        <li onclick="document.getElementById('tushar').style.color='orange'"
            style="text-transform: capitalize; list-style: none;">orange</li>
        <li onclick="document.getElementById('tushar').style.color='brown'"
            style="text-transform: capitalize; list-style: none;">brown</li>
    </ul>
    <ul>
        <li onclick="document.getElementById('tushar').style.textAlign='left'"
            style="text-transform: capitalize; list-style: none;">left</li>
        <li onclick="document.getElementById('tushar').style.textAlign='right'"
            style="text-transform: capitalize; list-style: none;">right</li>
        <li onclick="document.getElementById('tushar').style.textAlign='center'"
            style="text-transform: capitalize; list-style: none;">center</li>
    </ul>
</body>

</html>
