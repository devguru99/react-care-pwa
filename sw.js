if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let l={};const o=e=>i(e,n),d={module:{uri:n},exports:l,require:o};r[n]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(a(...e),l)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App-EwTczY0u.js",revision:null},{url:"assets/Avatar-DhhCV_U5.js",revision:null},{url:"assets/blogs-KFbT4mFg.js",revision:null},{url:"assets/Card-v-G96fXJ.js",revision:null},{url:"assets/CardActions-BMg1YiB8.js",revision:null},{url:"assets/CardContent-B7hQTqxb.js",revision:null},{url:"assets/CardMedia-CZkLXlF6.js",revision:null},{url:"assets/ChevronRight-2NRWVxiA.js",revision:null},{url:"assets/Chip-Bj2ojBfe.js",revision:null},{url:"assets/GppGoodOutlined-bHvSS8ql.js",revision:null},{url:"assets/Grid2-CGdym8O3.js",revision:null},{url:"assets/index-35xo7D27.js",revision:null},{url:"assets/index-BdHc9OX1.js",revision:null},{url:"assets/index-BSc9cwc3.js",revision:null},{url:"assets/index-C-omLiZr.js",revision:null},{url:"assets/index-CPPdqBbH.js",revision:null},{url:"assets/index-D0mr0-mv.js",revision:null},{url:"assets/index-DEMBBx7A.js",revision:null},{url:"assets/index-DOp1emxv.js",revision:null},{url:"assets/index-DTA-M7wF.js",revision:null},{url:"assets/index-DZ0u-elx.js",revision:null},{url:"assets/index-lGXde6oY.js",revision:null},{url:"assets/index-Vi6Ec_0q.js",revision:null},{url:"assets/index.esm-DsEAXa2k.js",revision:null},{url:"assets/Meta-DUYk44Ou.js",revision:null},{url:"assets/RocketLaunchOutlined-BCOLhx3w.js",revision:null},{url:"assets/Root-Bduo05It.js",revision:null},{url:"assets/SupportAgent-BPKEpAdR.js",revision:null},{url:"assets/VolunteerActivismOutlined-BcRRDi9T.js",revision:null},{url:"index.html",revision:"da18c7d21040bd21c3884a3399eaefad"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"about_approach_1.png",revision:"bf7fcfa6b008e13cb7b07cad0c43700e"},{url:"about_approach_2.png",revision:"bf035a1067028c2fa7a66ed66f8f8b29"},{url:"about_approach_3.png",revision:"80b8eaef2914f3e21cdbe887b26ab28c"},{url:"about_banner.png",revision:"88167a08378314798204ed61855973ed"},{url:"about_founder.png",revision:"69f7bc7c9568818a82567555e02521f8"},{url:"about_mission_1.png",revision:"3d05289aea539819f77eb6c2fa410e0e"},{url:"about_mission_2.png",revision:"58b267cef77708865e666e54198aa9c6"},{url:"about_recovery.png",revision:"edb12c82eecd99cb9254ff3eec53e169"},{url:"avatar_founder.png",revision:"4884d2c1378e59d10f2bd4a001cebab9"},{url:"banner.png",revision:"8821bb88442468395b96781760b54e77"},{url:"blog/blog_thumb_1.png",revision:"d105c90c500f136e6d1f1efde143fd48"},{url:"blog/blog_thumb_2.png",revision:"a3c6b8648ba7f59607aaf99976df7b94"},{url:"blog/blog_thumb_3.png",revision:"e64c1e76158ffa3c135e76d0301d697b"},{url:"blog/blog_thumb_4.png",revision:"55c30bda93aa4dc5e820cc99784f9500"},{url:"blog/blog_thumb_5.png",revision:"43b1fa5221fc28ca494cba1e2d02f5b6"},{url:"blog/blog_thumb_6.png",revision:"a7c9f6e83c523e733ddab0afe6aa2f2c"},{url:"carlos_avatar.png",revision:"72a9f378fb433e1ad8b65d8ebda5acd9"},{url:"contact_chat.png",revision:"2ad7a4608361645e422a950254050b37"},{url:"contact_form.png",revision:"3cba044c7bdecae990035a12bbfc463b"},{url:"contact_mail.png",revision:"f9cd29697542114b18eae9611c69d660"},{url:"contact_phone.png",revision:"dbc70b90ea4da1f67764a09d2af54562"},{url:"expect_1.png",revision:"ebd4ea0a079cf3aa61685bf722f67cb5"},{url:"expect_2.png",revision:"855e69a2369a79da6c2d3a796ad03635"},{url:"expect_3.png",revision:"42ed44e21a0acd0cbb7bccbc1345473a"},{url:"expect_p_1.png",revision:"d8a753fe48ca7816e396414ba98e1810"},{url:"expect_p_2.png",revision:"040eb09528b88b7e410d60708fbc7e80"},{url:"expect_p_3.png",revision:"8e3026cd2c3497b08fdaa1526ab457f3"},{url:"faq_top.png",revision:"b26babe26f2d181cf217119d67b94b4b"},{url:"grace_avatar.png",revision:"720448c44b2f57c0eadb3279a25d671a"},{url:"home_banner.png",revision:"408d092431e66c23679dc708368974d7"},{url:"home_diff_1.png",revision:"a4daaa71ddc4b7e2ae9a5a5452e9d2a9"},{url:"home_diff_2.png",revision:"8987f7f10869eb5ad5471f0374082edc"},{url:"home_diff_3.png",revision:"e400d89fecbc03b2216244bb5b5efd33"},{url:"home_future.png",revision:"a6e6016f0097fd3bef4ca6a7f71bcfe3"},{url:"john_avatar.png",revision:"489763d2c262b608ae1340169979b2aa"},{url:"lily_avatar.png",revision:"e0b48d437a25c9ae98d39a2ad2f04db8"},{url:"logo.png",revision:"eee99d9b49fea50f09e6536a102871a3"},{url:"pwa-192x192.png",revision:"f9f629a9f8d58376eb94e747db1a5c09"},{url:"pwa-512x512.png",revision:"43e73172e5d8ae6a387c9fcba5b96dfd"},{url:"resource_1.png",revision:"7d8e7d18f1186f9fcb2e46605663a8d3"},{url:"resource_2.png",revision:"6376e98fc52ecc25f9d66f4158eab99a"},{url:"resource_3.png",revision:"92045a71ffdf6afe08b8e200d9cb036a"},{url:"resource_4.png",revision:"7d8e7d18f1186f9fcb2e46605663a8d3"},{url:"resource_5.png",revision:"f48e9de12fddd9be24e4722527918436"},{url:"resource_6.png",revision:"244840026aafbfff5c6cf9c84e4e7a51"},{url:"resource_7.png",revision:"8852a460d0a2db48589b3df254d0eda4"},{url:"sarah_avatar.png",revision:"268f22f7eaa018ff43c30273b078dbc4"},{url:"service_1.png",revision:"13b43ead7a22640b0b1a7f69a56721d8"},{url:"service_2.png",revision:"92045a71ffdf6afe08b8e200d9cb036a"},{url:"service_3.png",revision:"4387374b7a5c85b589c90fb4dfc3ffae"},{url:"service_4.png",revision:"360b317bc2af36fb797d69d9bfb198af"},{url:"service_5.png",revision:"becd684e7db87b59be331d2500c8b0e3"},{url:"service_6.png",revision:"8d73add5d16f87c3561e7c493ae0cace"},{url:"share.png",revision:"16137e0cb03aa0fe07366068658dcb1f"},{url:"social_facebook.png",revision:"b951e68abe7b6bd829124a4b4df9f3ad"},{url:"social_instagram.png",revision:"db9ba67577adf252f043dc6c6beac341"},{url:"social_linkedin.png",revision:"55f06918ea32a2792e57a1acd9062187"},{url:"social_twitter.png",revision:"43f465cfc186a3dbbc3feab931d0d3a7"},{url:"submit_vector.png",revision:"c1e47b322c2b8a4ad893477d2d033203"},{url:"tom_avatar.png",revision:"ae94343e9557ebe657aca3991698d747"},{url:"favicon.ico",revision:"41e015dd482f7e18e945d65aff81b70b"},{url:"pwa-192x192.png",revision:"f9f629a9f8d58376eb94e747db1a5c09"},{url:"pwa-512x512.png",revision:"43e73172e5d8ae6a387c9fcba5b96dfd"},{url:"robots.txt",revision:"ae6ff7c85c6af2bdfa447b39bae8f2fe"},{url:"manifest.webmanifest",revision:"0574d90be6191c1e6995dbd1a8a13a86"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
