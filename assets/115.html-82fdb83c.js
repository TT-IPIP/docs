import{d as x,h as i,r as p,o as w,c as y,b as e,e as a,a as _,I as m,an as f,v as g,f as C,aw as l,_ as T}from"./app-2bc94762.js";const D=C('<h1 id="_115-cloud" tabindex="-1"><a class="header-anchor" href="#_115-cloud" aria-hidden="true">#</a> 115 Cloud</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Due to the limitation of 115 Cloud, the download must carry cookies, so only the proxy function in this program can be used for transfer. (You can use other machines to transfer)</p></div><h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id" aria-hidden="true">#</a> <strong>Root folder ID</strong></h2>',3),Q={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"249163533602609229",-1),I=e("h2",{id:"login-by-qrcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-qrcode","aria-hidden":"true"},"#"),a(),e("strong",null,"Login by QRCode")],-1),U=["disabled"],W={style:{margin:"4px"}},q=["src"],A={class:"hint-container info"},M={class:"hint-container-title"},N=e("h2",{id:"login-by-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-cookie","aria-hidden":"true"},"#"),a(),e("strong",null,"Login by Cookie")],-1),S=e("p",null,[a("The "),e("code",null,"cookie"),a(" is obtained from the request.")],-1),E=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),a(),e("strong",null,"The default download method used")],-1),H=x({__name:"115.html",setup(j){const n=i("Get QRCode"),t=i(0),c=i(""),r=i(""),s=i(""),v=async()=>{n.value="等待...",t.value=1;const o=await(await fetch(`${l()}/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token`)).json();console.log(o),n.value="Use 115 Cloud APP To Scan Then Click",t.value=2,s.value={uid:o.data.uid,time:o.data.time.toString(),sign:o.data.sign,_:(new Date().getTime()/1e3).toString()},c.value=`${l()}/qr/?size=400&text=${encodeURIComponent(o.data.qrcode)}`},b=async()=>{t.value=3,n.value="Waiting...";const o=await(await fetch(`${l()}/proxy/qrcodeapi.115.com/get/status/?uid=${s.value.uid}&time=${s.value.time}&sign=${s.value.sign}&_=${s.value._}`)).json(),{data:{version:h,status:d,msg:B}}=o;if(d!==2){t.value=2,n.value="Use 115 Cloud APP To Scan Then Click",alert("Status:"+d);return}r.value=s.value.uid,n.value="Get Token Success",t.value=4,console.log(o)},k=async()=>{t.value===0&&v(),t.value===2&&b()};return(u,o)=>{const h=p("ExternalLinkIcon"),d=p("Mermaid");return w(),y("div",null,[D,e("p",null,[a("Open the official website of 115 Cloud and click the string behind the url when you click into the folder you want to set, such as "),e("a",Q,[a("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),_(h)]),a(", which is "),z]),I,e("p",null,[e("button",{disabled:t.value===3||t.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:k},m(n.value),9,U)]),f(e("div",W,[e("img",{src:c.value},null,8,q)],512),[[g,c.value]]),f(e("div",null,[e("div",A,[e("p",M,"Token: "+m(r.value),1)])],512),[[g,r.value]]),N,S,E,_(d,{id:"mermaid-35",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="})])}}}),O=T(H,[["__file","115.html.vue"]]);export{O as default};