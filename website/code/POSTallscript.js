function CSSPost(d,e,a){var b=window.document.createElement("link");var c=e||window.document.getElementsByTagName("script")[0];b.href=d;b.rel="stylesheet";c.parentNode.insertBefore(b,c);setTimeout(function(){b.media=a||"all"})}
CSSPost("https://cdn.sophiainstitute.id/website/code/CSS-CarouselPost.min.css");

function PostM(f,e,i){'use strict';var h=window.document.createElement("script"),g=e||window.document.getElementsByTagName("script")[0];h.async=!0,h.src=f,g.parentNode.insertBefore(h,g),setTimeout(function(){h.media=i||"all"})}
PostM('https://cdn.sophiainstitute.id/website/code/Permalinks-bar.min.js');
/*AUTHOR*/
$(document).ready((function(){var t="https://www.sophiainstitute.id/author/"+$(".entry-author a").attr("href").replace("https://www.sophiainstitute.id/search/label/%E1%8E%AAuthor%20","").split("%20").join("-").toLowerCase().split(".").join("");$.ajax({url:t,type:"GET",success:function(t){var a=$(".entry-author a").attr("href"),e="https://www.sophiainstitute.id/author/"+a.replace("https://www.sophiainstitute.id/search/label/%E1%8E%AAuthor%20","").split("%20").join("-").toLowerCase().split(".").join(""),s=$(t).find("#namanya").text(),r=$(t).find("span#bionya").html(),i=$(t).find("span#fotonya img").attr("src"),l=$(t).find("span#LinkFB").text(),n=$(t).find("span#LinkIG").text(),o=$(t).find("span#LinkTW").text(),b="<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor' ><a href='"+e+"' rel='author' target='_blank'><img alt='"+s+"' id='fotoauthor' src='"+i+"' title='"+s+"'/></a></div><div class='info' id='infoauthor' ><div class='title'><a href='"+e+"' rel='author' target='_blank'>"+s+"</a></div><div class='desc'>"+r+"</div></div>",f=$("#atrbawh");""==l&&""==o&&""==n?f.html(b+"<div class='bottom'></div>"):""==l&&""==o?f.html(b+"<div class='bottom'><a class='btn btn-ig' href='"+n+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>"):""==l&&""==n?f.html(b+"<div class='bottom'><a class='btn btn-primary btn-twitter btn-sm' href='"+o+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a></div>"):""==o&&""==n?f.html(b+"<div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a></div>"):""==o?f.html(b+"<div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a><a class='btn btn-ig' href='"+n+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>"):""==n?f.html(b+"<div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a><a class='btn btn-primary btn-twitter btn-sm' href='"+o+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a></div>"):""==l?f.html(b+"<div class='bottom'><a class='btn btn-primary btn-twitter btn-sm' href='"+o+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a><a class='btn btn-ig' href='"+n+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>"):f.html(b+"<div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a><a class='btn btn-primary btn-twitter btn-sm' href='"+o+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a><a class='btn btn-ig' href='"+n+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>"),$("head").append('<link href="https://cdn.sophiainstitute.id/website/code/Fontawesome/6.0.0/style.min.css" rel="stylesheet preload dns-prefetch" />'),$.ajax({url:"/feeds/posts/default/-/"+a.replace("https://www.sophiainstitute.id/search/label/","")+"?alt=json-in-script&max-results=9999&orderby=published",type:"get",dataType:"jsonp",success:function(t){var a=t.feed.entry,e=a.slice(0,2);if(a){for(var s,r=$(".entry-author a").text(),i="https://www.sophiainstitute.id/author/"+$(".entry-author a").attr("href").replace("https://www.sophiainstitute.id/search/label/%E1%8E%AAuthor%20","").split("%20").join("-").toLowerCase().split(".").join(""),l=function(t){var a,e,s=t.length;if(0===s)return!1;for(;--s;)a=Math.floor(Math.random()*(s+1)),e=t[s],t[s]=t[a],t[a]=e;return t}(t.feed.entry),n="<p>Artikel Lainnya dari "+r+'</p><ul class="recent-posts-container">',o=0;o<e.length;o++){for(var b=0;b<e[o].link.length;b++)if("alternate"==l[o].link[b].rel){s=l[o].link[b].href;break}var f=l[o].title.$t,c=l[o].published.$t,h=c.substring(0,4),d=c.substring(5,7),p=c.substring(8,10),u=[];u[1]="Jan",u[2]="Feb",u[3]="Mar",u[4]="Apr",u[5]="May",u[6]="Jun",u[7]="Jul",u[8]="Aug",u[9]="Sep",u[10]="Oct",u[11]="Nov",u[12]="Dec";var m="/search/label/"+(label=l[o].category[0].term);n+='<li class="recent-posts-list"><div class="post-date">'+p+" "+u[parseInt(d)]+" "+h+'</div><div class="recent-post-title"><a href="'+s+'" target="_top">'+f+'</a></div><div class="recent-posts-details"><a href="'+m+'" target="_top">'+label+'</a> | <a class="readmorelink" href="'+s+'" target="_top">Read more</a></div></li>'}n+="</ul>";var w='<span class="sele"><a href="'+i+'">Lihat <b>'+a.length+"+</b>  artikel lainnya dari "+r+' <i class="fa-duotone fa-right-to-bracket"></i></a></span>';a.length>3?$("#atrbawh").after(n+w):$("#atrbawh").after(n)}$(".frameboxAuhtor").removeClass("hidden")}})}})}));
/*! Ebook Slide */
var jumlah=6;var containernyaId="ignielRandom";function getRandomInt(d,c){return Math.floor(Math.random()*(c-d+1))+d}function shuffleArray(f){var h,g,e=f.length;if(0===e){return falplse}for(;--e;){h=Math.floor(Math.random()*(e+1)),g=f[e],f[e]=f[h],f[h]=g}return f}function randomPost(d){var c=getRandomInt(1,d.feed.openSearch$totalResults.$t-jumlah);document.write('<script src="https://ebook.sophiainstitute.id/feeds/posts/summary?alt=json-in-script&start-index=1&max-results=11&callback=ignielRandom"><\/script>')}function ignielRandom(q){var p="https://4.bp.blogspot.com/-Mpgs0kSln2I/WnRcTqvlOII/AAAAAAAAFh4/VTrxpLBIC7oxQi6xs2t6z0W2sV2h_zSiwCLcBGAs/w300-h225-p-k-no-nu/ignielcom-no-image.png";for(var k,e,n,h,m,f=document.getElementById(containernyaId),o=shuffleArray(q.feed.entry),c="<div class='team-slider owl-carousel'>",d=0,g=o.length;d<g;d++){for(var l=0,j=o[d].link.length;l<j;l++){k="alternate"==o[d].link[l].rel?o[d].link[l].href:"#",n=o[d].category[0].term,h=o[d].summary.$t.substring(0,90),m=o[d].title.$t.substring(0,25),"media$thumbnail" in o[d]?e=o[d].media$thumbnail.url.replace(/\=s[0-9]+(\-c)?/,"=s360-c").replace(/\/s[0-9]+(\-c)?/,"/s360-c"):(e=p,p="https://4.bp.blogspot.com/-Mpgs0kSln2I/WnRcTqvlOII/AAAAAAAAFh4/VTrxpLBIC7oxQi6xs2t6z0W2sV2h_zSiwCLcBGAs/w300-h225-p-k-no-nu/ignielcom-no-image.png")}c+='<div class="single-box text-center"><div class="img-area"><a href="'+k+'" title="'+m+'"><img class="img-fluid move-animation" src="'+e+'" alt="'+m+'" title="'+m+'"/></a></div><div class="info-area"><a class="linktit" href="'+k+'" title="'+m+'"><h4>'+m+"...</h4><h5>EBOOK</h5></a><p>"+h+'...</p><a href="'+k+'" title="'+m+'">Download</a></div></div>'}f.innerHTML=c+"</div>"}document.write('<script src="'+window.location.origin+'/feeds/posts/summary?alt=json-in-script&max-results=0&callback=randomPost"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"><\/script>');
/*! Scriptnya iframe ebook post dan news*/
$("div#widget_ebook").html('<div style="text-align: center;"><b><span style="font-size: 16px;">Ebook Free</span></b></div><iframe loading="lazy" title="Widget Ebook"  allowtransparency="true" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://cdn.sophiainstitute.id/website/code/Embed/product.html?URLfeed=https://ebook.sophiainstitute.id/feeds/posts/summary&jumlah=10" frameborder="0" style="min-width:100%;height:340px;border:0" scrolling="no"> </iframe>'),$("div#ReelatedPost").html('<iframe loading="lazy" title="Widget Recent Post"  allowtransparency="true" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="min-width:100%;height:335px;border:0" src="https://cdn.sophiainstitute.id/website/code/Embed/RelatedPost.html?URLfeed=https://www.sophiainstitute.id/feeds/posts/summary/-/'+ReelatedPostLab+'&jumlah=9" scrolling="no"> </iframe>');
/*! EbookSHop */
$("#Ebook_Shop").html('<a href="https://www.sophiainstitute.id/page/ebook-shop" title="Ebook Shop" target="_blank"><div class="BukuSHoop"><span class="content"><span class="text"></span><b>TERTARIK BELANJA EBOOK?</b></span><span class="icon"></span></div></a><iframe  loading="lazy" title="Widget Ebook"  allowtransparency="true" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://cdn.sophiainstitute.id/website/code/sb.html" frameborder="0"  scrolling="no" style="width:1px;min-width:100%;height:300px"> </iframe>');
/*! AutoShort */
$(document).ready(function(){var a=$("#driveID").val(),t=document.title,i=a.replace(/^.*\//,"").split(".html").join("");$.ajax({async:!0,crossDomain:!0,url:"https://api.short.io/links/public",method:"POST",headers:{accept:"application/json","content-type":"application/json",Authorization:"pk_wQpFsFlfoC9YAUBx"},processData:!1,data:'{"domain":"m.sophiainstitute.id","allowDuplicates":false,"originalURL":"'+a+'","path":"'+i+'","title":"'+t+'"}'}).done(function(a){console.log(a)})});
/*! BACAJUGA MId post */
$(document).ready(function(){ !function(){let e=document.querySelectorAll("#TTS br, #TTS p"),t=e.length/4;c=Array.from({length:3},(e,t)=>t+1);for(let n=0;n<c.length;n++){let l=parseInt(t*c[n]),r=document.createElement("div");r.className="BACAjuga","P"==e[l].nodeName?e[l].parentNode.insertBefore(r,e[l]):e[l].parentNode.insertBefore(r,e[l].nextSibling)}}(),$(function(){function e(){for(var e=[],n=[],l=0;l<linkbaca.length;l++)t(e,linkbaca[l])||(e.length+=1,e[e.length-1]=linkbaca[l],n.length+=1,n[n.length-1]=judulbaca[l]);judulbaca=n,linkbaca=e}function t(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1}$.ajax({url:document.location.origin+"/feeds/posts/default/-/"+ReelatedPostLab+"?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){for(var t=[],n=0,l=[],r=0;r<e.feed.entry.length;r++){var a=e.feed.entry[r];t[n]=a.title.$t;for(var o=0;o<a.link.length;o++)if("alternate"==a.link[o].rel){l[n]=a.link[o].href,n++;break}let s=Math.floor((t.length-1)*Math.random()),i=0,f=document.querySelectorAll(".BACAjuga");for(;i<t.length&&i<f.length;)for(let g=0;g<f.length;g++)f[g].innerHTML='<span class="content"><span class="text">BACA JUGA:</span><a href="'+l[s]+'" title="'+t[s]+'">'+t[s]+'</a></span><span class="icon"></span>',s<t.length-1?s++:s=0,i++}}})});});
