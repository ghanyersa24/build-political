(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{458:function(e,t,n){"use strict";n.r(t);n(24),n(16),n(3),n(2),n(12),n(21);var l={name:"input-select-option",props:{options:{type:Array,default:function(){return[]}},name:String,noRequired:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},val:{type:String,default:""}},computed:{placeholder:function(){return"Please input ".concat(this.name)},idName:function(){return this.name.replace(/ /g,"")},data:{get:function(){return this.val},set:function(e){this.$emit("get",e)}}}},o=n(50),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"row my-3"},[t("div",{staticClass:"col-md-3 d-flex align-items-center"},[t("label",{staticClass:"text-capitalize h6",attrs:{for:e.idName}},[e._v(e._s(e.name))])]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"data"}],staticClass:"custom-select",attrs:{required:!e.noRequired,disabled:e.disabled,readonly:e.disabled},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.data=t.target.multiple?n:n[0]}}},[t("option",{attrs:{selected:"",disabled:"",value:""}},[e._v("- Pilih salah satu-")]),e._v(" "),e._l(e.options,(function(option,i){return t("option",{key:i,domProps:{value:option.id}},[e._v("\n        "+e._s(option.value)+"\n      ")])}))],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);