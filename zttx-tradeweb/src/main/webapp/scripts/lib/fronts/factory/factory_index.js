define(function(require,exports,module){var a=require("dialog"),b=require("pcas"),c={init:function(){this.fillApply()},fillApply:function(){function c(){new b({province:"#p",city:"#c",area:"#a"}),baseFormValidator({selector:"#fillAppleForm",isAjax:!0,beforeSubmitFn:function(){var a=$("#p option:selected").val(),b=$("#c option:selected").val(),c=$("#a option:selected").val();a=""==a?void 0:a,b=""==b?void 0:b,c=""==c?void 0:c;var e=c||b||a;$.ajax({url:"/fronts/joinInfo/save",method:"post",data:$("#fillAppleForm").serialize()+"&areaNo="+e,dataType:"json",success:function(a){a.code==zttx.SUCCESS?(remind("success","申请提交成功"),d.hide()):remind("error",a.message||"申请提交出错，请刷新重试")},error:function(){alert("请求出错，请稍后重试")}})}})}var d=new a({trigger:"#fillApply",content:$("#applyDialog").html(),width:500}).after("render",c)}};module.exports=c});