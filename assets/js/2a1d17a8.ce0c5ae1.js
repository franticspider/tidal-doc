(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{209:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(m,l(l({ref:t},c),{},{components:r})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(209)),o={title:"Friends and relations",permalink:"wiki/Friends_and_relations/",layout:"wiki"},l={unversionedId:"resource/Friends_and_relations",id:"resource/Friends_and_relations",isDocsHomePage:!1,title:"Friends and relations",description:"Starting a list of projects connected with TidalCycles - ones that",source:"@site/docs/resource/Friends_and_relations.md",slug:"/resource/Friends_and_relations",permalink:"/docs/resource/Friends_and_relations",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/resource/Friends_and_relations.md",version:"current",lastUpdatedBy:"Koji Ishimoto",lastUpdatedAt:1615136026,sidebar:"community",previous:{title:"Community",permalink:"/docs/resource/Community"},next:{title:"Contributing tests",permalink:"/docs/resource/Contributing_tests"}},s=[{value:"Editor plugins",id:"editor-plugins",children:[]},{value:"SuperCollider (or SuperDirt) add-ons",id:"supercollider-or-superdirt-add-ons",children:[]}],c={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starting a list of projects connected with TidalCycles - ones that\ninterface with/inspired/are inspired by tidal."),Object(i.b)("p",null,"(For a long list of ","_","all","_"," the live coding environments, see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/toplap/awesome-livecoding"},"all\nthings livecoding")," list.)"),Object(i.b)("h1",{id:"ports-and-parsers"},"Ports and parsers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dktr0/estuary"},"Estuary"),' is a platform for\ncollaboration and learning through live coding, hosting a range of\nenvironments in a web-browser, including "minitidal", a parser for\ntidal')),Object(i.b)("h1",{id:"editors"},"Editors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dktr0/extramuros"},"Extramuros"),", a\nlanguage-neutral shared-buffer networked live coding system in the\nbrowser (precursor of Estuary)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/yaxu/feedforward"},"Feedforward"),", a strange\nterminal-based editor in development"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/cannc4/Siren"},"Siren")," - a tracker interface for\nTidalCycles and SuperCollider"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/qirky/troop"},"Troop"),", a real-time collaborative\ntool that enables group live coding within the same document across\nmultiple computers. Works with a range of live coding languages,\nincluding Tidal")),Object(i.b)("h2",{id:"editor-plugins"},"Editor plugins"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/tidalcycles/Tidal/blob/master/tidal.el"},"Emacs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://tidalcycles.org/index.php/Sublime_Text"},"Sublime text")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/supercollider/scvim"},"vim")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/tidalcycles/vscode-tidalcycles"},"VS Code"))),Object(i.b)("h1",{id:"synths-and-samplers"},"Synths and samplers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/tidalcycles/dirt"},"Dirt")," - the original 'classic'\ndirt, implemented in c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt/"},"SuperDirt")," - the\nSuperCollider rewrite, recommended for general use (unless running\nin a web browser)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dktr0/WebDirt"},"webdirt")," - the javascript\nrewrite, part of estuary")),Object(i.b)("h2",{id:"supercollider-or-superdirt-add-ons"},"SuperCollider (or SuperDirt) add-ons"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/calumgunn/StageMaster"},"StageMaster")," - light\nmastering chain for use during live performance in SuperCollider")),Object(i.b)("h1",{id:"visual-systems"},"Visual systems"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ivan-abreu/didacticpatternvisualizer"},"Didactic pattern\nvisualizer")," -\nSound pattern visualizer programmed in Processing"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Dsm0/p5jsDirt/"},"p5jsDirt")," - integration with\np5.js")),Object(i.b)("h1",{id:"syncing--interfacing"},"Syncing / interfacing"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Deep-Symmetry/carabiner"},"Carabiner"),", for\nbridging with the Link protocol"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dktr0/espgrid"},"ESPGrid"),", synchronisation\ndesigned for live coding environments including supercollider,\nfoxdot as well as tidal"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@vliegwerk/tidal"},"Node.js interface"),"\nfor sending messages between javascript and tidal")),Object(i.b)("h1",{id:"tidal-inspired-systems"},"Tidal-inspired systems"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Mdashdotdashn/krill"},"Krill")," - a javascript-based\nlive coding environment inspired by tidal"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/gibber-cc/tidal.pegjs"},"tidal.pegjs")," - is a\nparsing expression grammar for the TidalCycles mini-notation,\nwritten using PEG.js. The goal of the PEG is to easily translate\nstrings of Tidal-style mini notation into annotated JavaScript data\nstructures for use in sequencing. Works with\n",Object(i.b)("a",{parentName:"li",href:"http://gibber.cc/"},"Gibber")," and\n",Object(i.b)("a",{parentName:"li",href:"https://hydra-editor.glitch.me/"},"Hydra"),"!")),Object(i.b)("h1",{id:"systems-that-inspired-tidal"},"Systems that inspired Tidal"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://bolprocessor.sourceforge.net/"},"Bol processor")," - algorithmic\nmusic system based on compositional grammars, grown from research\ninto symbolic notation of tabla rhythms"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.euterpea.com/"},"Euterpea")," is a cross-platform,\ndomain-specific language for computer music applications embedded in\nthe Haskell programming language"),Object(i.b)("li",{parentName:"ul"},"Douglas Repetto's beat rotation experiments, e.g. rotcomposer in\n",Object(i.b)("a",{parentName:"li",href:"http://www.meapsoft.com/showcase.php"},"MEAPsoft"))))}p.isMDXComponent=!0}}]);