function searchMe(a){$("#search_form input[id=q]").val(a),window.location.href="/market/brands/search?q="+encodeURIComponent($.trim(a))}function parseURL(a){var b=document.createElement("a");return b.href=a,{source:a,protocol:b.protocol.replace(":",""),host:b.hostname,port:b.port,query:b.search,params:function(){for(var a,c={},d=b.search.replace(/^\?/,"").split("&"),e=d.length,f=0;e>f;f++)d[f]&&(a=d[f].split("="),c[a[0]]=a[1]);return c}(),file:(b.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:b.hash.replace("#",""),path:b.pathname.replace(/^([^\/])/,"/$1"),relative:(b.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:b.pathname.replace(/^\//,"").split("/")}}function ajaxLogin(){return $("#ajaxLogin").length>0&&""!=$("#ajaxLogin").html()?void $("#ajaxLogin").show():void $.get("/common/login_dialog",function(a){$('<div id="ajaxLogin">'+a+"</div>").appendTo($("body")),$(".login-dialog-tabmenu").on("click","li a",function(){var a=$(this).parents("li").index();$(".login-dialog-tabmenu  li").removeClass("selected").eq(a).addClass("selected"),0==a?$("#userType").val(1):1==a&&$("#userType").val(0)}),$("#login-btn").on("click",function(){return""==$("input[name='account']").val()?void remind("error","请输入会员名"):""==$("input[name='pwd']").val()?void remind("error","请输入密码"):($.ajax({url:$("#command").attr("action"),method:"post",data:$("#command").serialize(),dataType:"json",success:function(a){if(126e3===a.code){var b=$.trim($('input[name="redirect"]').val());if(""==b)b=a.object.redirect;else{var c=parseURL(b),d=parseURL(window.location.href);if(c.host==d.host){var e=parseInt($("#userType").val());switch(e){case 0:0==c.path.indexOf("/dealer")&&(b=a.object.redirect);break;case 1:0==c.path.indexOf("/brand")&&(b=a.object.redirect)}}else b=a.object.redirect}window.location.href=b}else remind("error",a.message)}}),!1)}),$("#ajaxLogin .login-dialog-close").on("click",function(){$("#ajaxLogin").hide()})})}$(function(){function placeholderFix(a,b){var c="placeholder"in document.createElement("input");if(!c){var d=$(a);if(!d.is(":hidden")){var e="text"==d.attr("type")||"textarea"==d.prop("tagName").toLowerCase(),f=d.attr("placeholder"),g=d.val(),h=d.attr("class")||"noClass",i="placeHolderFix"+b;if(e&&f){var j='<input class="'+h+" "+i+'" type="text" value="'+f+'" style="color:#999;" />';$(a).hide(),$(a).after(j),$("."+i).on("click",function(){$(this).prop("disabled",!0).hide(),d.show().focus()}),""==g&&$("."+i).show(),d.blur(function(){""===d.val()&&($("."+i).prop("disabled",!1).show(),d.hide())})}}}}$.browser||($.browser={runBrowser:function(){var me=this,html=document.getElementsByTagName("html")[0],userAgent=navigator.userAgent.toLowerCase(),browser=[{core:"chrome",is:/chrome/.test(userAgent)},{core:"mozilla",is:/firefox/.test(userAgent)},{core:"webkit",is:/webkit/.test(userAgent)},{core:"opera",is:/opera/.test(userAgent)},{core:"msie",is:/msie/.test(userAgent)},{core:"msie6",is:/msie 6\.0/i.test(userAgent)},{core:"msie7",is:/msie 7\.0/i.test(userAgent)},{core:"msie8",is:/msie 8\.0/i.test(userAgent)}];for(var i in browser)browser[i].is&&(html.className+=browser[i].core+" "),/msie 7\.0/i.test(userAgent)||/msie 6\.0/i.test(userAgent)?eval("me."+browser[i].core+" = function () { return "+browser[i].is+" }"):me[browser[i].core]=function(){return browser[i].is}}},$.browser.runBrowser()),$("input[type='text']").each(function(a){placeholderFix($(this),a)});var newindex={init:function(){this.pinTop(),this.topMenu(),this.navHover(),this.areaSearch(),this.myOrderGlobal(),this.cart(),this.autoComplate()},pinTop:function(){function a(a,b){var c=30,d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3),document.cookie=a+"="+b+";expires="+d.toGMTString()}function b(a){var b,c=new RegExp("(^| )"+a+"=([^;]*)(;|$)");return(b=document.cookie.match(c))?b[2]:null}if(!"1"[0])return!1;var c=$(".sticky");b("close_sticky");$(window).bind("scroll",function(){var a=this.scrollY||document.documentElement.scrollTop||document.body.scrollTop;$(c).toggleClass("fixed",a>160)}),$(document).on("click",".fixed .header:not(.active) .sticky-close",function(){$(".fixed .header").addClass("active"),$(this).find("a").attr("title","打开搜索条"),a("close_sticky","1")}),$(document).on("click",".fixed .header.active .sticky-close",function(){$(".fixed .header").removeClass("active"),$(this).find("a").attr("title","收起搜索条"),a("close_sticky","0")})},topMenu:function(){$(".site-nav-bd .top-menu").hover(function(){var a=$(this).find(".menu-bd");1==a.length&&($(this).addClass("hover"),a.show())},function(){var a=$(this).find(".menu-bd");1==a.length&&($(this).removeClass("hover"),a.hide())})},navHover:function(){},backToTop:function(){var a=$(window).innerHeight();$(window).scroll(function(){$(".ui-scrolltop").css({display:a<$(window).scrollTop()?"block":"none"})}),$(".ui-scrolltop").click(function(){$("html,body").animate({scrollTop:0},500)}),$.browser.msie6&&$(window).scroll(function(){$(".ui-scrolltop").css({top:$(window).scrollTop()+$(window).innerHeight()-150})})},areaSearch:function(){seajs.use("popup",function(a){var b=new a({trigger:".search-area-nav",element:".area-nav-list",align:{baseXY:[0,31]}}),c=new a({trigger:".search-area-province",element:".area-province-list",align:{baseXY:[0,31]}}),d=new a({trigger:".search-area-city",element:".area-city-list",align:{baseXY:[0,31]}});$(document).on("click",".area-nav-list dd",function(){$(".search-area-nav span").text(this.innerText),b.hide()}),$(document).on("click",".area-province-list dd",function(){$(".search-area-province span").text(this.innerText),c.hide()}),$(document).on("click",".area-city-list dd",function(){$(".search-area-city span").text(this.innerText),d.hide()})})},loadHotList:function(){},myOrderGlobal:function(){if($(".my-order-global").length>0){var a=function(){$(".js-myOrder-chb:checked").length+$(".js-myOrder-chg:checked").length==c?$(".js-myOrder-cha").prop("checked",!0):$(".js-myOrder-cha").prop("checked",!1)},b=function(){$(".js-already-chk").html($(".js-myOrder-chg:checked").length)};$(".js-myOrder-cha").click(function(){$(".js-myOrder-chb").prop("checked",this.checked),$(".js-myOrder-chg").prop("checked",this.checked),b()}),$(".js-myOrder-chb").click(function(){var c=$(this).parents(".my-order-brand");c.find(".js-myOrder-chg").prop("checked",this.checked),a(),b()});var c=$(".js-myOrder-chb").length+$(".js-myOrder-chg").length;$(".js-myOrder-chg").click(function(){var c=$(this).parents(".my-order-brand").find(".js-myOrder-chg").length;$(this).parents(".my-order-brand").find(".js-myOrder-chg:checked").length==c?$(this).parents(".my-order-brand").find(".js-myOrder-chb").prop("checked",!0):$(this).parents(".my-order-brand").find(".js-myOrder-chb").prop("checked",!1),a(),b()}),$("#settle-accounts").click(function(){var a=[];$(".js-myOrder-chg:checked").each(function(){var b=$(this).data("id");a.push(b)}),alert(a.toString())})}},searchInput:function(){$("#searchTxt").on("focus blur",function(a){var b=$(this).val(),c="搜索您需要的商品";"focus"==a.type&&b==c&&$(this).val("").next().hide(),"blur"==a.type&&""==b&&$(this).val(c).next().show()})},cart:function(){seajs.use(["underscore"],function(a){function b(a){if("126000"==a.code){if(a.rows&&a.rows.length>0){for(var b=[],c=0;c<a.rows.length;c++)b.push('<li class="clearfix">'),b.push('<div class="d2-img">'),b.push('<img src="'+window.IMAGE_DOMIAN+a.rows[c].productImage+'_50x50.jpg" alt="" width="50" height="50"/>'),b.push("</div>"),b.push('<div class="d2-name">'),b.push('<a href="/market/product/'+a.rows[c].productId+'" title="'+a.rows[c].productTitle+'" target="_blank">'+a.rows[c].productTitle+"</a>"),b.push("</div>"),b.push('<div class="d2-detail">'),b.push('<a href="javascript:;" class="jsDeleteSku" data-id="'+a.rows[c].refrenceId+'">删除</a>'),b.push("</div>"),b.push("</li>");$("#cart #cartList").html(b.join("")),$("#cart .cartCount").html(a.object+a.rows.length)}else a.rows&&a.rows.length<=0&&($("#cart #cartList").html(e),$("#cart .cartCount").html("0"));$("#cart .cartSurplus").html(a.object)}}function c(){var a=$(this),b=a.data("id");$.ajax({url:"/common/dealerShoper/deleteHomeCart",method:"get",data:{shoperId:b},dataType:"json",success:function(a){d(),"126000"==a.code||remind("error","删除产品失败")}})}function d(a){$.ajax({url:"/common/dealerShoper/homeCart",method:"get",dataType:"json",success:function(c){b(c),a&&a()}})}var e='<li style="line-height: 30px;text-align: center;background-color: #f2f2f2;">暂无产品</li>';$("#cart").length>0&&d();var f=a(d).debounce(200);$(document).on("click","#cart .jsDeleteSku",c),$("#cart").hover(function(){var a=$(this);f(function(){a.addClass("hover")})},function(){$(this).removeClass("hover")})})},autoComplate:function(){seajs.use(["underscore"],function(a){var b=$("#searchTxt"),c=$("#searchList"),d=-1,e=a(function(a){40!=a.which&&38!=a.which&&(d=-1,$.ajax({url:"/search/autoCompletion",data:"q="+b.val(),method:"get",dataType:"json",success:function(a){if(a.rows&&a.rows.length>=0){for(var b="",d=0;d<a.rows.length;d++)b+='<li class="search-item"><a href="javascript:;">'+a.rows[d].name+"</a></li>";a.rows.length>0&&c.show().empty().html(b),0==a.rows.length&&c.empty().hide()}else c.hide()}}))}).debounce(200),f=a(function(){c.hide()}).debounce(200),g=function(a){var c=$("#searchList li"),e=c.length;if(38==a.which){if(0==d||-1==d)return d=e-1,c.eq(d).addClass("hover").siblings().removeClass("hover"),b.val($("#searchList li.hover a").text()),!1;if(d>0&&e>d)return d--,c.eq(d).addClass("hover").siblings().removeClass("hover"),b.val($("#searchList li.hover a").text()),!1}if(40==a.which){if(d==e-2)return d=-1,c.eq(d).addClass("hover").siblings().removeClass("hover"),b.val($("#searchList li.hover a").text()),!1;if(d>=-1&&e-1>d)return d++,c.eq(d).addClass("hover").siblings().removeClass("hover"),b.val($("#searchList li.hover a").text()),!1}};$("#searchList").on("click",".search-item a",function(){var a=$(this).text();$("#searchForm").length>0?($("#searchFormQ").val(a),$("#searchForm").submit()):$("#headerSearch").submit()}),b.bind("keyup",e),b.bind("keydown",g),b.bind("focus",e),b.bind("blur",f)})}};newindex.init()}),$(".js_img_center,.js-img-center").each(function(){$("<span></span>").appendTo($(this))}),$(function(){/msie 6\.0/i.test(navigator.userAgent.toLowerCase())&&($(window).scroll(function(){var a=$(window).height()-50,b=parseInt(this.scrollY||document.documentElement.scrollTop||document.body.scrollTop)+a;$(".sorry-ie").css({top:b})}),$(".close-alert").click(function(){$(".sorry-ie").remove()}))});