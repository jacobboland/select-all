(function(){

    function testcases() {
        return [
            function(){
                return '#container';
            },
            function(){
                return '#container input:checkbox';
            },
            function(){
                return $('#container input:checkbox');
            },
            function (){
                $('.selectall').clone().appendTo('body');
                return '#container';
            },
            function (){
                $('.selectall').clone().appendTo('body');
                return '#container input:checkbox';
            },
            function (){
                $('.selectall').clone().appendTo('body');
                return $('#container input:checkbox');
            }];
    }

    module('selectall', {
        setup: function (){
            $('#container').add('.selectall').remove();
            $('body')
                .append('<input type="checkbox" class="selectall" />')
                .append($('<div id="container" />')
                    .append('<input type="checkbox" />')
                    .append('<input type="checkbox" />')
                    .append('<input type="checkbox" />'));
        }
    });

    QUnit
        .cases(testcases())
        .test('should select / deselect all when selectall element is clicked', function (selector){
            var container = selector();
            var selectAllCheckbox = $('.selectall');
            selectAllCheckbox.selectall(container);

            var checkboxSelector = '#container input:checkbox:checked';
            equal($(checkboxSelector).length, 0);
            selectAllCheckbox.click();
            equal($(checkboxSelector).length, $('#container input:checkbox').length);
            selectAllCheckbox.click();
            equal($(checkboxSelector).length, 0);
        })
        .test('should select selectall element when all checkboxes are checked', function (selector){
            var container = selector();
            var selectAllCheckbox = $('.selectall');
            selectAllCheckbox.selectall(container);

            ok(!selectAllCheckbox.attr('checked'));
            $('#container input:checkbox').click();
            ok(selectAllCheckbox.prop('checked'), 'select all element should now be checked');
        })
        .test('should deselect selectall element when a checkbox is unchecked', function (selector){
            var container = selector();
            var selectAllCheckbox = $('.selectall');
            selectAllCheckbox.selectall(container);

            selectAllCheckbox.click();
            equal($('#container input:checkbox:checked').length, $('#container input:checkbox').length);
            $('#container input:checkbox:checked').first().click();
            equal($('#container input:checkbox:checked').length, 2);
            ok(!selectAllCheckbox.attr('checked'));
        });
}());