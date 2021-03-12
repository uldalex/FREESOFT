// const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });

 const $ = require('jquery');
 $( document ).ready(function() {

    $("#header-menu__language").on('click', function(){
        $("#language-list").toggleClass('open')   
    })
    $("#language-list li").on('click', function(){
        var text = $(this).find('span').html();
        var svg = $(this).find('.svg').html();
        $("#language-list").toggleClass('open');
        $("#header-menu__language span").html(text)
        $("#header-menu__language div").html(svg)
       
    })
    $("svg#icon-search").on('click', function(){
        $('.search__form').toggleClass('open')
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".search__form.open"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.toggleClass('open'); // скрываем его
		}
	});
 });
