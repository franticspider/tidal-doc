(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{209:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(209)),o={title:"Patterns",id:"patterns"},c={unversionedId:"patternlib/tutorials/patterns",id:"patternlib/tutorials/patterns",isDocsHomePage:!1,title:"Patterns",description:'You make music with Tidal by creating patterns. Patterns are always declared using a specific name, d1 ... d9, p "dada", p 123123, followed by the content of the pattern. These patterns are connections to the SuperDirt synthesizer that you can use to play audio samples, synthesizers, and so on. The following example is using four different patterns, separated by a blank line:',source:"@site/docs/patternlib/tutorials/patterns.md",slug:"/patternlib/tutorials/patterns",permalink:"/docs/patternlib/tutorials/patterns",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/tutorials/patterns.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610,sidebar:"docs",previous:{title:"Cycles",permalink:"/docs/patternlib/tutorials/cycles"},next:{title:"Pattern Structure",permalink:"/docs/patternlib/tutorials/pattern_structure"}},l=[{value:"Classic pattern names",id:"classic-pattern-names",children:[]},{value:"Patterns by number",id:"patterns-by-number",children:[]},{value:"Patterns by name",id:"patterns-by-name",children:[]},{value:"Doing things once",id:"doing-things-once",children:[]},{value:"Stop patterns",id:"stop-patterns",children:[{value:"Stop a single pattern",id:"stop-a-single-pattern",children:[]},{value:"Stop everything",id:"stop-everything",children:[]},{value:"Panic",id:"panic",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You make music with ",Object(i.b)("strong",{parentName:"p"},"Tidal")," by creating patterns. Patterns are always declared using a specific name, ",Object(i.b)("inlineCode",{parentName:"p"},"d1 ... d9"),", ",Object(i.b)("inlineCode",{parentName:"p"},'p "dada"'),", ",Object(i.b)("inlineCode",{parentName:"p"},"p 123123"),", followed by the content of the pattern. These patterns are ",Object(i.b)("inlineCode",{parentName:"p"},"connections")," to the ",Object(i.b)("strong",{parentName:"p"},"SuperDirt")," synthesizer that you can use to play audio samples, synthesizers, and so on. The following example is using four different patterns, separated by a blank line: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'-- a bass drum\nd1 $\xa0s "bd ~ bd ~"\n\n-- high-hat pattern\nd2 $\xa0s "[~ hh]*2"\n\n-- 1.. 1.. 1.. 1..\nd3 $ s "numbers:1"\n\n-- clap\nd4 $\xa0s "cp cp cp"\n')),Object(i.b)("h2",{id:"classic-pattern-names"},"Classic pattern names"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"d1")," to ",Object(i.b)("inlineCode",{parentName:"p"},"d16")," are considered, historically, to be the classic pattern names. Each pattern will be associated to an ",Object(i.b)("inlineCode",{parentName:"p"},"orbit")," (a track for effects and audio output)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"d1 ...\nd2 ...\nd3 ...\nd4 ...\netc...\n")),Object(i.b)("h2",{id:"patterns-by-number"},"Patterns by number"),Object(i.b)("p",null,"As an alternative, you can type ",Object(i.b)("inlineCode",{parentName:"p"},"p")," (for ",Object(i.b)("inlineCode",{parentName:"p"},"pattern"),") followed by any number to get a new pattern : "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'p 1234 $\xa0s "bd bd"\n\np 4321 $ s "hh hh"\n')),Object(i.b)("h2",{id:"patterns-by-name"},"Patterns by name"),Object(i.b)("p",null,'If you don\'t like numbers for some reason, you can also give "names" to your patterns:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'p "romeo" $ s "bd bd"\n\np "juliet" $ s "hh*4"\n')),Object(i.b)("h2",{id:"doing-things-once"},"Doing things once"),Object(i.b)("p",null,"Sometimes, you don't really want a pattern but something that will only play ",Object(i.b)("inlineCode",{parentName:"p"},"once"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"once")," function does that:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'once $\xa0s "trump"\n')),Object(i.b)("h2",{id:"stop-patterns"},"Stop patterns"),Object(i.b)("p",null,"There are some very convenient commands you can use to stop patterns."),Object(i.b)("h3",{id:"stop-a-single-pattern"},"Stop a single pattern"),Object(i.b)("p",null,"To stop a specific pattern, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"silence")," function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'p "loudpattern" $ silence\n')),Object(i.b)("p",null,"This function will stop your pattern next cycle."),Object(i.b)("h3",{id:"stop-everything"},"Stop everything"),Object(i.b)("p",null,"The function ",Object(i.b)("inlineCode",{parentName:"p"},"hush")," will stop all the patterns currently running:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hush\n")),Object(i.b)("h3",{id:"panic"},"Panic"),Object(i.b)("p",null,"Sometimes, things can go a little bit crazy. For instance, you can end up with numerous synthesizers stacking on the top of each other, leading a gradual loss of control. If you are panicking or if you are afraid, just enter ",Object(i.b)("inlineCode",{parentName:"p"},"panic"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"panic\n")),Object(i.b)("p",null,"It will behave just like ",Object(i.b)("inlineCode",{parentName:"p"},"hush"),", but with a twist: it will also kill all the synthesizers/audio samples currently running on the ",Object(i.b)("strong",{parentName:"p"},"SuperDirt")," side. You should be back to total silence in no time."))}s.isMDXComponent=!0}}]);