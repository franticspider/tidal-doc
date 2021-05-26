(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(209)),o={title:"Interaction",permalink:"wiki/Interaction/",layout:"wiki",tags:["Reference","Tidal-1+"]},l={unversionedId:"working-with-patterns/Interaction",id:"working-with-patterns/Interaction",isDocsHomePage:!1,title:"Interaction",description:"In Tidal 1.0.0, the way you interact with",source:"@site/docs/working-with-patterns/Interaction.md",slug:"/working-with-patterns/Interaction",permalink:"/docs/working-with-patterns/Interaction",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/working-with-patterns/Interaction.md",version:"current",lastUpdatedBy:"Koji Ishimoto",lastUpdatedAt:1615136026},s=[],i={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("languages",null)," ",Object(c.b)("translate",null," In Tidal 1.0.0, the way you interact with patterns has changed a bit.",Object(c.b)("p",null,"The range of functions for interaction set up by default can be seen in\nthe ",Object(c.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/blob/master/BootTidal.hs"},"bootup\ncode"),"."),Object(c.b)("h1",{id:"patterns-by-number-and-by-name"},"Patterns by number and by name"),Object(c.b)("p",null,"As before you can use"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"d1\n")),Object(c.b)("p",null,","),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"d2\n")),Object(c.b)("p",null,"etc to start different patterns, e.g:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd sd"\n\n\x3c!--T:6--\x3e\nd1 $ silence\n')),Object(c.b)("p",null,"But now as an alternative you can also use"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"p\n")),Object(c.b)("p",null,"and specify ",Object(c.b)("em",{parentName:"p"},"any")," number, like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-Haskell"},'p 100323523 $ sound "bd sd"\n\n\x3c!--T:9--\x3e\np 100323523 $ silence\n')),Object(c.b)("p",null,"Theoretically, you can have any number of patterns running at once."),Object(c.b)("p",null,"You can also refer to them by name, if you want."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-Haskell"},'p "jimmy" $ sound "bd sd"\np "susan" $ sound "cp(3,8)"\n\n\x3c!--T:13--\x3e\np "jimmy" $ silence\np "susan" $ silence\n')),Object(c.b)("h1",{id:"transitions"},"Transitions"),Object(c.b)("p",null,"If you want to do a transition, you put it in place of the"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"p\n")),Object(c.b)("p",null,", e.g.:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'xfade "susan" $ sound "gabba(3,8,<0 2 4>)"\nxfade "susan" $ sound "cp*2"\n')),Object(c.b)("p",null,"(The old t1, t2 etc method no longer works.)"),Object(c.b)("h1",{id:"doing-things-once"},"Doing things once"),Object(c.b)("p",null,"If you just want a pattern to run for one cycle and then stop, you can\ndo use"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"once\n")),Object(c.b)("p",null,":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'once $ s "bd sd(3,8)"\n')),Object(c.b)("h1",{id:"changing-tempo-with-setcps"},"Changing tempo with setcps"),Object(c.b)("p",null,"Just give it the number of cycles per second, for example if your cycle\nhas two beats in, this will be the equivalent of 120 bpm:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"setcps 1\n")),Object(c.b)("h1",{id:"changing-tempo-with-cps"},"Changing tempo with cps"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"cps\n")),Object(c.b)("p",null,"is no longer a standalone function (","`","setcps","`"," above now does this), but\na control pattern. Patterning cps is ",Object(c.b)("em",{parentName:"p"},"fun"),". Patterns don't (yet) have\nindependent tempos though, if you change it on one pattern, it changes\non all of them."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'p "cpsfun" $ s "bd sd(3,8)" # cps (slow 8 $ 0.5 + saw)\n'))))}p.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return t?r.a.createElement(m,l(l({ref:n},i),{},{components:t})):r.a.createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=t[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);