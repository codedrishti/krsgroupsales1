(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{8757:function(e,s,a){"use strict";var i=a(1664),l=a(5893);s.Z=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{style:{backgroundImage:"url(images/background/bg5.jpg)",backgroundSize:"cover"},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row action-box style-1 align-items-center",children:[(0,l.jsx)("div",{className:"col-xl-7 col-lg-8 col-md-8 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:(0,l.jsxs)("div",{className:"section-head style-1",children:[(0,l.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"More With Us"}),(0,l.jsx)("h2",{className:"title",children:"You Want To Showcase Your Website In Top Join With Us"})]})}),(0,l.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s",children:(0,l.jsx)(i.default,{href:"contact-us-1",children:(0,l.jsxs)("a",{className:"btn btn-link d-inline-flex align-items-center",children:[(0,l.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Join Now"]})})})]})})})})}},2167:function(e,s,a){"use strict";var i=a(3848);s.default=void 0;var l,r=(l=a(7294))&&l.__esModule?l:{default:l},c=a(1063),t=a(4651),n=a(7426);var d={};function o(e,s,a,i){if(e&&c.isLocalURL(s)){e.prefetch(s,a,i).catch((function(e){0}));var l=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;d[s+"%"+a+(l?"%"+l:"")]=!0}}var m=function(e){var s,a=!1!==e.prefetch,l=t.useRouter(),m=r.default.useMemo((function(){var s=c.resolveHref(l,e.href,!0),a=i(s,2),r=a[0],t=a[1];return{href:r,as:e.as?c.resolveHref(l,e.as):t||r}}),[l,e.href,e.as]),h=m.href,u=m.as,j=e.children,x=e.replace,p=e.shallow,f=e.scroll,v=e.locale;"string"===typeof j&&(j=r.default.createElement("a",null,j));var g=(s=r.default.Children.only(j))&&"object"===typeof s&&s.ref,b=n.useIntersection({rootMargin:"200px"}),N=i(b,2),y=N[0],w=N[1],k=r.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);r.default.useEffect((function(){var e=w&&a&&c.isLocalURL(h),s="undefined"!==typeof v?v:l&&l.locale,i=d[h+"%"+u+(s?"%"+s:"")];e&&!i&&o(l,h,u,{locale:s})}),[u,h,w,v,a,l]);var q={ref:k,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,a,i,l,r,t,n){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(a))&&(e.preventDefault(),null==t&&i.indexOf("#")>=0&&(t=!1),s[l?"replace":"push"](a,i,{shallow:r,locale:n,scroll:t}))}(e,l,h,u,x,p,f,v)},onMouseEnter:function(e){c.isLocalURL(h)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),o(l,h,u,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var M="undefined"!==typeof v?v:l&&l.locale,C=l&&l.isLocaleDomain&&c.getDomainLocale(u,M,l&&l.locales,l&&l.domainLocales);q.href=C||c.addBasePath(c.addLocale(u,M,l&&l.defaultLocale))}return r.default.cloneElement(s,q)};s.default=m},7426:function(e,s,a){"use strict";var i=a(3848);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,a=e.disabled||!c,n=l.useRef(),d=l.useState(!1),o=i(d,2),m=o[0],h=o[1],u=l.useCallback((function(e){n.current&&(n.current(),n.current=void 0),a||m||e&&e.tagName&&(n.current=function(e,s,a){var i=function(e){var s=e.rootMargin||"",a=t.get(s);if(a)return a;var i=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var s=i.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;s&&a&&s(a)}))}),e);return t.set(s,a={id:s,observer:l,elements:i}),a}(a),l=i.id,r=i.observer,c=i.elements;return c.set(e,s),r.observe(e),function(){c.delete(e),r.unobserve(e),0===c.size&&(r.disconnect(),t.delete(l))}}(e,(function(e){return e&&h(e)}),{rootMargin:s}))}),[a,s,m]);return l.useEffect((function(){if(!c&&!m){var e=r.requestIdleCallback((function(){return h(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[m]),[u,m]};var l=a(7294),r=a(3447),c="undefined"!==typeof IntersectionObserver;var t=new Map},5631:function(e,s,a){"use strict";a.r(s);var i=a(4509),l=a(481),r=a(1664),c=a(8757),t=a(5893);s.default=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{}),(0,t.jsxs)("div",{className:"page-content bg-white",children:[(0,t.jsx)("div",{className:"dlab-bnr-inr overlay-primary-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg)"},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[(0,t.jsx)("h1",{children:"Blog Detail"}),(0,t.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row",children:(0,t.jsxs)("ul",{className:"breadcrumb",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(r.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Blog"})]})})]})})}),(0,t.jsx)("section",{className:"content-inner bg-img-fix",style:{backgroundImage:"url(images/background/bg1.png)",backgroundSize:"contain"},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-xl-8 col-lg-8 m-b50",children:[(0,t.jsxs)("div",{className:"dlab-blog blog-single style-1",children:[(0,t.jsx)("div",{className:"dlab-media rounded-md shadow",children:(0,t.jsx)("img",{src:"images/blog/default/thum1.jpg",alt:""})}),(0,t.jsx)("div",{className:"dlab-meta m-t10",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-date",children:[(0,t.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,t.jsxs)("li",{className:"post-author",children:[(0,t.jsx)("i",{className:"flaticon-user m-r10"}),"By ",(0,t.jsx)("a",{href:"javascript:void(0);",children:" Johne Doe"})]})]})}),(0,t.jsx)("h4",{className:"dlab-title",children:"Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis"}),(0,t.jsxs)("div",{className:"dlab-post-text",children:[(0,t.jsx)("p",{children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,t.jsx)("p",{children:"Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est."}),(0,t.jsx)("blockquote",{className:"blockquote style-1",children:(0,t.jsx)("h4",{className:"blockquote-content",children:"Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies."})}),(0,t.jsx)("p",{children:"Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. "}),(0,t.jsx)("h4",{className:"m-b30",children:"Donec sit amet semper massa ellentesque habitant morbi"}),(0,t.jsx)("img",{className:"alignleft rounded-md shadow",width:"300",src:"images/blog/blog-grid/pic1.jpg",alt:""}),(0,t.jsx)("p",{children:"Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis."}),(0,t.jsx)("p",{children:"Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent taciti sociosqu ad litora"}),(0,t.jsx)("p",{children:"Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum."})]}),(0,t.jsx)("div",{className:"dlab-meta border-top",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-tags",children:["Tags:",(0,t.jsx)("a",{href:"javascript:void(0);",children:"#Child "})," ,",(0,t.jsx)("a",{href:"javascript:void(0);",children:"#Eduction "})," ,",(0,t.jsx)("a",{href:"javascript:void(0);",children:"#Money "})," ,",(0,t.jsx)("a",{href:"javascript:void(0);",children:"#Resturent "})]}),(0,t.jsx)("li",{className:"post-comment",children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:[(0,t.jsx)("i",{className:"flaticon-speech-bubble"}),(0,t.jsx)("span",{children:"15"})]})}),(0,t.jsxs)("li",{className:"post-share",children:[(0,t.jsx)("i",{className:"flaticon-share"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]}),(0,t.jsxs)("div",{className:"row extra-blog style-1",children:[(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("h2",{className:"blog-title",children:"Related Blogs"})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b30",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/default/thum3.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h5",{className:"dlab-title",children:(0,t.jsx)("a",{href:"/blog-large-right-sidebar",children:"Praesent ut lobortis purus hasellus libero orci, accumsan."})}),(0,t.jsx)("p",{className:"m-b0",children:"Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar."}),(0,t.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-date",children:[(0,t.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,t.jsx)("li",{className:"post-comment",children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:[(0,t.jsx)("i",{className:"flaticon-speech-bubble"}),(0,t.jsx)("span",{children:"15"})]})}),(0,t.jsxs)("li",{className:"post-share",children:[(0,t.jsx)("i",{className:"flaticon-share"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b30",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/default/thum2.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h5",{className:"dlab-title",children:(0,t.jsx)("a",{href:"/blog-large-right-sidebar",children:"Donec feugiat mollis nisi in dignissim. Morbi sollicitudin."})}),(0,t.jsx)("p",{className:"m-b0",children:"Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar."}),(0,t.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-date",children:[(0,t.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,t.jsx)("li",{className:"post-comment",children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:[(0,t.jsx)("i",{className:"flaticon-speech-bubble"}),(0,t.jsx)("span",{children:"15"})]})}),(0,t.jsxs)("li",{className:"post-share",children:[(0,t.jsx)("i",{className:"flaticon-share"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]})})]}),(0,t.jsx)("div",{className:"clear",id:"comment-list",children:(0,t.jsxs)("div",{className:"comments-area style-1",id:"comments",children:[(0,t.jsx)("h2",{className:"comments-title",children:"8 Comments"}),(0,t.jsxs)("div",{className:"clearfix",children:[(0,t.jsxs)("ol",{className:"comment-list",children:[(0,t.jsxs)("li",{className:"comment",children:[(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-author vcard",children:[(0,t.jsx)("img",{className:"avatar photo",src:"images/testimonials/pic1.jpg",alt:""}),(0,t.jsx)("cite",{className:"fn",children:"Celesto Anderson"})]}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,t.jsx)("div",{className:"reply",children:(0,t.jsxs)("a",{href:"javascript:void(0);",className:"comment-reply-link",children:[(0,t.jsx)("i",{className:"fa fa-reply"}),"Reply"]})})]}),(0,t.jsx)("ol",{className:"children",children:(0,t.jsx)("li",{className:"comment odd parent",children:(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-author vcard",children:[(0,t.jsx)("img",{className:"avatar photo",src:"images/testimonials/pic2.jpg",alt:""}),(0,t.jsx)("cite",{className:"fn",children:"Jake Johnson"})]}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,t.jsx)("div",{className:"reply",children:(0,t.jsxs)("a",{href:"javascript:void(0);",className:"comment-reply-link",children:[(0,t.jsx)("i",{className:"fa fa-reply"}),"Reply"]})})]})})})]}),(0,t.jsx)("li",{className:"comment",children:(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-author vcard",children:[(0,t.jsx)("img",{className:"avatar photo",src:"images/testimonials/pic1.jpg",alt:""}),(0,t.jsx)("cite",{className:"fn",children:"John Doe"})]}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,t.jsx)("div",{className:"reply",children:(0,t.jsxs)("a",{href:"javascript:void(0);",className:"comment-reply-link",children:[(0,t.jsx)("i",{className:"fa fa-reply"}),"Reply"]})})]})})]}),(0,t.jsxs)("div",{className:"comment-respond style-1",id:"respond",children:[(0,t.jsxs)("h2",{className:"comment-reply-title",id:"reply-title",children:["Leave a Reply ",(0,t.jsxs)("small",{children:[" ",(0,t.jsx)("a",{style:{display:"none"},href:"javascript:void(0);",id:"cancel-comment-reply-link",rel:"nofollow",children:"Cancel reply"})," "]})," "]}),(0,t.jsxs)("form",{className:"comment-form",id:"commentform",method:"post",children:[(0,t.jsxs)("p",{className:"comment-form-author",children:[(0,t.jsxs)("label",{for:"author",children:["Name ",(0,t.jsx)("span",{className:"required",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"Author",placeholder:"Author",id:"author"})]}),(0,t.jsxs)("p",{className:"comment-form-email",children:[(0,t.jsxs)("label",{for:"email",children:["Email ",(0,t.jsx)("span",{className:"required",children:"*"})]}),(0,t.jsx)("input",{type:"text",placeholder:"Email",name:"email",id:"email"})]}),(0,t.jsxs)("p",{className:"comment-form-url",children:[(0,t.jsx)("label",{for:"url",children:"Website"}),(0,t.jsx)("input",{type:"text",placeholder:"Website",name:"url",id:"url"})]}),(0,t.jsxs)("p",{className:"comment-form-comment",children:[(0,t.jsx)("label",{for:"comment",children:"Comment"}),(0,t.jsx)("textarea",{rows:"8",name:"comment",placeholder:"Comment",id:"comment"})]}),(0,t.jsx)("p",{className:"form-submit",children:(0,t.jsxs)("button",{type:"submit",className:"btn btn-link d-inline-flex align-items-center",id:"submit",children:[(0,t.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Submit Now"]})})]})]})]})]})})]}),(0,t.jsx)("div",{className:"col-xl-4 col-lg-4 m-b30",children:(0,t.jsxs)("aside",{className:"side-bar sticky-top",children:[(0,t.jsx)("div",{className:"widget",children:(0,t.jsx)("div",{className:"search-bx",children:(0,t.jsx)("form",{role:"search",method:"post",children:(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("div",{className:"input-group-prepend",children:(0,t.jsx)("span",{className:"input-group-text",children:(0,t.jsx)("i",{className:"la la-search"})})}),(0,t.jsx)("input",{name:"text",className:"form-control",placeholder:"Search",type:"text"}),(0,t.jsx)("span",{className:"input-group-btn",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-primary",children:(0,t.jsx)("i",{className:"la la-long-arrow-right"})})})]})})})}),(0,t.jsxs)("div",{className:"widget widget_archive",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Category"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["Design",(0,t.jsx)("span",{children:"05"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["Development",(0,t.jsx)("span",{children:"25"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["SEO",(0,t.jsx)("span",{children:"20"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["App Design",(0,t.jsx)("span",{children:"08"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["Branding",(0,t.jsx)("span",{children:"22"})]})})]})]}),(0,t.jsxs)("div",{className:"widget recent-posts-entry",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Recent Posts"}),(0,t.jsxs)("div",{className:"widget-post-bx",children:[(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/recent-blog/pic1.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)("a",{href:"/blog-large-right-sidebar",children:"Fusce mollis felis quis tristique"})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/recent-blog/pic2.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)("a",{href:"/blog-large-right-sidebar",children:"Fusce mollis felis quis tristique"})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)("a",{href:"/blog-large-right-sidebar",children:"Fusce mollis felis quis tristique"})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsxs)("div",{className:"dlab-media",children:[(0,t.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""}),"a>"]}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)("a",{href:"/blog-large-right-sidebar",children:"Fusce mollis felis quis tristique"})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]})]})]}),(0,t.jsxs)("div",{className:"widget widget_archive",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Archives"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["January",(0,t.jsx)("span",{children:"05"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["Fabruary",(0,t.jsx)("span",{children:"25"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["March",(0,t.jsx)("span",{children:"20"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["April",(0,t.jsx)("span",{children:"08"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["May",(0,t.jsx)("span",{children:"22"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["Jun",(0,t.jsx)("span",{children:"11"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",children:["July",(0,t.jsx)("span",{children:"19"})]})})]})]}),(0,t.jsxs)("div",{className:"widget widget_tag_cloud",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Tags"}),(0,t.jsxs)("div",{className:"tagcloud",children:[(0,t.jsx)("a",{href:"javascript:void(0);",children:"Business"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"News"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Brand"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Website"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Internal"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Strategy"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Brand"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Mission"})]})]})]})})]})})}),(0,t.jsx)(c.Z,{})]}),(0,t.jsx)(i.Z,{})]})}},4376:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-details-1",function(){return a(5631)}])},1664:function(e,s,a){e.exports=a(2167)}},function(e){e.O(0,[855,774,888,179],(function(){return s=4376,e(e.s=s);var s}));var s=e.O();_N_E=s}]);