"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{901:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return o}});let o=r(8229)._(r(2115)).default.createContext(null)},1193:(e,t)=>{function r(e){var t;let{config:r,src:o,width:n,quality:l}=e,i=l||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(o)+"&w="+n+"&q="+i+(o.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r.__next_img_default=!0;let o=r},1469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let o=r(8229),n=r(8883),l=r(3063),i=o._(r(1193));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=l.Image},2085:(e,t,r)=>{r.d(t,{F:()=>i});var o=r(2596);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,i=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],o=null==a?void 0:a[e];if(null===t)return null;let l=n(t)||n(o);return i[e][l]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return l(e,s,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...d}[t]):({...a,...d})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},2464:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let o=r(8229)._(r(2115)).default.createContext({})},2596:(e,t,r)=>{r.d(t,{$:()=>o});function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o);return n}(e))&&(o&&(o+=" "),o+=t);return o}},3063:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let o=r(8229),n=r(6966),l=r(5155),i=n._(r(2115)),a=o._(r(7650)),s=o._(r(5564)),d=r(8883),c=r(5840),u=r(6752);r(3230);let f=r(901),p=o._(r(1193)),m=r(6654),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,o,n,l,i){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}}))}function h(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:o,sizes:n,height:a,width:s,decoding:d,className:c,style:u,fetchPriority:f,placeholder:p,loading:b,unoptimized:v,fill:y,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:_,setShowAltText:k,sizesInput:j,onLoad:z,onError:C,...O}=e,P=(0,i.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&g(e,p,w,x,_,v,j))},[r,p,w,x,_,C,v,j]),S=(0,m.useMergedRef)(t,P);return(0,l.jsx)("img",{...O,...h(f),loading:b,width:s,height:a,decoding:d,"data-nimg":y?"fill":"1",className:c,style:u,sizes:n,srcSet:o,src:r,ref:S,onLoad:e=>{g(e.currentTarget,p,w,x,_,v,j)},onError:e=>{k(!0),"empty"!==p&&_(!0),C&&C(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,o={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,o),null):(0,l.jsx)(s.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...o},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),o=(0,i.useContext)(u.ImageConfigContext),n=(0,i.useMemo)(()=>{var e;let t=b||o||c.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),n=t.deviceSizes.sort((e,t)=>e-t),l=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:n,qualities:l}},[o]),{onLoad:a,onLoadingComplete:s}=e,m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let g=(0,i.useRef)(s);(0,i.useEffect)(()=>{g.current=s},[s]);let[h,w]=(0,i.useState)(!1),[x,_]=(0,i.useState)(!1),{props:k,meta:j}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:h,showAltText:x});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{...k,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),j.priority?(0,l.jsx)(y,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5029:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let o=r(2115),n=o.useLayoutEffect,l=o.useEffect;function i(e){let{headManager:t,reduceComponentsToState:r}=e;function i(){if(t&&t.mountedInstances){let n=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return n(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),n(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5100:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:l,objectFit:i}=e,a=o?40*o:t,s=n?40*n:r,d=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5564:(e,t,r)=>{var o=r(9509);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let n=r(8229),l=r(6966),i=r(5155),a=l._(r(2115)),s=n._(r(5029)),d=r(2464),c=r(2830),u=r(7544);function f(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(3230);let m=["name","httpEquiv","charSet","itemProp"];function b(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,o={};return n=>{let l=!0,i=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){i=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?l=!1:t.add(n.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(n.props.hasOwnProperty(t))if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=n.props[t],r=o[t]||new Set;("name"!==t||!i)&&r.has(e)?l=!1:(r.add(e),o[t]=r)}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(o.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(d.AmpStateContext),o=(0,a.useContext)(c.HeadManagerContext);return(0,i.jsx)(s.default,{reduceComponentsToState:b,headManager:o,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return o}});let r=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},6101:(e,t,r)=>{r.d(t,{s:()=>i,t:()=>l});var o=r(2115);function n(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function l(...e){return t=>{let r=!1,o=e.map(e=>{let o=n(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():n(e[t],null)}}}}function i(...e){return o.useCallback(l(...e),e)}},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=r(2115);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=l(e,o)),t&&(n.current=l(t,o))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6752:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let o=r(8229)._(r(2115)),n=r(5840),l=o.default.createContext(n.imageConfigDefault)},6766:(e,t,r)=>{r.d(t,{default:()=>n.a});var o=r(1469),n=r.n(o)},7544:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:o=!1}=void 0===e?{}:e;return t||r&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},8883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(3230);let o=r(5100),n=r(5840);function l(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let s,d,c,{src:u,sizes:f,unoptimized:p=!1,priority:m=!1,loading:b,className:g,quality:h,width:v,height:y,fill:w=!1,style:x,overrideSrc:_,onLoad:k,onLoadingComplete:j,placeholder:z="empty",blurDataURL:C,fetchPriority:O,decoding:P="async",layout:S,objectFit:E,objectPosition:M,lazyBoundary:R,lazyRoot:I,...N}=e,{imgConf:A,showAltText:D,blurComplete:G,defaultLoader:T}=t,W=A||n.imageConfigDefault;if("allSizes"in W)s=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t),o=null==(r=W.qualities)?void 0:r.sort((e,t)=>e-t);s={...W,allSizes:e,deviceSizes:t,qualities:o}}if(void 0===T)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let $=N.loader||T;delete N.loader,delete N.srcSet;let F="__next_img_default"in $;if(F){if("custom"===s.loader)throw Object.defineProperty(Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=$;$=t=>{let{config:r,...o}=t;return e(o)}}if(S){"fill"===S&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!f&&(f=t)}let L="",U=i(v),V=i(y);if((a=u)&&"object"==typeof a&&(l(a)||void 0!==a.src)){let e=l(u)?u.default:u;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(d=e.blurWidth,c=e.blurHeight,C=C||e.blurDataURL,L=e.src,!w)if(U||V){if(U&&!V){let t=U/e.width;V=Math.round(e.height*t)}else if(!U&&V){let t=V/e.height;U=Math.round(e.width*t)}}else U=e.width,V=e.height}let q=!m&&("lazy"===b||void 0===b);(!(u="string"==typeof u?u:L)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,q=!1),s.unoptimized&&(p=!0),F&&!s.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(p=!0);let B=i(h),X=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:M}:{},D?{}:{color:"transparent"},x),H=G||"empty"===z?null:"blur"===z?'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:U,heightInt:V,blurWidth:d,blurHeight:c,blurDataURL:C||"",objectFit:X.objectFit})+'")':'url("'+z+'")',J=H?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Y=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:l,sizes:i,loader:a}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:o,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,i),c=s.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:s.map((e,o)=>a({config:t,src:r,quality:l,width:e})+" "+("w"===d?e:o+1)+d).join(", "),src:a({config:t,src:r,quality:l,width:s[c]})}}({config:s,src:u,unoptimized:p,width:U,quality:B,sizes:f,loader:$});return{props:{...N,loading:q?"lazy":b,fetchPriority:O,width:U,height:V,decoding:P,className:g,style:{...X,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:_||Y.src},meta:{unoptimized:p,priority:m,placeholder:z,fill:w}}}},9688:(e,t,r)=>{r.d(t,{QP:()=>eu});let o=e=>{let t=a(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),n(r,t)||i(e)},getConflictingClassGroupIds:(e,t)=>{let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},n=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=e.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let t=l.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},a=e=>{let{theme:t,classGroups:r}=e,o={nextPart:new Map,validators:[]};for(let e in r)s(r[e],o,e,t);return o},s=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:d(t,e)).classGroupId=r;return}if("function"==typeof e){if(c(e)){s(e(o),t,r,o);return}t.validators.push({validator:e,classGroupId:r});return}Object.entries(e).forEach(([e,n])=>{s(n,d(t,e),r,o)})})},d=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},c=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,n=(n,l)=>{r.set(n,l),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},f=e=>{let{prefix:t,experimentalParseClassName:r}=e,o=e=>{let t,r=[],o=0,n=0,l=0;for(let i=0;i<e.length;i++){let a=e[i];if(0===o&&0===n){if(":"===a){r.push(e.slice(l,i)),l=i+1;continue}if("/"===a){t=i;continue}}"["===a?o++:"]"===a?o--:"("===a?n++:")"===a&&n--}let i=0===r.length?e:e.substring(l),a=p(i);return{modifiers:r,hasImportantModifier:a!==i,baseClassName:a,maybePostfixModifierPosition:t&&t>l?t-l:void 0}};if(t){let e=t+":",r=o;o=t=>t.startsWith(e)?r(t.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:t,maybePostfixModifierPosition:void 0}}if(r){let e=o;o=t=>r({className:t,parseClassName:e})}return o},p=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,m=e=>{let t=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{"["===e[0]||t[e]?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r}},b=e=>({cache:u(e.cacheSize),parseClassName:f(e),sortModifiers:m(e),...o(e)}),g=/\s+/,h=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:l}=t,i=[],a=e.trim().split(g),s="";for(let e=a.length-1;e>=0;e-=1){let t=a[e],{isExternal:d,modifiers:c,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=r(t);if(d){s=t+(s.length>0?" "+s:s);continue}let m=!!p,b=o(m?f.substring(0,p):f);if(!b){if(!m||!(b=o(f))){s=t+(s.length>0?" "+s:s);continue}m=!1}let g=l(c).join(":"),h=u?g+"!":g,v=h+b;if(i.includes(v))continue;i.push(v);let y=n(b,m);for(let e=0;e<y.length;++e){let t=y[e];i.push(h+t)}s=t+(s.length>0?" "+s:s)}return s};function v(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=y(e))&&(o&&(o+=" "),o+=t);return o}let y=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=y(e[o]))&&(r&&(r+=" "),r+=t);return r},w=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},x=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,k=/^\d+\/\d+$/,j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,O=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,P=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,S=e=>k.test(e),E=e=>!!e&&!Number.isNaN(Number(e)),M=e=>!!e&&Number.isInteger(Number(e)),R=e=>e.endsWith("%")&&E(e.slice(0,-1)),I=e=>j.test(e),N=()=>!0,A=e=>z.test(e)&&!C.test(e),D=()=>!1,G=e=>O.test(e),T=e=>P.test(e),W=e=>!F(e)&&!X(e),$=e=>ee(e,ei,D),F=e=>x.test(e),L=e=>ee(e,ea,A),U=e=>ee(e,es,E),V=e=>ee(e,er,D),q=e=>ee(e,en,T),B=e=>ee(e,D,G),X=e=>_.test(e),H=e=>et(e,ea),J=e=>et(e,ed),Y=e=>et(e,er),Z=e=>et(e,ei),Q=e=>et(e,en),K=e=>et(e,ec,!0),ee=(e,t,r)=>{let o=x.exec(e);return!!o&&(o[1]?t(o[1]):r(o[2]))},et=(e,t,r=!1)=>{let o=_.exec(e);return!!o&&(o[1]?t(o[1]):r)},er=e=>"position"===e,eo=new Set(["image","url"]),en=e=>eo.has(e),el=new Set(["length","size","percentage"]),ei=e=>el.has(e),ea=e=>"length"===e,es=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...t){let r,o,n,l=function(a){return o=(r=b(t.reduce((e,t)=>t(e),e()))).cache.get,n=r.cache.set,l=i,i(a)};function i(e){let t=o(e);if(t)return t;let l=h(e,r);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=w("color"),t=w("font"),r=w("text"),o=w("font-weight"),n=w("tracking"),l=w("leading"),i=w("breakpoint"),a=w("container"),s=w("spacing"),d=w("radius"),c=w("shadow"),u=w("inset-shadow"),f=w("drop-shadow"),p=w("blur"),m=w("perspective"),b=w("aspect"),g=w("ease"),h=w("animate"),v=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],x=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto","contain","none"],k=()=>[X,F,s],j=()=>[S,"full","auto",...k()],z=()=>[M,"none","subgrid",X,F],C=()=>["auto",{span:["full",M,X,F]},M,X,F],O=()=>[M,"auto",X,F],P=()=>["auto","min","max","fr",X,F],A=()=>["start","end","center","between","around","evenly","stretch","baseline"],D=()=>["start","end","center","stretch"],G=()=>["auto",...k()],T=()=>[S,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...k()],ee=()=>[e,X,F],et=()=>[R,H,L],er=()=>["","none","full",d,X,F],eo=()=>["",E,H,L],en=()=>["solid","dashed","dotted","double"],el=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ei=()=>["","none",p,X,F],ea=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",X,F],es=()=>["none",E,X,F],ed=()=>["none",E,X,F],ec=()=>[E,X,F],eu=()=>[S,"full",...k()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[I],breakpoint:[I],color:[N],container:[I],"drop-shadow":[I],ease:["in","out","in-out"],font:[W],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[I],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[I],shadow:[I],spacing:["px",E],text:[I],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",S,F,X,b]}],container:["container"],columns:[{columns:[E,F,X,a]}],"break-after":[{"break-after":v()}],"break-before":[{"break-before":v()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...y(),F,X]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{start:j()}],end:[{end:j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[M,"auto",X,F]}],basis:[{basis:[S,"full","auto",a,...k()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[E,S,"auto","initial","none",F]}],grow:[{grow:["",E,X,F]}],shrink:[{shrink:["",E,X,F]}],order:[{order:[M,"first","last","none",X,F]}],"grid-cols":[{"grid-cols":z()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":z()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":P()}],"auto-rows":[{"auto-rows":P()}],gap:[{gap:k()}],"gap-x":[{"gap-x":k()}],"gap-y":[{"gap-y":k()}],"justify-content":[{justify:[...A(),"normal"]}],"justify-items":[{"justify-items":[...D(),"normal"]}],"justify-self":[{"justify-self":["auto",...D()]}],"align-content":[{content:["normal",...A()]}],"align-items":[{items:[...D(),"baseline"]}],"align-self":[{self:["auto",...D(),"baseline"]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...D(),"baseline"]}],"place-self":[{"place-self":["auto",...D()]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:G()}],mx:[{mx:G()}],my:[{my:G()}],ms:[{ms:G()}],me:[{me:G()}],mt:[{mt:G()}],mr:[{mr:G()}],mb:[{mb:G()}],ml:[{ml:G()}],"space-x":[{"space-x":k()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":k()}],"space-y-reverse":["space-y-reverse"],size:[{size:T()}],w:[{w:[a,"screen",...T()]}],"min-w":[{"min-w":[a,"screen","none",...T()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[i]},...T()]}],h:[{h:["screen",...T()]}],"min-h":[{"min-h":["screen","none",...T()]}],"max-h":[{"max-h":["screen",...T()]}],"font-size":[{text:["base",r,H,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,X,U]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",R,F]}],"font-family":[{font:[J,F,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,X,F]}],"line-clamp":[{"line-clamp":[E,"none",X,U]}],leading:[{leading:[l,...k()]}],"list-image":[{"list-image":["none",X,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",X,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ee()}],"text-color":[{text:ee()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...en(),"wavy"]}],"text-decoration-thickness":[{decoration:[E,"from-font","auto",X,L]}],"text-decoration-color":[{decoration:ee()}],"underline-offset":[{"underline-offset":[E,"auto",X,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",X,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",X,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...y(),Y,V]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",Z,$]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},M,X,F],radial:["",X,F],conic:[M,X,F]},Q,q]}],"bg-color":[{bg:ee()}],"gradient-from-pos":[{from:et()}],"gradient-via-pos":[{via:et()}],"gradient-to-pos":[{to:et()}],"gradient-from":[{from:ee()}],"gradient-via":[{via:ee()}],"gradient-to":[{to:ee()}],rounded:[{rounded:er()}],"rounded-s":[{"rounded-s":er()}],"rounded-e":[{"rounded-e":er()}],"rounded-t":[{"rounded-t":er()}],"rounded-r":[{"rounded-r":er()}],"rounded-b":[{"rounded-b":er()}],"rounded-l":[{"rounded-l":er()}],"rounded-ss":[{"rounded-ss":er()}],"rounded-se":[{"rounded-se":er()}],"rounded-ee":[{"rounded-ee":er()}],"rounded-es":[{"rounded-es":er()}],"rounded-tl":[{"rounded-tl":er()}],"rounded-tr":[{"rounded-tr":er()}],"rounded-br":[{"rounded-br":er()}],"rounded-bl":[{"rounded-bl":er()}],"border-w":[{border:eo()}],"border-w-x":[{"border-x":eo()}],"border-w-y":[{"border-y":eo()}],"border-w-s":[{"border-s":eo()}],"border-w-e":[{"border-e":eo()}],"border-w-t":[{"border-t":eo()}],"border-w-r":[{"border-r":eo()}],"border-w-b":[{"border-b":eo()}],"border-w-l":[{"border-l":eo()}],"divide-x":[{"divide-x":eo()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":eo()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...en(),"hidden","none"]}],"divide-style":[{divide:[...en(),"hidden","none"]}],"border-color":[{border:ee()}],"border-color-x":[{"border-x":ee()}],"border-color-y":[{"border-y":ee()}],"border-color-s":[{"border-s":ee()}],"border-color-e":[{"border-e":ee()}],"border-color-t":[{"border-t":ee()}],"border-color-r":[{"border-r":ee()}],"border-color-b":[{"border-b":ee()}],"border-color-l":[{"border-l":ee()}],"divide-color":[{divide:ee()}],"outline-style":[{outline:[...en(),"none","hidden"]}],"outline-offset":[{"outline-offset":[E,X,F]}],"outline-w":[{outline:["",E,H,L]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,K,B]}],"shadow-color":[{shadow:ee()}],"inset-shadow":[{"inset-shadow":["none",X,F,u]}],"inset-shadow-color":[{"inset-shadow":ee()}],"ring-w":[{ring:eo()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ee()}],"ring-offset-w":[{"ring-offset":[E,L]}],"ring-offset-color":[{"ring-offset":ee()}],"inset-ring-w":[{"inset-ring":eo()}],"inset-ring-color":[{"inset-ring":ee()}],opacity:[{opacity:[E,X,F]}],"mix-blend":[{"mix-blend":[...el(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":el()}],filter:[{filter:["","none",X,F]}],blur:[{blur:ei()}],brightness:[{brightness:[E,X,F]}],contrast:[{contrast:[E,X,F]}],"drop-shadow":[{"drop-shadow":["","none",f,X,F]}],grayscale:[{grayscale:["",E,X,F]}],"hue-rotate":[{"hue-rotate":[E,X,F]}],invert:[{invert:["",E,X,F]}],saturate:[{saturate:[E,X,F]}],sepia:[{sepia:["",E,X,F]}],"backdrop-filter":[{"backdrop-filter":["","none",X,F]}],"backdrop-blur":[{"backdrop-blur":ei()}],"backdrop-brightness":[{"backdrop-brightness":[E,X,F]}],"backdrop-contrast":[{"backdrop-contrast":[E,X,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",E,X,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[E,X,F]}],"backdrop-invert":[{"backdrop-invert":["",E,X,F]}],"backdrop-opacity":[{"backdrop-opacity":[E,X,F]}],"backdrop-saturate":[{"backdrop-saturate":[E,X,F]}],"backdrop-sepia":[{"backdrop-sepia":["",E,X,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":k()}],"border-spacing-x":[{"border-spacing-x":k()}],"border-spacing-y":[{"border-spacing-y":k()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",X,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[E,"initial",X,F]}],ease:[{ease:["linear","initial",g,X,F]}],delay:[{delay:[E,X,F]}],animate:[{animate:["none",h,X,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,X,F]}],"perspective-origin":[{"perspective-origin":ea()}],rotate:[{rotate:es()}],"rotate-x":[{"rotate-x":es()}],"rotate-y":[{"rotate-y":es()}],"rotate-z":[{"rotate-z":es()}],scale:[{scale:ed()}],"scale-x":[{"scale-x":ed()}],"scale-y":[{"scale-y":ed()}],"scale-z":[{"scale-z":ed()}],"scale-3d":["scale-3d"],skew:[{skew:ec()}],"skew-x":[{"skew-x":ec()}],"skew-y":[{"skew-y":ec()}],transform:[{transform:[X,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:ea()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eu()}],"translate-x":[{"translate-x":eu()}],"translate-y":[{"translate-y":eu()}],"translate-z":[{"translate-z":eu()}],"translate-none":["translate-none"],accent:[{accent:ee()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ee()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",X,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",X,F]}],fill:[{fill:["none",...ee()]}],"stroke-w":[{stroke:[E,H,L,U]}],stroke:[{stroke:["none",...ee()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})},9708:(e,t,r)=>{r.d(t,{DX:()=>i,xV:()=>s});var o=r(2115),n=r(6101),l=r(5155),i=o.forwardRef((e,t)=>{let{children:r,...n}=e,i=o.Children.toArray(r),s=i.find(d);if(s){let e=s.props.children,r=i.map(t=>t!==s?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...n,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,r):null})}return(0,l.jsx)(a,{...n,ref:t,children:r})});i.displayName="Slot";var a=o.forwardRef((e,t)=>{let{children:r,...l}=e;if(o.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r),i=function(e,t){let r={...t};for(let o in t){let n=e[o],l=t[o];/^on[A-Z]/.test(o)?n&&l?r[o]=(...e)=>{l(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...l}:"className"===o&&(r[o]=[n,l].filter(Boolean).join(" "))}return{...e,...r}}(l,r.props);return r.type!==o.Fragment&&(i.ref=t?(0,n.t)(t,e):e),o.cloneElement(r,i)}return o.Children.count(r)>1?o.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===s}}}]);