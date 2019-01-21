// SelectNav.js - by: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"?",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(){selectnav('nav1');selectnav('nav');});
// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);
$(document).each(function() {
$("ul#sub-menu").parent("li").addClass("hasSub");
$(".nav-menu ul li").each(function() {
		$(this).hoverTimeout(0, function() {
			$(this).children("ul").slideDown()
		}, 0, function() {
			$(this).children("ul").hide()
		})
	});
});
$(document).ready(function(){
$('.header-search > .fa-search').click(function(){
		$('.navi-menu .search-form').fadeIn('', function() {});
		$('.header-search > .fa-search').toggleClass('active');
		$('.header-search > .fa-times').toggleClass('active');
	});

	$('.header-search > .fa-times').click(function(){
		$('.navi-menu .search-form').fadeOut('', function() {});
		$('.header-search > .fa-search').toggleClass('active');
		$('.header-search > .fa-times').toggleClass('active');
	});
  });
$(document).ready(function() {
    $('a').each(function() {
        var a = $(this).attr('href'),
            e = $(this);
        if (a !== undefined) {
            if (a.indexOf('/search/label') != -1) {
                if (a.indexOf('max-results') != -1) {
                    var t = getParameterByName('max-results', a),
                        n = a.replace('max-results=' + t, 'max-results=' + perPage);
                    e.attr('href', n)
                } else {
                    if (a.indexOf('?') == -1) {
                        e.attr('href', a + "?&max-results=" + perPage)
                    } else {
                        e.attr('href', a + "&max-results=" + perPage)
                    }
                }
            }
        }
    })
});
/*$('.PopularPosts ul li img').each(function() {
        $(this).attr('src', function(i, src) {
            return src.replace('/default.jpg', '/mqdefault.jpg')
        }).attr('src', function(i, src) {
            return src.replace('s72-c', 's1600')
        })
    });
    $(".PopularPosts .item-thumbnail a").prepend('<span class="img-overlay"/>');

$(document).ready(function() {
$(".post-outer,.feat").each(function() {
        $(this).find(".block-image .thumb a,.primeiro .feat-thumb a").attr("style", function(e, t) {
            return t.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style", function(e, t) {
            return t.replace("s72-c", "s640")
        })
    });
  });
 $('.PopularPosts .widget2-content ul li').each(function() {
        var $this = $(this),
            getPost = $this.find('.item-title a'),
            postURL = getPost.attr('href');
        $.ajax({
            url: postURL,
            type: "get",
            success: function(data) {
                var time = $(data).find('.post-time .published').text(),
                    cmm = $(data).find('.post-cmm a').text(),
                    cat = $(data).find('.label-head a').text();
 getPost.parent().before('<div class="item-tag"><span class="item-cat">' + cat + '</span></div>');
                getPost.parent().after('<div class="item-meta"><span class="item-date">' + time + '</span><span class="item-cmm">' + cmm + '</span></div>');
            }
        });
    });*/
$('.PopularPosts ul li img').each(function() {
        $(this).attr('src', function(i, src) {
            return src.replace('/default.jpg', '/mqdefault.jpg')
        }).attr('src', function(i, src) {
            return src.replace('s72-c', 's1600')
        })
    });