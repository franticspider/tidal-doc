(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{125:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return p}));var t=n(3),r=n(7),i=(n(0),n(209)),o={title:"Harmony & Melody",id:"harmony_melody"},l={unversionedId:"reference/harmony_melody",id:"reference/harmony_melody",isDocsHomePage:!1,title:"Harmony & Melody",description:"This page will present you all the functions that can be used to deal with harmonies, scales and various musical objects. Each function will be presented following the same model:",source:"@site/docs/reference/harmony_melody.md",slug:"/reference/harmony_melody",permalink:"/docs/reference/harmony_melody",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/harmony_melody.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621864783,sidebar:"reference",previous:{title:"Time",permalink:"/docs/reference/time"},next:{title:"Transitions",permalink:"/docs/reference/transitions"}},c=[{value:"Scales",id:"scales",children:[{value:"scale",id:"scale",children:[]},{value:"scaleList",id:"scalelist",children:[]},{value:"getScale",id:"getscale",children:[]},{value:"toScale",id:"toscale",children:[]}]},{value:"Chords",id:"chords",children:[{value:"chordList",id:"chordlist",children:[]}]},{value:"Arpeggios",id:"arpeggios",children:[{value:"arpeggiate",id:"arpeggiate",children:[]},{value:"arp",id:"arp",children:[]}]}],s={toc:c};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page will present you all the functions that can be used to deal with harmonies, scales and various musical objects. Each function will be presented following the same model:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",Object(i.b)("strong",{parentName:"li"},"Haskell")," side."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Description"),": verbal description of the function."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),Object(i.b)("h2",{id:"scales"},"Scales"),Object(i.b)("h3",{id:"scale"},"scale"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Type: scale :: Num a => Pattern String -> Pattern Int -> Pattern a\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"scale")," function interprets a pattern of note numbers into a particular named scale. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ chunk 4 (fast 2 . (|- n 12)) $ off 0.25 (|+ 7) $ struct (iter 4 "t(5,8)")\n  $ n (scale "ritusen" "0 .. 7") # sound "superpiano"\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Prior to ",Object(i.b)("strong",{parentName:"p"},"Tidal")," version 1.0.0, scale had a very different function as a ",Object(i.b)("inlineCode",{parentName:"p"},"range")," operator. Veteran users will need to switch to using ",Object(i.b)("inlineCode",{parentName:"p"},"range")," for this functionality. "))),Object(i.b)("h3",{id:"scalelist"},"scaleList"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Type: scaleList :: String\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"scaleList")," function outputs all the available scales, at the time of writing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-plaintext"},"minPent majPent ritusen egyptian kumai hirajoshi iwato chinese indian pelog \nprometheus scriabin gong shang jiao zhi yu whole augmented augmented2 hexMajor7 \nhexDorian hexPhrygian hexSus hexMajor6 hexAeolian major ionian dorian phrygian \nlydian mixolydian aeolian minor locrian harmonicMinor harmonicMajor melodicMinor \nmelodicMinorDesc melodicMajor bartok hindu todi purvi marva bhairav ahirbhairav \nsuperLocrian romanianMinor hungarianMinor neapolitanMinor enigmatic spanish \nleadingWhole lydianMinor neapolitanMajor locrianMajor diminished diminished2 \nchromatic\n")),Object(i.b)("h3",{id:"getscale"},"getScale"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Type: getScale :: Num a => [(String, [a])] -> Pattern String -> Pattern Int -> Pattern a\n")),Object(i.b)("p",null,"You can build your own ",Object(i.b)("inlineCode",{parentName:"p"},"scale")," function with additional scales if you wish, using ",Object(i.b)("inlineCode",{parentName:"p"},"getScale"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'let scale = getScale (scaleTable ++ [("techno", [0,2,3,5,7,8,10]),\n                                     ("broken", [0,1,4,7,8,10])\n                                    ])\n')),Object(i.b)("p",null,"The above takes the standard ",Object(i.b)("inlineCode",{parentName:"p"},"scaleTable")," as a starting point, and adds two custom scales to it. You'll be able to use the new function as normal:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (scale "techno" "0 1 2 3 4 5 6 7") # sound "superpiano"\n')),Object(i.b)("h3",{id:"toscale"},"toScale"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Type: toScale :: Num a => [a] -> Pattern Int -> Pattern a\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"toScale")," allows you to quickly apply a scale without naming it. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (toScale [0,2,3,5,7,8,10] "0 1 2 3 4 5 6 7") # sound "superpiano"\n')),Object(i.b)("h2",{id:"chords"},"Chords"),Object(i.b)("h3",{id:"chordlist"},"chordList"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Type: chordList :: String\n")),Object(i.b)("p",null,"The chordList function outputs all the available chords. At the time of writing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-plaintext"},"major maj aug plus sharp5 six 6 sixNine six9 sixby9 6by9 major7 maj7 major9 maj9 add9 major11 maj11 add11 major13 maj13\n add13 dom7 dom9 dom11 dom13 sevenFlat5 7f5 sevenSharp5 7s5 sevenFlat9 7f9 nine eleven 11 thirteen 13 minor min diminish\ned dim minorSharp5 msharp5 mS5 minor6 min6 m6 minorSixNine minor69 min69 minSixNine m69 mSixNine m6by9 minor7flat5 min7f\nlat5 m7flat5 m7f5 minor7 min7 m7 minor7sharp5 min7sharp5 m7sharp5 m7s5 minor7flat9 min7flat9 m7flat9 m7f9 minor7sharp9 m\nin7sharp9 m7sharp9 m7s9 diminished7 dim7 minor9 min9 m9 minor11 min11 m11 minor13 min13 m13 one 1 five 5 sus2 sus4 seven\nSus2 7sus2 sevenSus4 7sus4 nineSus4 ninesus4 9sus4 sevenFlat10 7f10 nineSharp5 9s5 m9sharp5 m9s5 sevenSharp5flat9 7s5f9 \nm7sharp5flat9 elevenSharp 11s m11sharp m11s\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You'll need to run ",Object(i.b)("inlineCode",{parentName:"p"},"import Sound.Tidal.Chords")," before using this function."))),Object(i.b)("h2",{id:"arpeggios"},"Arpeggios"),Object(i.b)("h3",{id:"arpeggiate"},"arpeggiate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Type: arpeggiate :: Pattern a -> Pattern a\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"arpeggiate")," (alias ",Object(i.b)("inlineCode",{parentName:"p"},"arpg"),") function spreads chords of note numbers over time. For example, using the ",Object(i.b)("inlineCode",{parentName:"p"},"1.0")," version of ",Object(i.b)("strong",{parentName:"p"},"Tidal"),", chord name notation & older list notation:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (arpg "\'major7 [0,4,7,11]") # sound "superpiano"\n')),Object(i.b)("h3",{id:"arp"},"arp"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Type: arp :: Pattern String -> Pattern a -> Pattern a \n")),Object(i.b)("p",null,"The arp function takes an additional pattern of arpeggiate modes. For example, using the ",Object(i.b)("inlineCode",{parentName:"p"},"1.0")," version of ",Object(i.b)("strong",{parentName:"p"},"Tidal"),", chord name notation (root note / chord type / additional notes above the chord):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (arp "<up down diverge>" "<a\'m9\'8 e\'7sus4\'8>") # sound "superpiano"\n')),Object(i.b)("p",null,"The different arpeggiate modes are:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"up down updown downup up&down down&up converge\ndiverge disconverge pinkyup pinkyupdown\nthumbup thumbupdown\n")))}p.isMDXComponent=!0},209:function(e,a,n){"use strict";n.d(a,"a",(function(){return m})),n.d(a,"b",(function(){return u}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=t,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||i;return n?r.a.createElement(u,l(l({ref:a},s),{},{components:n})):r.a.createElement(u,l({ref:a},s))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);