select-all
==========

<!-- language: lang-html -->
<code>
<html><br />
    &lt;head&gt;&lt;/head&gt;<br />
    &lt;body&gt;<br />
        &lt;div&gt;<br />
            &lt;input type='checkbox' class='select-all' /&gt;<br />
            &lt;div id='container'&gt;<br />
                &lt;input type='checkbox' class='select-all'&gt;a&lt;/input&gt;<br />
                &lt;input type='checkbox' class='select-all'&gt;b&lt;/input&gt;<br />
                &lt;input type='checkbox' class='select-all'&gt;c&lt;/input&gt;<br />
                &lt;input type='checkbox' class='select-all'&gt;d&lt;/input&gt;<br />
           &lt;/div&gt;<br />
        &lt;/div&gt;<br />
    &lt;/body&gt;<br />
&lt;/html&gt;
</code>

Use:

<!-- language: lang-js -->
<code>$('.select-all').selectall('#container');</code>

or

<!-- language: lang-js -->
<code>$('.select-all').selectall('#container input:checkbox');</code>

or

<!-- language: lang-js -->
<code>$('.select-all').selectall($('#container input:checkbox'));</code>
