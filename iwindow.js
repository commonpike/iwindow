/*

	requires: jQuery
	
	iWindow ('iFrame Window') provides an virtual window object
	which is actually an iframe. On mobile, it appears fullscreen.
	On desktop, it looks like a popup.
	
	
*/

jQuery(document).ready(function() {
	iWindow.init();
});

var iWindow = {
	
	config	: {
		css : ''
	},
	
	timer		: null,

	init	: function() {
		var $ = jQuery;
		if (this.config.css) $('head').append('<style type="text/css" id="iwindow-css">'+this.config.css+'</style>');	
		$('body').append('<div id="iwindow-backdrop" class="iwindow-backdrop"></div>');
		$('body').append('<div id="iwindow" class="iwindow-chrome"><header  class="iwindow-header"><div id="iwindow-close"></div><div id="iwindow-title"></div></header><section class="iwindow-body"><iframe></iframe></section></div>');	
		$('#iwindow-backdrop,#iwindow-close').on('click',function() { iWindow.hide(); });
		this.$backdrop 	= $('#iwindow-backdrop');
		this.$iwindow 	= $('#iwindow');
		this.$iframe 	= $('#iwindow iframe');
		this.$title 	= $('#iwindow-title');
	},
	

	open	: function(name,link) {
		if (link) {
			this.$title.html(name);
			this.$iframe.attr('src',link);
			this.show();
		} else {
			this.warn('Error: iWindow called without a link');
		}
	},
	
	close	: function() {
		this.hide();
	},
	
	show			: function() {
		this.$backdrop.show();
		this.$iwindow.show();
	},
	
	hide			: function() {
		this.$iframe.attr('src','');
		this.$iwindow.hide();
		this.$backdrop.hide();
	},
	
	
}
