"use strict";(self.webpackChunktz_pm_digital_transformation=self.webpackChunktz_pm_digital_transformation||[]).push([[592],{592:function(e,s,a){a.r(s),a.d(s,{default:function(){return be}});var i=a(5861),t=a(885),r=a(7757),n=a.n(r),l=a(5100),c=a(6827),o="SummariesExperience_item__xJGGW",d=a(184),A=function(e){var s=e.experience;return(0,d.jsxs)("li",{className:o,children:[s.position," \xa0",s.company_name," - ",function(){var e=new Date(s.date_from),a=new Date(s.date_to),i=a.getFullYear()-e.getFullYear(),t=a.getMonth()-e.getMonth(),r=a.getDay()-e.getDay();return(r<0||0===r)&&t--,t+12*i}(),"\u043c\u0435\u0441."]})},m=a(7181),u={"slick-track":"SummariesItem_slick-track__q8A-6","slick-list":"SummariesItem_slick-list__mTEMX","slick-dots":"SummariesItem_slick-dots__1un3N","slick-active":"SummariesItem_slick-active__-wkHv","pagination-container":"SummariesItem_pagination-container__yD9bc","pagination-item":"SummariesItem_pagination-item__0B4Iu",dots:"SummariesItem_dots__jy1zk",selected:"SummariesItem_selected__sSd-K",arrow:"SummariesItem_arrow__0GDlZ",left:"SummariesItem_left__B+Rxs",right:"SummariesItem_right__rJaUd",disabled:"SummariesItem_disabled__HGvSP",container:"SummariesItem_container__H5QD1",visuallyHidden:"SummariesItem_visuallyHidden__oaTVS",item:"SummariesItem_item__t2uPP",avatarDiv:"SummariesItem_avatarDiv__Bu7ZQ",avatar:"SummariesItem_avatar__eRUKR",describe:"SummariesItem_describe__KnR5o",describeHeading:"SummariesItem_describeHeading__yn6tf",describeParagraph:"SummariesItem_describeParagraph__+21rw",describeCity:"SummariesItem_describeCity__z8qoD",svgPoint:"SummariesItem_svgPoint__8Z1B9",experienceList:"SummariesItem_experienceList__OR7RS",isOnline:"SummariesItem_isOnline__HAlnR",isOnlineP:"SummariesItem_isOnlineP__OYXY5",status:"SummariesItem_status__0ip2e",statusP:"SummariesItem_statusP__RT+K8",statusSvgDiv:"SummariesItem_statusSvgDiv__8Ifou",statusHeart:"SummariesItem_statusHeart__FLW0L",statusMore:"SummariesItem_statusMore__nj-FS"},_=function(e){var s=e.summarie,a=s.desiredposition,i=s.first_name,t=s.work_city,r=s.birthday,n=s.workexperience,l=s.photo,c=s.updated_at,o=a.flatMap((function(e){return e.position})).join(",").split(",").slice(0,1);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("li",{className:u.item,children:[(0,d.jsx)("div",{className:u.avatarDiv,children:(0,d.jsx)("img",{className:u.avatar,src:l,alt:"avatar"})}),(0,d.jsxs)("div",{className:u.describe,children:[(0,d.jsx)("h3",{className:u.describeHeading,children:o}),(0,d.jsxs)("p",{className:u.describeParagraph,children:["undefined"===typeof i||0===i.length?"\u0418\u043c\u044f \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e":i+","," ",function(){var e=function(){var e=new Date,s=new Date(r),a=e.getFullYear()-s.getFullYear(),i=e.getMonth()-s.getMonth(),t=e.getDay()-s.getDay();return(i<0||0===i&&t<0)&&a--,a}();return e+" "+["\u0433\u043e\u0434","\u0433\u043e\u0434\u0430","\u043b\u0435\u0442"][e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}()]}),(0,d.jsxs)("p",{className:u.describeCity,children:[(0,d.jsx)("svg",{className:u.svgPoint,children:(0,d.jsx)("use",{className:u.point,href:"".concat(m.Z,"#point")})}),function(){if(0===t.length)return"\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d ..."}()]})]}),(0,d.jsx)("div",{className:u.experience,children:(0,d.jsx)("ul",{className:u.experienceList,children:n.map((function(e){return(0,d.jsx)(A,{experience:e},e.id)}))})}),(0,d.jsx)("div",{className:u.isOnline,children:(0,d.jsx)("p",{className:u.isOnlineP,children:"online"})}),(0,d.jsxs)("div",{className:u.status,children:[(0,d.jsxs)("p",{className:u.statusP,children:["\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e ",c]}),(0,d.jsxs)("div",{className:u.statusSvgDiv,children:[(0,d.jsx)("svg",{className:u.statusHeart,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#heart")})}),(0,d.jsx)("svg",{className:u.statusMore,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#more")})})]})]})]})})},x="SummariesList_list__-efcG",g=function(e){var s=e.summaries;return(0,d.jsx)("ul",{className:x,children:s.map((function(e){return(0,d.jsx)(_,{summarie:e},e.id)}))})},h="Summaries_cv__WelC1",f=a(4942),p=a(2791),v=a(1694),j=a.n(v),S=a(2982),N="...",b=function(e,s){var a=s-e+1;return Array.from({length:a},(function(s,a){return a+e}))},C=function(e){var s=e.onPageChange,a=e.totalCount,i=e.siblingCount,t=void 0===i?1:i,r=e.currentPage,n=e.pageSize,l=e.className,c=function(e){var s=e.totalCount,a=e.pageSize,i=e.siblingCount,t=void 0===i?1:i,r=e.currentPage;return(0,p.useMemo)((function(){var e=Math.ceil(s/a);if(t+5>=e)return b(1,e);var i=Math.max(r-t,1),n=Math.min(r+t,e),l=i>2,c=n<e-2,o=1,d=e;if(!l&&c){var A=b(1,3+2*t);return[].concat((0,S.Z)(A),[N,e])}if(l&&!c){var m=b(e-(3+2*t)+1,e);return[o,N].concat((0,S.Z)(m))}if(l&&c){var u=b(i,n);return[o,N].concat((0,S.Z)(u),[N,d])}}),[s,a,t,r])}({currentPage:r,totalCount:a,siblingCount:t,pageSize:n});if(0===r||c.length<2)return null;var o=c[c.length-1];return(0,d.jsxs)("ul",{className:j()("pagination-container",(0,f.Z)({},l,l)),children:[(0,d.jsx)("li",{className:j()("pagination-item",{disabled:1===r}),onClick:function(){return s(r-1)},children:(0,d.jsx)("div",{className:"arrow left"})}),c.map((function(e){return e===N?(0,d.jsx)("li",{className:"pagination-item dots",children:"\u2026"}):(0,d.jsx)("li",{className:j()("pagination-item",{selected:e===r}),onClick:function(){return s(e)},children:e})})),(0,d.jsx)("li",{className:j()("pagination-item",{disabled:r===o}),onClick:function(){return s(r+1)},children:(0,d.jsx)("div",{className:"arrow right"})})]})},w=function(e){var s=e.summaries,a=e.totalSummaryCount,i=e.currentPage,t=e.pageSize,r=e.onCurrentPageChanged;return(0,d.jsxs)("div",{className:"".concat(h," ","container"),children:[(0,d.jsx)(g,{summaries:s}),(0,d.jsx)(C,{className:"pagination-bar",currentPage:i,totalCount:a,pageSize:t,onPageChange:function(e){return r(e)}})]})},I=a(9412),D="Lobby_lobby__unYv0",B="Lobby_personDiv__G3gsZ",k="Lobby_person__UoG8S",E="Lobby_svg__vwD8-",H=function(){return(0,d.jsxs)("div",{className:"".concat(D," ","container"),children:[(0,d.jsx)("div",{className:B,children:(0,d.jsxs)("p",{className:k,children:[(0,d.jsx)("svg",{className:E,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#person")})}),"\u042e\u0440\u0430 \u041c\u0430\u0440\u0447\u0435\u043d\u043a\u043e"]})}),(0,d.jsx)(I.Z,{})]})},F=a(2107),R={"slick-track":"Candidates_slick-track__I6kis","slick-list":"Candidates_slick-list__9xu7D","slick-dots":"Candidates_slick-dots__p63I-","slick-active":"Candidates_slick-active__6EVCq","pagination-container":"Candidates_pagination-container__K+p4O","pagination-item":"Candidates_pagination-item__vLMUi",dots:"Candidates_dots__hztov",selected:"Candidates_selected__sfB4W",arrow:"Candidates_arrow__l14ae",left:"Candidates_left__F9TE6",right:"Candidates_right__OGoG6",disabled:"Candidates_disabled__Wjg+e",container:"Candidates_container__I37p0",visuallyHidden:"Candidates_visuallyHidden__8aGHw",candidates:"Candidates_candidates__79Jad",settingsDiv:"Candidates_settingsDiv__vpJm7",settingsBtn:"Candidates_settingsBtn__42a+I",svg:"Candidates_svg__TD5FH",result:"Candidates_result__DKQBd",resultWrap:"Candidates_resultWrap__RVMtO",resultHeading:"Candidates_resultHeading__iO5Fh",resultSpan:"Candidates_resultSpan__u1axU",resultDivParagraph:"Candidates_resultDivParagraph__GDAQe",resultParagraph:"Candidates_resultParagraph__rjHIF",interval:"Candidates_interval__pAzRd",intervalSet:"Candidates_intervalSet__7N4Zy",intervalBtn:"Candidates_intervalBtn__SbAt4",intervalSvg:"Candidates_intervalSvg__x-iy-"},P=a(3505),U={"slick-track":"Filters_slick-track__LdCpw","slick-list":"Filters_slick-list__Gv-m5","slick-dots":"Filters_slick-dots__PRVp3","slick-active":"Filters_slick-active__+U4-j","pagination-container":"Filters_pagination-container__l3eho","pagination-item":"Filters_pagination-item__8L0Vz",dots:"Filters_dots__zzTMC",selected:"Filters_selected__o384M",arrow:"Filters_arrow__WLem9",left:"Filters_left__u0fPM",right:"Filters_right__V4Kk2",disabled:"Filters_disabled__jHaC9",container:"Filters_container__FW7he",visuallyHidden:"Filters_visuallyHidden__G5hio",filters:"Filters_filters__AMCLy",filtersHeading:"Filters_filtersHeading__JKILu",filtersHeadingDiv:"Filters_filtersHeadingDiv__c60ae",filtersMainDiv:"Filters_filtersMainDiv__AjNxU",filtersPhotoDiv:"Filters_filtersPhotoDiv__Mz7Dl",filtersSvg:"Filters_filtersSvg__79D8n",filtersCheckboxSvg:"Filters_filtersCheckboxSvg__UIVvx",filtersImg:"Filters_filtersImg__sCGSd",filtersParagraph:"Filters_filtersParagraph__Y3qQT",filtersParagraphSecond:"Filters_filtersParagraphSecond__XxHe5",filtersWithPhotoSelector:"Filters_filtersWithPhotoSelector__SYHfl",filtersAgeDiv:"Filters_filtersAgeDiv__5bu2-",filtersAgeHeading:"Filters_filtersAgeHeading__AL8d-",filtersSexDiv:"Filters_filtersSexDiv__k543M",filtersSexHeading:"Filters_filtersSexHeading__NGoUY",filtersSexList:"Filters_filtersSexList__TqGeg",filtersSexBtn:"Filters_filtersSexBtn__84ZyO",filtersSalaryDiv:"Filters_filtersSalaryDiv__tozwa",filtersSalaryHeading:"Filters_filtersSalaryHeading__CUXDE",filtersSwitchWrap:"Filters_filtersSwitchWrap__ueu0h",filtersJobExperienceDiv:"Filters_filtersJobExperienceDiv__fdQfb",filtersJobExperienceHeading:"Filters_filtersJobExperienceHeading__3EtWB",filtersJobExperienceCheckbox:"Filters_filtersJobExperienceCheckbox__fpEM5",filtersCheckbox:"Filters_filtersCheckbox__2DMwn",filtersJobExperienceLabel:"Filters_filtersJobExperienceLabel__z601j",filtersCheckboxYellow:"Filters_filtersCheckboxYellow__cacjf",filtersJobExperienceInputItem:"Filters_filtersJobExperienceInputItem__C0GQv",filtersStringWrap:"Filters_filtersStringWrap__6OzUA"},Y=a(862),J=function(e){var s=e.checked,a=e.onChange;return(0,d.jsxs)("div",{className:U.filtersPhotoDiv,children:[(0,d.jsxs)("p",{className:U.filtersParagraph,children:[(0,d.jsx)("svg",{className:U.filtersSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#contactList")})}),"\u0422\u043e\u043b\u044c\u043a\u043e \u0441 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"]}),(0,d.jsx)(Y.default,{checked:s,onChange:a,onColor:"#EAEAEA",offColor:"#EAEAEA",onHandleColor:"#851fff",offHandleColor:"#5b5b5b",handleDiameter:12,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 5px rgba(0, 0, 0, 0.2)",height:10,width:27,className:"react-switch",id:"material-switch"})]})},y=(a(3896),"RangeSelector_RangeSelector__qeoyD"),Q="RangeSelector_RangeWrap__vmM1l",T="RangeSelector_RangeDiv__pCztD",M="RangeSelector_rangeLabelBefor__NgcXm",Z="RangeSelector_rangeLabelAfter__40KrQ",G="RangeSelector_RangeInputWrap__8QECh",L="RangeSelector_RangeInputDiv__VvVWk",W="RangeSelector_rengeInput__L1npN",O="RangeSelector_rangeInputBefor__UgjtA",V="RangeSelector_rangeInputAfter__EZqHZ",z="RangeSelector_rangeInputBetween__Q1ueF",K=a(7404),X=function(e){var s=e.rangeLabelBefor,a=e.rangeLabelAfter,i=e.rangeInputBefor,t=e.rangeInputAfter,r=e.rangeInputBetween;return(0,d.jsxs)("div",{className:y,children:[(0,d.jsxs)("div",{className:Q,children:[(0,d.jsx)("p",{className:M,children:s}),(0,d.jsx)("div",{className:T,children:(0,d.jsx)(K.e6,{min:0,max:100,defaultValue:[10,90],tipFormatter:function(e){return"".concat(e,"%")}})}),(0,d.jsx)("p",{className:Z,children:a})]}),(0,d.jsxs)("div",{className:G,children:[(0,d.jsxs)("div",{className:L,children:[(0,d.jsx)("p",{className:O,children:i}),(0,d.jsx)("input",{className:W})]}),(0,d.jsx)("p",{className:z,children:r}),(0,d.jsxs)("div",{className:L,children:[(0,d.jsx)("input",{className:W}),(0,d.jsx)("p",{className:V,children:t})]})]})]})},q=function(){return(0,d.jsxs)("div",{className:U.filtersAgeDiv,children:[(0,d.jsx)("h3",{className:U.filtersAgeHeading,children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),(0,d.jsx)(X,{rangeLabelAfter:"\u043b\u0435\u0442",rangeLabelBefor:"\u043e\u0442",rangeInputBefor:"\u043e\u0442",rangeInputBetween:"\u0434\u043e",rangeInputAfter:"\u043b\u0435\u0442"})]})},$=function(){return(0,d.jsxs)("div",{className:U.filtersSexDiv,children:[(0,d.jsx)("h3",{className:U.filtersSexHeading,children:"\u041f\u043e\u043b"}),(0,d.jsxs)("ul",{className:U.filtersSexList,children:[(0,d.jsx)("li",{className:U.filtersSexItem,children:(0,d.jsx)(F.Z,{className:U.filtersSexBtn,type:"button",text:"\u041b\u044e\u0431\u043e\u0439"})}),(0,d.jsx)("li",{className:U.filtersSexItem,children:(0,d.jsx)(F.Z,{className:U.filtersSexBtn,type:"button",text:"\u0416\u0435\u043d\u0449\u0438\u043d\u044b"})}),(0,d.jsx)("li",{className:U.filtersSexItem,children:(0,d.jsx)(F.Z,{className:U.filtersSexBtn,type:"button",text:"\u041c\u0443\u0436\u0447\u0438\u043d\u044b"})})]})]})},ee=function(){return(0,d.jsxs)("div",{className:U.filtersSalaryDiv,children:[(0,d.jsx)("h3",{className:U.filtersSalaryHeading,children:"\u0416\u0435\u043b\u0430\u0435\u043c\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0433\u0440\u0438\u0432\u043d\u0435"}),(0,d.jsx)(X,{rangeLabelAfter:"\u043b\u0435\u0442",rangeLabelBefor:"\u043e\u0442",rangeInputBefor:"\u043e\u0442",rangeInputBetween:"\u0434\u043e",rangeInputAfter:"\u0433\u0440\u043d"}),(0,d.jsxs)("div",{className:U.filtersSwitchWrap,children:[(0,d.jsx)("p",{className:U.filtersParagraph,children:"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0431\u0435\u0437 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b"}),(0,d.jsx)(Y.default,{onColor:"#EAEAEA",offColor:"#EAEAEA",onHandleColor:"#851fff",offHandleColor:"#5b5b5b",handleDiameter:12,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 5px rgba(0, 0, 0, 0.2)",height:10,width:27,className:"react-switch",id:"material-switch"})]})]})},se=a(2007),ae=a.n(se),ie=function(e){var s=e.color,a=e.img,i=e.text,t=e.id,r=e.value,n=e.svgType;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("li",{className:U.filtersJobExperienceInputItem,children:(0,d.jsxs)("div",{className:U.filtersJobExperienceCheckbox,children:[(0,d.jsx)("input",{id:t,className:j()(U.filtersCheckbox,s?U.filtersCheckboxYellow:U.filtersCheckbox),type:"checkbox",required:!0}),(0,d.jsx)("label",{for:t,className:U.filtersJobExperienceLabel,children:(0,d.jsxs)("span",{className:U.filtersStringWrap,children:[(0,d.jsxs)("p",{className:U.filtersParagraph,children:[a,i]}),(0,d.jsxs)("p",{className:U.filtersParagraphSecond,children:[r,n]})]})})]})})})},te=ie;ie.defaultProps={color:"",img:""},ie.prototype={color:ae().oneOf(["","Yellow"]),text:ae().string,id:ae().string.isRequired,value:ae().number};var re=function(){return(0,d.jsxs)("div",{className:U.filtersJobExperienceDiv,children:[(0,d.jsx)("h3",{className:U.filtersJobExperienceHeading,children:"\u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b "}),(0,d.jsx)("div",{className:U.filtersJobExperienceInputDiv,children:(0,d.jsxs)("ul",{className:U.filtersJobExperienceInputList,children:[(0,d.jsx)(te,{text:"\u0411\u0435\u0437 \u043e\u043f\u044b\u0442\u0430",id:"unemployed",value:"603"}),(0,d.jsx)(te,{text:"\u0414\u043e 1 \u0433\u043e\u0434\u0430",id:"lessThanAYear",value:"603"}),(0,d.jsx)(te,{text:"\u041e\u0442 1 \u0434\u043e 2 \u043b\u0435\u0442",id:"from\u041eneToTwoYears",value:"603"}),(0,d.jsx)(te,{text:"\u041e\u0442 2 \u0434\u043e 5 \u043b\u0435\u0442",id:"fromTwoToFiveYears",value:"603"}),(0,d.jsx)(te,{text:"\u041e\u0442 5 \u0434\u043e 10 \u043b\u0435\u0442",id:"fromFiveToTenYears",value:"603"}),(0,d.jsx)(te,{text:"\u0411\u043e\u043b\u0435\u0435 10 \u043b\u0435\u0442",id:"moreThanTen",value:"603"}),(0,d.jsxs)("div",{className:U.filtersSwitchWrap,children:[(0,d.jsxs)("p",{className:U.filtersParagraph,children:[(0,d.jsx)("svg",{className:U.filtersSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#education")})}),"\u0422\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b"]}),(0,d.jsx)(Y.default,{onColor:"#EAEAEA",offColor:"#EAEAEA",onHandleColor:"#851fff",offHandleColor:"#5b5b5b",handleDiameter:12,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 5px rgba(0, 0, 0, 0.2)",height:10,width:27,className:"react-switch",id:"material-switch"})]})]})})]})},ne=a(5154),le=a(3136),ce=a(6433),oe=a(334),de=a(7668),Ae=a(3216),me=function(){return(0,d.jsxs)("div",{className:U.filtersJobExperienceDiv,children:[(0,d.jsx)("h3",{className:U.filtersJobExperienceHeading,children:"\u0412\u043b\u0430\u0434\u0435\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430\u043c\u0438"}),(0,d.jsx)("div",{className:U.filtersJobExperienceInputDiv,children:(0,d.jsxs)("ul",{className:U.filtersJobExperienceInputList,children:[(0,d.jsx)(te,{img:(0,d.jsx)("img",{className:U.filtersImg,src:ne,alt:"United Kingdom flag"}),text:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",id:"english",value:"603",svgType:(0,d.jsx)("svg",{className:U.filtersCheckboxSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#arrowDown")})})}),(0,d.jsx)(te,{img:(0,d.jsx)("img",{className:U.filtersImg,src:le,alt:"Russia flag"}),text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",id:"russia",value:"603",svgType:(0,d.jsx)("svg",{className:U.filtersCheckboxSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#arrowDown")})})}),(0,d.jsx)(te,{img:(0,d.jsx)("img",{className:U.filtersImg,src:ce,alt:"Ukraine flag"}),text:"\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439",id:"ukraine",value:"603",svgType:(0,d.jsx)("svg",{className:U.filtersCheckboxSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#arrowDown")})})}),(0,d.jsx)(te,{img:(0,d.jsx)("img",{className:U.filtersImg,src:oe,alt:"Germany flag"}),text:"\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439",id:"germany",value:"603",svgType:(0,d.jsx)("svg",{className:U.filtersCheckboxSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#arrowDown")})})}),(0,d.jsx)(te,{img:(0,d.jsx)("img",{className:U.filtersImg,src:de,alt:"Poland flag"}),text:"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439",id:"poland",value:"603",svgType:(0,d.jsx)("svg",{className:U.filtersCheckboxSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#arrowDown")})})}),(0,d.jsx)(te,{img:(0,d.jsx)("img",{className:U.filtersImg,src:Ae,alt:"Spain flag"}),text:"\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439",id:"spain",value:"603",svgType:(0,d.jsx)("svg",{className:U.filtersCheckboxSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#arrowDown")})})})]})})]})},ue=function(){return(0,d.jsxs)("div",{className:U.filtersJobExperienceDiv,children:[(0,d.jsx)("h3",{className:U.filtersJobExperienceHeading,children:"\u0422\u0438\u043f \u0437\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u0438"}),(0,d.jsx)("div",{className:U.filtersJobExperienceInputDiv,children:(0,d.jsxs)("ul",{className:U.filtersJobExperienceInputList,children:[(0,d.jsx)(te,{text:"\u041f\u043e\u043b\u043d\u0430\u044f \u0437\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c",id:"full",value:"34567",color:"Yellow"}),(0,d.jsx)(te,{text:"\u041d\u0435\u043f\u043e\u043b\u043d\u0430\u044f \u0437\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c",id:"Underemployment",value:"603",color:"Yellow"}),(0,d.jsx)(te,{text:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430",id:"RemoteWork",value:"603",color:"Yellow"})]})})]})},_e=function(){return(0,d.jsxs)("div",{className:U.filtersJobExperienceDiv,children:[(0,d.jsx)("h3",{className:U.filtersJobExperienceHeading,children:"\u0422\u0438\u043f \u0437\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u0438"}),(0,d.jsx)("div",{className:U.filtersJobExperienceInputDiv,children:(0,d.jsxs)("ul",{className:U.filtersJobExperienceInputList,children:[(0,d.jsx)(te,{text:"\u0412\u044b\u0441\u0448\u0435\u0435",id:"higherEducation",value:"34567",color:"Yellow"}),(0,d.jsx)(te,{text:"\u041d\u0435\u043e\u043a\u043e\u043d\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u044b\u0441\u0448\u0435\u0435",id:"incomplete",value:"603",color:"Yellow"}),(0,d.jsx)(te,{text:"\u0421\u0440\u0435\u0434\u043d\u0435-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435",id:"secondarySpecial",value:"603",color:"Yellow"}),(0,d.jsx)(te,{text:"\u0421\u0440\u0435\u0434\u043d\u0435",id:"secondaryEducation",value:"603",color:"Yellow"})]})})]})},xe=function(e){var s=e.hasPhoto,a=e.onHasPhotoChange;return(0,d.jsxs)("div",{className:U.filters,children:[(0,d.jsx)("div",{className:U.filtersHeadingDiv,children:(0,d.jsx)("h2",{className:U.filtersHeading,children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"})}),(0,d.jsxs)("div",{className:U.filtersMainDiv,children:[(0,d.jsx)(J,{checked:s,onChange:function(e){return a(e)}}),(0,d.jsx)(q,{}),(0,d.jsx)($,{}),(0,d.jsx)(ee,{}),(0,d.jsx)(re,{}),(0,d.jsx)(me,{}),(0,d.jsx)(ue,{}),(0,d.jsx)(_e,{})]})]})},ge=function(e){var s=e.hasPhoto,a=e.onHasPhotoChange,i=(0,p.useState)(!1),r=(0,t.Z)(i,2),n=r[0],l=r[1],c=function(){l(!1)};return(0,d.jsxs)("div",{className:"".concat(R.candidates," ","container"),children:[(0,d.jsxs)("div",{className:R.settingsDiv,children:[(0,d.jsx)(F.Z,{className:R.settingsBtn,text:(0,d.jsx)("svg",{className:R.svg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#settings")})}),onClick:function(){l(!n)},type:"button",variant:"svg"}),n&&(0,d.jsx)(P.Z,{closeModal:c,children:(0,d.jsx)(xe,{closeModal:c,hasPhoto:s,onHasPhotoChange:a})})]}),(0,d.jsx)("div",{className:R.result,children:(0,d.jsxs)("h2",{className:R.resultHeading,children:["\u041c\u044b \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u043b\u0438 ",(0,d.jsx)("span",{className:R.resultSpan,children:"451 642"})," \u0440\u0435\u0437\u044e\u043c\u0435"]})}),(0,d.jsxs)("div",{className:R.resultWrap,children:[(0,d.jsx)("div",{className:R.resultDivParagraph,children:(0,d.jsx)("p",{className:R.resultParagraph,children:"\u0420\u0435\u0437\u044e\u043c\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442 \u0432\u043e \u0412\u0441\u0435\u0439 \u0423\u043a\u0440\u0430\u0438\u043d\u0435"})}),(0,d.jsxs)("div",{className:R.interval,children:[(0,d.jsx)("p",{className:R.intervalSet,children:"\u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f"}),(0,d.jsx)("svg",{className:R.intervalSvg,children:(0,d.jsx)("use",{href:"".concat(m.Z,"#arrowDown")})}),(0,d.jsx)(F.Z,{className:R.intervalBtn})]})]}),(0,d.jsx)("div",{className:R.candidatesCV,children:(0,d.jsx)("ul",{})})]})},he=a(4569),fe=a.n(he);fe().defaults.baseURL="http://135.181.30.244:27007/api/";var pe=function(e,s){return fe().get("summaries/",{params:{page:e,page_size:s}}).then((function(e){return e.data}))},ve=function(e,s,a){return fe().get("summaries/",{params:{page:e,photo:s,page_size:a}}).then((function(e){return e.data}))},je=a(2777),Se=9,Ne=5,be=function(){var e=(0,p.useState)([]),s=(0,t.Z)(e,2),a=s[0],r=s[1],o=(0,p.useState)(0),A=(0,t.Z)(o,2),m=A[0],u=A[1],_=(0,p.useState)(1),x=(0,t.Z)(_,2),g=x[0],h=x[1],f=(0,p.useState)(!1),v=(0,t.Z)(f,2),j=v[0],S=v[1],N=(0,je.Z)().isMobile?Ne:Se;return(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(n().mark((function e(){var s,a,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j?ve(g,j,N):pe(g,N);case 3:s=e.sent,a=s.results,i=s.total_count,r(a),u(i),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[g,j,N]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.Z,{}),(0,d.jsx)(H,{}),(0,d.jsx)(ge,{hasPhoto:j,onHasPhotoChange:function(e){j!==e&&h(1),S(e)}}),(0,d.jsx)(w,{summaries:a,totalSummaryCount:m,currentPage:g,pageSize:N,onCurrentPageChanged:h}),(0,d.jsx)(l.Z,{})]})}},334:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABkSURBVHgB7dbBCYAwEAXRH8nNQ8CTHVhPyrJDu1G7GJbMgy1gDgs/kSStrP33prAtxRlAM4BmAM0AWp8Zqaw9uZwSJANoBtAMoBlA6+d9pLI+5p7K/AGaATQDaAbQygdIktb2AbDDBMBOD4UBAAAAAElFTkSuQmCC"},7668:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7ddBEYAwEMDAK2bw7wYZdQAyMh12HeSZGQD+bO293znYNYcTUBNQE1ATUBNQE1ATUFvP3H6gJKAmoCagJqAmoCagJgAASh9yaAYME8cmFQAAAABJRU5ErkJggg=="},3136:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB7dYxEYRQEATR2avzQYgfYvzgBAVIQAQWyL4DkNG1RT8HHc0kkqQvqzHGk8Z+ac4AmgE0A2gG0P77eaezynJ4JUgG0AygGUAzgFbbtLZe4royeyVIBtAMoBlAM0CSJNIL3zYMZQ0NDoMAAAAASUVORK5CYII="},3216:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABhSURBVHgB7dgxDYBQEATRPUJFgwxqPGAA1BMEYOMjY3JhnoOp7rKJJOnP6s420tiU5gygGUAzgGYAbV6vJZ3VeA5fCZIBNANoBtAMoNV77q0vsasEzQCaATQDaAZIkkT6AIe5Cik6Fr1TAAAAAElFTkSuQmCC"},6433:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABPSURBVHgB7ddBEYAwAMCwDUtYQB0SsYGAIaO3I3HQZ8cA4M/meb9rbOwYmxNQE1ATUBNQE1ATUBNQm+u5/EBJQE1ATUBNQE1ATUBNAACUPrq0BgoN4OMsAAAAAElFTkSuQmCC"},5154:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATBSURBVHgB7VhNTFxVGD3zOrTlz4GC/ZFkTExo1TgkVFsXDDEuumJMW41/U7vRumCiC4lSMLHWmgiCqSY1g4nWjWH8WVg1zMZ0o0wXxkpxZiEUY3SMtT9AZ6AUKG2n99zmvr55DMMbOkCbvpO89PXxuO+c+53v8n0fYMOGDRs27mQ4/vE3pUpaXsZ/ReVo/z6O0LGzWAi897vQ0+yR96fLHs34zvrEL/Jf3/sxRAaTyGXtlu1ueDe59GczsSGMtx6ENhkK41zNDrj2deDQtlJEOx5BQ20FbgW4ipwIvrRRbowin0qOY0wQH6l/AZcifXCqlylkOvwz1jQ+i24RkVDkjIxIfGQaSw0Sb9x2j7x4r4hPdH0lrq/lvYJW0fsFVrg3yP9cFT+40P6ZjMjO+HFEO7cg+GI13BWrsFQgabqAllHkJ0M9OFuzU3JT5Fd6N2NNTxe0As9G3B39Dq7gW7qQK/H/kQwckEKeSg6g951aueBigj7v3V+Ltufv04lfivyGUV+j4PKuTpwcy7s7sOKbQzg4XAktPnzdIoV+nxRS2vZampDzu5qB19/DG7UFcmf8dWuRT8jk3+uRPve4i+UzJiiJj/oC0ueEw1UKHjaVwjFHNzyE+rdPoP2HODRfRyzt5ClufE6GptDfoD9bjES3kqAKJL42egT9O57GE5/8jV0f/6HnpgNP9qR4465cLW1i3GFG4EL7p1KAgiZ2okgkeokp0XM5RsN9I/L9+RKUPncF98kjPnB4KOPRqwtQYBi7X3lQCLqRuDOxk0gIK1GQAm1GEYwUhUQGx8SOVlsSYAQTdKz1o1nEufbk5hp0/XhKWmUuzBKg4K9bJyNiFMKP8SQwC7lL5M2qhsf0Z1YEMEG5ltEqaq2px+sk8a6jp5C8eBnZ4AiGB1PZXqDXVagVpsI/pe0YsVoIYKJZEcANoAAz1BqRgaSw5RSswJFIJFLIM3Kx0M1Cw20OxwA25T0CS4nbPgK2gOWGLWC5Yf8dWG44WYhZAatVVpAsIVhKmLHS+7DeR8wHdn7TpjVY5RrrKYJ1ECvXbHAGPh/K+oLqT/3edfKjY60fphVzqnK0Sl6RZc0zblrLWOGqb3PTsk1L5qxGjY11Yd/vsypHEmDlaGx8FObLgcDhk4JYmew95qpwy7s74fRU68/iw1OykYnFJ9LWzJgDrEDZn7KNvPLMqxlbO3ZIiryVUBvBNpYiapqP48i9W2UryzVVNUsxw6IrY1+uhNHC5GQeMqRFQA2Q6tZrskPizhjBdrOkZY/+IUI1HGyEFjrY4oaxma+6ODqrAyS4UWabqm5QCqA6dlOKeKbWrrStCQWGkLJmb/3yL8T+ndDF3+xkTjVRmYSQPDewSFwKtJXGX2CTvuXPfhG23RlnL7wUeRInAQ4DFPl8IXTsjLDVr+jsmwE+eBNlHJ8YJiQ8QDhcUMK48VpTxTk5wjhv6HlpETbTJE4RBH1O35J4LnPNhYCWrN/fj2/LHsg6s7osxi9OJqgCiTNMxWLqoHxO4lb703yC9uCG0ect27fCH/VJd9DidIhKdL3ZzZagS0ncDCWEp1zbnt2oEgltzA/nXAlK5YttlVwQPjEiL5noB/aiSpxKFGLDhg0bNu5sXAOWV7xumoFGLgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=592.8dab460e.chunk.js.map