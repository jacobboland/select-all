select-all
==========

><html>
>    <head></head>
>    <body>
>        <div>
>            <input type='checkbox' class='select-all' />
>            <div id='container'>
>                <input type='checkbox' class='select-all'>a</input>
>                <input type='checkbox' class='select-all'>b</input>
>                <input type='checkbox' class='select-all'>c</input>
>                <input type='checkbox' class='select-all'>d</input>
>            </div>
>        </div>
>    </body>
></html>

>$('.select-all').selectall('#container');

or

>$('.select-all').selectall('#container input:checkbox');

or

>$('.select-all').selectall($('#container input:checkbox'));