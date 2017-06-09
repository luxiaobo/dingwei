    $(document).ready(function () {
            $(window).scroll(function () {
                var items = $("#content").find(".item");
                var menu = $("#menu");
                var top = $(document).scrollTop();
                var currentId = ""; //��������������λ�õ�item id
                items.each(function () {
                    var m = $(this);
                    //ע�⣺m.offset().top����ÿһ��item�Ķ���λ��
                    if (top > m.offset().top - 300) {
                        currentId = "#" + m.attr("id");
                    } else {
                        return false;
                    }
                });

                var currentLink = menu.find(".current");
                if (currentId && currentLink.attr("href") != currentId) {
                    currentLink.removeClass("current");
                    menu.find("[href=" + currentId + "]").addClass("current");
                }
            });
        });