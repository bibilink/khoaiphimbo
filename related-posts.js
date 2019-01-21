$("#related-posts").each(function () {
    var g = $(this).html();
    var related_number = 3;
    var no_image = "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
    var month_format = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    $.ajax({
        url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
        type: 'get',
        dataType: "jsonp",
        success: function (data) {
            var posturl = "";
            var htmlcode = '<ul class="list-song list-song-suggest">';
            for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                    if (data.feed.entry[i].link[j].rel == "alternate") {
                        posturl = data.feed.entry[i].link[j].href;
                        break
                    }
                }
                var posttitle = data.feed.entry[i].title.$t;
                var postlabel = data.feed.entry[i].category[0].term;
                var get_date = data.feed.entry[i].published.$t,
                    year = get_date.substring(0, 4),
                    month = get_date.substring(5, 7),
                    day = get_date.substring(8, 10),
                    date = month_format[parseInt(month, 10)] + ' ' + day + ', ' + year;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                    var src2 = data.feed.entry[i].media$thumbnail.url;
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                } else if (content.indexOf("<img") > -1) {
                    var src = $content.find('img:first').attr('src');
                    var thumb = '<a class="thumb-40" href="' + posturl + '"><img src="' + src + '" alt="' + posttitle + '"><i class="icon ic-svg-play-outline"></i><span class="opac"></span></a>'
                } else {
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + no_image + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                }
                htmlcode += '<li><div class="z-card card-40">' + thumb + '<div class="card-info"><div class="title"><a href="' + posturl + '" title="' + posttitle + '">' + posttitle + '</a></div><div class="artist"><div class="tap-phim cuoicaibua" data-url="' + posturl + '">Đang Cập Nhập</div></div></div><!--<span class="recent-date">' + date + '</span>--></div></li>'
            }
            htmlcode += '</ul><div class="clear"/>';
            $("#related-posts").html(htmlcode);
            $('.related-img').each(function () {
                $(this).attr('style', function (i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg')
                }).attr('style', function (i, src) {
                    return src.replace('s72-c', 's1600')
                })
            })
        }
    })
});