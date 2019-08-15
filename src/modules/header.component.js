import $ from 'jquery'

$('<h1 />')
	.text('You are the best!')
	.css({
		textAlign: "center",
		color: "blue"
	})
	.appendTo($('header'))