"use strict";(self.webpackChunkchecklist_doc=self.webpackChunkchecklist_doc||[]).push([[488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},i="Setting up the database",s={unversionedId:"Guides/setting_up_the_database",id:"Guides/setting_up_the_database",title:"Setting up the database",description:"Installing ContechOS",source:"@site/docs/Guides/setting_up_the_database.md",sourceDirName:"Guides",slug:"/Guides/setting_up_the_database",permalink:"/checklist-doc/docs/Guides/setting_up_the_database",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Guides/setting_up_the_database.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/checklist-doc/docs/Guides/installation"},next:{title:"Introduction",permalink:"/checklist-doc/docs/using_the_app"}},c={},l=[{value:"Installing ContechOS",id:"installing-contechos",level:2},{value:"Setting the data model",id:"setting-the-data-model",level:2},{value:"Adding nodes",id:"adding-nodes",level:2},{value:"Updating the .env file",id:"updating-the-env-file",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-the-database"},"Setting up the database"),(0,o.kt)("h2",{id:"installing-contechos"},"Installing ContechOS"),(0,o.kt)("p",null,"ContechOS is a free open source database which allows templating data.\nIt can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nikolai4D/ContechOS"},"there"),"."),(0,o.kt)("h2",{id:"setting-the-data-model"},"Setting the data model"),(0,o.kt)("p",null,"ChecklistApp use a specific data structure. It can found ","[here]",".\nIn order to work, this file must be in a folder named db placed at the same directory level as your ChecklistApp."),(0,o.kt)("h2",{id:"adding-nodes"},"Adding nodes"),(0,o.kt)("p",null,"ContechOS organize its data upon a hierarchy of levels.\nWe provide the data structure in order to turn ContechOS into a checklist engine.\nThis is the low level (types like questions, answers, questions groups).\nIt is up to you add your specific, higher level, data (the actual questions, answers, questions groups...).\nYou can do so by exploring ContechOS in the browser, and clicking anywhere on the screen.\nA modal will open and propose you to create a node. Make sure to pick the adequate type of node.\nFill the available fields and that's it, you have a new node."),(0,o.kt)("h2",{id:"updating-the-env-file"},"Updating the .env file"),(0,o.kt)("p",null,"The .env file contains many references to the ids of your ContechOS instance. Some this ids might be specific to your implementation and you will need to add them to the .env file.\nTo find the id of a specific node, explore ContechOS in the brwoser and click on the desired node.\nIt logs an object with an id in the console. You can copy this id in your .env file."))}u.isMDXComponent=!0}}]);