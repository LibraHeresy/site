var P=Object.defineProperty;var C=(l,n,o)=>n in l?P(l,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[n]=o;var s=(l,n,o)=>(C(l,typeof n!="symbol"?n+"":n,o),o);import{_ as I,h as d,C as S,o as f,c as B,m as v,b as U,a6 as _,a7 as L,Q as Y,a8 as $,F as M}from"./framework.CGDvBAlC.js";const X=["src"],F=["id"],N=["src"],O={__name:"PreviewImage",props:{imageUrl:String},setup(l){const n=l,o=d(!1),u=t=>{const e=document.getElementsByTagName("body")[0];t?(e.style.height="100vh",e.style.overflow="hidden",E()):(e.style.height="unset",e.style.overflow="auto"),o.value=t};class m{constructor(){s(this,"scale",1);s(this,"left","50%");s(this,"top","50%");s(this,"translate","")}}const i=d(new m),h=t=>{const{deltaY:e}=t;let{scale:a}=i.value;e>0?(a-=.2,a<0&&(a=0)):e<0&&(a+=.2),i.value.scale=a};class g{constructor(){s(this,"x",0);s(this,"y",0)}}class y{constructor(){s(this,"x",document.body.clientWidth/2);s(this,"y",document.body.clientHeight/2)}}const c=d(new g),r=d(new y),w=t=>{const{clientX:e,clientY:a}=t;c.value.x=e,c.value.y=a},p=t=>{const{clientX:e,clientY:a}=t;b(e,a),i.value.translate=""},x=t=>{const{clientX:e,clientY:a}=t,{x:k,y:D}=c.value;i.value.translate=`${e-k}px ${a-D}px`},b=(t,e)=>{r.value.x=r.value.x-c.value.x+t,r.value.y=r.value.y-c.value.y+e,i.value.left=`${r.value.x}px`,i.value.top=`${r.value.y}px`},E=()=>{c.value=new g,r.value=new y,i.value=new m};return S(()=>{const t=document.getElementById(n.imageUrl);t.addEventListener("wheel",h),t.addEventListener("dragstart",w),t.addEventListener("drag",x),t.addEventListener("dragend",p)}),(t,e)=>(f(),B(M,null,[v("img",{class:"frame-img",src:l.imageUrl,onClick:e[0]||(e[0]=()=>u(!0))},null,8,X),(f(),U($,{to:"body"},[_(v("div",{id:l.imageUrl,class:"preview-img-mask",onClick:e[2]||(e[2]=()=>u(!1))},[v("img",{class:"preview-img",style:Y(i.value),src:l.imageUrl,onDragover:e[1]||(e[1]=a=>a.preventDefault())},null,44,N)],8,F),[[L,o.value]])]))],64))}},z=I(O,[["__scopeId","data-v-9b931fbb"]]);export{z as P};