(window.webpackJsonpstocks=window.webpackJsonpstocks||[]).push([[0],{181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(10),r=a.n(s),l=a(4),c=a(5),i=a(7),u=a(6),d=a(8),p=a(49),m=a.n(p),h=function(e){return"http"===window.location.protocol?o.a.createElement(m.a,{url:"ws://stocks.mnet.website/",onMessage:function(t){return e.handleData(t)},onClose:function(t){return e.closeConnection(t)}}):function(t){return e.closeConnection(t)}},b=a(31),f=a(50),E=a.n(f),k={},v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderRows",value:function(){var e=this,t=k;if(this.props.stockResults.map((function(e){var a=k[e[0]];t&&t[e[0]]?(t[e[0]].textClass=a.value<e[1]?"text-success":"text-danger",t[e[0]].previousData.push({time:Date.now(),value:e[1]}),t[e[0]].value=e[1]):t[e[0]]={name:e[0],previousData:[{time:Date.now(),value:e[1]}],value:e[1],textClass:""}})),null!=(k=t))var a=Object.keys(k).map((function(t){var a=k[t],n=t===e.props.selectedItem?"selected-row":"";return o.a.createElement("tr",{onClick:function(){return e.props.onStockItemSelect(t)},className:n},o.a.createElement("td",null,t),o.a.createElement("td",{className:a.textClass},Number(a.value).toFixed(2)),o.a.createElement("td",null,o.a.createElement(E.a,{date:a.previousData.slice(-1)[0].time})),o.a.createElement("td",null,o.a.createElement(b.Sparklines,{data:a.previousData.map((function(e){return e.value}))},o.a.createElement(b.SparklinesLine,{color:"blue"}))))}));return this.props.updateStockDetail(k),a}},{key:"render",value:function(){if(null!=this.props.stockResults&&this.props.stockResults.length>0)var e=this.renderRows();return o.a.createElement("div",{className:"col-sm-4 bg-light"},o.a.createElement("h4",{className:"bg-dark px-2 text-white pb-2 mt-2"},"Live Stock App"),o.a.createElement("table",{className:"table table-hover bg-white"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Name"),o.a.createElement("th",{scope:"col"},"Price"),o.a.createElement("th",{scope:"col"},"Updated At"),o.a.createElement("th",{scope:"col"},"History"))),o.a.createElement("tbody",{className:"tablebody-pointer"},e)))}}]),t}(o.a.Component),g=a(51),y={labels:[],datasets:[{label:"",fill:!1,lineTension:.1,backgroundColor:"white",borderColor:"white",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},C={responsive:!0,scales:{xAxes:[{type:"time",distribution:"linear",ticks:{source:"auto"},time:{displayFormats:{second:"h:mm:ss a"},unit:"second"},scaleLabel:{display:!0,labelString:"Time"}}],yAxes:[{ticks:{beginAtZero:!0,stepValue:10,steps:10},scaleLabel:{display:!0,labelString:"Price ($)"}}]}},w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(null!=this.props.selectedItem){var e=this.props.stockDetails[this.props.selectedItem];y.datasets[0].label=e.name,y.datasets[0].backgroundColor="rgb(255,165,0)",y.datasets[0].borderColor="rgb(255,165,0)";var t=e.previousData.map((function(e){return{t:new Date(e.time),y:e.value}}));y.datasets[0].data=t}return o.a.createElement("div",{className:"col-sm-7"},o.a.createElement("h2",{className:"px-2 mt-2 pb-2 bg-light"},"Graph"),o.a.createElement("p",{className:"text-info"},"Click on any of the stock to see the graph"),o.a.createElement(g.a,{ref:"chart",data:y,options:C}))}}]),t}(n.Component),O=a(53),S=a.n(O),j=function(){return o.a.createElement("div",{className:"loading"},o.a.createElement(S.a,{type:"Oval",color:"black",height:50,width:45}),o.a.createElement("p",null,"Loading..."))},D=a(55),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onCloseModal",value:function(){window.location.reload()}},{key:"render",value:function(){return o.a.createElement(D.a,{open:!0,onClose:this.onCloseModal,center:!0},o.a.createElement("p",{className:"mt-3 px-3 py-3"},"You need to allow load unsafe scripts to run this application,",o.a.createElement("br",null)," you see shield icon in address bar"))}}]),t}(o.a.Component),x={},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isLoading:!0,stockResults:null,selectedItem:null,hasError:!1},a.handleData=function(e){var t=JSON.parse(e);t&&t.length>0&&a.setState({isLoading:!1,stockResults:t})},a.onStockItemSelect=function(e){a.setState({selectedItem:e})},a.updateStockDetail=function(e){x=e},a.closeConnection=function(e){a.setState({hasError:!0})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{handleData:this.handleData,closeConnection:this.closeConnection}),!this.state.isLoading&&!this.state.hasError&&o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement(v,{stockResults:this.state.stockResults,onStockItemSelect:this.onStockItemSelect,selectedItem:this.state.selectedItem,updateStockDetail:this.updateStockDetail}),o.a.createElement(w,{selectedItem:this.state.selectedItem,stockDetails:x}))),this.state.isLoading&&!this.state.hasError&&o.a.createElement(j,null),this.state.hasError&&o.a.createElement(N,null))}}]),t}(o.a.Component);a(181);r.a.render(o.a.createElement(I,null),document.getElementById("root"))},57:function(e,t,a){e.exports=a(182)}},[[57,1,2]]]);
//# sourceMappingURL=main.18dddff6.chunk.js.map