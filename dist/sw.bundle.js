if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const s=e=>c(e,d),o={module:{uri:d},exports:r,require:s};i[d]=Promise.all(n.map((e=>o[e]||s(e)))).then((e=>(f(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"3f7fd89ccc2dbb0154f339dc619a1429"},{url:"946.bundle.js",revision:"cc582ae0cd0fdff61d2e587ce1c4092d"},{url:"app.webmanifest",revision:"5d0a3934b2c74d31b9e0b1845b8c57e5"},{url:"app~013bb811.bundle.js",revision:"6dc10c22be70949c80baced0c8860ef7"},{url:"app~309f7e27.bundle.js",revision:"d4de60ac4f43931827135caa2cf5a84c"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~49ea73a0.bundle.js",revision:"b8ae90ab1f14f7f92e3b9757d7358315"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"e16168ae08677569535b992db4d427fa"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"a7c95754f4b038531012427d96961bf9"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"fe3eae896cd4c1cb79cffb8e83376370"},{url:"icons/icon-128x128.png",revision:"e7f38b1baf3721c7096276ecef18c1b4"},{url:"icons/icon-144x144.png",revision:"97c3d68ebf9b9a9d0ddb2d9ce449424e"},{url:"icons/icon-152x152.png",revision:"9034af3958b83deef7aeaa32868412c5"},{url:"icons/icon-192x192.png",revision:"fe3eae896cd4c1cb79cffb8e83376370"},{url:"icons/icon-384x384.png",revision:"4ccf7d69f20c72f86d13313c2f0900ef"},{url:"icons/icon-512x512.png",revision:"71fde89e47f0a9f97719c9aa78892a09"},{url:"icons/icon-72x72.png",revision:"5ae719b98cb566d903eccd8116343df9"},{url:"icons/icon-96x96.png",revision:"8545d2bba9aa1752ee01a9568cd64194"},{url:"index.html",revision:"1bad5af32ddc129cb1994a14b3623bdf"}],{})}));
//# sourceMappingURL=sw.bundle.js.map