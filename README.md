[![Build Status](https://travis-ci.org/jacobboland/select-all.png)](https://travis-ci.org/jacobboland/select-all)

select-all
==========

Attaches select all and select none behavior to a checkbox for a group of checkboxes provided. If those checkboxes change state to which all checkboxes are selected, the "select all" checkbox is selected. If any of the checkboxes are deselected the "select all" checkbox is deselected.

select-all depends on jquery. It is preferred to use 1.9 or above to make use of the prop method. There is handling within this to use attr if prop is unavailable.

For the markup:

<!-- language: lang-html -->
<pre>
&lt;html&gt;
    &lt;head&gt;&lt;/head&gt;
    &lt;body&gt;
        &lt;div&gt;
            &lt;input type='checkbox' class='select-all' /&gt;
            &lt;div id='container'&gt;
                &lt;input type='checkbox' class='select-all'&gt;a&lt;/input&gt;
                &lt;input type='checkbox' class='select-all'&gt;b&lt;/input&gt;
                &lt;input type='checkbox' class='select-all'&gt;c&lt;/input&gt;
                &lt;input type='checkbox' class='select-all'&gt;d&lt;/input&gt;
           &lt;/div&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</pre>

Use:

<!-- language: lang-js -->
<code>$('.select-all').selectall('#container');</code>

or

<code>$('.select-all').selectall('#container input:checkbox');</code>

or

<code>$('.select-all').selectall($('#container input:checkbox'));</code>
