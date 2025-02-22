"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40611],{70936:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"interfaces/ContainerCreateOptions","title":"Interface: ContainerCreateOptions","description":"Defined in3122","source":"@site/api/interfaces/ContainerCreateOptions.md","sourceDirName":"interfaces","slug":"/interfaces/ContainerCreateOptions","permalink":"/api/interfaces/ContainerCreateOptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ContainerAuthInfo","permalink":"/api/interfaces/ContainerAuthInfo"},"next":{"title":"ContainerCreateResult","permalink":"/api/interfaces/ContainerCreateResult"}}');var t=s(62540),a=s(43023);const o={},d="Interface: ContainerCreateOptions",c={},r=[{value:"Properties",id:"properties",level:2},{value:"ArgsEscaped?",id:"argsescaped",level:3},{value:"AttachStderr?",id:"attachstderr",level:3},{value:"AttachStdin?",id:"attachstdin",level:3},{value:"AttachStdout?",id:"attachstdout",level:3},{value:"Cmd?",id:"cmd",level:3},{value:"Detach?",id:"detach",level:3},{value:"Domainname?",id:"domainname",level:3},{value:"Entrypoint?",id:"entrypoint",level:3},{value:"Env?",id:"env",level:3},{value:"EnvFiles?",id:"envfiles",level:3},{value:"ExposedPorts?",id:"exposedports",level:3},{value:"Index Signature",id:"index-signature",level:4},{value:"HealthCheck?",id:"healthcheck",level:3},{value:"HostConfig?",id:"hostconfig",level:3},{value:"Hostname?",id:"hostname",level:3},{value:"Image?",id:"image",level:3},{value:"Labels?",id:"labels",level:3},{value:"Index Signature",id:"index-signature-1",level:4},{value:"MacAddress?",id:"macaddress",level:3},{value:"name?",id:"name",level:3},{value:"NetworkConfig?",id:"networkconfig",level:3},{value:"NetworkDisabled?",id:"networkdisabled",level:3},{value:"OnBuild?",id:"onbuild",level:3},{value:"OpenStdin?",id:"openstdin",level:3},{value:"platform?",id:"platform",level:3},{value:"pod?",id:"pod",level:3},{value:"Shell?",id:"shell",level:3},{value:"start?",id:"start",level:3},{value:"StdinOnce?",id:"stdinonce",level:3},{value:"StopSignal?",id:"stopsignal",level:3},{value:"StopTimeout?",id:"stoptimeout",level:3},{value:"Tty?",id:"tty",level:3},{value:"User?",id:"user",level:3},{value:"Volumes?",id:"volumes",level:3},{value:"Index Signature",id:"index-signature-2",level:4},{value:"WorkingDir?",id:"workingdir",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-containercreateoptions",children:"Interface: ContainerCreateOptions"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3122",children:"packages/extension-api/src/extension-api.d.ts:3122"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"argsescaped",children:"ArgsEscaped?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"ArgsEscaped"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3253",children:"packages/extension-api/src/extension-api.d.ts:3253"})]}),"\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.p,{children:"Command is already escaped (Windows only)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"attachstderr",children:"AttachStderr?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"AttachStderr"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3221",children:"packages/extension-api/src/extension-api.d.ts:3221"})]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to attach to ",(0,t.jsx)(n.code,{children:"stderr"})," (default false)"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"attachstdin",children:"AttachStdin?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"AttachStdin"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3211",children:"packages/extension-api/src/extension-api.d.ts:3211"})]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to attach to ",(0,t.jsx)(n.code,{children:"stdin"})," (default false)"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"attachstdout",children:"AttachStdout?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"AttachStdout"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3216",children:"packages/extension-api/src/extension-api.d.ts:3216"})]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to attach to ",(0,t.jsx)(n.code,{children:"stdout"}),"(default false)"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"cmd",children:"Cmd?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Cmd"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3199",children:"packages/extension-api/src/extension-api.d.ts:3199"})]}),"\n",(0,t.jsx)(n.p,{children:"Command to run specified as an array of strings"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"detach",children:"Detach?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Detach"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3236",children:"packages/extension-api/src/extension-api.d.ts:3236"})]}),"\n",(0,t.jsx)(n.p,{children:"Run the container in the background"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"domainname",children:"Domainname?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Domainname"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3153",children:"packages/extension-api/src/extension-api.d.ts:3153"})]}),"\n",(0,t.jsx)(n.p,{children:"The domain name to use for the container."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"entrypoint",children:"Entrypoint?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Entrypoint"}),": ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3206",children:"packages/extension-api/src/extension-api.d.ts:3206"})]}),"\n",(0,t.jsx)(n.p,{children:"The entry point for the container as a string or an array of strings."}),"\n",(0,t.jsxs)(n.p,{children:["If the array consists of exactly one empty string (",(0,t.jsx)(n.code,{children:'[""]'}),") then the entry point is reset to system default (i.e., the entry point used by docker when there is no ENTRYPOINT instruction in the Containerfile)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"env",children:"Env?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Env"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3163",children:"packages/extension-api/src/extension-api.d.ts:3163"})]}),"\n",(0,t.jsxs)(n.p,{children:["A list of environment variables to set inside the container in the form ",(0,t.jsx)(n.code,{children:'["VAR=value", ...]'}),". A variable without ",(0,t.jsx)(n.code,{children:"="})," is removed from the environment, rather than to have an empty value"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"envfiles",children:"EnvFiles?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"EnvFiles"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3168",children:"packages/extension-api/src/extension-api.d.ts:3168"})]}),"\n",(0,t.jsx)(n.p,{children:"Environment files to use"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"exposedports",children:"ExposedPorts?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"ExposedPorts"}),": ",(0,t.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3179",children:"packages/extension-api/src/extension-api.d.ts:3179"})]}),"\n",(0,t.jsxs)(n.p,{children:["An object mapping ports to an empty object in the form: ",(0,t.jsx)(n.code,{children:'{"<port>/<tcp|udp|sctp>": {}}'})]}),"\n",(0,t.jsx)(n.h4,{id:"index-signature",children:"Index Signature"}),"\n",(0,t.jsxs)(n.p,{children:["[",(0,t.jsx)(n.code,{children:"port"}),": ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"healthcheck",children:"HealthCheck?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"HealthCheck"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/HealthConfig",children:(0,t.jsx)(n.code,{children:"HealthConfig"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3246",children:"packages/extension-api/src/extension-api.d.ts:3246"})]}),"\n",(0,t.jsxs)(n.p,{children:["A test to perform to check that the container is healthy. See ",(0,t.jsx)(n.a,{href:"/api/interfaces/HealthConfig",children:"HealthConfig"})," for usage details"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"hostconfig",children:"HostConfig?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"HostConfig"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/HostConfig",children:(0,t.jsx)(n.code,{children:"HostConfig"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3184",children:"packages/extension-api/src/extension-api.d.ts:3184"})]}),"\n",(0,t.jsx)(n.p,{children:"Container configuration that depends on the host we are running on"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"hostname",children:"Hostname?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Hostname"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3148",children:"packages/extension-api/src/extension-api.d.ts:3148"})]}),"\n",(0,t.jsx)(n.p,{children:"The hostname to use for the container, as a valid RFC 1123 hostname"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"image",children:"Image?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Image"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3189",children:"packages/extension-api/src/extension-api.d.ts:3189"})]}),"\n",(0,t.jsx)(n.p,{children:"The name (or reference) of the image to use when creating the container"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"labels",children:"Labels?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Labels"}),": ",(0,t.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3173",children:"packages/extension-api/src/extension-api.d.ts:3173"})]}),"\n",(0,t.jsx)(n.p,{children:"User-defined key/value metadata"}),"\n",(0,t.jsx)(n.h4,{id:"index-signature-1",children:"Index Signature"}),"\n",(0,t.jsxs)(n.p,{children:["[",(0,t.jsx)(n.code,{children:"label"}),": ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"macaddress",children:"MacAddress?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"MacAddress"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3273",children:"packages/extension-api/src/extension-api.d.ts:3273"})]}),"\n",(0,t.jsx)(n.p,{children:"MAC address of the container."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"name?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"name"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3126",children:"packages/extension-api/src/extension-api.d.ts:3126"})]}),"\n",(0,t.jsxs)(n.p,{children:["Assign the specified name to the container. Must match the regular expression",(0,t.jsx)(n.code,{children:"/?[a-zA-Z0-9][a-zA-Z0-9_.-]+"}),". If not speficied, the platform assigns a unique name to the container"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"networkconfig",children:"NetworkConfig?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"NetworkConfig"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/NetworkingConfig",children:(0,t.jsx)(n.code,{children:"NetworkingConfig"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3297",children:"packages/extension-api/src/extension-api.d.ts:3297"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"networkdisabled",children:"NetworkDisabled?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"NetworkDisabled"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3268",children:"packages/extension-api/src/extension-api.d.ts:3268"})]}),"\n",(0,t.jsx)(n.p,{children:"Disable networking for the container."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"onbuild",children:"OnBuild?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"OnBuild"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3278",children:"packages/extension-api/src/extension-api.d.ts:3278"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ONBUILD"})," metadata that were defined in the image's ",(0,t.jsx)(n.code,{children:"Dockerfile"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"openstdin",children:"OpenStdin?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"OpenStdin"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3226",children:"packages/extension-api/src/extension-api.d.ts:3226"})]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to open ",(0,t.jsx)(n.code,{children:"stdin"})," (default false)"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"platform",children:"platform?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"platform"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3143",children:"packages/extension-api/src/extension-api.d.ts:3143"})]}),"\n",(0,t.jsx)(n.p,{children:'Default: ""'}),"\n",(0,t.jsxs)(n.p,{children:["Platform in the format ",(0,t.jsx)(n.code,{children:"os[/arch[/variant]]"})," used for image lookup."]}),"\n",(0,t.jsxs)(n.p,{children:["When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a ",(0,t.jsx)(n.code,{children:"404"})," status."]}),"\n",(0,t.jsxs)(n.p,{children:["If the option is not set, the host's native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the ",(0,t.jsx)(n.code,{children:"Warnings"})," field in the response, for example;"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"WARNING: The requested image's platform (linux/arm64/v8) does not\n         match the detected host platform (linux/amd64) and no\n         specific platform was requested\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"pod",children:"pod?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"pod"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3302",children:"packages/extension-api/src/extension-api.d.ts:3302"})]}),"\n",(0,t.jsx)(n.p,{children:"Pod where to create the container in"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"shell",children:"Shell?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Shell"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3295",children:"packages/extension-api/src/extension-api.d.ts:3295"})]}),"\n",(0,t.jsxs)(n.p,{children:["Shell for when ",(0,t.jsx)(n.code,{children:"RUN"}),", ",(0,t.jsx)(n.code,{children:"CMD"}),", and ",(0,t.jsx)(n.code,{children:"ENTRYPOINT"})," uses a shell."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"start",children:"start?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"start"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3241",children:"packages/extension-api/src/extension-api.d.ts:3241"})]}),"\n",(0,t.jsx)(n.p,{children:"Start the container immediately (default true)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"stdinonce",children:"StdinOnce?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"StdinOnce"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3231",children:"packages/extension-api/src/extension-api.d.ts:3231"})]}),"\n",(0,t.jsxs)(n.p,{children:["Close ",(0,t.jsx)(n.code,{children:"stdin"})," after one attached client disconnects (deafult false)"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"stopsignal",children:"StopSignal?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"StopSignal"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3283",children:"packages/extension-api/src/extension-api.d.ts:3283"})]}),"\n",(0,t.jsx)(n.p,{children:"Signal to stop a container as a string or unsigned integer."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"stoptimeout",children:"StopTimeout?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"StopTimeout"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3290",children:"packages/extension-api/src/extension-api.d.ts:3290"})]}),"\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"10"})]}),"\n",(0,t.jsx)(n.p,{children:"Timeout to stop a container in seconds."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tty",children:"Tty?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Tty"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3194",children:"packages/extension-api/src/extension-api.d.ts:3194"})]}),"\n",(0,t.jsx)(n.p,{children:"Attach standard streams to a TTY, including stdin if it is not closed (default false)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"user",children:"User?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"User"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3158",children:"packages/extension-api/src/extension-api.d.ts:3158"})]}),"\n",(0,t.jsx)(n.p,{children:"The user that commands are run as inside the container"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"volumes",children:"Volumes?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"Volumes"}),": ",(0,t.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3258",children:"packages/extension-api/src/extension-api.d.ts:3258"})]}),"\n",(0,t.jsx)(n.p,{children:"An object mapping mount point paths inside the container to empty objects."}),"\n",(0,t.jsx)(n.h4,{id:"index-signature-2",children:"Index Signature"}),"\n",(0,t.jsxs)(n.p,{children:["[",(0,t.jsx)(n.code,{children:"volume"}),": ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"workingdir",children:"WorkingDir?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"WorkingDir"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/tony-sol/podman-desktop/blob/a4c9e16183cb2b60ca60a793e05e4d36a41b6ead/packages/extension-api/src/extension-api.d.ts#L3263",children:"packages/extension-api/src/extension-api.d.ts:3263"})]}),"\n",(0,t.jsx)(n.p,{children:"The working directory for commands to run in."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(63696);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);