(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={header:"Header_header__gd1IO",navbar:"Header_navbar__N3aZM",empty:"Header_empty__1gsNQ",backContainer:"Header_backContainer__2XbxA",barLink:"Header_barLink__1GfPd",backBtn:"Header_backBtn__1z1BG",title:"Header_title__jPSMG",links:"Header_links__sCsdv",homeLink:"Header_homeLink__15W44"}},function(e,t,a){e.exports={section:"Course_section__2Crs8",container:"Course_container__3Dt12",imageContainer:"Course_imageContainer__2NEXD",image:"Course_image__1xW1R",titleContainer:"Course_titleContainer__3VhW5",title:"Course_title__2SXwM",price:"Course_price__1oBWm",contactContainer:"Course_contactContainer__3URZT",contact:"Course_contact__1b-zx",time:"Course_time__XqimR",descriptionContainer:"Course_descriptionContainer__2vEM6",backBtn:"Course_backBtn__3t0Zc"}},function(e,t,a){e.exports={course:"CourseListItem_course__13OTB",link:"CourseListItem_link__1ixtW",imageBlock:"CourseListItem_imageBlock__34xIT",image:"CourseListItem_image__3Il_2",courseInfoBlock:"CourseListItem_courseInfoBlock__2eoOp",title:"CourseListItem_title__SM6d8",price:"CourseListItem_price__2sTiU",time:"CourseListItem_time__1dwMl",product:"CourseListItem_product__1DeRJ"}},,function(e,t,a){},,function(e,t,a){e.exports={category:"CategoryListItem_category__27ot9",link:"CategoryListItem_link__3wmqy",imageBlock:"CategoryListItem_imageBlock__2dus8",image:"CategoryListItem_image__3Q_Cw",title:"CategoryListItem_title__YpFQU"}},,,,,,,,,,function(e,t,a){e.exports={section:"Home_section__3CbhJ",container:"Home_container__JldeP",block:"Home_block__1QrmN",headLineContainer:"Home_headLineContainer__24XK_",headLine:"Home_headLine__1Fu0e"}},function(e,t,a){e.exports={links:"Footer_links__3C7D6"}},,function(e,t,a){e.exports={categoryContainer:"CategoryList_categoryContainer__xipUi"}},function(e,t,a){e.exports=a.p+"static/media/computer_science.bceb26d0.jpg"},function(e,t,a){e.exports=a.p+"static/media/business.d254776e.jpg"},function(e,t,a){e.exports=a.p+"static/media/data_science.5461e075.jpg"},function(e,t,a){e.exports=a.p+"static/media/arts_and_humanities.1584261e.jpg"},function(e,t,a){e.exports=a.p+"static/media/physical_science_and_engineering.42d5cf0c.jpg"},function(e,t,a){e.exports=a.p+"static/media/math_and_logic.b7e4fc16.jpg"},,function(e,t,a){e.exports={section:"CourseList_section__zWrp1",container:"CourseList_container__2_UE4",block:"CourseList_block__18JD2",backBtn:"CourseList_backBtn__30kAj",headLineContainer:"CourseList_headLineContainer__PLQIK",headLine:"CourseList_headLine__1OLkG"}},,function(e,t,a){e.exports=a(47)},,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),i=a.n(r),o=a(3),l=a(1),s=a(23),m=a.n(s),u=a(24),_=a.n(u),g=function(e){return c.a.createElement("footer",null,c.a.createElement("div",{className:_.a.links},c.a.createElement(o.b,{to:"/contact-us"},c.a.createElement("h3",null,"Contact Us")),c.a.createElement(o.b,{to:"/about-us"},c.a.createElement("h3",null,"About Us"))))},E=a(7),d=a.n(E),p=function(e){var t=e.back?c.a.createElement("div",{className:d.a.backContainer},c.a.createElement("button",{className:d.a.backBtn,onClick:e.back})):c.a.createElement("div",{className:d.a.empty});return c.a.createElement("div",null,c.a.createElement("header",{className:d.a.header},c.a.createElement("div",{className:d.a.navbar},t,c.a.createElement(o.b,{className:d.a.homeLink,to:"/"},c.a.createElement("h3",{className:d.a.title},"Course Store")),c.a.createElement("div",{className:d.a.links},!e.LoggedIn&&c.a.createElement(o.b,{className:d.a.barLink,to:"/log-in"},"Log In"),!e.LoggedIn&&c.a.createElement(o.b,{className:d.a.barLink,to:"/sign-up"},"Sign Up")))))},k=a(26),h=a.n(k),C=a(27),y=a.n(C),b=a(28),f=a.n(b),L=a(29),N=a.n(L),v=a(30),x=a.n(v),I=a(31),B=a.n(I),U=a(32),j=a.n(U),w=a(13),H=a.n(w),R=function(e){return c.a.createElement("li",{className:H.a.category},c.a.createElement(o.b,{to:e.category.categoryLink},c.a.createElement("div",{className:H.a.imageBlock},c.a.createElement("img",{className:H.a.image,src:e.category.imageURI,alt:"".concat(e.category.categoryName)})),c.a.createElement("h3",{className:H.a.title},e.category.categoryName)))},O=[{slug:0,categoryName:"Computer Science",categoryLink:"computer-science",imageURI:y.a},{slug:1,categoryName:"Business",categoryLink:"business",imageURI:f.a},{slug:2,categoryName:"Data Science",categoryLink:"data-science",imageURI:N.a},{slug:3,categoryName:"Arts and Humanities",categoryLink:"arts-and-humanities",imageURI:x.a},{slug:4,categoryName:"Physical Science and Engineering",categoryLink:"physical-science-and-engineering",imageURI:B.a},{slug:5,categoryName:"Math and Logic",categoryLink:"math-and-logic",imageURI:j.a}],S=function(e){return c.a.createElement("ul",{className:h.a.categoryContainer},O.map(function(e){return c.a.createElement(R,{category:e,key:e.slug})}))},D=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("section",{className:m.a.section},c.a.createElement("div",null,c.a.createElement(S,null))),c.a.createElement(g,null))},M=function(){return c.a.createElement("div",null,c.a.createElement(p,null),"Contact Us",c.a.createElement(g,null))},T=function(){return c.a.createElement("div",null,c.a.createElement(p,null),"About Us",c.a.createElement(g,null))},F=function(){return c.a.createElement("div",null,"The error page")},J=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(g,null))},W=function(e){return c.a.createElement("div",null,"Sign Up")},A=function(){return c.a.createElement("div",null,"Thank you")},P=a(17),Q=a.n(P),X=a(33),G=a(35),z=a(18),Z=a(9),q=a.n(Z),K=function(e){var t={title:e.course.title,imgurl:e.course.image._url,description:e.description};return c.a.createElement("li",{className:q.a.course},c.a.createElement(o.b,{className:q.a.link,to:{pathname:"/".concat(e.category,"/").concat(e.course.slug),state:t}},c.a.createElement("div",{className:q.a.imageBlock},c.a.createElement("img",{className:q.a.image,src:e.course.image._url,alt:"".concat(e.course.title)})),c.a.createElement("div",{className:q.a.courseInfoBlock},c.a.createElement("h3",{className:q.a.title},e.course.title)),c.a.createElement("time",{className:q.a.time,dateTime:e.course.pubDate})))},Y=a(34),V=a.n(Y),$=function(e){var t;return t=e.courses.length?c.a.createElement("ul",{className:V.a.container},e.courses.map(function(t){return c.a.createElement(K,{course:t,category:e.categoryName})})):c.a.createElement("div",null,"You have no data!"),c.a.createElement("div",null,t)},ee=a(11),te=a.n(ee),ae=function(e){var t=Object(n.useState)(),a=Object(G.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)(function(){var t=function(){var t=Object(X.a)(Q.a.mark(function t(){var a,n;return Q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://demo8942208.mockable.io/"+e.categoryLink);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,i(Object.values(n));case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();Object(z.isEmpty)(r)&&t()},[r]),Object(z.isEmpty)(r)?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{back:function(){e.history.goBack()}}),c.a.createElement("section",{className:te.a.section},c.a.createElement("div",{className:te.a.container},c.a.createElement("div",{className:te.a.block}),c.a.createElement("div",{className:te.a.headLineContainer},c.a.createElement("h1",{className:te.a.headLine},e.categoryLink)),c.a.createElement($,{categoryName:e.categoryLink,courses:r}))),c.a.createElement(g,null))},ne=a(8),ce=a.n(ne),re=function(e){var t=e.location.state;t.title,t.imgurl,t.description;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{back:function(){e.history.goBack()}}),c.a.createElement("section",{className:ce.a.section},c.a.createElement("div",{className:ce.a.container},c.a.createElement("div",{className:ce.a.imageContainer},c.a.createElement("img",{className:ce.a.image,src:t.imgurl,alt:t.title})),c.a.createElement("div",{className:ce.a.titleContainer},c.a.createElement("h3",{className:ce.a.title},t.title)),c.a.createElement("div",{className:ce.a.descriptionContainer},c.a.createElement("p",null,t.description)),c.a.createElement(o.b,{className:ce.a.link,to:"/registration-confirmation"},"Registration"))),c.a.createElement(g,null))},ie=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(g,null))};var oe=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",exact:!0,component:D}),c.a.createElement(l.a,{path:"/contact-us",exact:!0,component:M}),c.a.createElement(l.a,{path:"/about-us",exact:!0,component:T}),c.a.createElement(l.a,{path:"/log-in",exact:!0,component:J}),c.a.createElement(l.a,{path:"/sign-up",exact:!0,component:W}),c.a.createElement(l.a,{path:"/registration-confirmation",exact:!0,component:ie}),c.a.createElement(l.a,{path:"/thank-you",exact:!0,component:A}),c.a.createElement(l.a,{path:"/:categoryLink",exact:!0,render:function(e){return c.a.createElement(ae,{match:e.match,location:e.location,history:e.history,categoryLink:e.match.params.categoryLink})}}),c.a.createElement(l.a,{path:"/:categoryName/:courseID",exact:!0,render:function(e){return c.a.createElement(re,{match:e.match,location:e.location,history:e.history})}}),c.a.createElement(l.a,{component:F})))};i.a.render(c.a.createElement(o.a,{basename:/github.io/.test(window.location)?"/seainfo6150-final-project-webapp":""},c.a.createElement(oe,null)),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.51eb6179.chunk.js.map