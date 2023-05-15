import{_ as d,N as l,Y as c,Q as e,a1 as t,a7 as a,P as n,af as s,F as r}from"./framework-4112b4b4.js";const h={},p=e("h3",{id:"how-to-add-password-for-a-file-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-add-password-for-a-file-folder","aria-hidden":"true"},"#"),t(" How to add password for a file/folder?")],-1),u=e("h3",{id:"how-to-reverse-proxy-with-sub-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-reverse-proxy-with-sub-directory","aria-hidden":"true"},"#"),t(" How to reverse proxy with sub directory?")],-1),g={href:"https://nn.ci/alist:",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"Normal installation",-1),v=e("code",null,"https://nn.ci/alist",-1),f=e("code",null,"/alist",-1),b=e("li",null,"Add a reverse proxy record in nginx",-1),_=s(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /alist/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Range <span class="token variable">$http_range</span></span><span class="token punctuation">;</span>
	  <span class="token directive"><span class="token keyword">proxy_set_header</span> If-Range <span class="token variable">$http_if_range</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5244/alist/</span><span class="token punctuation">;</span>
    <span class="token comment"># the max size of file to upload</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">20000m</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-get-password-if-i-forget-it" tabindex="-1"><a class="header-anchor" href="#how-to-get-password-if-i-forget-it" aria-hidden="true">#</a> How to get password if i forget it?</h3><p>If you are the owner of the site, you can get the admin&#39;s info by run <code>./alist admin</code> in the terminal. Otherwise you can ask the owner to reset the password.</p>`,3),w={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"Tips",-1),y={href:"https://github.com/alist-org/alist/pull/3074",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"how-to-modify-the-listening-port​",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-modify-the-listening-port​","aria-hidden":"true"},"#"),t(" How to modify the listening port​")],-1),q=e("h3",{id:"how-to-upgrade",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-upgrade","aria-hidden":"true"},"#"),t(" How to upgrade")],-1),H=e("p",null,"Except for the incompatible version marked in the changelog, you can directly replace the binary file to upgrade.",-1),I=e("p",null,"For docker user, just remove the old container and pull the new image then run it.",-1),C=e("h3",{id:"how-to-allow-guest-to-upload-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-allow-guest-to-upload-files","aria-hidden":"true"},"#"),t(" How to allow guest to upload files")],-1),P=e("code",null,"write",-1),A=s('<h3 id="how-to-remove-powered-by-alist-at-the-bottom-​" tabindex="-1"><a class="header-anchor" href="#how-to-remove-powered-by-alist-at-the-bottom-​" aria-hidden="true">#</a> How to remove <code>powered_by Alist</code> at the bottom?​</h3><p>According to our open source license: Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. <strong>Copyright and license notices must be preserved.</strong> Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.</p><h3 id="when-adding-a-189cloud-storage-the-device-id-does-not-exist-and-a-secondary-device-verification-is-required​" tabindex="-1"><a class="header-anchor" href="#when-adding-a-189cloud-storage-the-device-id-does-not-exist-and-a-secondary-device-verification-is-required​" aria-hidden="true">#</a> When adding a 189Cloud storage: the device ID does not exist, and a secondary device verification is required​</h3><p>It may be that the risk detection system has been triggered. Please changing the password, then, add it again.</p><h3 id="when-adding-tianyi-cloud-disk-client-storage-prompt-need-img-validate-code-verification-code" tabindex="-1"><a class="header-anchor" href="#when-adding-tianyi-cloud-disk-client-storage-prompt-need-img-validate-code-verification-code" aria-hidden="true">#</a> When adding Tianyi cloud disk client storage: prompt need img validate code: verification code</h3>',5),E=e("li",null,"Click Edit, write the verification code you just saw into the configuration and click Save",-1),F=e("li",null,"Click Edit and turn on the Do not use OCR button",-1),L=e("strong",null,"Ocr interface",-1),R=s(`<h3 id="tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers" tabindex="-1"><a class="header-anchor" href="#tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers" aria-hidden="true">#</a> TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers?</h3><p>For network problems such as these, please troubleshoot and solve them yourself.Don&#39;t create any issues for this.</p><h3 id="how-to-add-epub-reading" tabindex="-1"><a class="header-anchor" href="#how-to-add-epub-reading" aria-hidden="true">#</a> How to add epub reading</h3><p>Background --&gt; Settings --&gt; Preview --&gt; Iframe preview, written behind the PDF</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> /*The comma below is also oh, don’t copy this comment, start copying from the second line*/
,
  &quot;epub&quot;: {
    &quot;EPUB.js&quot;:&quot;/static/epub.js/viewer.html?url=$e_url&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Version 3.7.x and above already support &quot;.epub&quot; reading, But you need to add it manually (because the database has already been created, it is not good to overwrite it for you, and you will make mistakes) If it is the first installation and startup (version 3.7.x and higher), no need to add it manually</p><h3 id="how-to-quickly-locate-bugs" tabindex="-1"><a class="header-anchor" href="#how-to-quickly-locate-bugs" aria-hidden="true">#</a> How to quickly locate bugs</h3><p>If you find a bug, but the <code>log.log</code> log is not detailed, you can try to add the <code>--debug</code> parameter to start</p><ul><li><strong>Windows</strong>：<code>alist.exe server --debug</code></li><li><strong>Linux</strong>：<code>./alist server --debug</code></li><li><strong>Mac</strong>: Temporarily unknown, maybe it is started with the <code>--debug</code> parameter</li></ul><p>How to stop the relevant logs after startup? <code>Ctrl+c</code> can stop the program (or simply close the program directly)</p><p>It is recommended to clear the log file <code>/log/log.log</code> in the <strong>AList directory before starting with the <code>--debug</code> parameter</strong>, so that developers can quickly locate problems later</p>`,11);function T($,B){const o=r("RouterLink"),i=r("ExternalLinkIcon");return l(),c("div",null,[p,e("p",null,[t("Add a "),a(o,{to:"/guide/advanced/meta.html"},{default:n(()=>[t("meta")]),_:1}),t(" record.")]),u,e("p",null,[t("An example of using nginx to reverse proxy to "),e("a",g,[t("https://nn.ci/alist:"),a(i)])]),e("ul",null,[m,e("li",null,[t("Set "),a(o,{to:"/config/configuration.html#site_url"},{default:n(()=>[t("site_url")]),_:1}),t(" to "),v,t(" or just "),f,t(" then restart alist")]),b]),_,e("div",w,[k,e("p",null,[t("You need to stop alist server first if the version of your alist is v3.9.0 or later as this pr: "),e("a",y,[t("https://github.com/alist-org/alist/pull/3074"),a(i)])])]),x,e("p",null,[t("Refer to "),a(o,{to:"/config/configuration.html#port"},{default:n(()=>[t("config")]),_:1})]),q,H,I,C,e("p",null,[t("Add a "),a(o,{to:"/guide/advanced/meta.html"},{default:n(()=>[t("meta")]),_:1}),t(" record, and open "),P,t(" field.")]),A,e("ul",null,[E,F,e("li",null,[t("Or build it yourself "),a(o,{to:"/config/global.html#ocr-api"},{default:n(()=>[L]),_:1})])]),R])}const j=d(h,[["render",T],["__file","howto.html.vue"]]);export{j as default};