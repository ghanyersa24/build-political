(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{389:function(t,r,e){"use strict";var n=e(33),o=(e(68),{name:"mixins-request",methods:{konfirm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.$swal({title:"Apakah Kamu yakin?",text:t,icon:"question",showCancelButton:!0})},requestPost:function(t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,data,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,data=t.data,o=t.notify,c=void 0===o||o,e.prev=1,e.next=4,r.$axios.$post(n,data);case 4:return l=e.sent,c&&r.$toast.show(l.msg),e.abrupt("return",l);case 9:return e.prev=9,e.t0=e.catch(1),r.$toast.show(e.t0.response.data.msg),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},requestPut:function(t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,data,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,data=t.data,o=t.notify,c=void 0===o||o,e.prev=1,e.next=4,r.$axios.$put(n,data);case 4:return l=e.sent,c&&r.$toast.show(l.msg),e.abrupt("return",l);case 9:return e.prev=9,e.t0=e.catch(1),r.$toast.show(e.t0.response.data.msg),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},requestGet:function(t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,o=t.params,e.prev=1,e.next=4,r.$axios.$get(n,{params:o});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),r.$toast.show(e.t0.response.data.msg),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}}),c=o,l=e(50),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);r.a=component.exports},460:function(t,r,e){"use strict";e.r(r);e(2),e(4),e(71),e(121);var n={mixins:[e(389).a],props:{newsPortal:{type:String,default:null}},computed:{checkeds:function(){return this.$store.state.NewsPortal.checkeds},barchart:function(){return this.$store.state.NewsPortal.barchart},datasets:function(){var data=[{mark:"positif",total:0},{mark:"negatif",total:0},{mark:"netral",total:0}];if(this.newsPortal)this.allData[this.newsPortal].forEach((function(t){"positif"===t.mark&&(data[0].total+=t.total),"negatif"===t.mark&&(data[1].total+=t.total),"netral"===t.mark&&(data[2].total+=t.total)}));else for(var t in this.allData){if(this.checkeds.includes(t)&&Object.hasOwnProperty.call(this.allData,t))this.allData[t].forEach((function(t){"positif"===t.mark&&(data[0].total+=t.total),"negatif"===t.mark&&(data[1].total+=t.total),"netral"===t.mark&&(data[2].total+=t.total)}))}return data}},data:function(){return{allData:{}}},created:function(){this.getDoughnutChart()},methods:{getDoughnutChart:function(){var t=this;this.requestGet({url:"berita/bar-chart/19"}).then((function(r){t.allData=r,t.$store}))}}},o=e(50),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("bar-chart",{attrs:{"chart-options":t.options,"chart-data":t.doughnutChart}})}),[],!1,null,null,null);r.default=component.exports}}]);