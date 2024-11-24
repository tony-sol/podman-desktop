"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87785],{92878:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"running-a-kubernetes-cluster","title":"Running a Kubernetes cluster","description":"Running a Kubernetes cluster","source":"@site/tutorial/running-a-kubernetes-cluster.md","sourceDirName":".","slug":"/running-a-kubernetes-cluster","permalink":"/tutorial/running-a-kubernetes-cluster","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"podman-desktop","permalink":"/tutorial/tags/podman-desktop"},{"inline":true,"label":"running-a-kubernetes-cluster","permalink":"/tutorial/tags/running-a-kubernetes-cluster"},{"inline":true,"label":"set-up-a-cluster","permalink":"/tutorial/tags/set-up-a-cluster"}],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Running a Kubernetes cluster","description":"Running a Kubernetes cluster","keywords":["podman desktop","podman","Kubernetes"],"tags":["podman-desktop","running-a-kubernetes-cluster","set-up-a-cluster"]},"sidebar":"defaultSidebar","previous":{"title":"Running a pod using a container or docker file","permalink":"/tutorial/running-a-pod-using-a-container-docker-file"},"next":{"title":"Deploying a Kubernetes application","permalink":"/tutorial/deploying-a-kubernetes-application"}}');var t=s(62540),r=s(43023);const l={sidebar_position:3,title:"Running a Kubernetes cluster",description:"Running a Kubernetes cluster",keywords:["podman desktop","podman","Kubernetes"],tags:["podman-desktop","running-a-kubernetes-cluster","set-up-a-cluster"]},a="Running a Kubernetes cluster",o={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Installing the extension",id:"installing-the-extension",level:2},{value:"Installing CLI on your local machine",id:"installing-cli-on-your-local-machine",level:2},{value:"Applicable on Windows: Configure Podman on WSL",id:"applicable-on-windows-configure-podman-on-wsl",level:2},{value:"Creating and running a Kubernetes cluster",id:"creating-and-running-a-kubernetes-cluster",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function d(n){const e={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"running-a-kubernetes-cluster",children:"Running a Kubernetes cluster"})}),"\n",(0,t.jsx)(e.p,{children:"This tutorial covers the following end-to-end tasks required to run a Kubernetes cluster with the help of an extension:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Installing the extension"}),"\n",(0,t.jsx)(e.li,{children:"Installing CLI on your local machine"}),"\n",(0,t.jsx)(e.li,{children:"Applicable on Windows: Configure Podman on WSL"}),"\n",(0,t.jsx)(e.li,{children:"Creating and running a Kubernetes cluster"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"You can use extensions, such as Kind and Minikube to start a local Kubernetes development cluster. When you have a running Kubernetes cluster, you can easily develop and test Kubernetes applications before deploying them to production. This tutorial focuses on creating a Kubernetes cluster using the Minikube extension."}),"\n",(0,t.jsx)(e.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsx)(e.p,{children:"Make sure you have:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/installation",children:"Installed Podman Desktop"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/podman/creating-a-podman-machine",children:"A running Podman machine"}),"."]}),"\n",(0,t.jsx)(e.li,{children:"A developer role."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"installing-the-extension",children:"Installing the extension"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Go to ",(0,t.jsx)(e.strong,{children:"Extensions > Catalog"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Find the Minikube extension using the search box."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click the ",(0,t.jsx)(e.strong,{children:"Install"})," icon.\n",(0,t.jsx)(e.img,{alt:"install the extension",src:s(82438).A+"",width:"1952",height:"622"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Select the ",(0,t.jsx)(e.strong,{children:"Installed"})," tab to check the Minikube extension is active.\n",(0,t.jsx)(e.img,{alt:"extension enabled",src:s(25352).A+"",width:"1952",height:"622"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"installing-cli-on-your-local-machine",children:"Installing CLI on your local machine"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click the ",(0,t.jsx)(e.strong,{children:"Minikube not found on your system"})," icon in the status bar.\n",(0,t.jsx)(e.img,{alt:"binary not available",src:s(69981).A+"",width:"1862",height:"1126"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Yes"})," to download the Minikube binary."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Yes"})," to install the binary system-wide for accessibility on the command line."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Enter your system password, if prompted. A notification of successful operation opens.\n",(0,t.jsx)(e.img,{alt:"binary successfully installed",src:s(80037).A+"",width:"949",height:"294"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Check the ",(0,t.jsx)(e.strong,{children:"Minikube not found on your system"})," icon disappears from the status bar."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"applicable-on-windows-configure-podman-on-wsl",children:"Applicable on Windows: Configure Podman on WSL"}),"\n",(0,t.jsx)(e.p,{children:"To use the Minikube tool on Windows, you must have a Podman machine running in rootful mode."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["By default, the Podman Desktop ",(0,t.jsx)(e.strong,{children:"Settings"})," enable you to create a Podman machine that runs in rootful mode."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"root mode enabled",src:s(46991).A+"",width:"1320",height:"1148"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"creating-and-running-a-kubernetes-cluster",children:"Creating and running a Kubernetes cluster"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Go to ",(0,t.jsx)(e.strong,{children:"Settings > Resources"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["In the Minikube tile, click ",(0,t.jsx)(e.strong,{children:"Create new"}),".\n",(0,t.jsx)(e.img,{alt:"create a new cluster",src:s(84509).A+"",width:"1356",height:"998"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Optional: Edit the cluster configuration, if required.\n",(0,t.jsx)(e.img,{alt:"cluster configuration",src:s(8113).A+"",width:"1213",height:"1226"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Create"}),". A notification of successful operation opens."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Go back to resources"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["View that your Minikube cluster is running and a new minikube context is added in the status bar.\n",(0,t.jsx)(e.img,{alt:"Kube context added",src:s(69250).A+"",width:"1779",height:"1128"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/kind",children:"Working with a Kind cluster"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/minikube",children:"Working with a Minikube cluster"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/lima",children:"Working with a Lima cluster"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},80037:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/binary-installed-2b88d5efe2686d814814e57ea0ba829f.png"},8113:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/configure-minikube-cluster-a0cbdc60d286e1f8dee3e5b31666c8e1.png"},84509:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/create-a-new-cluster-73947ae7ac63fdd6ec4c6a9c69fb1ba1.png"},25352:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/extension-enabled-c03210f451aae474b4d2e7fa7a651b46.png"},82438:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/install-icon-8a09d928ad96aaefc80ecd396fa2f99b.png"},69981:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/minikube-binary-not-available-22479a0ab982093592016862d248762c.png"},69250:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/new-context-added-520dd3631ddbeb65773a613d4215d631.png"},46991:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/root-mode-enabled-f6dde2b7fba416e39c977cc367717157.png"},43023:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>a});var i=s(63696);const t={},r=i.createContext(t);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);