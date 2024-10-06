"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[897],{7221:function(e,t,a){a.d(t,{d:function(){return v},O:function(){return k}});var l=a(6540),n=a(248),r=a(2532),i=function(){return i=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};var s={skeleton:"styles_skeleton__tyzRD","skeleton-progress":"styles_skeleton-progress__aezri"};function o(e){var t=e.width,a=void 0===t?"100%":t,n=e.height,r=void 0===n?"1em":n,o=e.background,c=void 0===o?"#E9ECEF":o,d=e.radius,m=void 0===d?"4px":d,u=e.circle,f=void 0!==u&&u,p=e.block,h=void 0===p||p,g=e.style,y=void 0===g?{}:g,b=e.as,v=void 0===b?"div":b;return l.createElement(v,{className:s.skeleton,style:i({width:a,height:r,background:c,borderRadius:f?"50%":m,display:h?"block":"inline-block"},y)},"‌")}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var c=a(211),d="style-module--Banner--d401d",m="style-module--Card--c661d",u="style-module--Category--eeb92",f="style-module--DescriptionWrapper--5f867",p="style-module--Details--5ba4b",h="style-module--Image--43f10",g="style-module--ImageWrapper--50300",y="style-module--ReadingTime--a0392",b="style-module--Title--de70d";function v(e){const{globalState:t}=(0,c.QN)(),a=t.theme===c.Sx.Dark,i=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),s=l.createElement("article",{className:m,style:a?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&l.createElement("div",{className:d},e.data.image&&e.data.image.src&&l.createElement(r.G,{className:g,imgClassName:h,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),l.createElement("div",{className:f},l.createElement("span",{className:u},l.createElement("u",null,e.data.category)),l.createElement("h4",{className:b},e.data.title),l.createElement("div",{className:p},`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(o=e.data.publishedAt).getMonth()]} ${o.getDate()}, ${o.getFullYear()}`,e.data.readingTime&&l.createElement("span",{className:y},e.data.readingTime))));var o;return i?l.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},s):l.createElement(n.Link,{to:e.data.link,title:e.data.title},s)}function k(){const{globalState:e}=(0,c.QN)(),t=e.theme===c.Sx.Dark;return l.createElement("div",{className:m,style:t?{border:"0.125rem solid var(--primary-color)"}:void 0},l.createElement("div",{className:f},l.createElement(o,{style:{height:"1.5rem",marginBottom:".5rem",background:"var(--tertiary-color)"}}),l.createElement(o,{style:{height:"4rem",background:"var(--tertiary-color)"}}),l.createElement(o,{style:{height:".75rem",width:"50%",marginTop:".5rem",background:"var(--tertiary-color)"}})))}},46:function(e,t,a){a.d(t,{$:function(){return s},V:function(){return i}});var l=a(6540),n=a(248),r="style-module--Button--82b1f";let i=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function s(e){if(e.type===i.LINK){if(e.url)return e.externalLink?l.createElement("a",{id:e.id,className:r,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):l.createElement(n.Link,{id:e.id,to:e.url,className:r},e.label);throw new Error(`Button should be a ${e.type} but no URL is given!`)}if(e.type===i.BUTTON||e.type===i.SUBMIT){if(!e.onClickHandler)throw new Error(`Button should be a ${e.type} but no onClickHandler is given!`);return l.createElement("button",{id:e.id,className:r,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}},871:function(e,t,a){a.d(t,{w:function(){return s}});var l=a(6540),n="style-module--ContentWrapper --36dde",r="style-module--Heading--2c002",i="style-module--Section--1d871";function s(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(n).join(" "):n,l.createElement("section",{id:e.anchor,className:i},l.createElement("div",{className:t},e.heading&&l.createElement("h3",{className:r},e.heading),e.children))}},3783:function(e,t,a){a.d(t,{A:function(){return r}});var l=a(6540),n="style-module--SlideContainer--60bf2";function r(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(n).join(" "):n,l.createElement("div",{className:t,style:e.style},e.children)}},897:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(4506),n=a(6540),r=a(2386),i=a(871),s=a(3420),o=a(3783),c=a(7221),d=a(46),m="style-module--Filter--31377",u="style-module--Listing--52eca",f="style-module--LoadMore--8b4c0",p="style-module--Option--83bb9",h="style-module--Options--3515b",g="style-module--Selected--f3165",y=a(7563);function b(e){var t;const a=e.pageContext.articles,[b,v]=n.useState(function(e){const t=[],a=[];return e.forEach((e=>{e.categories.forEach((l=>{if(a.includes(l)){const a=t.map((e=>e.label)).indexOf(l);t[a].relatedArticleIds.push(e.id)}else t.push({label:l,selected:!1,relatedArticleIds:[e.id]}),a.push(l)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(a)),[k,E]=n.useState(9);let $=[];const N=-1!==b.map((e=>e.selected)).indexOf(!0);N&&($=b.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,a)=>a.indexOf(e)===t)));const x=null!==(t=(0,y.t)(e.pageContext.entityName))&&void 0!==t?t:"Articles";return n.createElement(n.Fragment,null,n.createElement(s.G,{title:`All ${x}`,useTitleTemplate:!0}),n.createElement(r.Y,null,n.createElement(i.w,{anchor:"articleListing",heading:x},n.createElement("div",{className:m},"Select categories to filter ",x.toLocaleLowerCase(),n.createElement(o.A,{additionalClasses:[h]},b.map(((e,t)=>n.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,l.A)(b),a=t.map((e=>e.label)).indexOf(e);t[a].selected=!t[a].selected,v(t)}(e.label),className:[p,!0===e.selected?g:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),n.createElement("div",{className:u},a.filter((e=>!N||$.includes(e.id))).slice(0,k).map(((e,t)=>n.createElement(c.d,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),N&&$.length>k||!N&&a.length>k?n.createElement("div",{className:f},n.createElement(d.$,{type:d.V.BUTTON,label:"Load More",onClickHandler:()=>E((e=>e+6))})):null)))}},7563:function(e,t,a){function l(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const a={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},l={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const n in l){const t=new RegExp(`${n}$`,"i"),a=l[n];if(t.test(e))return e.replace(t,a)}for(const n in a){const t=new RegExp(n,"i");if(t.test(e))return e.replace(t,a[n])}return e}a.d(t,{t:function(){return l}})}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-3f926612375c76495ded.js.map