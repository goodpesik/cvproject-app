(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{285:(e,a,t)=>{"use strict";t.d(a,{$:()=>l,r:()=>o});var n=t(5155);t(2115);var s=t(9708),i=t(2085),r=t(9434);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-slate-950 focus-visible:ring-slate-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900",{variants:{variant:{default:"bg-slate-900 text-slate-50 shadow-xs hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-white shadow-xs hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-500/60 dark:bg-red-900 dark:hover:bg-red-900/90 dark:focus-visible:ring-red-900/20 dark:dark:focus-visible:ring-red-900/40 dark:dark:bg-red-900/60",outline:"border bg-white shadow-xs hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-200/30 dark:border-slate-200 dark:hover:bg-slate-200/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:dark:bg-slate-800/30 dark:dark:border-slate-800 dark:dark:hover:bg-slate-800/50",secondary:"bg-slate-100 text-slate-900 shadow-xs hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-100/50 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:dark:hover:bg-slate-800/50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:a,variant:t,size:i,asChild:l=!1,...d}=e,c=l?s.DX:"button";return(0,n.jsx)(c,{"data-slot":"button",className:(0,r.cn)(o({variant:t,size:i,className:a})),...d})}},1227:(e,a,t)=>{"use strict";t.d(a,{J:()=>o,UserProvider:()=>r});var n=t(5155),s=t(2115);let i=(0,s.createContext)(null),r=e=>{let{children:a}=e,[t,r]=(0,s.useState)(null);return(0,n.jsx)(i.Provider,{value:{user:t,setUser:r},children:a})},o=()=>{let e=(0,s.useContext)(i);if(!e)throw Error("useUser must be used within a UserProvider");return e}},1886:(e,a,t)=>{"use strict";t.d(a,{K:()=>s,P:()=>n});var n=function(e){return e.Email="Email",e.Phone="Phone",e.Text="Text",e.Link="Link",e.Instagram="Instagram",e.Facebook="Facebook",e.LinkedIn="LinkedIn",e.GitHub="GitHub",e.Twitter="Twitter",e.YouTube="YouTube",e.GitLab="GitLab",e}({});let s=[{type:"Email",icon:"/icons/mail.svg",alt:"email"},{type:"Text",icon:"/icons/location.svg",alt:"Location"},{type:"Phone",icon:"/icons/phone.svg",alt:"Phone"},{type:"Twitter",icon:"/icons/twitter.svg",alt:"twitter"},{type:"LinkedIn",icon:"/icons/linkedin.svg",alt:"linkedin"},{type:"Instagram",icon:"/icons/instagram.svg",alt:"instagram"},{type:"Facebook",icon:"/icons/facebook.svg",alt:"facebook"},{type:"GitHub",icon:"/icons/github.svg",alt:"github"},{type:"YouTube",icon:"/icons/youtube.svg",alt:"youtube"},{type:"GitLab",icon:"/icons/gitlab.svg",alt:"gitlab"}]},2217:(e,a,t)=>{"use strict";t.d(a,{QO:()=>n,Ri:()=>s,TV:()=>i,Yj:()=>r});let n="auth",s=e=>{let a=document.cookie.match(new RegExp("(^| )".concat(e,"=([^;]+)")));if(a)return a[2]},i=(e,a,t)=>{document.cookie="".concat(e,"=").concat(a,"; path=/; ").concat(t?"domain=".concat(t,";"):""," samesite=strict;")},r=(e,a)=>{document.cookie="".concat(e,"=; path=/; ").concat(a?"domain=".concat(a,";"):""," expires=Thu, 01 Jan 1970 00:00:01 GMT;")}},2380:(e,a,t)=>{"use strict";t.d(a,{s:()=>n});let n=(0,t(5453).v)(e=>({loadingCount:0,start:()=>e(e=>({loadingCount:e.loadingCount+1})),stop:()=>e(e=>({loadingCount:Math.max(0,e.loadingCount-1)}))}))},3179:(e,a,t)=>{"use strict";t.d(a,{g:()=>n});let n=[{name:"Reading",icon:"/icons/reading.svg",id:"778c20d6-f927-4105-b17d-19be263f1527"},{name:"Traveling",icon:"/icons/traveling.svg",id:"ba98fd2d-35a8-476f-9c46-1999d0864b65"},{name:"Music",icon:"/icons/music.svg",id:"2d669efd-71c2-4269-8f40-4405e3a81548"},{name:"Sport",icon:"/icons/sport.svg",id:"59bc967b-109c-4828-a2fd-caa8dd811e04"},{name:"Cooking",icon:"/icons/cooking.svg",id:"6e9198e4-cdff-4100-8890-f5f031df5b14"},{name:"Photography",icon:"/icons/photography.svg",id:"2a52c48a-eff3-4238-8ccb-4a147de05391"},{name:"Dogs",icon:"/icons/dog.svg",id:"d01beab4-cb71-4752-86a2-b6904b867c38"},{name:"Cats",icon:"/icons/cat.svg",id:"d49dad93-a431-4bc9-9466-45090048a827"},{name:"Animals",icon:"/icons/paw.svg",id:"a096da6b-f46c-4a3f-9419-401817f136e4"},{name:"Piano",icon:"/icons/piano.svg",id:"3d6d4c95-f250-4dbf-b094-15800e0a94aa"},{name:"Gardening",icon:"/icons/gardening.svg",id:"d606d301-bbf3-4523-bb84-0e4dc0d5a269"},{name:"Writing",icon:"/icons/writing.svg",id:"43982a18-47e7-47ea-a150-884f77d6ff42"},{name:"Gaming",icon:"/icons/gaming.svg",id:"b6453f0b-0ee6-4912-b71a-5515e7d5ffd2"},{name:"Hiking",icon:"/icons/hiking.svg",id:"1d705388-349b-4003-a1c8-4a10f24271d9"},{name:"Fishing",icon:"/icons/fishing.svg",id:"810c77b9-e8b1-4d5d-879e-2b7c3abbe6c4"},{name:"Dancing",icon:"/icons/dancing.svg",id:"0c5d4746-30c5-4e64-a1be-44c50b6588ee"},{name:"Astronomy",icon:"/icons/astronomy.svg",id:"b9904321-cd09-4e00-8789-1df5e8cc15ac"},{name:"Cycling",icon:"/icons/cycling.svg",id:"a6617051-ed57-41f0-90e2-c03990e900c4"},{name:"Chess",icon:"/icons/chess.svg",id:"7af0d4c6-22e9-4e5a-bf89-6ff5804af44e"},{name:"Robotics",icon:"/icons/robotics.svg",id:"8efad4f5-c703-499d-b244-be7e73e4c5ba"}]},3334:(e,a,t)=>{"use strict";t.d(a,{default:()=>ed});var n=t(5155),s=t(2177),i=t(5594),r=t(221),o=t(2115),l=t(9434);function d(e){let{className:a,type:t,...s}=e;return(0,n.jsx)("input",{type:t,"data-slot":"input",className:(0,l.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...s})}function c(e){let{className:a,...t}=e;return(0,n.jsx)("textarea",{"data-slot":"textarea",className:(0,l.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),...t})}var u=t(285),g=t(1886),m=t(4073);function h(e){let{className:a,defaultValue:t,value:s,min:i=0,max:r=100,...d}=e,c=o.useMemo(()=>Array.isArray(s)?s:Array.isArray(t)?t:[i,r],[s,t,i,r]);return(0,n.jsxs)(m.bL,{"data-slot":"slider",defaultValue:t,value:s,min:i,max:r,className:(0,l.cn)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",a),...d,children:[(0,n.jsx)(m.CC,{"data-slot":"slider-track",className:(0,l.cn)("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:(0,n.jsx)(m.Q6,{"data-slot":"slider-range",className:(0,l.cn)("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:c.length},(e,a)=>(0,n.jsx)(m.zi,{"data-slot":"slider-thumb",className:"border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},a))]})}var p=t(9708);let x=s.Op,v=o.createContext({}),b=e=>{let{...a}=e;return(0,n.jsx)(v.Provider,{value:{name:a.name},children:(0,n.jsx)(s.xI,{...a})})},f=()=>{let e=o.useContext(v),a=o.useContext(j),{getFieldState:t}=(0,s.xW)(),n=(0,s.lN)({name:e.name}),i=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:r}=a;return{id:r,name:e.name,formItemId:"".concat(r,"-form-item"),formDescriptionId:"".concat(r,"-form-item-description"),formMessageId:"".concat(r,"-form-item-message"),...i}},j=o.createContext({});function y(e){let{className:a,...t}=e,s=o.useId();return(0,n.jsx)(j.Provider,{value:{id:s},children:(0,n.jsx)("div",{"data-slot":"form-item",className:(0,l.cn)("grid gap-2",a),...t})})}function k(e){let{...a}=e,{error:t,formItemId:s,formDescriptionId:i,formMessageId:r}=f();return(0,n.jsx)(p.DX,{"data-slot":"form-control",id:s,"aria-describedby":t?"".concat(i," ").concat(r):"".concat(i),"aria-invalid":!!t,...a})}function w(e){var a;let{className:t,...s}=e,{error:i,formMessageId:r}=f(),o=i?String(null!==(a=null==i?void 0:i.message)&&void 0!==a?a:""):s.children;return o?(0,n.jsx)("p",{"data-slot":"form-message",id:r,className:(0,l.cn)("text-red-500 text-sm dark:text-red-900",t),...s,children:o}):null}var z=t(1146),N=t(6474),C=t(5196),I=t(7863);function A(e){let{...a}=e;return(0,n.jsx)(z.bL,{"data-slot":"select",...a})}function E(e){let{...a}=e;return(0,n.jsx)(z.WT,{"data-slot":"select-value",...a})}function F(e){let{className:a,size:t="default",children:s,...i}=e;return(0,n.jsxs)(z.l9,{"data-slot":"select-trigger","data-size":t,className:(0,l.cn)("border-slate-200 data-[placeholder]:text-slate-500 [&_svg:not([class*='text-'])]:text-slate-500 focus-visible:border-slate-950 focus-visible:ring-slate-950/50 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 dark:bg-slate-200/30 dark:hover:bg-slate-200/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 dark:border-slate-800 dark:data-[placeholder]:text-slate-400 dark:[&_svg:not([class*='text-'])]:text-slate-400 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900 dark:dark:bg-slate-800/30 dark:dark:hover:bg-slate-800/50",a),...i,children:[s,(0,n.jsx)(z.In,{asChild:!0,children:(0,n.jsx)(N.A,{className:"size-4 opacity-50"})})]})}function P(e){let{className:a,children:t,position:s="popper",...i}=e;return(0,n.jsx)(z.ZL,{children:(0,n.jsxs)(z.UC,{"data-slot":"select-content",className:(0,l.cn)("bg-white select-settings text-slate-950 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-slate-200 shadow-md dark:bg-slate-950 dark:text-slate-50 dark:border-slate-800","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:s,...i,children:[(0,n.jsx)(L,{}),(0,n.jsx)(z.LM,{className:(0,l.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:t}),(0,n.jsx)(_,{})]})})}function S(e){let{className:a,children:t,...s}=e;return(0,n.jsxs)(z.q7,{"data-slot":"select-item",className:(0,l.cn)("select-item focus:bg-slate-100 focus:text-slate-900 [&_svg:not([class*='text-'])]:text-slate-500 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:[&_svg:not([class*='text-'])]:text-slate-400",a),...s,children:[(0,n.jsx)("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:(0,n.jsx)(z.VF,{children:(0,n.jsx)(C.A,{className:"size-4"})})}),(0,n.jsx)(z.p4,{children:t})]})}function L(e){let{className:a,...t}=e;return(0,n.jsx)(z.PP,{"data-slot":"select-scroll-up-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",a),...t,children:(0,n.jsx)(I.A,{className:"size-4"})})}function _(e){let{className:a,...t}=e;return(0,n.jsx)(z.wn,{"data-slot":"select-scroll-down-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",a),...t,children:(0,n.jsx)(N.A,{className:"size-4"})})}var D=function(e){return e.Contact="Contact section",e.Skills="Skills section",e.Experience="Experience section",e.Education="Education section",e.Hobby="Hobby section",e.Languages="Languages section",e}({}),V=t(3179),U=t(1227),R=t(8326),M=t(5695),T=t(6671),G=t(3159),$=t(237),O=t(4416);function q(e){let{...a}=e;return(0,n.jsx)($.bL,{"data-slot":"dialog",...a})}function H(e){let{...a}=e;return(0,n.jsx)($.ZL,{"data-slot":"dialog-portal",...a})}function Y(e){let{className:a,...t}=e;return(0,n.jsx)($.hJ,{"data-slot":"dialog-overlay",className:(0,l.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",a),...t})}function J(e){let{className:a,children:t,...s}=e;return(0,n.jsxs)(H,{"data-slot":"dialog-portal",children:[(0,n.jsx)(Y,{}),(0,n.jsxs)($.UC,{"data-slot":"dialog-content",className:(0,l.cn)("dialog bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-neutral-200 p-6 shadow-lg duration-200 sm:max-w-lg dark:bg-neutral-950 dark:border-neutral-800",a),...s,children:[t,(0,n.jsxs)($.bm,{className:"ring-offset-white focus:ring-neutral-950 data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",children:[(0,n.jsx)(O.A,{}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function Z(e){let{className:a,...t}=e;return(0,n.jsx)("div",{"data-slot":"dialog-header",className:(0,l.cn)("flex flex-col gap-2 text-center sm:text-left",a),...t})}function B(e){let{className:a,...t}=e;return(0,n.jsx)($.hE,{"data-slot":"dialog-title",className:(0,l.cn)("text-lg leading-none font-semibold",a),...t})}let Q=e=>new Promise((a,t)=>{let n=new Image;n.addEventListener("load",()=>a(n)),n.addEventListener("error",e=>t(e)),n.setAttribute("crossOrigin","anonymous"),n.src=e});function W(e){return e*Math.PI/180}async function K(e,a){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{horizontal:!1,vertical:!1},s=await Q(e),i=document.createElement("canvas"),r=i.getContext("2d");if(!r)return null;let o=W(t),{width:l,height:d}=function(e,a,t){let n=W(t);return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*a),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*a)}}(s.width,s.height,t);i.width=l,i.height=d,r.translate(l/2,d/2),r.rotate(o),r.scale(n.horizontal?-1:1,n.vertical?-1:1),r.translate(-s.width/2,-s.height/2),r.drawImage(s,0,0);let c=document.createElement("canvas"),u=c.getContext("2d");return u?(c.width=a.width,c.height=a.height,u.drawImage(i,a.x,a.y,a.width,a.height,0,0,a.width,a.height),new Promise((e,a)=>{c.toBlob(a=>{e(a)},"image/png")})):null}let X=e=>{let{onComplete:a,isEdit:t,cvId:s}=e,[i,r]=(0,o.useState)(!1),[l,d]=(0,o.useState)({x:0,y:0}),[c,g]=(0,o.useState)(1),[m,h]=(0,o.useState)(null),[p,x]=(0,o.useState)(null),[v,b]=(0,o.useState)(null),f=(0,o.useRef)(null),j=!1,y=async()=>{j=!0,r(!1);try{let e=await K(v,m);x(e);let n=await (0,R.gN)(e,t,s);null==a||a(n.data),j=!1}catch(e){j=!1,b(null),console.error(e)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"section",children:(0,n.jsx)(u.$,{variant:"outline",onClick:()=>{var e;null===(e=f.current)||void 0===e||e.click()},children:"Choose the image"})}),(0,n.jsx)("input",{ref:f,type:"file",accept:".png,.jpeg,.jpg",onChange:e=>{var a;r(!0),b(null);let t=null===(a=e.target.files)||void 0===a?void 0:a[0];t&&b(URL.createObjectURL(t))},className:"hidden"}),(0,n.jsx)(q,{open:i,onOpenChange:e=>{r(e),e||j||b(null)},children:(0,n.jsxs)(J,{className:"sm:max-w-[425px]",children:[(0,n.jsx)(Z,{children:(0,n.jsx)(B,{children:"Crop Image"})}),(0,n.jsxs)("div",{className:"crop-container",children:[v,(0,n.jsx)(G.Ay,{image:null!=v?v:"",crop:l,zoom:c,aspect:1,onCropChange:d,onCropComplete:(e,a)=>{h(a)},onZoomChange:g})]}),(0,n.jsx)(u.$,{variant:"outline",onClick:y,children:"Upload"})]})})]})};var ee=t(6766),ea=t(6903);let et=i.z.object({type:i.z.nativeEnum(g.P),value:i.z.string().min(1,{message:"Field is required"})}).superRefine((e,a)=>{e.type!==g.P.Email||i.z.string().email().safeParse(e.value).success||a.addIssue({path:["value"],code:i.z.ZodIssueCode.custom,message:"Invalid email address"}),e.type!==g.P.Phone||/^\+?\d{7,15}$/.test(e.value)||a.addIssue({path:["value"],code:i.z.ZodIssueCode.custom,message:"Invalid phone number"})}),en=i.z.object({name:i.z.string().min(1,{message:"Field is required."}),level:i.z.number()}),es=i.z.object({name:i.z.string().min(1,{message:"Field is required."}),level:i.z.number()}),ei=i.z.object({school:i.z.string().min(1),faculty:i.z.string().optional(),degree:i.z.string().min(1),year:i.z.string().min(1),city:i.z.string().optional(),country:i.z.string().min(1)}),er=i.z.object({iconId:i.z.string().min(1)}),eo=i.z.object({company:i.z.string().min(1),startDate:i.z.string().optional(),endDate:i.z.string().optional(),city:i.z.string().optional(),country:i.z.string().optional(),role:i.z.string().min(1),description:i.z.string().min(1)}),el=i.z.object({contacts:i.z.array(et).optional(),skills:i.z.array(en).optional(),education:i.z.array(ei).optional(),hobby:i.z.array(er).optional(),summaryDescription:i.z.string().optional(),positionDescription:i.z.string().optional(),name:i.z.string().min(1),experience:i.z.array(eo).optional(),languages:i.z.array(es).optional(),imageName:i.z.string().optional(),imageUrl:i.z.string().optional()});function ed(e){let{isEdit:a,cvId:t}=e,i=(0,s.mN)({resolver:(0,r.u)(el),mode:"onChange"}),{user:l}=(0,U.J)(),m=(0,M.useRouter)(),[p,v]=o.useState(0),[f,j]=o.useState(null),{watch:z,register:N,handleSubmit:C,control:I,formState:{isValid:L,errors:_}}=i;(0,o.useEffect)(()=>{let e=z(()=>{console.log("Errors",_)});return()=>e.unsubscribe()},[z,L,_]),(0,o.useEffect)(()=>{a&&""!==t&&(0,R._2)(t).then(e=>{j(e.data),i.reset({name:e.data.name,imageName:e.data.imageName,imageUrl:e.data.imageUrl,...e.data.items})})},[a,t,p]);let G=(e,a,t,s,i)=>(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h2",{children:e}),a.map((a,t)=>(0,n.jsxs)("div",{className:"cv-row flex flex-row gap-2 border p-2 rounded-md",children:[i(t),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(u.$,{type:"button",variant:"outline",onClick:()=>s(t),children:"Remove"})})]},"".concat(e,"-").concat(t))),(0,n.jsx)(u.$,{type:"button",variant:"outline",onClick:()=>t(e===D.Skills||e===D.Languages?{name:"",level:50}:{}),children:"Add"})]}),$=(0,s.jz)({control:I,name:"contacts"}),O=(0,s.jz)({control:I,name:"skills"}),q=(0,s.jz)({control:I,name:"education"}),H=(0,s.jz)({control:I,name:"hobby"}),Y=(0,s.jz)({control:I,name:"experience"}),J=(0,s.jz)({control:I,name:"languages"}),Z=i.watch("imageUrl");i.watch("imageName");let B=()=>{m.push("/")},Q=async e=>{if(!l)return;let n={contacts:e.contacts,skills:e.skills,education:e.education,hobby:e.hobby,positionDescription:e.positionDescription,summaryDescription:e.summaryDescription,experience:e.experience,languages:e.languages};a&&f?(await (0,R.LI)(t,{...f,name:e.name,items:n}),(0,T.oR)("CV has been updated successfully")):(await (0,R.GR)({id:"",items:n,name:e.name,imageName:e.imageName,imageUrl:e.imageUrl,createdBy:l.id}),(0,T.oR)("CV has been created successfully")),B()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"main-container",children:[(0,n.jsx)("div",{className:"controls-bar flex flex-row",children:(0,n.jsx)(u.$,{variant:"outline",onClick:B,children:"Back"})}),(0,n.jsx)("h1",{className:"title",children:a?"Edit CV":"Create CV"}),Z?(0,n.jsx)("div",{className:"image-section",children:(0,n.jsx)("div",{className:"image",children:(0,n.jsx)(ee.default,{src:"".concat(ea.Y,"/").concat(Z),alt:"Photo",width:150,height:150,priority:!0,className:"rounded-full"})})}):(0,n.jsx)(X,{isEdit:a,cvId:t,onComplete:e=>{a?v(e=>e+1):(i.setValue("imageUrl",e.imageUrl),i.setValue("imageName",e.imageName))}}),(0,n.jsx)(x,{...i,children:(0,n.jsxs)("form",{onSubmit:C(Q),className:"space-y-6",children:[(0,n.jsx)(d,{...N("name"),placeholder:"Enter CV name"}),(0,n.jsx)(c,{...N("summaryDescription"),placeholder:"Summary description"}),(0,n.jsx)(c,{...N("positionDescription"),placeholder:"Desired position"}),[{key:D.Contact,array:$,renderFields:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("div",{className:"select",children:(0,n.jsx)(b,{control:I,name:"contacts.".concat(e,".type"),render:e=>{let{field:a}=e;return(0,n.jsxs)(y,{children:[(0,n.jsxs)(A,{onValueChange:a.onChange,defaultValue:a.value,children:[(0,n.jsx)(k,{children:(0,n.jsx)(F,{children:(0,n.jsx)(E,{placeholder:"Select contact type"})})}),(0,n.jsx)(P,{children:Object.values(g.P).map(e=>(0,n.jsx)(S,{value:e,children:e},e))})]}),(0,n.jsx)(w,{})]})}})})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(d,{...N("contacts.".concat(e,".value")),placeholder:"value"})})]})},{key:D.Skills,array:O,renderFields:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{...N("skills.".concat(e,".name")),placeholder:"Skill Name"}),(0,n.jsx)(s.xI,{name:"skills.".concat(e,".level"),control:I,render:e=>{let{field:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:[a.value]}),(0,n.jsx)("div",{className:"slider-container",children:(0,n.jsx)(h,{min:0,max:100,step:1,value:[a.value],onValueChange:e=>a.onChange(e[0])})})]})}})]})},{key:D.Languages,array:J,renderFields:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{...N("languages.".concat(e,".name")),placeholder:"Language"}),(0,n.jsx)(s.xI,{name:"languages.".concat(e,".level"),control:I,render:e=>{let{field:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:[a.value]}),(0,n.jsx)("div",{className:"slider-container",children:(0,n.jsx)(h,{min:0,max:100,step:1,value:[a.value],onValueChange:e=>a.onChange(e[0])})})]})}})]})},{key:D.Experience,array:Y,renderFields:e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"experience-section flex flex-col",children:[(0,n.jsx)(d,{...N("experience.".concat(e,".company")),placeholder:"Company"}),(0,n.jsx)(d,{...N("experience.".concat(e,".role")),placeholder:"Role"}),(0,n.jsx)(d,{...N("experience.".concat(e,".startDate")),placeholder:"Start year"}),(0,n.jsx)(d,{...N("experience.".concat(e,".endDate")),placeholder:"End year"}),(0,n.jsx)(c,{...N("experience.".concat(e,".description")),placeholder:"Description"})]})})},{key:D.Education,array:q,renderFields:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{...N("education.".concat(e,".school")),placeholder:"School"}),(0,n.jsx)(d,{...N("education.".concat(e,".degree")),placeholder:"Degree"}),(0,n.jsx)(d,{...N("education.".concat(e,".year")),placeholder:"Year"}),(0,n.jsx)(d,{...N("education.".concat(e,".country")),placeholder:"Country"})]})},{key:D.Hobby,array:H,renderFields:e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b,{control:I,name:"hobby.".concat(e,".iconId"),render:e=>{let{field:a}=e;return(0,n.jsxs)(y,{children:[(0,n.jsxs)(A,{onValueChange:a.onChange,defaultValue:a.value,children:[(0,n.jsx)(k,{children:(0,n.jsx)(F,{children:(0,n.jsx)(E,{placeholder:"Select a hobby"})})}),(0,n.jsx)(P,{children:V.g.map(e=>(0,n.jsx)(S,{value:e.id,children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:e.icon,alt:e.name,className:"w-4 h-4 mr-2"}),e.name]})},e.id))})]}),(0,n.jsx)(w,{})]})}})})}].map(e=>{let{key:a,array:t,renderFields:s}=e;return(0,n.jsx)("div",{children:G(a,t.fields,t.append,t.remove,s)},a)}),(0,n.jsx)(u.$,{type:"submit",variant:"outline",children:"Submit"})]})})]})})}},6903:(e,a,t)=>{"use strict";let n;t.d(a,{A:()=>d,Y:()=>o});var s=t(3464),i=t(2217);let r="https://goodpesyk-api-cv-project.duckdns.org",o="".concat(r),l=s.A.create({baseURL:r});n=t(2380).s,l.interceptors.request.use(e=>(n&&n.getState().start(),e)),l.interceptors.response.use(e=>(n&&n.getState().stop(),e),e=>(n&&n.getState().stop(),Promise.reject(e))),l.interceptors.request.use(e=>{var a;let t=null===(a=JSON.parse((0,i.Ri)(i.QO)||"{}"))||void 0===a?void 0:a.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e.isKey&&(e.headers.Authorization="c61a0c6d-1448-4302-b216-e00f980b7f23"),e},e=>Promise.reject(e)),l.interceptors.response.use(e=>e,e=>{var a;let t=null===(a=e.response)||void 0===a?void 0:a.status;return(403===t||401===t)&&(e.isAuthError=!0),Promise.reject(e)});let d=l},8326:(e,a,t)=>{"use strict";t.d(a,{Cf:()=>s,GR:()=>r,LI:()=>o,Mu:()=>d,VV:()=>g,WU:()=>i,_2:()=>c,gN:()=>u,wq:()=>l});var n=t(6903);let s=e=>n.A.get("/users/".concat(e)),i=e=>{let a={id:e.uid,name:e.displayName||""};return n.A.post("/users",a)},r=e=>n.A.post("/cv-data",e),o=(e,a)=>n.A.put("/cv-data/".concat(e),a),l=e=>n.A.delete("/cv-data/".concat(e)),d=e=>n.A.get("/cv-data/all/".concat(e.id)),c=(e,a)=>n.A.get("/cv-data/".concat(e),{isKey:a}),u=(e,a,t)=>{let s=new FormData;return s.append("file",e),n.A.post("/cv-data/photo?isEdit=".concat(a,"&cvId=").concat(""===t?"empty":t),s,{headers:{"Content-Type":"multipart/form-data"}})},g=e=>n.A.post("/pdf/generate?url=".concat(e),null,{responseType:"blob"}).then(e=>e.data)},8624:(e,a,t)=>{Promise.resolve().then(t.bind(t,3334))},9434:(e,a,t)=>{"use strict";t.d(a,{cn:()=>i});var n=t(2596),s=t(9688);function i(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,s.QP)((0,n.$)(a))}}}]);