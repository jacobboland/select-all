select-all
==========

<code>
<html><br />
    <head></head><br />
    <body><br />
        <div><br />
            <input type='checkbox' class='select-all' /><br />
            <div id='container'><br />
                <input type='checkbox' class='select-all'>a</input><br />
                <input type='checkbox' class='select-all'>b</input><br />
                <input type='checkbox' class='select-all'>c</input><br />
                <input type='checkbox' class='select-all'>d</input><br />
           </div><br />
        </div><br />
    </body><br />
</html>
</code>

Use:

<code>$('.select-all').selectall('#container');</code>

or

<code>$('.select-all').selectall('#container input:checkbox');</code>

or

<code>$('.select-all').selectall($('#container input:checkbox'));</code>