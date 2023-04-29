(()=>{"use strict";var e={4630:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(885),o=n(5861),a=n(3292),l=n(4333),i=n(1133),u=n(8859),f=n(9566),c=n(3497),d=n(8053),s=n(9526),h=n(2727),m=n(1451),y=n(9233),v=n(5567),p=n(7557);const b=function(e){var t=e.onPress,n=e.title,r=e.colors;return(0,p.jsx)(m.default,{onPress:t,children:(0,p.jsx)(v.LinearGradient,{colors:r,style:{position:"absolute",bottom:0,left:305,height:50,width:50,borderRadius:25,justifyContent:"center",alignItems:"center"},children:(0,p.jsx)(y.default,{style:{color:"#fff",fontSize:18,fontWeight:"bold"},children:n})})})};var g=n(8615),x=n(7132),j=n(5519),S=n(9245),I=(function(){var e=(0,o.default)((function*(e,t){try{yield j.default.setItem(e,t)}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}))}(),function(){var e=(0,o.default)((function*(e){try{var t=yield j.default.getItem(e);if(null!==t)return t}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}));return function(t){return e.apply(this,arguments)}}());(function(){var e=(0,o.default)((function*(e){try{yield j.default.removeItem(e)}catch(t){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",t)}}))})(),function(){var e=(0,o.default)((function*(){try{yield j.default.clear()}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0447\u0438\u0449\u0435\u043d\u043d\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0445\u043e\u0432\u0438\u0449\u0430:",e)}}))}();function O(){(0,S.default)();var e=(0,h.useNavigation)(),t=(0,s.useState)(""),n=(0,r.default)(t,2),o=n[0],a=n[1],l=(0,s.useState)(!1),f=(0,r.default)(l,2),m=f[0],y=f[1],v=(0,s.useRef)(),j=(0,s.useState)(),O=(0,r.default)(j,2),w=O[0],k=O[1];(0,s.useEffect)((function(){I("id").then((function(e){k(e)}))}),[]);var P=m?{top:-270}:null;function M(){d.default.dismiss(),g.default.post("https://644ab0e4a8370fb32155be44.mockapi.io/item",{msg:o,name_id:w}).then((function(e){console.log(e.data)})).catch((function(e){u.default.alert("Eror 404","Please resubmit to the server"),console.error(e)})).finally((function(e){a(""),v.current.clear()}))}return(0,p.jsx)(i.default,{style:[C.container,P],children:(0,p.jsxs)(i.default,{style:C.bottom,children:[(0,p.jsx)(c.default,{ref:v,onFocus:function(){M(),"web"===x.default.OS?(y(!1),e.setOptions({tabBarStyle:[{display:"none"},null]})):y(!0)},onBlur:function(){M(),"web"===x.default.OS?e.setOptions({tabBarStyle:[{display:"flex"},null]}):y(!1)},style:C.input,value:o,placeholder:"\u0429\u043e \u0432 \u0442\u0435\u0431\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u043b\u043e\u0434\u0435\u043d\u044c\u043a\u0438\u0439 ?",onChangeText:function(e){return a(e)}}),(0,p.jsx)(b,{onPress:M,title:"\u25b2",colors:["#090979","#00d4ff"]})]})})}var C=l.default.create({bottom:{position:"absolute",bottom:0},input:{height:50,width:350,borderColor:"#ccc",borderWidth:1,borderRadius:10,paddingHorizontal:10,fontSize:16,marginLeft:-50},container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),w=(function(){var e=(0,o.default)((function*(e,t){try{yield j.default.setItem(e,t)}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}))}(),function(){var e=(0,o.default)((function*(e){try{var t=yield j.default.getItem(e);if(null!==t)return t}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}));return function(t){return e.apply(this,arguments)}}());(function(){var e=(0,o.default)((function*(e){try{yield j.default.removeItem(e)}catch(t){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",t)}}))})(),function(){var e=(0,o.default)((function*(){try{yield j.default.clear()}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0447\u0438\u0449\u0435\u043d\u043d\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0445\u043e\u0432\u0438\u0449\u0430:",e)}}))}();function k(e){var t=e.dext,n=e.name_id,o=(0,s.useState)(50),a=(0,r.default)(o,2),l=(a[0],a[1],(0,s.useState)("")),u=(0,r.default)(l,2),f=u[0],c=u[1];return w("id").then((function(e){c(e)})),(0,p.jsx)(i.default,{style:n===f?P.container:P.containerd,children:(0,p.jsx)(y.default,{children:t})})}var P=l.default.create({container:{backgroundColor:"#00BFFF",borderRadius:10,flex:1,alignItems:"center",justifyContent:"center",left:10,marginLeft:230,padding:12,margin:10},containerd:{backgroundColor:"#808080",borderRadius:10,flex:1,alignItems:"center",justifyContent:"center",left:10,marginLeft:230,padding:12,margin:10}});function M(){var e=function(){var e=(0,o.default)((function*(e,t){try{yield j.default.setItem(e,t)}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}));return function(t,n){return e.apply(this,arguments)}}(),t=function(){var e=(0,o.default)((function*(e){try{var t=yield j.default.getItem(e);if(null!==t)return t}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}));return function(t){return e.apply(this,arguments)}}(),n=(function(){var e=(0,o.default)((function*(e){try{yield j.default.removeItem(e)}catch(t){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",t)}}))}(),function(){var e=(0,o.default)((function*(){try{yield j.default.clear()}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0447\u0438\u0449\u0435\u043d\u043d\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0445\u043e\u0432\u0438\u0449\u0430:",e)}}))}(),(0,h.useNavigation)(),(0,s.useState)([])),l=(0,r.default)(n,2),c=l[0],d=l[1],m=(0,s.useState)(!0),y=(0,r.default)(m,2),v=y[0];y[1];function b(){g.default.get("https://644ab0e4a8370fb32155be44.mockapi.io/item").then((function(e){d(e.data)})).catch((function(e){u.default.alert("Eror 404","Please a reconnect to server"),console.error(e)}))}return(0,s.useEffect)((function(){setInterval(b,2e3),t("id").then((function(n){if(void 0==n){var r=Math.floor(10*Math.random()),o=Math.floor(10*Math.random()),a=Math.floor(10*Math.random()),l=Math.floor(10*Math.random());e("id",""+r+o+a+l)}else t("id").then((function(e){}))}))}),[]),(0,p.jsxs)(i.default,{style:z.container,children:[(0,p.jsx)(f.default,{data:c,renderItem:function(e){var t=e.item;return(0,p.jsx)(k,{dext:t.msg,name_id:t.name_id})}}),v&&(0,p.jsx)(O,{}),(0,p.jsx)(a.default,{style:"auto"})]})}var z=l.default.create({bottom:{position:"absolute",bottom:0},massage:{display:"flex",flexDirection:"row",alignItems:"center",padding:10,borderRadius:8,marginBottom:10,maxWidth:80},avatar:{width:40,height:40,borderRadius:50,marginRight:10},text:{fontSize:16,fontWeight:400,lineHeight:1.5},container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),R=n(1866),_=n(1362),B=(n(5609),function(){var e=(0,o.default)((function*(e,t){try{yield j.default.setItem(e,t)}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}))}(),function(){var e=(0,o.default)((function*(e){try{var t=yield j.default.getItem(e);if(null!==t)return t}catch(n){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",n)}}));return function(t){return e.apply(this,arguments)}}());(function(){var e=(0,o.default)((function*(e){try{yield j.default.removeItem(e)}catch(t){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e:",t)}}))})(),function(){var e=(0,o.default)((function*(){try{yield j.default.clear()}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0447\u0438\u0449\u0435\u043d\u043d\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0445\u043e\u0432\u0438\u0449\u0430:",e)}}))}();function E(){var e=(0,s.useState)(""),t=(0,r.default)(e,2),n=t[0],l=t[1],u=(0,s.useState)(""),f=(0,r.default)(u,2),c=(f[0],f[1],(0,s.useState)("")),d=(0,r.default)(c,2);d[0],d[1],(0,h.useNavigation)();function v(){return b.apply(this,arguments)}function b(){return(b=(0,o.default)((function*(){try{var e=(yield g.default.get("https://644ab0e4a8370fb32155be44.mockapi.io/item")).data;yield Promise.all(e.map((function(e){return g.default.delete("https://644ab0e4a8370fb32155be44.mockapi.io/item/"+e.id)}))),console.log("All items deleted successfully!")}catch(t){console.error(t)}}))).apply(this,arguments)}(0,s.useEffect)((function(){B("id").then((function(e){l(e)}))}),[]);return(0,p.jsxs)(i.default,{style:F.container,children:[9730==n&&(0,p.jsx)(i.default,{children:(0,p.jsx)(m.default,{onPress:v,children:(0,p.jsx)(y.default,{style:{position:"absolute",top:-200,left:-45,fontSize:30},children:"delete"})})}),2004==n&&(0,p.jsx)(i.default,{children:(0,p.jsx)(m.default,{onPress:v,children:(0,p.jsx)(y.default,{style:{position:"absolute",top:-200,left:-45,fontSize:30},children:"delete"})})}),5527==n&&(0,p.jsx)(i.default,{children:(0,p.jsx)(m.default,{onPress:v,children:(0,p.jsx)(y.default,{style:{position:"absolute",top:-200,left:-45,fontSize:30},children:"delete"})})}),(0,p.jsx)(y.default,{children:"Loading..."}),(0,p.jsx)(a.default,{style:"auto"})]})}var F=l.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});l.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});var L=n(5693);(0,R.default)();var T=(0,S.default)();function H(){return(0,p.jsx)(L.default,{children:(0,p.jsxs)(T.Navigator,{screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var n,r=e.focused,o=e.size,a=e.colur;return"Home"===t.name?n=r?"ios-home":"ios-home-outline":"Setings"===t.name&&(n=r?"cog":"cog-outline"),(0,p.jsx)(_.default,{name:n,size:o,colour:a})}}},children:[(0,p.jsx)(T.Screen,{name:"Home",component:M}),(0,p.jsx)(T.Screen,{name:"Setings",component:E})]})})}function N(){return(0,p.jsx)(H,{})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],i=!0,u=0;u<r.length;u++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(i=!1,a<l&&(l=a));if(i){e.splice(c--,1);var f=o();void 0!==f&&(t=f)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[l,i,u]=r,f=0;if(l.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var c=u(n)}for(t&&t(r);f<l.length;f++)a=l[f],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[880],(()=>n(9484)));r=n.O(r)})();
//# sourceMappingURL=main.65bb1e4a.js.map