/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("event-move",function(e){var j=("ontouchstart" in e.config.win&&!e.UA.chrome)?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},x="start",C="move",h="end",l="gesture"+C,a=l+h,i=l+x,B="_msh",m="_mh",w="_meh",r="_dmsh",o="_dmh",c="_dmeh",g="_ms",s="_m",z="minTime",t="minDistance",u="preventDefault",b="button",v="ownerDocument",n="currentTarget",p="target",q="nodeType",k=function(H,F,G){var D=(G)?4:3,E=(F.length>D)?e.merge(F.splice(D,1)[0]):{};if(!(u in E)){E[u]=H.PREVENT_DEFAULT;}return E;},f=function(E,D){return D._extra.root||(E.get(q)===9)?E:E.get(v);},y=function(D,F,E){D.pageX=F.pageX;D.pageY=F.pageY;D.screenX=F.screenX;D.screenY=F.screenY;D.clientX=F.clientX;D.clientY=F.clientY;D[p]=D[p]||F[p];D[n]=D[n]||F[n];D[b]=(E&&E[b])||1;},A=function(E,D){if(D){if(!D.call||D(E)){E.preventDefault();}}},d=e.Event.define;d(i,{on:function(E,D,F){D[B]=E.on(j[x],this._onStart,this,E,D,F);},delegate:function(F,E,H,D){var G=this;E[r]=F.delegate(j[x],function(I){G._onStart(I,F,E,H,true);},D);},detachDelegate:function(F,E,H,D){var G=E[r];if(G){G.detach();E[r]=null;}},detach:function(E,D,G){var F=D[B];if(F){F.detach();D[B]=null;}},processArgs:function(D,E){var F=k(this,D,E);if(!(z in F)){F[z]=this.MIN_TIME;}if(!(t in F)){F[t]=this.MIN_DISTANCE;}return F;},_onStart:function(J,E,P,D,L){if(L){E=J[n];}var F=P._extra,O=true,G=F[z],N=F[t],H=F.button,I=F[u],M=f(E,P),K;if(J.touches){if(J.touches.length===1){y(J,J.touches[0],F);}else{O=false;}}else{O=(H===undefined)||(H===J.button);}if(O){A(J,I);if(G===0||N===0){this._start(J,E,D,F);}else{K=[J.pageX,J.pageY];if(G>0){F._ht=e.later(G,this,this._start,[J,E,D,F]);F._hme=M.on(j[h],e.bind(function(){this._cancel(F);},this));}if(N>0){F._hm=M.on(j[C],e.bind(function(Q){if(Math.abs(Q.pageX-K[0])>N||Math.abs(Q.pageY-K[1])>N){this._start(J,E,D,F);}},this));}}}},_cancel:function(D){if(D._ht){D._ht.cancel();D._ht=null;}if(D._hme){D._hme.detach();D._hme=null;}if(D._hm){D._hm.detach();D._hm=null;}},_start:function(F,D,E,G){if(G){this._cancel(G);}F.type=i;D.setData(g,F);E.fire(F);},MIN_TIME:0,MIN_DISTANCE:0,PREVENT_DEFAULT:false});d(l,{on:function(F,E,H){var D=f(F,E),G=D.on(j[C],this._onMove,this,F,E,H);E[m]=G;},delegate:function(F,E,H,D){var G=this;E[o]=F.delegate(j[C],function(I){G._onMove(I,F,E,H,true);},D);},detach:function(E,D,G){var F=D[m];if(F){F.detach();D[m]=null;}},detachDelegate:function(F,E,H,D){var G=E[o];if(G){G.detach();E[o]=null;}},processArgs:function(D,E){return k(this,D,E);},_onMove:function(J,H,G,I,F){if(F){H=J[n];}var D=G._extra.standAlone||H.getData(g),E=G._extra.preventDefault;if(D){if(J.touches){if(J.touches.length===1){y(J,J.touches[0]);}else{D=false;}}if(D){A(J,E);J.type=l;I.fire(J);}}},PREVENT_DEFAULT:false});d(a,{on:function(G,F,H){var E=f(G,F),D=E.on(j[h],this._onEnd,this,G,F,H);F[w]=D;},delegate:function(F,E,H,D){var G=this;E[c]=F.delegate(j[h],function(I){G._onEnd(I,F,E,H,true);},D);},detachDelegate:function(F,E,H,D){var G=E[c];if(G){G.detach();E[c]=null;}},detach:function(F,E,G){var D=E[w];if(D){D.detach();E[w]=null;}},processArgs:function(D,E){return k(this,D,E);},_onEnd:function(J,H,F,I,E){if(E){H=J[n];}var G=F._extra.standAlone||H.getData(s)||H.getData(g),D=F._extra.preventDefault;if(G){if(J.changedTouches){if(J.changedTouches.length===1){y(J,J.changedTouches[0]);}else{G=false;}}if(G){A(J,D);J.type=a;I.fire(J);H.clearData(g);H.clearData(s);}}},PREVENT_DEFAULT:false});},"3.4.0",{requires:["node-base","event-touch","event-synthetic"]});