import{d as C,h as i,r as u,o as T,c as w,b as e,e as t,a as r,w as S,I as b,an as v,v as m,f as N,aw as p,_ as L}from"./app-ae4f5157.js";import{_ as I}from"./aliyundrive-2cb15386.js";const z=e("h1",{id:"阿里云盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#阿里云盘","aria-hidden":"true"},"#"),t(" 阿里云盘")],-1),A={class:"hint-container warning"},B=e("p",{class:"hint-container-title"},"注意",-1),U=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[t("由于阿里云盘 referer 的限制，必须使用移动端 token。 使用桌面 Web 令牌将导致无法下载和预览。 当然，如果你在本地使用或者带宽足够大，你也可以开启代理，让桌面 Web 的 "),e("code",null,"refresh token"),t(" 正常工作。")])],-1),Z=e("h2",{id:"刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#刷新令牌","aria-hidden":"true"},"#"),t(),e("strong",null,"刷新令牌")],-1),D={href:"https://github.com/Xhofe/alist/issues/88",target:"_blank",rel:"noopener noreferrer"},J=["disabled"],K={style:{margin:"4px"}},O=["src"],V={class:"hint-container info"},j={class:"hint-container-title"},q={href:"http://replit.com",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),t(),e("strong",null,"Root folder file_id")],-1),M=e("p",null,"打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串",-1),P={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},X=N('<p>这个文件夹的 file_id 即为 <code>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code>：</p><p><img src="'+I+'" alt="file_id"></p><h2 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传" aria-hidden="true">#</a> <strong>秒传</strong></h2><p>上传的时候校验 hash，如果云端有，直接生成文件，不消耗流量</p><h2 id="内部上传" tabindex="-1"><a class="header-anchor" href="#内部上传" aria-hidden="true">#</a> <strong>内部上传</strong></h2><p>如果你部署 Alist 的服务器是阿里云北京地区 ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。</p><h2 id="阿里云盘分享" tabindex="-1"><a class="header-anchor" href="#阿里云盘分享" aria-hidden="true">#</a> <strong>阿里云盘分享</strong></h2><p>别想着了...已经修复后续不再开发和维护分享存储方式了，阿里云盘开放平台 token 也不可以用在分享挂载存储。</p><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',9),E=C({__name:"aliyundrive.html",setup(R){const o=i("获取 Token"),n=i(0),l=i(""),d=i(""),_=i(""),g=async()=>{o.value="等待...",n.value=1;const a=await(await fetch(`${p()}/alist/ali/qr`)).json();console.log(a),o.value="使用阿里云盘 APP 扫描然后点击",n.value=2,_.value=JSON.stringify({ck:a.content.data.ck,t:a.content.data.t.toString()}),l.value=`${p()}/qr/?size=400&text=${encodeURIComponent(a.content.data.codeContent)}`},k=async()=>{n.value=3,o.value="等待...";const a=await(await fetch(`${p()}/alist/ali/ck`,{method:"POST",headers:{"Content-Type":"application/json"},body:_.value})).json(),{content:{data:{qrCodeStatus:c,loginResult:s,bizExt:h}}}=a;if(s!=="success"){n.value=2,o.value="使用阿里云盘 App 扫描然后点击",alert("Status:"+c);return}const y=JSON.parse(atob(h));d.value=y.pds_login_result.refreshToken,o.value="获取 Token 成功",n.value=4,console.log(a)},x=async()=>{n.value===0&&g(),n.value===2&&k()};return(f,a)=>{const c=u("RouterLink"),s=u("ExternalLinkIcon"),h=u("Mermaid");return T(),w("div",null,[z,e("div",A,[B,e("p",null,[t("不推荐使用该驱动，因为它不稳定，随时可能被屏蔽，我们会在以后的版本中移除。推荐使用官方 API 的驱动 "),r(c,{to:"/zh/guide/drivers/aliyundrive_open.html"},{default:S(()=>[t("Aliyundrive Open")]),_:1}),t("。")])]),U,Z,e("p",null,[t("按照这个 "),e("a",D,[t("issue"),r(s)]),t(" 在手机上捕获/查找日志 (/data/media/0/Android/data/com.alicloud.databox/ 文件/日志/跟踪/）。 或者您可以点击：")]),e("p",null,[e("button",{disabled:n.value===3||n.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:x},b(o.value),9,J)]),v(e("div",K,[e("img",{src:l.value},null,8,O)],512),[[m,l.value]]),v(e("div",null,[e("div",V,[e("p",j,"Token: "+b(d.value),1)])],512),[[m,d.value]]),e("p",null,[e("em",null,[t("API is hosted on "),e("a",q,[t("replit.com"),r(s)])])]),F,M,e("p",null,[t("如 "),e("a",P,[t("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),r(s)])]),X,r(h,{id:"mermaid-67",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCoqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9ZuBNWelmZuam4KN8HY2BjVBJOCCoi20qT0osSCDIXMlFRDhWiFWLBooiGYSs1LgXKjjQ2MYq2srIrzc1OTcxKLi22BoAbi2ZpEo2igb591bH+xbt/TJe0QI8CqXFLTFOBaYC6zNIMoMIx+NmfNszm7nuxe/HxCW6yuHlDvy4ZOPV07rAYmGUZDVIYG+RBUnJyTmZwNCkwlPT39lKLMstSiYv3k/Nzc/Dy9jJLcHOXy1KSUxDLd52unPZ+6VAlJTxIZepKJ1gMAZ1jb4A=="})])}}}),H=L(E,[["__file","aliyundrive.html.vue"]]);export{H as default};