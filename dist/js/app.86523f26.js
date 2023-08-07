(function(){"use strict";var t={4604:function(t,e,s){var a=s(5102),n=s(9269);function i(t,e,s,a,i,r){const o=(0,n.up)("checkListPage");return(0,n.wg)(),(0,n.j4)(o)}var r=s(6237);const o={class:"fatherDiv row"},d={class:"sizeCheckList"};function l(t,e,s,i,r,l){const u=(0,n.up)("interrupted-page"),c=(0,n.up)("open-page"),p=(0,n.up)("concluded-page"),k=(0,n.up)("bar-component");return(0,n.wg)(),(0,n.j4)(k,null,{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n._)("div",d,[(0,n.Wm)(a.uT,{appear:"","enter-active-class":"animate__animated animate__slideInRight animate__slow","leave-active-class":"animate__animated animate__slideInLeft animate__slow"},{default:(0,n.w5)((()=>[null!=l.getListTasksInterrupted?((0,n.wg)(),(0,n.j4)(u,{key:0,class:"col col-lg-8",data:l.getListTasksInterrupted},null,8,["data"])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(c,{class:"col col-lg-8 open",data:l.getListTasksOpen},null,8,["data"]),(0,n.Wm)(a.uT,{appear:"","enter-active-class":"animate__animated animate__slideInLeft animate__slow","leave-active-class":"animate__animated animate__slideInRight animate__slow"},{default:(0,n.w5)((()=>[null!=l.getListTasksConcluded?((0,n.wg)(),(0,n.j4)(p,{key:0,data:l.getListTasksConcluded,class:"col col-lg-8"},null,8,["data"])):(0,n.kq)("",!0)])),_:1})])])])),_:1})}const u={class:"q-mt-xl"},c={class:"all-content"};function p(t,e){const s=(0,n.up)("q-toolbar-title"),a=(0,n.up)("q-toolbar"),i=(0,n.up)("q-header"),r=(0,n.up)("q-page-container"),o=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(o,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{class:"bg-grey-10"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"text-center"},{default:(0,n.w5)((()=>[(0,n.Uk)("Tasks list")])),_:1})])),_:1})])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n._)("div",c,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])])),_:3})])),_:3})}var k=s(7617),m=s(3931),T=s(7454),g=s(366),f=s(8623),v=s(6974),h=s(1410),_=s.n(h);const L={},C=(0,k.Z)(L,[["render",p],["__scopeId","data-v-69a59e68"]]);var w=C;_()(L,"components",{QLayout:m.Z,QHeader:T.Z,QToolbar:g.Z,QToolbarTitle:f.Z,QPageContainer:v.Z});const I={rounded:"",class:"shadow-5 q-size-sm text-center"},x={class:"row justify-center size"},b={class:"col-8 q-mb-sm hei"};function S(t,e,s,i,r,o){const d=(0,n.up)("screen-list"),l=(0,n.up)("q-btn"),u=(0,n.up)("q-input");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",I,[(0,n.Wm)(d,{screen:"open",title:"Open Status",data:s.data,onAddTasksStatus:t.addTasksStatus,onDeleteTasks:t.deleteTask},null,8,["data","onAddTasksStatus","onDeleteTasks"]),(0,n._)("div",x,[(0,n._)("div",b,[(0,n.Wm)(u,{modelValue:r.taskText,"onUpdate:modelValue":e[1]||(e[1]=t=>r.taskText=t),onKeyup:e[2]||(e[2]=(0,a.D2)((t=>o.add("tasks")),["enter"]))},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{round:"",flat:"",icon:"add",onClick:e[0]||(e[0]=t=>o.add("tasks"))})])),_:1},8,["modelValue"])])])])])}s(4719);var O={methods:{setTask(t,e){localStorage.setItem(`${t}`,JSON.stringify(e))},getTasks(t){return JSON.parse(localStorage.getItem(`${t}`))},addTasksStatus(t,e,s){for(let a=0;a<this.getTasks("id");a++)if(s[a].id==t){let t=this.getTasks(e.getTasks)?this.getTasks(e.getTasks):[];t.push({id:s[a].id,task:s[a].task,status:e.nextStatus}),s.splice(a,1),this.setTask(e.setTasks,s),this.setTask(e.setNexTasks,t);let n="concluded"===e.status?"setListTasksConcluded":"Interrupted"===e.nextStatus?"setListTasksInterrupted":"setListTasksOpen",i="concluded"===e.nextStatus?"setListTasksConcluded":"Interrupted"===e.nextStatus?"setListTasksInterrupted":"setListTasksOpen",r={getList:e.setTasks,setCommit:n,nextCommit:i,nextGetList:e.setNexTasks,status:e.status};this.$store.dispatch("setList",r);break}},deleteTask(t,e,s){for(let a=0;a<s.length;a++)if(t==s[a].id){s.splice(a,1),this.setTask(`${e.getList}`,s),this.$store.dispatch("setList",e);break}}}},$=s(3201);const y={rounded:"",class:"sonDiv"},D={class:"decoracao"};function Z(t,e,s,i,r,o){const d=(0,n.up)("list-component");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",y,[(0,n._)("div",{class:(0,$.C_)(`${o.colorBg(s.screen)} text-center`)},[(0,n._)("span",{class:(0,$.C_)(`${o.colorTitle(s.screen)}`)},(0,$.zw)(s.title),3)],2),(0,n._)("ul",D,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.data,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.id},[(0,n.Wm)(a.uT,{appear:"","enter-active-class":"animate__animated animate__slideInLeft animate__slow","leave-active-class":"animate__animated animate__slideInRight animate__slow"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{screen:`${s.screen}`,task:t,onAddTasksStatus:o.addTasksStatus,onDeleteTasks:o.deleteTask},null,8,["screen","task","onAddTasksStatus","onDeleteTasks"])])),_:2},1024)])))),128))])])])}var q=s.p+"img/delete.21c184fc.svg";const W={class:"row"};function j(t,e,s,a,i,r){const o=(0,n.up)("q-img");return(0,n.wg)(),(0,n.iD)("div",{class:(0,$.C_)(`row  center ${r.colorHouver()} `)},[(0,n._)("span",null,(0,$.zw)(s.task.task),1),(0,n._)("div",W,[(0,n._)("div",{class:(0,$.C_)(`Circle ${r.selectColor(s.task.status)}`),onClick:e[0]||(e[0]=t=>r.add(s.task.id,s.task.status))},null,2),"open"==s.screen?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,$.C_)(`Circle ${r.selectColor("")}`),onClick:e[1]||(e[1]=t=>r.add(s.task.id,""))},null,2)):(0,n.kq)("",!0),(0,n.Wm)(o,{class:"btnD",src:q,onClick:e[2]||(e[2]=t=>r.deleteStatus(s.task.id,s.task.status))})])],2)}var A={data(){return{exibir:!1}},props:["task","screen"],methods:{add(t,e){let s={nextStatus:""==e?"Interrupted":"open"==e?"concluded":"open",getTasks:"open"==e?"tasksConcluded":""==e?"tasksInterrupted":"tasks",setTasks:""==e||"open"==e?"tasks":"Interrupted"==e?"tasksInterrupted":"tasksConcluded",setNexTasks:"open"==e?"tasksConcluded":""==e?"tasksInterrupted":"tasks",status:""==e?"Interrupted":e};this.$emit("addTasksStatus",t,s)},deleteStatus(t,e){let s={getList:"concluded"==e?"tasksConcluded":"open"==e?"tasks":"tasksInterrupted",setCommit:"concluded"==e?"setListTasksConcluded":"open"==e?"setListTasksOpen":"setListTasksInterrupted"};this.$emit("deleteTasks",t,s)},selectColor(t,e){return"open"===t?!0===e?"fullGreen":"green":""===t||"Interrupted"===t?!0===e?"fullRed":""==t?"red":"blue":"concluded"===t?!0===e?"fullBlue":"blue":void 0},colorHouver(){return"open"===this.screen?"hoverBlue":"Interrupted"===this.screen?"hoverRed":"concluded"===this.screen?"hoverGreen":void 0}}},P=s(4711);const Q=(0,k.Z)(A,[["render",j],["__scopeId","data-v-45a444ca"]]);var z=Q;_()(A,"components",{QImg:P.Z});var H={components:{listComponent:z},props:["screen","data","title"],methods:{addTasksStatus(t,e){this.$emit("addTasksStatus",t,e,this.data)},deleteTask(t,e){this.$emit("deleteTasks",t,e,this.data)},colorBg(t){return"open"==t?"bg-light-blue-7":"concluded"==t?"bg-light-green-7":"Interrupted"==t?"bg-deep-orange-10":void 0},colorTitle(t){return"open"==t?"text-light-blue-1 text-body1":"concluded"==t?"text-light-blue-1  text-body1":"Interrupted"==t?"text-light-blue-1 text-body1":void 0}}};const N=(0,k.Z)(H,[["render",Z],["__scopeId","data-v-e37c42fc"]]);var B=N,G={data(){return{taskText:""}},components:{screenList:B},props:["data"],mixins:[O],methods:{add(t){let e=this.getTasks("tasks"),s=e||[];if(""!=this.taskText){let e=this.getTasks("id")?this.getTasks("id"):0;s.push({id:`${e}`,task:this.taskText,status:"open"}),this.taskText="",this.setTask(t,s),this.setTask("id",e+1),this.$store.commit("setListTasksOpen",s)}}}},R=s(1903),J=s(7332);const V=(0,k.Z)(G,[["render",S],["__scopeId","data-v-42593ffa"]]);var F=V;_()(G,"components",{QInput:R.Z,QBtn:J.Z});const K={class:"shadow-5 q-size-sm text-center"};function M(t,e,s,a,i,r){const o=(0,n.up)("screen-list");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",K,[(0,n.Wm)(o,{screen:"concluded",title:"Concluded Status",data:s.data,onAddTasksStatus:t.addTasksStatus,onDeleteTasks:t.deleteTask},null,8,["data","onAddTasksStatus","onDeleteTasks"])])])}var U={components:{screenList:B},mixins:[O],props:["data"]};const E=(0,k.Z)(U,[["render",M]]);var Y=E;const X={class:"shadow-5 q-size-sm text-center"};function tt(t,e,s,a,i,r){const o=(0,n.up)("screen-list");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",X,[(0,n.Wm)(o,{screen:"Interrupted",title:"Interrupted Status",data:s.data,onAddTasksStatus:t.addTasksStatus,onDeleteTasks:t.deleteTask},null,8,["data","onAddTasksStatus","onDeleteTasks"])])])}var et={components:{screenList:B},mixins:[O],props:["data"]};const st=(0,k.Z)(et,[["render",tt]]);var at=st,nt={components:{barComponent:w,openPage:F,concludedPage:Y,interruptedPage:at},computed:{getListTasksConcluded(){return this.$store.getters.getListTasksConcluded},getListTasksInterrupted(){return this.$store.getters.getListTasksInterrupted},getListTasksOpen(){return this.$store.getters.getlistTasksOpen}},created(){this.$store.dispatch("setList",{getList:"tasksConcluded",setCommit:"setListTasksConcluded"}),this.$store.dispatch("setList",{getList:"tasks",setCommit:"setListTasksOpen"}),this.$store.dispatch("setList",{getList:"tasksInterrupted",setCommit:"setListTasksInterrupted"})}};const it=(0,k.Z)(nt,[["render",l],["__scopeId","data-v-6f59cdb0"]]);var rt=it,ot={name:"LayoutDefault",components:{checkListPage:rt},setup(){return{leftDrawerOpen:(0,r.iH)(!1)}}};const dt=(0,k.Z)(ot,[["render",i]]);var lt=dt,ut=s(6957),ct=(0,ut.MT)({state:{listTasksConcluded:"",listTasksInterrupted:"",listTasksOpen:""},getters:{getListTasksConcluded(t){return t.listTasksConcluded},getListTasksInterrupted(t){return t.listTasksInterrupted},getlistTasksOpen(t){return t.listTasksOpen}},mutations:{setListTasksConcluded(t,e){t.listTasksConcluded=e},setListTasksInterrupted(t,e){t.listTasksInterrupted=e},setListTasksOpen(t,e){t.listTasksOpen=e}},actions:{setList(t,e){let s=JSON.parse(localStorage.getItem(`${e.getList}`));if(null!=s&&"object"===typeof s)if(s.length>0||e.status){if(t.commit(`${e.setCommit}`,s),e.nextCommit){let s="Interrupted"==e.status?"setListTasksInterrupted":"concluded"==e.status?"setListTasksConcluded":"";""!=s&&t.commit(`${s}`,null),e.getList=e.nextGetList,e.setCommit=e.nextCommit,e.nextCommit=e.nextGetList="",t.dispatch("setList",e)}}else t.commit(`${e.setCommit}`,null);else t.commit(`${e.setCommit}`,null)}},modules:{}}),pt=s(567),kt={config:{},plugins:{}};(0,a.ri)(lt).use(pt.Z,kt).use(ct).mount("#app")}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,i){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,d=0;d<a.length;d++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[d])}))?a.splice(d--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,r=a[0],o=a[1],d=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(d)var u=d(s)}for(e&&e(a);l<r.length;l++)i=r[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},a=self["webpackChunktasks_list"]=self["webpackChunktasks_list"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(4604)}));a=s.O(a)})();
//# sourceMappingURL=app.86523f26.js.map