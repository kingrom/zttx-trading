$(function($){function a(){1==$(".table tbody").children("tr.maintree").size()&&$(".table tbody").find("tr.maintree").removeClass("subnormal").removeClass("sublast").removeClass("subfirst").addClass("subonly"),2==$(".table tbody").children("tr.maintree").size()&&($(".table tbody").find("tr.maintree:eq(0)").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(".table tbody").find("tr.maintree:eq(1)").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast")),$(".table tbody").children("tr.maintree").size()>=3&&($(".table tbody tr.maintree:gt(0)").removeClass("subonly").removeClass("subfirst").removeClass("sublast").addClass("subnormal"),$(".table tbody tr.maintree:first").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(".table tbody tr.maintree:last").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast"))}function b(){$(document).on("click",".main-up",function(){var b=$(this).parent().parent().parent(),c=$(this).parent().parent().parent().prev();return $(this).parent().parent().hasClass("subfirst")?!1:($(c).before(b),void a())}),$(document).on("click",".main-down",function(){var b=$(this).parent().parent().parent(),c=$(this).parent().parent().parent().next();return $(this).parent().parent().hasClass("sublast")?!1:($(c).after(b),void a())}),$(document).on("click","a.main-remove",function(){$(this).parent().parent().parent().remove(),c()})}function c(){1==$(".table .tbody1").children("tr.subtreemove").size()&&$(".table .tbody1").find("tr.subtreemove").removeClass("subnormal").removeClass("sublast").removeClass("subfirst").addClass("subonly"),2==$(".table .tbody1").children("tr.subtreemove").size()&&($(".table .tbody1").find("tr.subtreemove:eq(0)").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(".table .tbody1").find("tr.subtreemove:eq(1)").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast")),$(".table .tbody1").children("tr.subtreemove").size()>=3&&($(".table .tbody1 tr.subtreemove:gt(0)").removeClass("subonly").removeClass("subfirst").removeClass("sublast").addClass("subnormal"),$(".table .tbody1 tr.subtreemove:first").removeClass("subonly").removeClass("subnormal").removeClass("sublast").addClass("subfirst"),$(".table .tbody1 tr.subtreemove:last").removeClass("subonly").removeClass("subnormal").removeClass("subfirst").addClass("sublast"))}function d(){$(document).on("click","span.sub-up",function(){var a=$(this).parent().parent(),b=$(this).parent().parent().prev();return $(this).parent().parent().hasClass("subfirst")||$(this).parent().parent().hasClass("subonly")?!1:($(b).before(a),void c())}),$(document).on("click","span.sub-down",function(){var a=$(this).parent().parent(),b=$(this).parent().parent().next();return $(this).parent().parent().hasClass("sublast")||$(this).parent().parent().hasClass("subonly")?!1:($(b).after(a),void c())}),$(document).on("click","a.sub-remove",function(){$(this).parent().parent().remove(),c()})}$(function(){var a=$(document.body).width()-180;$(".k-right").width(a);var b=$(document).height()-62,c=$(window).height()-97;$(".k-right").height(b),$(".shousuo").height(b),$("#testIframe").height(c),$(".k-left").height(b)}),$(window).resize(function(){var a=$(document.body).width()-180;$(".k-right").width(a);var b=$(document).height()-62,c=$(window).height()-97;$(".k-right").height(b),$(".shousuo").height(b),$("#testIframe").height(c),$(".k-left").height(b)}),$(".k-top-cen li").hover(function(){$(this).find(".k-dropmenu").show()},function(){$(this).find(".k-dropmenu").hide()}),$(".k-left .k-lefth2").click(function(){$(this).next(".k-leftul").slideToggle()}),$(".k-body .k-left li").click(function(){$(this).addClass("selected").siblings().removeAttr("class")}),$(".k-body .k-left li").hover(function(){$(this).find("a").stop().animate({marginLeft:"10px"})},function(){$(this).find("a").stop().animate({marginLeft:"0px"})}),$(".k-openall").click(function(){$("table tbody .subtree").show(),$("table tbody").find("#trplus").removeClass().addClass("minus"),$(this).addClass("disabled"),$(".k-selectbar .k-closeall").removeClass("disabled")}),$(".k-closeall").click(function(){$("table tbody .subtree").hide(),$("table tbody").find("#trplus").removeClass().addClass("plus"),$(this).addClass("disabled"),$(".k-selectbar .k-openall").removeClass("disabled")}),$(".k-selectbar .k-selall [name=allche]:checkbox").click(function(){$("table").find("[name=choice]:checkbox").prop("checked",this.checked)}),$(".k-delall").click(function(){var a="你选中的是：";$("[name=choice]:checkbox:checked").each(function(){a+=$(this).val()+","}),alert(a)}),$(document).on("click","#trplus",function(){var a=$(this).parent().parent().siblings();$(this).parent().parent().siblings().toggle(),$(a).is(":visible")?$(this).addClass("minus"):$(this).removeClass().addClass("plus")}),$("tr.maintree td.td-001").find(".k-tbtxt").each(function(){$(document).on("keyup",".k-tbtxt",function(){if($(this).parent().find("span.onError").remove(),$(this).parent().find("span.onSuccess").remove(),""==this.value){var a="*输入错误";$(this).parent().append('<span style=" position:absolute; display:block; top: 8px; left:172px; height:26px; background:#FFFBEF; border:1px solid #ffbc76; padding:0 3px; color:#e96300; z-index:9" class="onError">'+a+"</span>")}if(this.value.length>"6"){var a="*字数超出";$(this).parent().append('<span style=" position:absolute; display:block; top: 8px; left:172px; height:26px; background:#FFFBEF; border:1px solid #ffbc76; padding:0 3px; color:#e96300; z-index:9" class="onError">'+a+"</span>")}if(this.value.length<="6"&&this.value.length>="1"){var b="*输入正确";$(this).parent().append('<span style=" position:absolute; display:block; top: 8px; left:172px; height:26px; background:#bcefbf; border:1px solid #2aa130; padding:0 3px; color:#19731d; z-index:9" class="onSuccess">'+b+"</span>")}}).keyup(function(){$(document).on("blur",".k-tbtxt",function(){$(this).triggerHandler("blur")})}).focus(function(){$(".k-tbtxt").triggerHandler("blur")})}),$(document).on("click","#saveall",function(){$(".k-tbtxt").each(function(){$(this).trigger("keyup")});var a=$(".k-tbtxt").parent().find(".onError").length;return a?!1:void alert("修改分类成功！")}),$(".addmiantree").click(function(){$(".table").find("tbody:last").after('<tbody class="tbody"><tr class="maintree"><td class="td-000"><input type="checkbox"name="choice"class="f-l"style="margin:4px 5px 0 0"value="衣服"/></td><td width="220"class="td-001"><span id="trplus"class="plus"></span><input type="text"value=""class="k-tbtxt" id="miantreename" /></td><td width="140"class="td-002"><a href=""title=""target="">编辑</a> <a href=""title=""target="">删除</a></td><td class="td-003"><span class="main-up">上</span> <span class="main-down">下</span></td><td class="td-004"><span>开关</span></td><td class="td-005"><span>2014-01-24</span></td><td class="td-006"><span>自动分类</span></td><td class="td-007"><a class="main-remove">删除</a></td></tr><tr class="subtree addsubtree"><td class="td-000"></td><td class="td-001">--- <input type="button"value="添加子分类"class="k-tbbtnadd btn btn-warning"/></td><td class="td-002"></td><td class="td-003"></td><td class="td-004"></td><td class="td-005"><span>2014-01-24</span></td><td class="td-006"></td><td class="td-007"></td></tr></tbody>'),a()}),a(),b(),$(document).on("click",".k-tbbtnadd",function(){$(this).parent().parent().before('<tr class="subtree subtreemove" style="display:table-row"><td class="td-000"><input type="checkbox" name="choice" class="f-l" style="margin:4px 5px 0 0" value="碎花裙2" /></td><td class="td-001">--- <input type="text" value="" class="k-tbtxt" id="miantreename" /></td><td class="td-002">+ <span>添加图片</span></td><td class="td-003"><span class="sub-up">上</span> <span class="sub-down">下</span></td><td class="td-004"></td><td class="td-005"><span>now</span></td><td class="td-006"><span>手动分类</span></td><td class="td-007"><a class="sub-remove">删除</a></td></tr>'),c()}),c(),d(),$("[deftxt]").css({color:"#bbb"}).focus(function(){$(this).val()==$(this).attr("deftxt")&&$(this).val("").css({color:"#666"})}).blur(function(){""==$(this).val()&&$(this).val($(this).attr("deftxt")).css({color:"#bbb"})})});