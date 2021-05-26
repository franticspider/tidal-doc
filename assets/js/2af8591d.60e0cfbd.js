(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,u(u({ref:t},l),{},{components:n})):r.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(209)),i={title:"Audio Outputs",id:"audio_outputs"},u={unversionedId:"configuration/AudioConfig/audio_outputs",id:"configuration/AudioConfig/audio_outputs",isDocsHomePage:!1,title:"Audio Outputs",description:"Separate audio channels",source:"@site/docs/configuration/AudioConfig/audio_configuration.md",slug:"/configuration/AudioConfig/audio_outputs",permalink:"/docs/configuration/AudioConfig/audio_outputs",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/AudioConfig/audio_configuration.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621636365,sidebar:"docs",previous:{title:"Where to find samples?",permalink:"/docs/configuration/Audio Samples/find_samples"},next:{title:"Online Course",permalink:"/docs/patternlib/tutorials/online_course"}},s=[{value:"Separate audio channels",id:"separate-audio-channels",children:[]},{value:"Multichannel sound",id:"multichannel-sound",children:[]},{value:"Hack the audio",id:"hack-the-audio",children:[]},{value:"Audio mixing and mastering",id:"audio-mixing-and-mastering",children:[{value:"StageMaster",id:"stagemaster",children:[]}]}],l={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"separate-audio-channels"},"Separate audio channels"),Object(o.b)("p",null,"Lets say you wanted to make a multi-track recording, with different patterns playing at the same time, but recorded separately.. Or wanted to route the audio from some patterns into external effects processor. How is this possible? Tidal's audio engine is (most often) ",Object(o.b)("strong",{parentName:"p"},"SuperDirt"),", and the key to routing audio channels is understanding how to configure and use orbits. You can think of each orbit as an audio output, with its own set of global effects (by default, reverb and delay)."),Object(o.b)("p",null,"Have a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt's documentation"),", in particular the example\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd"},"superdirt_startup.scd"),"\nfile. You'll want to paste the setup code into the ",Object(o.b)("strong",{parentName:"p"},"SuperCollider")," editor\nwindow. If you save it in your ",Object(o.b)("strong",{parentName:"p"},"SuperCollider")," startup file it will\nautomatically run when you open ",Object(o.b)("strong",{parentName:"p"},"SuperCollider")," - you can find that file\nvia the menus."),Object(o.b)("p",null,"There are probably only two bits that you will want to change in the\nsetup code. If you wanted six stereo outputs, that would require ",Object(o.b)("inlineCode",{parentName:"p"},"12"),"\nchannels in total, so you would set the number of output bus channels\naccordingly, i.e.:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"s.options.numOutputBusChannels = 12;\n")),Object(o.b)("p",null,"You assign the orbits to separate stereo channels by offsetting each\none, like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"~dirt.start(57120, \\[0, 2, 4, 6, 8, 10\\]);\n")),Object(o.b)("p",null,"You might also be tempted to change the number in this line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"~dirt = SuperDirt(2, s);\n")),Object(o.b)("p",null,"However if you want to work in stereo, you should keep this number to 2,\ni.e. the number of channels per orbit."),Object(o.b)("p",null,"If your editor plugin (and therefore ",Object(o.b)("inlineCode",{parentName:"p"},"BootTidal.hs"),"), then\xa0",Object(o.b)("inlineCode",{parentName:"p"},"d1")," will automatically be sent to orbit 0, ",Object(o.b)("inlineCode",{parentName:"p"},"d2")," to orbit 1, and so on. Or you can be explicit by using the orbit control, e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd" # orbit 3\n')),Object(o.b)("p",null,"You're now free to route the audio to a DAW for e.g. effects processing\nor recording, or record all the channels straight from ",Object(o.b)("strong",{parentName:"p"},"SuperCollider"),"\ninto a single multichannel file. "),Object(o.b)("h2",{id:"multichannel-sound"},"Multichannel sound"),Object(o.b)("p",null,"In general, we deal with stereo sound, i.e. we use two speakers and ",Object(o.b)("strong",{parentName:"p"},"pan")," between them. Sometimes it's nice to work with four or more speakers though, and enjoy that surround sound experience. We set up for multichannel sound in a similar way to how we do ","[separate audio outputs]","(##Separate audio channels). With separate outputs we are probably sending multiple stereo outputs though, whereas with multichannel sound we generally send one output, but with multiple channels."),Object(o.b)("p",null,"Here's an example supercollider startup file, for panning across four channels:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"(\ns.options.numBuffers = 1024 * 256;\ns.options.memSize = 8192 * 16;\ns.options.maxNodes = 1024 * 32;\ns.options.numOutputBusChannels = 4; // total number of channels output \ns.options.numInputBusChannels = 2;\n\ns.waitForBoot {\n~dirt = SuperDirt(4, s); // pan across four channels\n~dirt.loadSoundFiles;\n~dirt.start(57120, [0, 0, 0, 0, 0, 0]);\n};\ns.latency = 0.3;\n);\n")),Object(o.b)("p",null,"Have a look at ",Object(o.b)("strong",{parentName:"p"},"SuperDirt"),"'s documentation for more details, in particular the example ",Object(o.b)("inlineCode",{parentName:"p"},"superdirt_startup.scd")," file."),Object(o.b)("p",null,"This line sets the number of output channels coming from supercollider:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"s.options.numOutputBusChannels = 4; // total number of channels output \n")),Object(o.b)("p",null,"This sets the number of channels to pan across. For multichannel sound, this will generally be the same number as above."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"~dirt = SuperDirt(4, s); // pan across four channels\n")),Object(o.b)("p",null,"Each 0 in the below represents one orbit, giving us six orbits. You probably want to keep these as zeroes, so every orbit starts from the first channel."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"~dirt.start(57120, [0, 0, 0, 0, 0, 0]);\n")),Object(o.b)("p",null,"That's it! You can save this code in your supercollider startup file (which you can find via the supercollider menus) so you don't have to run it manually when you start supercollider."),Object(o.b)("p",null,"Then to use it, you can use things like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*16" # pan saw\n')),Object(o.b)("p",null,"The above will play kick drums in a ring around all the speakers. If you had four speakers, by default they'd be in position ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"0.25"),", ",Object(o.b)("inlineCode",{parentName:"p"},"0.5")," and ",Object(o.b)("inlineCode",{parentName:"p"},"0.75"),". Therefore ",Object(o.b)("inlineCode",{parentName:"p"},"0.125")," would be halfway between the first two speakers, and ",Object(o.b)("inlineCode",{parentName:"p"},"0.875")," would be halfway between the first and last speakers. Once you get up to ",Object(o.b)("inlineCode",{parentName:"p"},"1"),", you're back to the first speaker again."),Object(o.b)("p",null,"Because ",Object(o.b)("inlineCode",{parentName:"p"},"0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"1")," are the same speaker, the jux function doesn't work well (as it will play the original pattern in position ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", and the transformed pattern on pan position ",Object(o.b)("inlineCode",{parentName:"p"},"1"),", which in multichannel sound, are the same speaker. Instead, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"juxBy 0.5")," , or ",Object(o.b)("inlineCode",{parentName:"p"},"jux'"),", which distributes a list of functions across a multichannel ring."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'d1 $ juxBy 0.5 rev $ sound "bd cp sn:2 mt*2" # pan saw\n\nd1 $ jux\' [id, rev] $ sound "bd cp sn:2 mt*2" # pan saw\n\nd1 $ jux\' [id, rev, fast 2] $ sound "bd cp sn:2 mt*2" # pan saw\n')),Object(o.b)("h2",{id:"hack-the-audio"},"Hack the audio"),Object(o.b)("p",null,"Have a look around the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/tree/master/hacks"},"SuperDirt hacks\nfolder"),"\nfor more fun with orbits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Orbit routing"),Object(o.b)("li",{parentName:"ul"},"Sound spatialisation"),Object(o.b)("li",{parentName:"ul"},"Audio looping"),Object(o.b)("li",{parentName:"ul"},"Adding global / local effects")),Object(o.b)("h2",{id:"audio-mixing-and-mastering"},"Audio mixing and mastering"),Object(o.b)("h3",{id:"stagemaster"},"StageMaster"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/calumgunn/StageMaster"},"StageMaster"),", made by Calum Gunn, is a light mastering chain for use during live coding performance in ",Object(o.b)("strong",{parentName:"p"},"SuperCollider"),". It adds light compression, EQ and limiting to all output."))}c.isMDXComponent=!0}}]);