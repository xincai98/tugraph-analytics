"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6241],{8453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>l});var a=t(6540);const i={},n=a.createContext(i);function c(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(n.Provider,{value:s},e.children)}},9369:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var a=t(4848),i=t(8453);const n={},c="\ud83c\udf08 G6VP \u56fe\u53ef\u89c6\u5316",l={id:"deploy/collaborate_with_g6vp",title:"\ud83c\udf08 [G6VP](https://github.com/antvis/g6vp) \u56fe\u53ef\u89c6\u5316",description:"\u4ec5\u9700 5 \u6b65\uff0c\u5373\u53ef\u5448\u73b0 \ud83c\udf8a",source:"@site/../docs-cn/source/7.deploy/4.collaborate_with_g6vp.md",sourceDirName:"7.deploy",slug:"/deploy/collaborate_with_g6vp",permalink:"/tugraph-analytics/zh/deploy/collaborate_with_g6vp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f5c\u4e1aDashboard\u76d1\u63a7",permalink:"/tugraph-analytics/zh/deploy/dashboard"},next:{title:"LLM\u672c\u5730\u90e8\u7f72",permalink:"/tugraph-analytics/zh/deploy/install_llm"}},r={},h=[{value:"\u4ec5\u9700 5 \u6b65\uff0c\u5373\u53ef\u5448\u73b0 \ud83c\udf8a",id:"\u4ec5\u9700-5-\u6b65\u5373\u53ef\u5448\u73b0-",level:2},{value:"1. \u542f\u52a8 GeaFlow \u6d41\u56fe\u4f5c\u4e1a\u548c Socket \u670d\u52a1",id:"1-\u542f\u52a8-geaflow-\u6d41\u56fe\u4f5c\u4e1a\u548c-socket-\u670d\u52a1",level:3},{value:"2. \u521b\u5efa G6VP \u9879\u76ee",id:"2-\u521b\u5efa-g6vp-\u9879\u76ee",level:3},{value:"3. \u6dfb\u52a0\u7ec4\u4ef6",id:"3-\u6dfb\u52a0\u7ec4\u4ef6",level:3},{value:"4. \u6f14\u793a",id:"4-\u6f14\u793a",level:3},{value:"5. \u7ed3\u679c\u5c55\u793a",id:"5-\u7ed3\u679c\u5c55\u793a",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsxs)(s.h1,{id:"-g6vp-\u56fe\u53ef\u89c6\u5316",children:["\ud83c\udf08 ",(0,a.jsx)(s.a,{href:"https://github.com/antvis/g6vp",children:"G6VP"})," \u56fe\u53ef\u89c6\u5316"]})}),"\n",(0,a.jsx)(s.h2,{id:"\u4ec5\u9700-5-\u6b65\u5373\u53ef\u5448\u73b0-",children:"\u4ec5\u9700 5 \u6b65\uff0c\u5373\u53ef\u5448\u73b0 \ud83c\udf8a"}),"\n",(0,a.jsx)(s.h3,{id:"1-\u542f\u52a8-geaflow-\u6d41\u56fe\u4f5c\u4e1a\u548c-socket-\u670d\u52a1",children:"1. \u542f\u52a8 GeaFlow \u6d41\u56fe\u4f5c\u4e1a\u548c Socket \u670d\u52a1"}),"\n",(0,a.jsxs)(s.p,{children:["\u53c2\u8003 ",(0,a.jsx)(s.a,{href:"https://github.com/TuGraph-family/tugraph-analytics/blob/master/docs/docs-cn/quick_start.md",children:"\u5feb\u901f\u5f00\u59cb"})]}),"\n",(0,a.jsxs)(s.p,{children:["\u26a0\ufe0f \u6ce8\u610f\u5728 ",(0,a.jsx)(s.code,{children:"\u542f\u52a8SocketServer"})," \u6b65\u9aa4\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u4ee3\u66ff"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"bin/socket.sh 9003 GI\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u8f93\u51fa\u4e0b\u5217\u5185\u5bb9\u65f6\uff0c\u5373\u8868\u793a Tugraph Analytics \u51c6\u5907\u597d\u5efa\u7acb\u8fde\u63a5"}),"\n",(0,a.jsx)(s.img,{width:"610",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/a25ed6ba-4fb9-4db1-9325-ee2f26a4337f"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["\u5982\u542f\u52a8\u670d\u52a1\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u53ef\u89c1 ",(0,a.jsx)(s.a,{href:"https://github.com/TuGraph-family/tugraph-analytics/issues/1",children:"https://github.com/TuGraph-family/tugraph-analytics/issues/1"})]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"2-\u521b\u5efa-g6vp-\u9879\u76ee",children:"2. \u521b\u5efa G6VP \u9879\u76ee"}),"\n",(0,a.jsxs)(s.p,{children:["\u8fdb\u5165",(0,a.jsx)(s.a,{href:"https://insight.antv.antgroup.com/#/workbook/create",children:"\u65b0\u5efa\u753b\u5e03"}),"\uff0c\u8f93\u5165\u5de5\u4f5c\u7c3f\u540d\u79f0\u3002\u6211\u4eec\u4f1a\u5728\u540e\u9762\u624b\u52a8\u6dfb\u52a0\u70b9\u8fb9\u6570\u636e\uff0c\u6240\u4ee5\u8fd9\u91cc\u968f\u4fbf\u9009\u62e9\u4e00\u4e2a\u6848\u4f8b\u6570\u636e\u96c6\u5373\u53ef\uff0c\u6a21\u7248\u4f7f\u7528",(0,a.jsx)(s.strong,{children:"\u6781\u7b80\u6a21\u7248"})]}),"\n",(0,a.jsx)(s.h3,{id:"3-\u6dfb\u52a0\u7ec4\u4ef6",children:"3. \u6dfb\u52a0\u7ec4\u4ef6"}),"\n",(0,a.jsxs)(s.p,{children:["\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u5728\u5de5\u5177\u680f\u4e2d\u6dfb\u52a0 ",(0,a.jsx)(s.strong,{children:"\u6e05\u7a7a\u753b\u5e03"}),"\uff1b\u7136\u540e\u5728\u9ed8\u8ba4\u5e03\u5c40\u7684\u4fa7\u8fb9\u5bb9\u5668\u4e2d\u6dfb\u52a0",(0,a.jsx)(s.strong,{children:"\u73af\u8def\u68c0\u6d4b Demo"})]}),"\n",(0,a.jsx)(s.img,{width:"463",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/b01271b5-162c-4216-9a9c-bf7a5570c999"}),"\n",(0,a.jsx)(s.img,{width:"474",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/238685ec-d9cf-4fcf-8357-56f4f8a8928d"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["\u6b64\u65f6\u9879\u76ee\u753b\u5e03\u5e94\u8be5\u5982\u4e0b\u6240\u793a\n",(0,a.jsx)(s.img,{width:"1149",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/e660fa5b-aa31-4e7e-b295-cb071cc476c1"})]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["\u70b9\u51fb\u5de5\u5177\u680f\u4e2d\u7684",(0,a.jsx)(s.code,{children:"\ud83e\uddf9\u6e05\u9664"}),"\u9009\u9879\u6765\u6e05\u7a7a\u753b\u5e03\u8282\u70b9"]}),"\n",(0,a.jsx)(s.img,{width:"241",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/61316029-71ba-410f-94bf-47c6c65aec34"}),"\n",(0,a.jsxs)(s.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6dfb\u52a0\u5b8c",(0,a.jsx)(s.code,{children:"\u73af\u8def\u68c0\u6d4bDemo"}),"\u7ec4\u4ef6\u540e\uff0c\u4f1a\u81ea\u52a8\u5efa\u7acb\u8fde\u63a5\u3002"]}),"\n",(0,a.jsx)(s.img,{width:"328",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/5246536b-ddb0-4c3c-91fb-e941101e272a"}),"\n",(0,a.jsx)(s.p,{children:"Tugraph Analytics \u7aef\u5efa\u7acb\u8fde\u63a5\u540e\u540c\u6837\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,a.jsx)(s.img,{width:"616",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/46be1e88-9c93-430e-92cc-db8024691095"}),"\n",(0,a.jsx)(s.h3,{id:"4-\u6f14\u793a",children:"4. \u6f14\u793a"}),"\n",(0,a.jsx)(s.p,{children:"\u73af\u8def\u68c0\u6d4b Demo \u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u8fdb\u884c\u4ea4\u4e92\uff1a"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\u65b9\u5f0f\u4e00 \u5728\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u70b9\u8fb9\u4fe1\u606f"}),"\n",(0,a.jsx)(s.li,{children:"\u65b9\u5f0f\u4e8c \u4f7f\u7528\u5185\u7f6e\u6570\u636e\u8fdb\u884c\u6f14\u793a"}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"\u4e24\u79cd\u65b9\u5f0f\u672c\u8d28\u90fd\u662f\u8c03\u7528 Tugraph Analytics \u8fdb\u884c\u5b9e\u65f6\u8ba1\u7b97\uff0c\u4e0d\u8fc7\u65b9\u5f0f\u4e8c\u7701\u7565\u4e86\u624b\u52a8\u8f93\u5165\u8fc7\u7a0b\u3002"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u5185\u7f6e\u6570\u636e\u8fdb\u884c\u5feb\u901f\u6f14\u793a\uff0c\u70b9\u51fb\u3010\u9009\u9879\u3011\uff0c\u9009\u62e9",(0,a.jsx)(s.code,{children:"\u6dfb\u52a0\u70b9"}),"\uff0c\u753b\u5e03\u4e2d\u51fa\u73b0\u4e86 7 \u4e2a\u70b9\u4fe1\u606f\uff1b\u63a5\u7740\u9009\u62e9",(0,a.jsx)(s.code,{children:"\u6dfb\u52a0\u8fb9"}),"\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u4e0a\u65b9\u5bf9\u8bdd\u6846\u4e2d\u770b\u5230\u6dfb\u52a0\u8bb0\u5f55\u3002"]}),"\n",(0,a.jsx)(s.img,{width:"332",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/7ca76607-41a1-4afe-9427-cf7599de6889"}),"\n",(0,a.jsx)(s.p,{children:"\u540c\u6837\u7684\uff0cTugraph Analytics \u7ec8\u7aef\u4e5f\u4f1a\u5b9e\u65f6\u8f93\u51fa\u64cd\u4f5c\u4fe1\u606f\uff0c\u5e76\u81ea\u52a8\u542f\u52a8\u8ba1\u7b97\u4efb\u52a1\u3002"}),"\n",(0,a.jsx)(s.img,{width:"611",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/d8d0d73a-4c07-4ecd-bcac-4633a742933a"}),"\n",(0,a.jsx)(s.h3,{id:"5-\u7ed3\u679c\u5c55\u793a",children:"5. \u7ed3\u679c\u5c55\u793a"}),"\n",(0,a.jsx)(s.p,{children:"Tugraph Analytics \u5b8c\u6210\u73af\u8def\u68c0\u6d4b\u8ba1\u7b97\u4efb\u52a1\u540e\uff0c\u4f1a\u81ea\u52a8\u8fd4\u56de\u68c0\u6d4b\u7ed3\u679c\u3002"}),"\n",(0,a.jsx)(s.img,{width:"324",alt:"image",src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/ba343acf-812a-4df5-8da4-ff70e0b2531d"}),"\n",(0,a.jsx)(s.p,{children:"\u53f3\u4fa7\u753b\u5e03\u4e2d\u4f1a\u52a8\u6001\u663e\u793a\u51fa\u672c\u6b21\u73af\u8def\u68c0\u6d4b\u7ed3\u679c\u4fe1\u606f\uff1a"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/TuGraph-family/tugraph-analytics/assets/25787943/f8595322-d477-4702-a52e-4f03092b7219",alt:"Jun-12-2023 19-53-35"})})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);