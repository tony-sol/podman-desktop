"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73607],{6241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var s=t(9778),i=t(62540),o=t(43023);const r={title:"Podman Desktop 1.6 Release",description:"Podman Desktop 1.6 has been released!",slug:"podman-desktop-release-1.6",authors:"slemeur",tags:["podman-desktop","release","kubernetes","openshift","onboarding","compose","extensions","settings"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.6/santaseal.png"},a=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Minikube featured extension",id:"minikube-featured-extension",level:3},{value:"Command-Line Tools Configuration: Compose and Kubectl",id:"command-line-tools-configuration-compose-and-kubectl",level:3},{value:"Kubernetes Contexts Manager",id:"kubernetes-contexts-manager",level:3},{value:"Editable Podman Machine",id:"editable-podman-machine",level:3},{value:"Tabs/Filters for Containers and Pods",id:"tabsfilters-for-containers-and-pods",level:3},{value:"Sorting for Volumes and Images lists",id:"sorting-for-volumes-and-images-lists",level:3},{value:"Environment columns on Containers and Pods lists",id:"environment-columns-on-containers-and-pods-lists",level:3},{value:"Better visibility to the containers running in Pods",id:"better-visibility-to-the-containers-running-in-pods",level:4},{value:"Extension API improvements",id:"extension-api-improvements",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"Where to Download",id:"where-to-download",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Podman Desktop 1.6 Release! \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman-desktop-1-6-hero",src:t(70546).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.p,{children:"This release introduces:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Minikube Featured Extension"}),": Minikube extension to create local Kubernetes clusters in containers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Podman 4.8.2"}),": ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/releases",children:"Podman 4.8.2"})," is now included in Windows and Mac installers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Setting Page for Command-Line Tools"}),": Manage and update your CLI tools."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes Contexts Manager"}),": Browse all your kubernetes contexts, set default and remove unused ones."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Editable Podman Machine for MacOS"}),": Easy resize and reconfiguration of the Podman runtime environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filters for Containers and Pods Lists"}),": Focus on the containers and Pods you are working with."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sorting on Volumes and Images List"}),": Sort volumes or images with your prefered criterias."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Environment Colums on Containers and Pods lists"}),": Easy catch of the environment on which a container or a pod is running on."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Extension API Improvements"}),": Another set of improvements to the extension API enabling more goodness for \ud83e\uddad Podman Desktop's extensions."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 1.6 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,i.jsx)(n.h3,{id:"minikube-featured-extension",children:"Minikube featured extension"}),"\n",(0,i.jsxs)(n.p,{children:["For developers who need to run Kubernetes locally and reproduce an environment close to production for development and experimentation purposes, Podman Desktop allows users to easily set up that environment on a local machine. There are two extensions providing the capability to configure a open source Kubernetes cluster locally, you can either choose between ",(0,i.jsx)(n.a,{href:"https://kind.sigs.k8s.io/",children:"Kind"})," or ",(0,i.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/",children:"Minikube"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The Minikube extension allows you to install Minikube on your workstation and also to setup a Kubernetes cluster locally running in a container! Yes, you read that correctly - in a container similar to how Kind works. The advantage is that it's lighter and faster to start. With Minikube, one of the advantage, is that you can build your images locally with Podman and get them automatically available in your local Kubernetes cluster - which will speed up your turnarounds when you want to test your application. If you want to learn more this, read the ",(0,i.jsx)(n.a,{href:"https://podman-desktop.io/blog/sharing-podman-images-with-kubernetes-cluster",children:"following blog post"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Minikube-feature-extension",src:t(53427).A+"",width:"1906",height:"1038"})}),"\n",(0,i.jsx)(n.h3,{id:"command-line-tools-configuration-compose-and-kubectl",children:"Command-Line Tools Configuration: Compose and Kubectl"}),"\n",(0,i.jsx)(n.p,{children:"Configuring and managing your setup is getting easier with the addition of a new section in the Settings to manage command-line tools. In Podman Desktop, extensions can list command-line tools that are helpful to their users or required to make use of the installed extensions."}),"\n",(0,i.jsx)(n.p,{children:"There are two command-line tools within Podman Desktop that allows you to view whether they are installed or require an update:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Compose binary for running 'podman compose' commands."}),"\n",(0,i.jsx)(n.li,{children:"kubectl for interacting with Kubernetes clusters."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cli-tools",src:t(35598).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:"From the settings you can see the command-line tools that are installed, and you can see the version - and when a new version is available, you'll get a small notification to allow you easily update to that version."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Compose-Update",src:t(51682).A+"",width:"2078",height:"1132"})}),"\n",(0,i.jsx)(n.h3,{id:"kubernetes-contexts-manager",children:"Kubernetes Contexts Manager"}),"\n",(0,i.jsx)(n.p,{children:"We are introducing a new screen available from the Settings which allows you to easily manage your Kubernetes contexts. Podman Desktop was already providing the handy context switcher available from the status bar, but when you get to work with multiple Kubernetes environments, it's not uncommon to end with a big and long list of Kubernetes contexts."}),"\n",(0,i.jsx)(n.p,{children:"The new Kubernetes Contexts screen allows you to easily see all your registered Kubernetes contexts. You can use the screen to clean up your registered contexts, or set the current (default) context."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Kubernetes Contexts List",src:t(53611).A+"",width:"2864",height:"2284"})}),"\n",(0,i.jsx)(n.h3,{id:"editable-podman-machine",children:"Editable Podman Machine"}),"\n",(0,i.jsx)(n.p,{children:"A Podman machine is a virtual environment specifically designed to run Podman containers on Mac and Windows. It allows users to manage and operate containerized applications in an isolated and controlled setting. When creating a Podman machine, you configure its settings: memory, CPU(s) and disk size."}),"\n",(0,i.jsx)(n.p,{children:"We've received the feedback regarding the ability to reconfigure your Podman machine on the go. This is now possible for macOS users, and particularly useful when you start with an environment and need to scale it up based on new needs and containers you would like to run in your Podman environment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/1636769/91150767-58a9-47b5-abbc-58d2d50f4fca",alt:"Editable podman machine"})}),"\n",(0,i.jsx)(n.p,{children:"You'll notice we improved the sliders to configure the Podman machine's options - and also introduced a way to enter numeric values directly."}),"\n",(0,i.jsx)(n.h3,{id:"tabsfilters-for-containers-and-pods",children:"Tabs/Filters for Containers and Pods"}),"\n",(0,i.jsx)(n.p,{children:"Being able to quickly identify the containers and the pods you are working with is critical when you are iterating on the development of your application. For this reason, we added filters at the top of the lists of Containers and Pods that allow you to easily view all the containers/pods, only those that are running, or only those that are stopped."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/1636769/37190c74-7fa5-485e-81a4-bd970f606286",alt:"Filters for containers and pods"})}),"\n",(0,i.jsx)(n.h3,{id:"sorting-for-volumes-and-images-lists",children:"Sorting for Volumes and Images lists"}),"\n",(0,i.jsx)(n.p,{children:"The lists of Volumes and Images have improved and are now have the ability to be sorted by the criteria of your choice. You can for example filter images by their size - which can be convenient when you want to clean up your environment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/1636769/0d20b5c2-517c-4ccc-8992-b8df275bcc30",alt:"Sorting for Volumes and Images"})}),"\n",(0,i.jsx)(n.h3,{id:"environment-columns-on-containers-and-pods-lists",children:"Environment columns on Containers and Pods lists"}),"\n",(0,i.jsx)(n.p,{children:"Podman Desktop is able to work with multiple providers: it could work with multiple container engines and multiple Kubernetes environments too. In order to make it easier to identify the containers and the pods and differentiate them depending on which environment they are running onto, we are introducing a new environment column in the list of Containers and Pods to display a badge."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment Column",src:t(82278).A+"",width:"3708",height:"1906"})}),"\n",(0,i.jsx)(n.h4,{id:"better-visibility-to-the-containers-running-in-pods",children:"Better visibility to the containers running in Pods"}),"\n",(0,i.jsx)(n.p,{children:"The list of Pods has been refined to provide easier visibility and access to the containers running within each of them. Each of the containers now have one dot and you can hover each dot to display the info about the container - and if you click on it you'll be able to access the details of the container."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/containers/podman-desktop/assets/1636769/0e88a88e-9a17-4261-b60f-b4d09ca19127",alt:"Visibility for containers in Pods"})}),"\n",(0,i.jsx)(n.h3,{id:"extension-api-improvements",children:"Extension API improvements"}),"\n",(0,i.jsx)(n.p,{children:"The \ud83e\uddad Podman Desktop extension API received many improvements, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Documentation explaining how to create an onboarding workflow for an extension ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4837",children:"#4837"})]}),"\n",(0,i.jsxs)(n.li,{children:["Documented how extensions hook into UI ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4633",children:"#4633"})]}),"\n",(0,i.jsxs)(n.li,{children:["Documented how to implement api client ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4636",children:"#4636"})]}),"\n",(0,i.jsxs)(n.li,{children:["Image checker extension API ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4662",children:"#4662"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added api to register cli updater ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5064",children:"#5064"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Show container connection type and endpoint ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5098",children:"#5098"})]}),"\n",(0,i.jsxs)(n.li,{children:["Environment column to pods/containers ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4583",children:"#4583"})]}),"\n",(0,i.jsxs)(n.li,{children:["Displaying extension icons in the list of extensions ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5101",children:"#5101"})]}),"\n",(0,i.jsxs)(n.li,{children:["Introduced UI icon image component ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5117",children:"#5117"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added icon to extensionInfo ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5089",children:"#5089"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added encoding option on RunOptions ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4942",children:"#4942"})]}),"\n",(0,i.jsxs)(n.li,{children:["Introduced property for appearance but for now only dark is supported ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4887",children:"#4887"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default table sorting ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4860",children:"#4860"})]}),"\n",(0,i.jsxs)(n.li,{children:["Display notification for completed onboarding in task manager ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4811",children:"#4811"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added purple dot when new content is available in dashboard ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4782",children:"#4782"})]}),"\n",(0,i.jsx)(n.li,{children:"Argos CI: Introduce Argos CI to track and detect visual regressions on the website"}),"\n",(0,i.jsxs)(n.li,{children:["Added command palette: add enablement property ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4630",children:"#4630"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added documentation for telemetry and usage data ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4619",children:"#4618"})]}),"\n",(0,i.jsxs)(n.li,{children:["Introduced table component ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4545",children:"#4545"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added ability to abort build image ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4538",children:"#4538"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added support in command palette for category ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4531",children:"#4531"})]}),"\n",(0,i.jsxs)(n.li,{children:["Upgraded flatpak to org.freedesktop.Platform version 23.08 ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3968",children:"#3968"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added open exposed url to pod details ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3762",children:"#3762"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fix reconnect to ",(0,i.jsx)(n.code,{children:"/events"})," if disconnected ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4809",children:"#4809"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: reset loggerhandlerKey after restarting machine ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5168",children:"#5168"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: fix: podman machine created with wrong flags ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5178",children:"#5178"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: avoid to crash if configuration is invalid ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5182",children:"#5182"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: extension installation checks architecture and os ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5191",children:"#5191"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: use URL for proxy specification and add validation ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4825",children:"#4825"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: do not change color and underline of markdown buttons ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5138",children:"#5138"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: do not reconnect when connection is removed ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5131",children:"#5131"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: table headers shouldn't allow text selection ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5118",children:"#5118"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: add style to link ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5108",children:"#5108"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: launch.json references wrong script ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5094",children:"#5094"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: don't link to k8s cluster server ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5087",children:"5087"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: pass the complete imageInfo to the check function ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5069",children:"#5069"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: container tabs should match pods ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5057",children:"#5057"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: revert styling of disabled buttons ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5056",children:"#5056"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: update current context reactively ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5055",children:"#5055"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: make ProviderResultPage do not change input values ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5030",children:"#5030"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: add rowgroup to tables ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5005",children:"#5005"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: add path prop for route object ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4981",children:"#4981"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: remove errant hash mark ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4971",children:"#4971"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: check extension folder contains package.json ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4964",children:"#4964"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: refactor List UI components ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4953",children:"#4953"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: succeeded/completed state for Compose onboarding ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4947",children:"#4947"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: remove flex class from markdown button rendering ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4934",children:"#4934"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: unable to read wsl version when using chinese as syslang on Windows ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4918",children:"#4918"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: retain autostart setting ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4879",children:"#4879"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: use vi.waitUtnil instead of cycles with awaiting promises ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4861",children:"#4861"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: docker host on windows when executing compose command ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4855",children:"#4855"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: merged compose deploy to kube page in UI ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4827",children:"#4827"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: use URL for proxy specification and add validation ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4825",children:"#4825"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: reconnect to /events if disconnected ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4809",children:"#4809"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: remove fixed height after patternfly removal ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4804",children:"#4804"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix background colours after patternfly removal ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4803",children:"#4803"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: report metrics for stopped machines ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4787",children:"#4787"})]}),"\n",(0,i.jsxs)(n.li,{children:["chore: update to docusaurus v3.0.0 ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4764",children:"#4764"})]}),"\n",(0,i.jsxs)(n.li,{children:["chore: drop patternfly ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4762",children:"#4762"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: avoid to send telemetry usage as this method is called every 5s ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4692",children:"#4692"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: location of roots.exe in devmode ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4654",children:"#4654"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: disable create/start container if any port is busy ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4637",children:"#4637"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: fix setup in build image tests ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4625",children:"#4625"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: find a free port ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4616",children:"#4616"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: reduce size of provider cards on the dashboard ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4615",children:"#4615"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: shorter doc nav section titles ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4613",children:"#4613"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: report error if container engine action fails in details page ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4556",children:"#4556"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: remove prev/next bar ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4548",children:"#4548"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: reduce website footer ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4546",children:"#4546"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: handle compose format json that is no longer a JSON array object ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4540",children:"#4540"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: disable push to kind menu item if pushing is in progress ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4530",children:"#4530"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: check for self signed cert message and use insecure param when editing registry password ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4523",children:"#4523"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: add autoscroll to summary pages ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4504",children:"#4504"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: report errors when analyzing extensions ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4380",children:"#4380"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: allow editing of build containerfile ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4471",children:"#4471"})]}),"\n",(0,i.jsxs)(n.li,{children:["refactor: updated compose onboarding installation ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4479",children:"#4479"})]}),"\n",(0,i.jsxs)(n.li,{children:["refactor: remove compose from the status bar ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4492",children:"#4492"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(n.p,{children:"Coming with this new version of \ud83e\uddad Podman Desktop, the documentation has been getting the following improvements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reorganize doc navigation by provider ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4558",children:"#4558"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added vsc runtime dependency for Windows development ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5091",children:"#5091"})]}),"\n",(0,i.jsxs)(n.li,{children:["Show location of lima podman socket ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5090",children:"#5090"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed typo in URI for releases ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4909",children:"#4909"})]}),"\n",(0,i.jsxs)(n.li,{children:["Explain how to create an onboarding workflow for an extension ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4837",children:"#4837"})]}),"\n",(0,i.jsxs)(n.li,{children:["Make it possible for lima to provide both ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4789",children:"#4789"})]}),"\n",(0,i.jsxs)(n.li,{children:["Blog post about minikube/sharing images ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4735",children:"#4735"})]}),"\n",(0,i.jsxs)(n.li,{children:["Remove duplicate text from windows troubleshooting ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4652",children:"#4652"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add step to implement api client ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4636",children:"#4636"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed the main lima command for limactl ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4623",children:"#4623"})]}),"\n",(0,i.jsxs)(n.li,{children:["Lima provider cleanup after the improvements in the implementation ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4622",children:"#4622"})]}),"\n",(0,i.jsxs)(n.li,{children:["Update documentation regarding auto merge ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4519",children:"#4519"})]}),"\n",(0,i.jsxs)(n.li,{children:["Using standard OS tabs for registries docs ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4497",children:"#4497"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed mahine -> machine ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4495",children:"#4495"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added screenshots and fixed formatting to the registries section ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4472",children:"#4472"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make \ud83e\uddad Podman Desktop even better. In this\nrelease we received pull requests from the following people:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/afbjorklund",children:"afbjorklund"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4547",children:"fix: add website target for running vale"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4623",children:"docs: the main lima command is limactl"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4622",children:"docs: lima provider cleanup after the merge"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4789",children:"docs: make it possible for lima to provide both"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5087",children:"fix: don't link to k8s cluster server"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5088",children:"feat: show the k8s namespace"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5090",children:"docs: show location of lima podman socket"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/axel7083",children:"axel7083"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3728",children:"refactoring: item formats from renderer/preferences in separate files"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4364",children:"feat: adding optional abort controller to dockerode api"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ReadingShades",children:"ReadingShades"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4245",children:"docs: Added the environment variable set commands of the common windows terminal emulators"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jannikbertram",children:"jannikbertram"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4457",children:"chore: add close button to troubleshooting and help page"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/singodiyashubham87",children:"singodiyashubham87"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4494",children:"fix: header line height issue on website"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/edvardsanta",children:"edvardsanta"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4518",children:"feat: remove redundant naming in buttons"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Mayureshd-18",children:"Mayureshd-18"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4551",children:"fix typos"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jgelens",children:"jgelens"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4609",children:"Fix rootless command"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/itecompro",children:"itecompro"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4652",children:"docs: remove duplicate text from windows troubleshooting"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/EricSmekens",children:"EricSmekens"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4909",children:"docs: Fixed typo in URI for releases"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh",children:"ecrookshanks-rh"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5095",children:"fix: added text beside icon for create pods"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,i.jsx)(n.h3,{id:"fixed-issues",children:"Fixed Issues"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.6.0",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"where-to-download",children:"Where to Download"}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},35598:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cli-tools-40a9ec75b14a04433ec9a13e0aab1049.png"},51682:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/compose-update-20a782e079045b424da69bd6b3959d37.png"},82278:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/environment-column-f9c0eeca8f5d810da054529ea466bfc4.png"},53611:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kubernetes-contexts-026a8394a1cdb3f8130a8e7b7a1695f5.png"},53427:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/minikube-feature-extension-dedb97b4b55350d997e49986f88e230f.png"},70546:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/santaseal-53d399f20690910707cb93295dd700ce.png"},43023:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(63696);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}},9778:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-1.6","source":"@site/blog/2023-12-18-release-1.6.md","title":"Podman Desktop 1.6 Release","description":"Podman Desktop 1.6 has been released!","date":"2023-12-18T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"openshift","permalink":"/blog/tags/openshift"},{"inline":true,"label":"onboarding","permalink":"/blog/tags/onboarding"},{"inline":true,"label":"compose","permalink":"/blog/tags/compose"},{"inline":true,"label":"extensions","permalink":"/blog/tags/extensions"},{"inline":true,"label":"settings","permalink":"/blog/tags/settings"}],"readingTime":10.435,"hasTruncateMarker":false,"authors":[{"name":"Stevan Le Meur","title":"Product Manager","url":"https://github.com/slemeur","imageURL":"https://github.com/slemeur.png","key":"slemeur","page":null}],"frontMatter":{"title":"Podman Desktop 1.6 Release","description":"Podman Desktop 1.6 has been released!","slug":"podman-desktop-release-1.6","authors":"slemeur","tags":["podman-desktop","release","kubernetes","openshift","onboarding","compose","extensions","settings"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-1.6/santaseal.png"},"unlisted":false,"prevItem":{"title":"Getting started with Compose on Podman Desktop","permalink":"/blog/getting-started-with-compose"},"nextItem":{"title":"Share your local podman images with the Kubernetes cluster","permalink":"/blog/sharing-podman-images-with-kubernetes-cluster"}}')}}]);