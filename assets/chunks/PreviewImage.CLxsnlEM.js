var _=Object.defineProperty;var B=(n,s,c)=>s in n?_(n,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[s]=c;var o=(n,s,c)=>(B(n,typeof s!="symbol"?s+"":s,c),c);import{_ as U,r as u,C as Y,o as D,c as X,m as h,a2 as k,e as $,a6 as F,a7 as N,Q as O,a8 as W,F as q}from"./framework.vWBS9OHw.js";import{d as z}from"./theme.Ca95dH5t.js";const H=["src"],Q=["id"],V=["src"],j={__name:"PreviewImage",props:{imageUrl:String},setup(n){const s=n,c=u(!1),g=e=>{const t=document.getElementsByTagName("body")[0];e?(t.style.height="100vh",t.style.overflow="hidden",S()):(t.style.height="unset",t.style.overflow="auto"),c.value=e};class m{constructor(){o(this,"scale",1);o(this,"left","50%");o(this,"top","50%");o(this,"translate","")}}const l=u(new m),L=e=>{const{deltaY:t}=e;let{scale:a}=l.value;t>0?(a-=.2,a<.2&&(a=.2)):t<0&&(a+=.2),l.value.scale=a};class f{constructor(){o(this,"x",0);o(this,"y",0)}}class y{constructor(){o(this,"x",document.body.clientWidth/2);o(this,"y",document.body.clientHeight/2)}}const r=u(new f),i=u(new y),p=e=>{const{clientX:t,clientY:a}=e;r.value.x=t,r.value.y=a},w=e=>{const{clientX:t,clientY:a}=e;P(t,a),l.value.translate=""},x=e=>{const{clientX:t,clientY:a}=e,{x:v,y:M}=r.value;l.value.translate=`${t-v}px ${a-M}px`},P=(e,t)=>{i.value.x=i.value.x-r.value.x+e,i.value.y=i.value.y-r.value.y+t,l.value.left=`${i.value.x}px`,l.value.top=`${i.value.y}px`},S=()=>{r.value=new f,i.value=new y,l.value=new m},d=u(0),T=e=>{e.touches.length===1&&(p(e.touches[0]),d.value=0),e.touches.length===2&&(d.value=E(e.touches[0],e.touches[1]))},b=e=>{if(e.preventDefault(),e.touches.length===1&&x(e.touches[0]),e.touches.length===2){const t=E(e.touches[0],e.touches[1]),a=t/d.value;l.value.scale*=a,d.value=t}},C=e=>{e.changedTouches.length===1&&!d.value&&w(e.changedTouches[0])},E=(e,t)=>{const a=e.clientX-t.clientX,v=e.clientY-t.clientY;return Math.sqrt(a*a+v*v)},I=z();return Y(()=>{const e=document.getElementById(s.imageUrl);I.value?(e.addEventListener("touchstart",T),e.addEventListener("touchmove",b),e.addEventListener("touchend",C)):(e.addEventListener("wheel",L),e.addEventListener("dragstart",p),e.addEventListener("drag",x),e.addEventListener("dragend",w),e.addEventListener("dragover",t=>t.preventDefault()))}),(e,t)=>(D(),X(q,null,[h("img",{class:"frame-img",src:n.imageUrl,onClick:t[0]||(t[0]=k(()=>g(!0),["stop"]))},null,8,H),(D(),$(W,{to:"body"},[F(h("div",{id:n.imageUrl,class:"preview-img-mask",onClick:t[1]||(t[1]=k(()=>g(!1),["stop"]))},[h("img",{class:"preview-img",style:O(l.value),src:n.imageUrl},null,12,V)],8,Q),[[N,c.value]])]))],64))}},K=U(j,[["__scopeId","data-v-650b2a65"]]);export{K as P};
