select-all
==========

>&lt;html&gt;
>    &lt;head&gt;&lt;/head&gt;
>    &lt;body&gt;
>        &lt;div&gt;
>            &lt;input type='checkbox' class='select-all' /&gt;
>            &lt;div id='container'&gt;
>                &lt;input type='checkbox' class='select-all'&gt;a&lt;/input&gt;
>                &lt;input type='checkbox' class='select-all'&gt;b&lt;/input&gt;
>                &lt;input type='checkbox' class='select-all'&gt;c&lt;/input&gt;
>                &lt;input type='checkbox' class='select-all'&gt;d&lt;/input&gt;
>            &lt;/div&gt;
>        &lt;/div&gt;
>    &lt;/body&gt;
>&lt;/html&gt;

Use:

>$('.select-all').selectall('#container');

or

>$('.select-all').selectall('#container input:checkbox');

or

>$('.select-all').selectall($('#container input:checkbox'));