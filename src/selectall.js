(function($) {
    var SelectAll = function (selectAllObject, checkboxes) {
        var INPUT_CHECKBOX_SELECTOR = ' input:checkbox',
            self = this;

        if (typeof checkboxes === 'string' && checkboxes.indexOf(INPUT_CHECKBOX_SELECTOR) === -1) {
            checkboxes += INPUT_CHECKBOX_SELECTOR;
        }

        this.checkboxes = $(checkboxes);
        this.selectAllObject = $(selectAllObject);

        function setSelectAllCheckbox () {
            self.selectAllObject.prop('checked', self.checkboxes.not(':checked').length === 0);
        }

        function bindEvents() {
            selectAllObject.click(function () {
                self.checkboxes.prop('checked', this.checked);
            });
            self.checkboxes.click(setSelectAllCheckbox);
        }

        bindEvents();
        setSelectAllCheckbox();
    };

    $.fn.selectall = function (options) {
        return this.each(function () {
            new SelectAll($(this), options);
        });
    };

    //support < 1.9 versions of jquery
    if (!$.fn.prop){
        $.fn.prop = attr;
    }
}(jQuery));