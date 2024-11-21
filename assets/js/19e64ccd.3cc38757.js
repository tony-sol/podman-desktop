"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20614],{23391:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var t=i(58207),o=i(62540),r=i(43023),s=i(78296),a=i(22491);const l={title:"Creating a MicroShift bootable image with Podman Desktop",description:"Learn how to create a bootable image featuring MicroShift, using BootC and Podman Desktop.",authors:["cdrage"],tags:["podman-desktop","podman","rhel","bootc","extensions"],hide_table_of_contents:!1},c=void 0,d={authorsImageUrls:[void 0]},h=[{value:"Requirements",id:"requirements",level:2},{value:"Building the BootC container image",id:"building-the-bootc-container-image",level:2},{value:"Logging into Red Hat registry",id:"logging-into-red-hat-registry",level:3},{value:"Download your OpenShift Hybrid Cloud pull secret",id:"download-your-openshift-hybrid-cloud-pull-secret",level:3},{value:"Creating the Containerfile (or Dockerfile)",id:"creating-the-containerfile-or-dockerfile",level:3},{value:"Build with Podman Desktop",id:"build-with-podman-desktop",level:3},{value:"Build the bootable image with BootC Podman Desktop extension",id:"build-the-bootable-image-with-bootc-podman-desktop-extension",level:2},{value:"Install",id:"install",level:3},{value:"Build the image",id:"build-the-image",level:3},{value:"Testing the image",id:"testing-the-image",level:2},{value:"Running the Virtual Machine",id:"running-the-virtual-machine",level:3},{value:"Configuring and verifying MicroShift",id:"configuring-and-verifying-microshift",level:2},{value:"Copying over the OpenShift pull secret",id:"copying-over-the-openshift-pull-secret",level:3},{value:"Listing pods",id:"listing-pods",level:3},{value:"Using Podman Desktop to verify MicroShift",id:"using-podman-desktop-to-verify-microshift",level:3},{value:"Storage configuration",id:"storage-configuration",level:3},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"banner",src:i(60814).A+"",width:"1216",height:"631"})}),"\n",(0,o.jsxs)(n.p,{children:["If you're unfamiliar with ",(0,o.jsx)(n.a,{href:"https://docs.fedoraproject.org/en-US/bootc/",children:"BootC"}),", it offers an impressive method for deploying applications directly to bare metal from either a single Containerfile or a pre-existing bootc-supported image."]}),"\n",(0,o.jsxs)(n.p,{children:['A "bootable" image, known as a BootC container image, allows you to use a simple container image to create a full bootable operating system, whether it\'s a ',(0,o.jsx)(n.code,{children:"raw"})," virtual machine image or an ",(0,o.jsx)(n.code,{children:"iso"})," for USB installation!"]}),"\n",(0,o.jsx)(n.p,{children:"This capability is ideal for a variety of uses, from a simple HTTP server to an OS powering a full-stack application."}),"\n",(0,o.jsxs)(n.p,{children:["In this tutorial, we'll deploy an OpenShift derivative called ",(0,o.jsx)(n.a,{href:"https://www.redhat.com/en/topics/edge-computing/microshift",children:"MicroShift"}),", an edge-optimized version of OpenShift designed for single-node setups on resource-constrained configurations. Think of it as a compact version of OpenShift!"]}),"\n",(0,o.jsx)(n.p,{children:"This entire process is carried out using a single Containerfile (or Dockerfile)."}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"Before starting the tutorial, ensure you have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["An active ",(0,o.jsx)(n.a,{href:"https://developers.redhat.com/articles/2024/05/07/podman-desktop-red-hat-developer-subscription",children:"Red Hat account"})," in order to access RHEL-based images"]}),"\n",(0,o.jsxs)(n.li,{children:["Access to an ",(0,o.jsx)(n.a,{href:"https://console.redhat.com/openshift/install/pull-secret",children:"OpenShift Hybrid Cloud pull secret"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://podman-desktop.io/downloads",children:"Podman Desktop installed"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop-extension-bootc",children:"Podman Desktop BootC Extension"})}),"\n",(0,o.jsxs)(n.li,{children:["Your preferred VM-running software (e.g., ",(0,o.jsx)(n.a,{href:"https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_and_managing_virtualization/introducing-virtualization-in-rhel_configuring-and-managing-virtualization#what-is-virtualization_introducing-virtualization-in-rhel",children:"using libvirt"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"building-the-bootc-container-image",children:"Building the BootC container image"}),"\n",(0,o.jsx)(n.p,{children:"First, we'll build the initial BootC container image from which we'll later create a bootable OS."}),"\n",(0,o.jsx)(n.h3,{id:"logging-into-red-hat-registry",children:"Logging into Red Hat registry"}),"\n",(0,o.jsx)(n.p,{children:"Before proceeding, download the Red Hat Authentication extension from the catalog to enable access to Red Hat registries:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"red hat login",src:i(8308).A+"",width:"1050",height:"700"})}),"\n",(0,o.jsx)(n.p,{children:"Then log into your account:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"red hat login sign in",src:i(66268).A+"",width:"1050",height:"700"})}),"\n",(0,o.jsx)(n.h3,{id:"download-your-openshift-hybrid-cloud-pull-secret",children:"Download your OpenShift Hybrid Cloud pull secret"}),"\n",(0,o.jsxs)(n.p,{children:["Download your ",(0,o.jsx)(n.a,{href:"https://console.redhat.com/openshift/install/pull-secret",children:"pull secret"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This is downloaded as ",(0,o.jsx)(n.code,{children:"pull-secret.txt"}),". Put it in a secure location."]}),"\n",(0,o.jsx)(n.h3,{id:"creating-the-containerfile-or-dockerfile",children:"Creating the Containerfile (or Dockerfile)"}),"\n",(0,o.jsx)(n.p,{children:"The Containerfile is crucial for creating the bootable image."}),"\n",(0,o.jsxs)(n.p,{children:["It's important to note that we will be providing ",(0,o.jsx)(n.em,{children:"one"})," argument during the build and that is the ",(0,o.jsx)(n.strong,{children:"PASSWORD"})," in order to access the Virtual Machine that will be logged in via the ",(0,o.jsx)(n.code,{children:"redhat"})," username."]}),"\n",(0,o.jsxs)(n.p,{children:["We will be using the Containerfile from the ",(0,o.jsx)(n.a,{href:"https://github.com/openshift/microshift/blob/main/docs/contributor/image_mode.md#build-image",children:"MicroShift image mode GitHub documentation"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Copy the Containerfile from the above link to a new file which we will be building with Podman Desktop:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ curl https://raw.githubusercontent.com/openshift/microshift/main/docs/config/Containerfile.bootc-rhel9 -o Containerfile\n"})}),"\n",(0,o.jsx)(n.h3,{id:"build-with-podman-desktop",children:"Build with Podman Desktop"}),"\n",(0,o.jsx)(n.p,{children:"Select the Containerfile and build it within Podman Desktop."}),"\n",(0,o.jsx)(n.p,{children:"You will need to provide:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A password for the ",(0,o.jsx)(n.code,{children:"redhat"})," user that will be created in the Containerfile."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Pass the argument as ",(0,o.jsx)(n.code,{children:"USER_PASSWD"})," in the build page arguments."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"build",src:i(45548).A+"",width:"1050",height:"700"})}),"\n",(0,o.jsx)(n.h2,{id:"build-the-bootable-image-with-bootc-podman-desktop-extension",children:"Build the bootable image with BootC Podman Desktop extension"}),"\n",(0,o.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,o.jsx)(n.p,{children:"Install the BootC Podman Desktop extension from the extensions catalog:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"install",src:i(82657).A+"",width:"1050",height:"749"})}),"\n",(0,o.jsx)(n.h3,{id:"build-the-image",children:"Build the image"}),"\n",(0,o.jsx)(n.p,{children:"Now, create the bootable image from our container image!"}),"\n",(0,o.jsx)(n.p,{children:"Click the new BootC icon on the navigation bar and go to build:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"build_button",src:i(20809).A+"",width:"1050",height:"749"})}),"\n",(0,o.jsx)(n.p,{children:"Once the build is complete, you'll see a confirmation on the dashboard."}),"\n",(0,o.jsxs)(n.p,{children:["Next, select the image we built and choose an appropriate output format for testing the bootable image. ",(0,o.jsx)(n.strong,{children:"RAW"})," is a common choice for local testing with QEMU and other VM software like ",(0,o.jsx)(n.code,{children:"libvirt"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"testing-the-image",children:"Testing the image"}),"\n",(0,o.jsxs)(n.p,{children:["Explore various ways to test your image, using local software or cloud platforms. Here are some common steps for using the ",(0,o.jsx)(n.strong,{children:"RAW"})," output bootable image."]}),"\n",(0,o.jsx)(n.h3,{id:"running-the-virtual-machine",children:"Running the Virtual Machine"}),"\n",(0,o.jsx)(n.p,{children:"This guide doesn't cover all methods for running a virtual machine, but here are the most common:"}),"\n",(0,o.jsxs)(s.A,{children:[(0,o.jsxs)(a.A,{value:"win",label:"Windows (.vhd)",className:"markdown",children:[(0,o.jsxs)(n.p,{children:["When using Hyper-V, create a ",(0,o.jsx)(n.code,{children:".vhd"})," image with BootC:"]}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["When building, select the ",(0,o.jsx)(n.code,{children:".vhd"})," option."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v",children:"Install Hyper-V"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/deploy/export-and-import-virtual-machines",children:"Import the virtual machine"})}),"\n"]})]}),(0,o.jsxs)(a.A,{value:"macOS",label:"macOS Silicon (.raw)",className:"markdown",children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When building, select the ",(0,o.jsx)(n.code,{children:".raw"})," option and ARM64 architecture."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install QEMU:"}),"\n"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ brew install qemu\n"})}),(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to the directory containing your ",(0,o.jsx)(n.code,{children:"disk.raw"})," file:"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ cd ~/output\n"})}),(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Run the ",(0,o.jsx)(n.code,{children:"qemu"})," command:"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$  qemu-system-aarch64 \\\n    -m 8G \\\n    -M virt \\\n    -accel hvf \\\n    -cpu host \\\n    -smp 4 \\\n    -serial mon:stdio \\\n    -nographic \\\n    -netdev user,id=mynet0,hostfwd=tcp::2222-:22 \\\n    -device e1000,netdev=mynet0 \\\n    -drive file=/opt/homebrew/share/qemu/edk2-aarch64-code.fd,format=raw,if=pflash,readonly=on \\\n    -drive file=disk.raw,if=virtio,cache=writethrough,format=raw\n"})}),(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Verify the connection:"}),"\n"]}),(0,o.jsxs)(n.p,{children:["With the above ",(0,o.jsx)(n.code,{children:"qemu"})," command, a port has now been opened locally at :2222 to SSH forward to the bootable image. You can now access your virtual machine by doing the following:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh redhat@localhost -p 2222\n"})})]}),(0,o.jsxs)(a.A,{value:"linux",label:"Linux (.raw)",className:"markdown",children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When building, select the ",(0,o.jsx)(n.code,{children:".raw"})," option and AMD64 architecture."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.qemu.org/download/#linux",children:"Install QEMU"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the directory containing your ",(0,o.jsx)(n.code,{children:"disk.raw"})," file:"]}),"\n"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ cd ~/output\n"})}),(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Run the ",(0,o.jsx)(n.code,{children:"qemu"})," command:"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ qemu-system-x86_64 \\\n    -m 8G \\\n    -cpu Broadwell-v4 \\\n    -nographic \\\n    -netdev user,id=mynet0,hostfwd=tcp::2222-:22 \\\n    -device e1000,netdev=mynet0 \\\n    -snapshot disk.raw\n"})}),(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Verify the connection:"}),"\n"]}),(0,o.jsxs)(n.p,{children:["With the above ",(0,o.jsx)(n.code,{children:"qemu"})," command, a port has now been opened locally at :2222 to SSH forward to the bootable image. You can now access your virtual machine by doing the following:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh redhat@localhost -p 2222\n"})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-and-verifying-microshift",children:"Configuring and verifying MicroShift"}),"\n",(0,o.jsx)(n.p,{children:"After you boot your virtual machine, you can now configure MicroShift as well as verify the connection."}),"\n",(0,o.jsx)(n.h3,{id:"copying-over-the-openshift-pull-secret",children:"Copying over the OpenShift pull secret"}),"\n",(0,o.jsx)(n.p,{children:"Before proceeding with verifying OpenShift, the OpenShift pull secret must be copied over so that MicroShift can download Red Hat registry-authenticated container images."}),"\n",(0,o.jsx)(n.p,{children:"Below we will copy the OpenShift secret you had previously downloaded to the virtual machine."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download your ",(0,o.jsx)(n.a,{href:"https://console.redhat.com/openshift/install/pull-secret",children:"OpenShift pull secret"})," which is downloaded as ",(0,o.jsx)(n.code,{children:"pull-secret.txt"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"scp"})," to copy over to the virtual machine:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ scp -P 2222 pull-secret.txt redhat@localhost:~/\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"SSH into the VM:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh redhat@localhost -p 2222\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Move the secret to ",(0,o.jsx)(n.code,{children:"/etc/crio/openshift-pull-secret"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ sudo mv pull-secret.txt /etc/crio/openshift-pull-secret\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Restart the ",(0,o.jsx)(n.code,{children:"microshift"})," service:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ sudo systemctl restart microshift\n"})}),"\n",(0,o.jsx)(n.h3,{id:"listing-pods",children:"Listing pods"}),"\n",(0,o.jsx)(n.p,{children:"Below we will SSH into the virtual machine and confirm that MicroShift is deploying Pods correctly:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"SSH into the VM:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh redhat@localhost -p 2222\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Copy the generated ",(0,o.jsx)(n.code,{children:"kubeconfig"})," file to ",(0,o.jsx)(n.code,{children:"~/.kube/config"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ mkdir -p ~/.kube\n$ sudo cp /var/lib/microshift/resources/kubeadmin/kubeconfig ~/.kube/config\n$ sudo chown redhat ~/.kube/config\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Verify Pods are running by using ",(0,o.jsx)(n.code,{children:"oc"})," or ",(0,o.jsx)(n.code,{children:"kubectl"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ kubectl get pods -A\nNAMESPACE                  NAME                                       READY   STATUS    RESTARTS   AGE\nkube-system                csi-snapshot-controller-856bb8b9bc-9n7lj   1/1     Running   1          3d23h\nkube-system                csi-snapshot-webhook-7c64d4d4d7-98v6l      1/1     Running   1          3d23h\nopenshift-dns              dns-default-n2td4                          2/2     Running   2          3d23h\nopenshift-dns              node-resolver-7cslg                        1/1     Running   1          3d23h\nopenshift-ingress          router-default-7cbc67954b-nqqc6            1/1     Running   1          3d23h\nopenshift-ovn-kubernetes   ovnkube-master-zcqw5                       4/4     Running   5          3d23h\nopenshift-ovn-kubernetes   ovnkube-node-crnn9                         1/1     Running   2          3d23h\nopenshift-service-ca       service-ca-6799f567-k7lsc                  1/1     Running   1          3d23h\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-podman-desktop-to-verify-microshift",children:"Using Podman Desktop to verify MicroShift"}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can copy the MicroShift configuration file to your local machine and test it remotely on Podman Desktop."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["On your local machine, create the ",(0,o.jsx)(n.code,{children:".kube"})," directory if it does not exist already:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ mkdir ~/.kube\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Copy the remote ",(0,o.jsx)(n.code,{children:"kubeconfig"})," file to a local configuration file:"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Within MicroShift, a ",(0,o.jsx)(n.code,{children:"kubeconfig"})," file is automatically created at ",(0,o.jsx)(n.code,{children:"/var/lib/microshift/resources/kubeadmin/kubeconfig"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Copy the file over to your local system:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"scp -P 2222 redhat@localhost:/var/lib/microshift/resources/kubeadmin/kubeconfig ~/config\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you already have a ",(0,o.jsx)(n.code,{children:"~/.kube/config"}),", copy the contents of ",(0,o.jsx)(n.code,{children:"config"})," to the ",(0,o.jsx)(n.code,{children:"~/.kube/config"})," file."]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Use Podman Desktop to verify the MicroShift cluster:"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop will automatically detect your ",(0,o.jsx)(n.code,{children:".kube/config"})," file."]}),"\n",(0,o.jsxs)(n.p,{children:["Note: You may need to modify your ",(0,o.jsx)(n.code,{children:".kube/config"})," file to reflect the correct domain or IP address of your cluster."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"cluster",src:i(18838).A+"",width:"1050",height:"700"})}),"\n",(0,o.jsx)(n.h3,{id:"storage-configuration",children:"Storage configuration"}),"\n",(0,o.jsxs)(n.p,{children:["By default, storage configuration ",(0,o.jsx)(n.a,{href:"https://github.com/openshift/microshift/blob/main/docs/contributor/storage/default_csi_plugin.md#default-volume-group",children:"requires an LVM partition"})," and LVMS storage manager will not be deployed. This is due to a limitation when building a RAW image. An alternative non-local storage solution is required to use OpenShift artifacts with storage capabilities. The feature to add LVM support is tracked in this ",(0,o.jsx)(n.a,{href:"https://github.com/osbuild/images/pull/926",children:"pull request"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"This tutorial provided a step-by-step guide on deploying a bootable MicroShift image using Podman Desktop and the BootC extension. By leveraging tools such as BootC and Podman, we've streamlined the process of creating a lightweight, yet fully functional, OpenShift environment suitable for single-node edge computing scenarios."}),"\n",(0,o.jsx)(n.p,{children:"Thank you for following along, and happy deploying!"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},22491:(e,n,i)=>{i.d(n,{A:()=>s});i(63696);var t=i(11750);const o={tabItem:"tabItem_wHwb"};var r=i(62540);function s(e){let{children:n,hidden:i,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,s),hidden:i,children:n})}},78296:(e,n,i)=>{i.d(n,{A:()=>y});var t=i(63696),o=i(11750),r=i(90766),s=i(49519),a=i(14395),l=i(35043),c=i(44544),d=i(94243);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:o}}=e;return{value:n,label:i,attributes:t,default:o}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:i}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function m(e){const{defaultValue:n,queryString:i=!1,groupId:o}=e,r=u(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,h]=g({queryString:i,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(i);return[o,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:o}),x=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=i(86681);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=i(62540);function j(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),o=a[i].value;o!==t&&(c(n),s(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:r}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},45548:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/build-c4b98d77a58051cff0faea4018093968.png"},20809:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/build_button-4acde83a5588a22a6f5d8697776e9ffc.png"},18838:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cluster-fadf27a6b8ad431907ffe1c82a265d42.png"},82657:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/install-c919fde6e978cb81a5417015a515f8b5.png"},8308:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/redhat_login-ceb0917fdc2615696a15a73c9cc620da.png"},66268:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/redhat_login2-2aa358ae85e74bb26815a93b8580a87f.png"},60814:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/redhat_selkie-145c8a4f188f67f4e1307dbedf01a058.png"},43023:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(63696);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}},58207:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/11/08/bootc-microshift","source":"@site/blog/2024-11-08-bootc-microshift.md","title":"Creating a MicroShift bootable image with Podman Desktop","description":"Learn how to create a bootable image featuring MicroShift, using BootC and Podman Desktop.","date":"2024-11-08T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"},{"inline":true,"label":"rhel","permalink":"/blog/tags/rhel"},{"inline":true,"label":"bootc","permalink":"/blog/tags/bootc"},{"inline":true,"label":"extensions","permalink":"/blog/tags/extensions"}],"readingTime":6.545,"hasTruncateMarker":false,"authors":[{"name":"Charlie Drage","title":"Software Engineer","url":"https://github.com/cdrage","imageURL":"https://github.com/cdrage.png","key":"cdrage","page":null}],"frontMatter":{"title":"Creating a MicroShift bootable image with Podman Desktop","description":"Learn how to create a bootable image featuring MicroShift, using BootC and Podman Desktop.","authors":["cdrage"],"tags":["podman-desktop","podman","rhel","bootc","extensions"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Podman Desktop + CNCF - Community Driven Move","permalink":"/blog/2024/11/14/podman-desktop-cncf"},"nextItem":{"title":"Podman Desktop 1.14 Release","permalink":"/blog/podman-desktop-release-1.14"}}')}}]);