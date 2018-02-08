/* Simplified Chinese translation for the jQuery Timepicker Addon /
/ Written by Will Lu */
(function($) {
	$.timepicker.regional['zh-CN'] = {
		timeOnlyTitle: '选择时间',
		timeText: '时间',
		hourText: '小时',
		minuteText: '分钟',
		secondText: '秒钟',
		currentText: '当前时间',
		closeText: '确定',
		 prevText: '<上月',
        nextText: '下月>',
        monthNames: ['一月','二月','三月','四月','五月','六月',
            '七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort: ['一','二','三','四','五','六',
            '七','八','九','十','十一','十二'],
        dayNamesMin: ['日','一','二','三','四','五','六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
		timeFormat: 'HH:mm',
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['zh-CN']);
})(jQuery);