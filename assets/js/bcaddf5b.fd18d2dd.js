"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36506],{46808:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"lima/pushing-an-image-to-lima","title":"Pushing an image","description":"Pushing an image to your Lima cluster","source":"@site/docs/lima/pushing-an-image-to-lima.md","sourceDirName":"lima","slug":"/lima/pushing-an-image-to-lima","permalink":"/docs/lima/pushing-an-image-to-lima","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/lima/pushing-an-image-to-lima.md","tags":[{"inline":true,"label":"pushing-an-image","permalink":"/docs/tags/pushing-an-image"},{"inline":true,"label":"lima","permalink":"/docs/tags/lima"}],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Pushing an image","description":"Pushing an image to your Lima cluster","keywords":["podman desktop","podman","containers","images","pushing an image","kubernetes"],"tags":["pushing-an-image","lima"]},"sidebar":"mySidebar","previous":{"title":"Customizing Lima instance","permalink":"/docs/lima/customizing"},"next":{"title":"OpenShift","permalink":"/docs/openshift/"}}');var a=i(62540),r=i(43023);const t={sidebar_position:5,title:"Pushing an image",description:"Pushing an image to your Lima cluster",keywords:["podman desktop","podman","containers","images","pushing an image","kubernetes"],tags:["pushing-an-image","lima"]},o="Pushing an image to your local Lima-powered Kubernetes cluster",l={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"pushing-an-image-to-your-local-lima-powered-kubernetes-cluster",children:"Pushing an image to your local Lima-powered Kubernetes cluster"})}),"\n",(0,a.jsx)(n.p,{children:"With Podman Desktop, you can push an image to your local Lima-powered Kubernetes cluster."}),"\n",(0,a.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/containers",children:"You onboarded a container engine"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/lima",children:"You onboarded a Lima cluster"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/kubernetes/existing-kubernetes",children:"You have set your Kubernetes context to your local Lima-powered Kubernetes cluster"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Your image is available on the ",(0,a.jsx)(n.strong,{children:"Images"})," page: ",(0,a.jsx)(n.code,{children:"<my_image>:<my_tag>"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.strong,{children:"Images"})," from the left navigation pane."]}),"\n",(0,a.jsxs)(n.li,{children:["Click the ",(0,a.jsx)(n.strong,{children:"overflow menu"})," icon corresponding to the image you want to push and select ",(0,a.jsx)(n.strong,{children:"Push image to Lima cluster"}),". A successful operation notification opens.\n",(0,a.jsx)(n.img,{alt:"pushing an image to Lima",src:i(9730).A+"",width:"2122",height:"1206"})]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,a.jsx)(n.p,{children:"Lima enables you to list loaded images:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ LIMA_INSTANCE=<name> lima sudo crictl images\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also create a pod that uses the loaded image:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a ",(0,a.jsx)(n.code,{children:"verify_my_image.yaml"})," Kubernetes YAML file on your workstation.\nReplace the placeholders:"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Pod ",(0,a.jsx)(n.code,{children:"name"})," and container ",(0,a.jsx)(n.code,{children:"name"})," values must consist of lowercase alphanumeric characters, '-', or '.', and must start and end with an alphanumeric character."]}),"\n",(0,a.jsxs)(n.li,{children:["Container ",(0,a.jsx)(n.code,{children:"image"})," value is the image you pushed. You can click the name of the image to check its name and tag."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: <verify-my-image>\nspec:\n  containers:\n    - name: <my-image>\n      image: <my_image>:<my_tag>\n      imagePullPolicy: Never\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.strong,{children:"Pods"})," from the left navigation pane."]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Play Kubernetes YAML"})," and provide the following details:"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Kubernetes YAML file"}),": select your ",(0,a.jsx)(n.code,{children:"verify_my_image.yaml"})," file."]}),"\n",(0,a.jsxs)(n.li,{children:["Set ",(0,a.jsx)(n.strong,{children:"Runtime"})," to ",(0,a.jsx)(n.strong,{children:"Kubernetes cluster"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Play"}),".\n",(0,a.jsx)(n.img,{alt:"play a Kubernetes YAML",src:i(45609).A+"",width:"1758",height:"1278"})]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Done"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["View the created pod ",(0,a.jsx)(n.code,{children:"verify-my-image"})," on the same page. The pod ",(0,a.jsx)(n.strong,{children:"STATUS"})," is ",(0,a.jsx)(n.strong,{children:"RUNNING"}),".\n",(0,a.jsx)(n.img,{alt:"play a Kubernetes YAML",src:i(7558).A+"",width:"1878",height:"506"})]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},45609:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/create-pod-from-kube-yaml-388270f1deafd46c623e428fa6c3c286.png"},9730:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/push-image-to-lima-0fa0302c19720ce751f57aa12362e4bb.png"},7558:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/verify-my-image-pod-running-5726f4e99f3ec7d395b5614dc7277d79.png"},43023:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(63696);const a={},r=s.createContext(a);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);