import{B as O,C as Q,D as T,E as Y,F as q,G as W,H as X,I as Z,J as ee,K as ne,L as te,M as se}from"../modules/unplugin-icons-RdU1mi4T.js";import{d as L,t as $,N as oe,O as le,o as g,b as z,f as ae,h as B,z as e,c as x,k as o,l as n,i as l,e as r,x as ie,P as m,Q as re,F as ue,R as ce,S as b,g as de}from"../modules/vue-3Oyk-UTZ.js";import{L as _e}from"../modules/shiki-CcoQZ-R3.js";import{u as pe,_ as a,V as h}from"./play-B697ZGeO.js";import"../index-CW8WtHkm.js";import"./context-Bj5YOzSO.js";const me=L({__name:"Draggable",props:{storageKey:{},initial:{}},setup(D){const u=D,w=$(null),f=u.initial??{x:0,y:0},k=u.storageKey?oe(u.storageKey,f):$(f),{style:y}=le(w,{initialValue:k});return(v,d)=>(g(),z("div",{ref_key:"el",ref:w,class:"fixed",style:B(e(y))},[ae(v.$slots,"default")],4))}}),ge=r("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[r("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),we=r("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[r("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),r("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),r("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),fe={class:"flex bg-main p-2"},ve={class:"inline-block w-7 text-center"},be={class:"pt-.5"},Le=L({__name:"DrawingControls",setup(D){const{brush:u,canClear:w,canRedo:f,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:i,drawingPinned:c,brushColors:M}=pe();function S(){v.undo()}function V(){v.redo()}let C="stylus";function _(p){i.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function E(p){u.color=p,d.value=!0,i.value=C}return(p,t)=>{const K=O,N=Q,R=T,U=Y,F=q,P=W,A=X,j=Z,G=ee,H=ne,I=te,J=se;return g(),x(me,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(i)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(K)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(i)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[ge]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(i)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(i)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(i)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(i)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(F)]),_:1},8,["class"]),n(h),n(e(_e),null,{popper:o(()=>[r("div",fe,[r("div",ve,ie(e(u).size),1),r("div",be,[m(r("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>i.value=e(C))},null,544),[[re,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(i)==="eraseLine"})},{default:o(()=>[we]),_:1},8,["class"])]),_:1}),(g(!0),z(ue,null,ce(e(M),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(i)!=="eraseLine"?"active":"shallow"),onClick:ke=>E(s)},{default:o(()=>[r("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:B(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(h),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:t[8]||(t[8]=s=>S())},{default:o(()=>[n(P)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:t[9]||(t[9]=s=>V())},{default:o(()=>[n(A)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:t[10]||(t[10]=s=>e(y)())},{default:o(()=>[n(j)]),_:1},8,["class"]),n(h),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=s=>c.value=!e(c))},{default:o(()=>[m(n(G,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(H,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(I,null,null,512),[[b,e(c)]]),m(n(J,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):de("v-if",!0)]),_:1},8,["class"])}}});export{Le as default};
