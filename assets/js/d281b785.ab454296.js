(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(292)),i={title:"Transitions",id:"transitions"},c={unversionedId:"patternlib/tour/transitions",id:"patternlib/tour/transitions",isDocsHomePage:!1,title:"Transitions",description:"This page will present you all the transition functions that can you can use to switch musically from a pattern to another. Each function will be presented following the same model:",source:"@site/docs/patternlib/tour/transitions.md",slug:"/patternlib/tour/transitions",permalink:"/docs/patternlib/tour/transitions",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/tour/transitions.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621862121,sidebar:"docs",previous:{title:"Harmony & Melody",permalink:"/docs/patternlib/tour/harmony_melody"},next:{title:"Sampling",permalink:"/docs/patternlib/tour/sampling"}},o=[{value:"Anticipate",id:"anticipate",children:[{value:"anticipate",id:"anticipate-1",children:[]},{value:"anticipateIn",id:"anticipatein",children:[]}]},{value:"Clutch",id:"clutch",children:[{value:"Clutch",id:"clutch-1",children:[]},{value:"clutchIn",id:"clutchin",children:[]}]},{value:"histpan",id:"histpan",children:[]},{value:"Interpolate",id:"interpolate",children:[{value:"interpolate",id:"interpolate-1",children:[]},{value:"interpolateIn",id:"interpolatein",children:[]}]},{value:"Jump",id:"jump",children:[{value:"jump",id:"jump-1",children:[]},{value:"jumpIn",id:"jumpin",children:[]},{value:"jumpIn&#39;",id:"jumpin-1",children:[]},{value:"jumpMod",id:"jumpmod",children:[]}]},{value:"Wait",id:"wait",children:[{value:"wait",id:"wait-1",children:[]},{value:"waitT",id:"waitt",children:[]}]},{value:"Wash",id:"wash",children:[{value:"wash",id:"wash-1",children:[]},{value:"washIn",id:"washin",children:[]}]},{value:"Fade",id:"fade",children:[{value:"xfade",id:"xfade",children:[]},{value:"xfadeIn",id:"xfadein",children:[]}]}],p={toc:o};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page will present you all the transition functions that can you can use to switch musically from a pattern to another. Each function will be presented following the same model:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",Object(r.b)("strong",{parentName:"li"},"Haskell")," side."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Description"),": verbal description of the function."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),Object(r.b)("h2",{id:"anticipate"},"Anticipate"),Object(r.b)("h3",{id:"anticipate-1"},"anticipate"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: anticipate :: Time -> [ControlPattern] -> ControlPattern\n")),Object(r.b)("p",null,"Queue up a pattern to be triggered (or dropped) in after ",Object(r.b)("inlineCode",{parentName:"p"},"8")," cycles. The argument supplied to ",Object(r.b)("inlineCode",{parentName:"p"},"anticipate")," is the ID of the new pattern that is created."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "jvbass(3,8)"\nanticipate 1 $ sound "bd sn" # delay "0.5" # room "0.3"\n')),Object(r.b)("p",null,"Stop the newly created pattern using its id: ",Object(r.b)("inlineCode",{parentName:"p"},"d1 silence")),Object(r.b)("h3",{id:"anticipatein"},"anticipateIn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"anticipateIn :: Show a => a -> Time -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,"Start playing a pattern after a specified number of cycles and assign it an ID."),Object(r.b)("p",null,"The first argument is the number of cycles after which the pattern will begin playing, and the second argument is the ID of the newly created patttern."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ sound "bd sd"\n\nanticipateIn 2 2 $ fast 4 $ sound "hh*2" *| gain "0.9 0.6"\n\nd2 silence\n')),Object(r.b)("h2",{id:"clutch"},"Clutch"),Object(r.b)("h3",{id:"clutch-1"},"Clutch"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"clutch :: Show a => a -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"clutch")," degrades the current pattern while undegrading the next. The argument provided to ",Object(r.b)("inlineCode",{parentName:"p"},"clutch")," is the ID of the pattern that ",Object(r.b)("inlineCode",{parentName:"p"},"clutch")," creates or the pattern that ",Object(r.b)("inlineCode",{parentName:"p"},"clutch")," is replacing."),Object(r.b)("p",null,"This is like ",Object(r.b)("inlineCode",{parentName:"p"},"xfade")," but not by gain of samples but by randomly removing events from the current pattern and slowly adding back in missing events from the next one."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(3,8)"\n\nclutch 1 $ sound "[hh*4, odx(3,8)]"\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"clutch")," takes two cycles for the transition, essentially this is ",Object(r.b)("inlineCode",{parentName:"p"},"clutchIn 2"),"."),Object(r.b)("h3",{id:"clutchin"},"clutchIn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"clutchIn :: Show a => a -> Time -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"In")," variant of the function above."),Object(r.b)("h2",{id:"histpan"},"histpan"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"histpan :: Show a => a -> Int -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,"This will ",Object(r.b)("inlineCode",{parentName:"p"},"pan")," the last four patterns on the ",Object(r.b)("inlineCode",{parentName:"p"},"d1")," channel from left to right, the most recent on the left:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'histpan 1 4 $ sound "bd sn"\n')),Object(r.b)("h2",{id:"interpolate"},"Interpolate"),Object(r.b)("h3",{id:"interpolate-1"},"interpolate"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: interpolate :: Time -> [ControlPattern] -> ControlPattern\n")),Object(r.b)("p",null,"Morph control values between patterns in four cycles. The argument supplied to ",Object(r.b)("inlineCode",{parentName:"p"},"interpolate")," is the ID of the new pattern that is created."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy*16" # cutoff 100\n\ninterpolate 1 $ sound "arpy*16" # cutoff 16000\n')),Object(r.b)("p",null,"Stop the newly created pattern using its id:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"d1 silence\n")),Object(r.b)("h3",{id:"interpolatein"},"interpolateIn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: interpolateIn :: Time -> [ControlPattern] -> ControlPattern\n")),Object(r.b)("p",null,"Morph control values between patterns in a given number of cycles. The first argument supplied to ",Object(r.b)("inlineCode",{parentName:"p"},"interpolate")," is the ID of the new pattern that is created and the second is the number of cycles."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy*16" # cutoff 100\ninterpolateIn 1 2 $ sound "arpy*16" # cutoff 16000\n')),Object(r.b)("p",null,"Stop the newly created pattern using its id:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"d1 silence\n")),Object(r.b)("h2",{id:"jump"},"Jump"),Object(r.b)("h3",{id:"jump-1"},"jump"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"jump :: Show a => a -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"jump")," is essentially the no transition-transition. It jumps directly into the given pattern. The variants ",Object(r.b)("inlineCode",{parentName:"p"},"jumpIn"),", ",Object(r.b)("inlineCode",{parentName:"p"},"jumpIn'")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jumpMod")," provide more useful capabilities."),Object(r.b)("p",null,"Say you have:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\n')),Object(r.b)("p",null,"Then both of the following lines will have the same effect when evaluated:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*8"\njump 1 $ sound "hh*8" --`1` to change the pattern in `d1`\n')),Object(r.b)("h3",{id:"jumpin"},"jumpIn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"jumpIn :: Show a => a -> Int -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"jumpIn")," takes the identifier of the ",Object(r.b)("inlineCode",{parentName:"p"},"ControlPattern")," track and an integer ",Object(r.b)("inlineCode",{parentName:"p"},"cycleCount"),". It will jump unaligned into the given pattern after ",Object(r.b)("inlineCode",{parentName:"p"},"cycleCount")," cycles have completed."),Object(r.b)("p",null,"Say you have this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\nd2 $ sound "bd" --have a beat on the 1 for orientation\n')),Object(r.b)("p",null,"Then the subdivision on the hi-hat will increase ",Object(r.b)("inlineCode",{parentName:"p"},"2")," cycles after evaluation of the next line:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'jumpIn 1 2 $ sound "hh*8" --`1` because `d1` is defined `let d1 = p 1`\n')),Object(r.b)("p",null,"The transition will not align with the beat on cycle boundary."),Object(r.b)("h3",{id:"jumpin-1"},"jumpIn'"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"jumpIn' :: Show a => a -> Int -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"jumpIn'")," takes the identifier of the ",Object(r.b)("inlineCode",{parentName:"p"},"ControlPattern")," track and an integer ",Object(r.b)("inlineCode",{parentName:"p"},"cycleCount"),". It will jump at cycle boundary into the given pattern after ",Object(r.b)("inlineCode",{parentName:"p"},"cycleCount")," cycles have completed."),Object(r.b)("p",null,"Example: Say you have this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\nd2 $ sound "bd" --have a beat on the 1 for orientation\n')),Object(r.b)("p",null,"Then the subdivision on the hi-hat will increase 2 cycles after evaluation of the next line:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'jumpIn\' 1 2 $ sound "hh*8" --`1` because `d1`\n')),Object(r.b)("p",null,"The transition will align with the beat on cycle boundary."),Object(r.b)("h3",{id:"jumpmod"},"jumpMod"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"jumpMod :: Show a => a -> Int -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"jumpMod")," takes the identifier of the ",Object(r.b)("inlineCode",{parentName:"p"},"ControlPattern")," track and an integer ",Object(r.b)("inlineCode",{parentName:"p"},"cycleMod"),". It will jump at cycle boundary into the given pattern when currentCycle ",Object(r.b)("inlineCode",{parentName:"p"},"mod cycleMod == 0"),"."),Object(r.b)("p",null,"Example: Say you have this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\nd2 $ sound "bd" --have a beat on the 1 for orientation\n')),Object(r.b)("p",null,"Then the subdivision on the hi-hat will increase in one of the next 2 cycles after evaluation of the next line:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'jumpMod 1 2 $ sound "hh*8" --`1` because `d1`\n')),Object(r.b)("p",null,"The transition will align with one of the next 2 bd onsets."),Object(r.b)("h2",{id:"wait"},"Wait"),Object(r.b)("h3",{id:"wait-1"},"wait"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"wait :: Show a => a -> Time -> ControlPattern -> IO ()\n")),Object(r.b)("h3",{id:"waitt"},"waitT"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"waitT :: Show a => a -> (Time -> [ControlPattern] -> ControlPattern) -> Time -> ControlPattern -> IO ()\n")),Object(r.b)("h2",{id:"wash"},"Wash"),Object(r.b)("h3",{id:"wash-1"},"wash"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"wash :: (Pattern a -> Pattern a)\n-> (Pattern a -> Pattern a) -> Time -> Time -> Time -> Time -> [Pattern a] -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wash")," is a function used to define a couple of the other transitions, ",Object(r.b)("inlineCode",{parentName:"p"},"anticipate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jump"),". It's not really useful on its own, unless you wanted to make your own version of ",Object(r.b)("inlineCode",{parentName:"p"},"anticipate"),". It looks like it needs some work to make it more user friendly."),Object(r.b)("h3",{id:"washin"},"washIn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"washIn :: (Pattern a -> Pattern a) -> Time -> Time -> [Pattern a] -> Pattern a\n")),Object(r.b)("h2",{id:"fade"},"Fade"),Object(r.b)("h3",{id:"xfade"},"xfade"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"xfade :: Show a => a -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,"Start with a pattern on d1:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd(3,8) drum*4"\n')),Object(r.b)("p",null,"You can then perform a crossfade transition to a new pattern using xfade:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'xfade 1 $ s "arpy*8" # n (run 8)\n')),Object(r.b)("p",null,"Note that the argument we give to ",Object(r.b)("inlineCode",{parentName:"p"},"xfade")," is ",Object(r.b)("inlineCode",{parentName:"p"},"1"),", which means to apply the transition to the pattern that is running on ",Object(r.b)("inlineCode",{parentName:"p"},"d1"),"."),Object(r.b)("p",null,"You can use transitions on any ",Object(r.b)("inlineCode",{parentName:"p"},"d")," pattern in Tidal:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d3 $ s "bd(3,8)"\n\nxfade 3 $ s "arpy*4"\n')),Object(r.b)("p",null,"You can also apply a transition to any arbitrary pattern name:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'p "drums" $ s "bd(3,8) drum*4"\n\nxfade "drums" $ s "arpy*8" # n (run 8)\n')),Object(r.b)("h3",{id:"xfadein"},"xfadeIn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"xfadeIn :: Show a => a -> Time -> ControlPattern -> IO ()\n")),Object(r.b)("p",null,"Same thing as xfadeIn but you can specify the number of cycles that the transition takes to complete:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'xfadeIn 1 8 $ s "arpy*8" # n (run 8)\n')))}b.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,h=s["".concat(i,".").concat(d)]||s[d]||u[d]||r;return n?l.a.createElement(h,c(c({ref:t},p),{},{components:n})):l.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);