"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1057],{4665:function(e,t,s){var a=s(5893);s(7294);var r=s(682),l=s(1664),n=s.n(l);t.Z=function(e){let{text:t,btn:s,url:l}=e;return(0,a.jsxs)(r.Z,{className:"wbg-gy text-center d-flex flex-column justify-content-center align-items-center",style:{height:"10em"},children:[(0,a.jsx)("h1",{className:"fs-4",children:t}),(0,a.jsx)(n(),{className:"b-btn mt-4",href:l,children:s})]})}},8691:function(e,t,s){s.d(t,{Z:function(){return z}});var a,r=s(5893),l=s(4184),n=s.n(l),i=s(9351),o=s(1172),c=s(7216),d=s(99);function u(e){if((!a&&0!==a||e)&&o.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var m=s(2092),h=s(8146),f=s(5654),x=s(6852),p=s(4305),j=s(7294),g=s(7785),b=s(685),N=s(1068),y=s(6611),Z=(0,y.Z)("modal-body"),w=s(6467),v=s(6792);let E=j.forwardRef(({bsPrefix:e,className:t,contentClassName:s,centered:a,size:l,fullscreen:i,children:o,scrollable:c,...d},u)=>{e=(0,v.vE)(e,"modal");let m=`${e}-dialog`,h="string"==typeof i?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return(0,r.jsx)("div",{...d,ref:u,className:n()(m,t,l&&`${e}-${l}`,a&&`${m}-centered`,c&&`${m}-scrollable`,i&&h),children:(0,r.jsx)("div",{className:n()(`${e}-content`,s),children:o})})});E.displayName="ModalDialog";var k=(0,y.Z)("modal-footer"),S=s(6695);let C=j.forwardRef(({bsPrefix:e,className:t,...s},a)=>(e=(0,v.vE)(e,"modal-header"),(0,r.jsx)(S.Z,{ref:a,...s,className:n()(t,e)})));C.displayName="ModalHeader",C.defaultProps={closeLabel:"Close",closeButton:!1};var T=s(9602);let F=(0,T.Z)("h4");var B=(0,y.Z)("modal-title",{Component:F});function R(e){return(0,r.jsx)(N.Z,{...e,timeout:null})}function D(e){return(0,r.jsx)(N.Z,{...e,timeout:null})}let L=j.forwardRef(({bsPrefix:e,className:t,style:s,dialogClassName:a,contentClassName:l,children:N,dialogAs:y,"aria-labelledby":Z,"aria-describedby":E,"aria-label":k,show:S,animation:C,backdrop:T,keyboard:F,onEscapeKeyDown:B,onShow:L,onHide:P,container:$,autoFocus:_,enforceFocus:A,restoreFocus:O,restoreFocusOptions:H,onEntered:I,onExit:M,onExiting:z,onEnter:W,onEntering:q,onExited:U,backdropClassName:K,manager:Y,...G},J)=>{let[Q,V]=(0,j.useState)({}),[X,ee]=(0,j.useState)(!1),et=(0,j.useRef)(!1),es=(0,j.useRef)(!1),ea=(0,j.useRef)(null),[er,el]=(0,m.Z)(),en=(0,f.Z)(J,el),ei=(0,h.Z)(P),eo=(0,v.SC)();e=(0,v.vE)(e,"modal");let ec=(0,j.useMemo)(()=>({onHide:ei}),[ei]);function ed(){return Y||(0,b.t)({isRTL:eo})}function eu(e){if(!o.Z)return;let t=ed().getScrollbarWidth()>0,s=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;V({paddingRight:t&&!s?u():void 0,paddingLeft:!t&&s?u():void 0})}let em=(0,h.Z)(()=>{er&&eu(er.dialog)});(0,x.Z)(()=>{(0,d.Z)(window,"resize",em),null==ea.current||ea.current()});let eh=()=>{et.current=!0},ef=e=>{et.current&&er&&e.target===er.dialog&&(es.current=!0),et.current=!1},ex=()=>{ee(!0),ea.current=(0,p.Z)(er.dialog,()=>{ee(!1)})},ep=e=>{e.target===e.currentTarget&&ex()},ej=e=>{if("static"===T){ep(e);return}if(es.current||e.target!==e.currentTarget){es.current=!1;return}null==P||P()},eg=e=>{F?null==B||B(e):(e.preventDefault(),"static"===T&&ex())},eb=(e,t)=>{e&&eu(e),null==W||W(e,t)},eN=e=>{null==ea.current||ea.current(),null==M||M(e)},ey=(e,t)=>{null==q||q(e,t),(0,i.ZP)(window,"resize",em)},eZ=e=>{e&&(e.style.display=""),null==U||U(e),(0,d.Z)(window,"resize",em)},ew=(0,j.useCallback)(t=>(0,r.jsx)("div",{...t,className:n()(`${e}-backdrop`,K,!C&&"show")}),[C,K,e]),ev={...s,...Q};ev.display="block";let eE=s=>(0,r.jsx)("div",{role:"dialog",...s,style:ev,className:n()(t,e,X&&`${e}-static`,!C&&"show"),onClick:T?ej:void 0,onMouseUp:ef,"aria-label":k,"aria-labelledby":Z,"aria-describedby":E,children:(0,r.jsx)(y,{...G,onMouseDown:eh,className:a,contentClassName:l,children:N})});return(0,r.jsx)(w.Z.Provider,{value:ec,children:(0,r.jsx)(g.Z,{show:S,ref:en,backdrop:T,container:$,keyboard:!0,autoFocus:_,enforceFocus:A,restoreFocus:O,restoreFocusOptions:H,onEscapeKeyDown:eg,onShow:L,onHide:P,onEnter:eb,onEntering:ey,onEntered:I,onExit:eN,onExiting:z,onExited:eZ,manager:ed(),transition:C?R:void 0,backdropTransition:C?D:void 0,renderBackdrop:ew,renderDialog:eE})})});L.displayName="Modal",L.defaultProps={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:E};var P=Object.assign(L,{Body:Z,Header:C,Title:B,Footer:k,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),$=s(6154),_=s(4051),A=s(1555),O=s(682),H=s(8296);let I=e=>{let{customTitle:t,pdfFile:s,PdfLink:a}=e,[l,n]=(0,j.useState)({firstName:"",lastName:"",businessEmail:"",customTitle:t,pdfFile:s}),i=e=>!e.trim(),o=e=>{let t=e.split("@")[1].toLowerCase();return["gmail.com","yahoo.com"].includes(t)},[c,d]=(0,j.useState)(!1),[u,m]=(0,j.useState)(""),[h,f]=(0,j.useState)(""),[x,p]=(0,j.useState)(!0),g=e=>{n({...l,[e.target.name]:e.target.value})},b=async e=>{if(e.preventDefault(),d(!0),i(l.firstName)){m("Please enter a first name."),d(!1);return}if(i(l.lastName)){m("Please enter a last name."),d(!1);return}if(i(l.businessEmail)){m("Please enter a Business Email."),d(!1);return}if(o(l.businessEmail)){m("Sorry, we do not accept email addresses from Gmail, Yahoo, and similar domains."),d(!1);return}try{let t=await $.Z.post("https://elementor.ivistasolutions.biz/wp-json/contact-form-7/v1/contact-forms/52293/feedback",l,{headers:{"Content-Type":"multipart/form-data"}});console.log(t.data.status),"mail_sent"===t.data.status?(p(!1),window.open(a,"_blank"),f("Thank you for your submission!"),setShowModal(!1)):m("An error occurred. Please try again.")}catch(s){m("An error occurred. Please try again.")}d(!1)};return(0,r.jsx)("div",{className:"",children:x?(0,r.jsxs)("form",{onSubmit:b,encType:"multipart/form-data",children:[(0,r.jsxs)(_.Z,{children:[(0,r.jsx)(A.Z,{children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsxs)("label",{for:"firstName",className:"form-label",children:["First Name ",(0,r.jsx)("span",{class:"required",children:"*"})]}),(0,r.jsx)("input",{type:"text",name:"firstName",className:"form-control",id:"firstName",placeholder:"First Name",value:l.firstName,onChange:g})]})}),(0,r.jsx)(A.Z,{children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsxs)("label",{for:"lastName",className:"form-label",children:["Last Name ",(0,r.jsx)("span",{class:"required",children:"*"})]}),(0,r.jsx)("input",{type:"text",name:"lastName",className:"form-control",id:"lastName",placeholder:"Last Name",value:l.lastName,onChange:g})]})})]}),(0,r.jsx)(_.Z,{children:(0,r.jsx)(A.Z,{children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsxs)("label",{for:"businessEmail",className:"form-label",children:["Business Email ",(0,r.jsx)("span",{class:"required",children:"*"})]}),(0,r.jsx)("input",{type:"text",name:"businessEmail",className:"form-control",id:"designation",placeholder:"Business Email",value:l.businessEmail,onChange:g})]})})}),(0,r.jsx)(_.Z,{children:(0,r.jsx)(A.Z,{children:(0,r.jsx)("p",{children:"For information about how we use your data please see our privacy policy."})})}),(0,r.jsx)(_.Z,{children:(0,r.jsx)(A.Z,{sm:12,children:(0,r.jsxs)("button",{type:"submit",className:"btn b-btn text-white",disabled:c,style:{width:"100%"},children:["Download Now",c&&(0,r.jsx)(H.s5,{strokeColor:"white",strokeWidth:"3",animationDuration:"1",width:"20",visible:!0})]})})}),u&&(0,r.jsx)("p",{className:"error",children:u})]}):(0,r.jsxs)(O.Z,{children:[(0,r.jsx)("h2",{children:"Thank You"}),(0,r.jsx)("p",{children:"An email with the download link has been sent."})]})})},M=e=>{let{show:t,handleClose:s,pdfLink:a,title:l}=e;return(0,r.jsxs)(P,{show:t,onHide:s,children:[(0,r.jsx)(P.Header,{closeButton:!0}),(0,r.jsx)(P.Body,{children:(0,r.jsx)(I,{customTitle:l,pdfFile:a,PdfLink:a})})]})};var z=M},5060:function(e,t,s){var a=s(5893),r=s(7294),l=s(682),n=s(4051),i=s(1555),o=s(7525),c=s(1664),d=s.n(c),u=s(1181);t.Z=function(e){let{tags:t}=e,[s,c]=(0,r.useState)([]),[m,h]=(0,r.useState)(!1),f=async()=>{let e="";e="".concat(u.LB,"all-insights?tag=").concat(t);try{let s=await fetch(e),a=await s.json();console.log(a.length),c(a),a.length>1&&h(!0)}catch(r){console.log(r)}};return(0,r.useEffect)(()=>{f()},[]),(0,a.jsxs)(l.Z,{className:"mb-5 mt-5 text-center",id:"insights",children:[m?(0,a.jsx)("h2",{className:"fs-1 txt-dark-purple",children:"Further Reading"}):(0,a.jsx)("h2",{children:"Our Latest Insights"}),(0,a.jsx)(l.Z,{className:"mt-5",children:(0,a.jsx)(n.Z,{className:"center",children:s.map(e=>{let t=e.type,s=e.slug;return(0,a.jsx)(i.Z,{sm:6,lg:4,xs:6,md:6,children:(0,a.jsx)(d(),{href:"page"==t?s:t+"/"+s,className:"pr-text text-decoration-none",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(o.Z.Img,{variant:"top",src:e.featured_img_src}),(0,a.jsxs)(o.Z.Body,{className:"text-start",style:{height:"6em"},children:[(0,a.jsx)("span",{className:"badge text-bg-warning mb-3",children:t}),(0,a.jsx)(o.Z.Title,{className:"fs-6",children:e.title})]}),(0,a.jsx)(o.Z.Body,{className:"text-start mt-4",children:(0,a.jsx)(o.Z.Link,{className:"readmore",children:"Read More"})})]})})},e.id)})})})]})}},2494:function(e,t,s){var a=s(5893),r=s(7294),l=s(682),n=s(4051),i=s(1555),o=s(5005);s(1664);var c=s(1181);t.Z=function(e){let{tags:t}=e,[s,d]=(0,r.useState)([]),[u,m]=(0,r.useState)(!1),h=async()=>{let e="";e="".concat(c.LB,"all-insights?tag=").concat(t);try{let s=await fetch(e),a=await s.json();console.log(a.length),d(a),a.length>1&&m(!0)}catch(r){console.log(r)}};return(0,r.useEffect)(()=>{h()},[]),(0,a.jsxs)(l.Z,{className:"wbg-sun text-center d-flex flex-column justify-content-center p-5",children:[(0,a.jsx)("h2",{className:"text-white",children:"Discover related resources curated just for you"}),(0,a.jsx)(n.Z,{className:"center",children:s.map((e,t)=>{let s=e.type;return e.slug,(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{sm:3,children:(0,a.jsx)(o.Z,{className:"w-btn capital mb-2",href:"#insights",children:s})})})})})]})}},1181:function(e){e.exports=JSON.parse('{"LB":"https://elementor.ivistasolutions.biz/wp-json/wp/v2/"}')}}]);