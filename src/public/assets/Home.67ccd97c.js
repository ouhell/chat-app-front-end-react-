import{r as y,j as i,A as U,_ as L,a as p,N as z,b as H,c as q,d as R,u as P,e as G,f as K,R as Q,g as B}from"./index.0922ce06.js";import{c as Z,a as J,U as M,u as W,m as l,I as b,B as D,C as X,L as Y,b as ee,A as ie}from"./SvgProvider.1ebc5513.js";const te="_Signin_15fdv_1",ne="_SigninBox_15fdv_6",ae="_Header_15fdv_19",se="_InputBox_15fdv_25",oe="_InputHolder_15fdv_32",re="_Input_15fdv_25",le="_PrefixIcon_15fdv_48",ce="_Button_15fdv_57",de="_Suggestion_15fdv_70",ue="_SuggestionLink_15fdv_73",f={Signin:te,SigninBox:ne,Header:ae,InputBox:se,InputHolder:oe,Input:re,PrefixIcon:le,Button:ce,Suggestion:de,SuggestionLink:ue};var pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const ge=pe;var F=function(g,a){return i(U,{...L(L({},g),{},{ref:a,icon:ge})})};F.displayName="LockOutlined";const O=y.exports.forwardRef(F);var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"unlock",theme:"outlined"};const fe=me;var A=function(g,a){return i(U,{...L(L({},g),{},{ref:a,icon:fe})})};A.displayName="UnlockOutlined";const he=y.exports.forwardRef(A),ve=Z(J),T={visible:{opacity:1,y:0,transition:{staggerChildren:.2}},hidden:{opacity:0,y:15}},_e=()=>{const[r,g]=y.exports.useState({identifier:{value:"",type:"text",placeholder:"Username or Email",prefix:M},password:{value:"",type:"password",placeholder:"password",prefix:O}}),[a,_]=y.exports.useState(!1),x=W(),N=()=>{a||(_(!0),H.post("api/auth/login",{identifier:r.identifier.value.trim(),password:r.password.value.trim()}).then(c=>{x(q.login(c.data))}).catch(c=>{c&&c.response&&c.response.data&&c.response.data.servedError&&x(R.notify({type:"error",message:c.response.data.message})),console.log("signin error",c)}).finally(()=>{_(!1)}))};return i(l.section,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.1,opacity:0},className:f.Signin,children:p("div",{className:f.SigninBox,children:[i("header",{className:f.Header,children:"Login"}),i(l.div,{className:f.InputBox,variants:T,animate:"visible",initial:"hidden",children:Object.keys(r).map(c=>{let V=b;const k=r[c].prefix;return r[c].type==="password"&&(V=b.Password),i(l.div,{variants:T,className:f.InputHolder,children:i(V,{prefix:i(k,{className:f.PrefixIcon}),onKeyDown:S=>{S.key==="Enter"&&N()},value:r[c].value,onChange:S=>{g(w=>{const I={...w};return I[c]={...w[c]},I[c].value=S.target.value,I})},className:f.Input,placeholder:r[c].placeholder})})})}),i(D,{className:f.Button,type:"primary",onClick:N,loading:a,children:"login"}),p("footer",{className:f.Suggestion,children:[i("span",{className:f.SuggestionText,children:"Dont have an account? "}),i(z,{className:f.SuggestionLink,to:"/signup",children:"sign up"})]})]})})},xe="_Signin_wplb4_1",ye="_SigninBox_wplb4_6",we="_Header_wplb4_16",Ie="_InputBox_wplb4_22",Ne="_InputHolder_wplb4_29",Se="_InputError_wplb4_29",Ve="_Input_wplb4_22",He="_PrefixIcon_wplb4_50",Le="_Button_wplb4_59",be="_Suggestion_wplb4_73",ke="_SuggestionLink_wplb4_76",u={Signin:xe,SigninBox:ye,Header:we,InputBox:Ie,InputHolder:Ne,InputError:Se,Input:Ve,PrefixIcon:He,Button:Le,Suggestion:be,SuggestionLink:ke},C={visible:{opacity:1,y:0,transition:{staggerChildren:.1}},hidden:{opacity:0,y:15}},Be=()=>{const r=y.exports.useRef(0),g=y.exports.useRef(0),[a,_]=y.exports.useState({feilds:{init:function(){for(let t in this)typeof this[t]=="object"&&(this[t].parent=this);return delete this.init,this},username:{value:"",validation:t=>{const n=t.trim(),e={isValid:!0,errorMessage:""};if(n.length<4)return e.isValid=!1,e.errorMessage="username must be longer than 3 characters",m("username",e);if(n.length>11)return e.isValid=!1,e.errorMessage="username must be less than 11 characters",m("username",e);I("username",!0),r.current++;const o=r.current;H.get("/api/auth/usernameExist/"+n).then(s=>{s.data&&(e.isValid=!1,e.errorMessage="username already exists!")}).catch(s=>{e.isValid=!1,e.errorMessage="connection error"}).finally(()=>{r.current===o&&m("username",e)})},isValid:!1,errorMessage:"",isTouched:!1,isLoading:!1,input_config:{type:"text",prefix:i(M,{className:u.PrefixIcon}),placeHolder:"Username",maxLength:25}},personal_name:{value:"",validation:t=>{const n=t.trim(),e={isValid:!0,errorMessage:""};if(n.length<4)return e.isValid=!1,e.errorMessage="name must be longer than 3 characters",m("personal_name",e);m("personal_name",e)},isValid:!1,errorMessage:"",isTouched:!1,isLoading:!1,input_config:{type:"text",prefix:i(M,{className:u.PrefixIcon}),placeHolder:"Personal Name",maxLength:25}},email:{value:"",validation:t=>{const n=t.trim(),e={isValid:!0,errorMessage:""};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n))return e.isValid=!1,e.errorMessage="invalid email",m("email",e);I("email",!0),g.current++;const o=g.current;H.get("/api/auth/emailExist/"+n).then(s=>{s.data&&(e.isValid=!1,e.errorMessage="email already exists!")}).catch(s=>{e.isValid=!1,e.errorMessage="connection error"}).finally(()=>{g.current===o&&m("email",e)})},isValid:!1,errorMessage:"",isTouched:!1,isLoading:!1,input_config:{type:"text",prefix:i("span",{className:u.PrefixIcon,children:"@"}),placeHolder:"Email",maxLength:60}},password:{value:"",validation:function(t){const n=t.trim(),e={isValid:!0,errorMessage:""};if(this.parent.confrim_password.validation(this.parent.confrim_password.value),n.length<8||!/\d/.test(n)||!/[a-z]/.test(n)||!/[A-Z]/.test(n))return e.isValid=!1,e.errorMessage="minimum eight characters, at least one uppercase letter, one lowercase letter and one number",m("password",e);m("password",e)},isValid:!1,errorMessage:"",isTouched:!1,isLoading:!1,input_config:{type:"input.password",prefix:i(he,{className:u.PrefixIcon}),placeHolder:"Password",visibilityToggle:!0,maxLength:25}},confrim_password:{value:"",validation:function(t){const n=t.trim(),e={isValid:!0,errorMessage:""};if(n!==this.parent.password.value.trim())return e.isValid=!1,m("confrim_password",e);m("confrim_password",e)},isValid:!1,errorMessage:"",isTouched:!1,isLoading:!1,input_config:{type:"password",prefix:i(O,{className:u.PrefixIcon}),placeHolder:"Confirm Password",visibilityToggle:!1,maxLength:25}}}.init()}),[x,N]=y.exports.useState(!1),c=P();function V(){if(x)return;if(!k()){S();return}N(!0);const t={};for(let n in a.feilds)t[n]=a.feilds[n].value.trim();H.post("api/auth/signup",t).then(n=>{c("/signin")}).catch(n=>{console.log("signup error ",n)}).finally(()=>{N(!1)})}function k(){for(let t in a.feilds)if(!a.feilds[t].isValid)return!1;return!0}function S(){for(let t in a.feilds)a.feilds[t].isValid||a.feilds[t].validation(a.feilds[t].value)}function w(t){t.init=function(){for(let n in this)typeof this[n]=="object"&&(this[n].parent=this);delete this.init},t.init()}function I(t,n){_(e=>{const o={...e},s={...o.feilds},d={...s[t]};return d.isTouched=!0,d.isValid=!1,d.isLoading=n,s[t]=d,w(s),o.feilds=s,o})}function m(t,n){_(e=>{const o={...e},s={...o.feilds},d={...s[t]};return d.isTouched=!0,d.isValid=n.isValid,d.errorMessage=n.errorMessage,d.isLoading=!1,s[t]=d,w(s),o.feilds=s,o})}function E(t,n){_(e=>{const o={...e},s={...o.feilds},d={...s[t]};return d.isTouched=!0,d.value=n,s[t]=d,w(s),o.feilds=s,o}),a.feilds[t].validation(n)}return i(l.section,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.1,opacity:0},className:u.Signin,children:p("div",{className:u.SigninBox,children:[i("header",{className:u.Header,children:"Sign Up"}),i(l.div,{className:u.InputBox,variants:C,initial:"hidden",animate:"visible",children:Object.keys(a.feilds).map((t,n)=>{const e=a.feilds[t],o=e.input_config,s={onChange:j=>{E(t,j.target.value)},value:e.value,maxLength:o.maxLength,placeholder:o.placeHolder,className:u.Input,status:!e.isValid&&e.isTouched&&!e.isLoading?"error":"normal",prefix:o.prefix,suffix:e.isValid?i(X,{style:{color:"green"}}):e.isLoading?i(Y,{style:{color:"var(--primary-soft)"}}):null};let d=b;return o.type==="input.password"&&(d=b.Password,s.visibilityToggle=o.visibilityToggle),p(l.div,{className:u.InputHolder,variants:C,children:[e.errorMessage?i("div",{className:u.InputError,children:e.errorMessage}):null,i(d,{...s,type:o.type})]},t)})}),i(D,{className:u.Button,type:"primary",loading:x,onClick:V,children:"Sign Up"}),p("footer",{className:u.Suggestion,children:[p("span",{className:u.SuggestionText,children:["Already have an account?"," "]}),i(z,{className:u.SuggestionLink,to:"/signin",children:"login"})]})]})})},Me="/assets/chat-illustration.8889f01b.svg",Pe="_Main_fozk4_1",Te="_FirstHandler_fozk4_1",Ce="_Description_fozk4_6",$e="_Title_fozk4_16",Ue="_Content_fozk4_21",ze="_ActionHolder_fozk4_25",De="_PrimaryButton_fozk4_30",Fe="_SecondaryButton_fozk4_44",Oe="_Visualisation_fozk4_58",Ae="_ViewBox_fozk4_67",v={Main:Pe,FirstHandler:Te,Description:Ce,Title:$e,Content:Ue,ActionHolder:ze,PrimaryButton:De,SecondaryButton:Fe,Visualisation:Oe,ViewBox:Ae},Ee=()=>{const r=P();return i(l.div,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.1,opacity:0},className:v.Main,children:p(l.section,{className:v.FirstHandler,children:[p(l.div,{className:v.Description,children:[i(l.div,{className:v.Title,initial:{y:"-50%",opacity:.5},animate:{y:"-50%",opacity:.5,transition:{duration:0}},whileInView:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:20}},viewport:{once:!0},children:"The Ultimate Communication Platform"}),p(l.div,{className:v.Content,initial:{x:"30%",opacity:.5},animate:{x:"30%",opacity:.5,transition:{duration:0}},whileInView:{x:0,opacity:1,transition:{type:"spring",stiffness:50,damping:20}},viewport:{once:!0},children:[" ","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis voluptatum numquam quas a tempore expedita necessitatibus nihil unde amet enim exercitationem, autem, similique consequatur? Quaerat ut iusto voluptatem quis inventore vero voluptatibus sequi voluptatum provident, voluptate atque. Commodi in reiciendis architecto eos modi iusto cupiditate provident molestiae voluptatum saepe!"," "]}),p(l.div,{initial:{x:"-100%",opacity:.3},animate:{x:"-100%",opacity:.3,transition:{duration:0}},whileInView:{x:0,opacity:1,transition:{type:"spring",damping:20}},viewport:{once:!0},className:v.ActionHolder,children:[i(l.button,{className:v.PrimaryButton,onClick:()=>{r("/signup")},children:"Get Started"}),i(l.button,{className:v.SecondaryButton,onClick:()=>{r("/signin")},children:"Login"})]})]}),i(l.div,{className:v.Visualisation,initial:{x:"10%",y:"10%",opacity:.5},animate:{x:"10%",y:"10%",opacity:.5,transition:{duration:0}},whileInView:{x:0,y:0,opacity:1,transition:{type:"spring",stiffness:50,damping:20}},viewport:{once:!0},children:i("img",{src:Me})})]})})},je="_Home_ekgpi_1",qe="_Header_ekgpi_8",Re="_LogoHolder_ekgpi_20",Ge="_Logo_ekgpi_20",Ke="_LogoText_ekgpi_29",Qe="_NavigationHolder_ekgpi_35",Ze="_NavigationItem_ekgpi_42",Je="_active_ekgpi_54",We="_Underline_ekgpi_57",Xe="_Page_ekgpi_65",h={Home:je,Header:qe,LogoHolder:Re,Logo:Ge,LogoText:Ke,NavigationHolder:Qe,NavigationItem:Ze,active:Je,Underline:We,Page:Xe},Ye=[{name:"home",to:"/"},{name:"login",to:"/signin"},{name:"about",to:"/about"}],$={hide:{scale:.8,opacity:0},show:{scale:1,opacity:1,transition:{delay:.5}}},ni=()=>{const r=P(),g=G();return console.log("main path : ",g.pathname),p("div",{className:h.Home,children:[p(l.header,{className:h.Header,children:[p(l.div,{className:h.LogoHolder,children:[i(ee,{className:h.Logo,onClick:()=>{r("/")}}),i(ve.div,{className:h.LogoText,onClick:()=>{r("/")},children:"ShutApp"})]}),i(l.div,{className:h.NavigationHolder,variants:$,children:Ye.map((a,_)=>{const x=g.pathname===a.to;return p(l.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1,transition:{delay:.2*_}},variants:$,whileHover:{y:-2,scale:1.02},className:K({[h.NavigationItem]:!0,[h.active]:x}),onClick:()=>{r(a.to)},children:[a.name,x&&i(l.div,{layoutId:"navigationUnderline",className:h.Underline})]},a.name)})})]}),i("div",{className:h.Page,children:i(ie,{initial:!1,mode:"wait",children:p(Q,{location:g,children:[i(B,{path:"/signup",element:i(Be,{})}),i(B,{path:"/signin",element:i(_e,{})}),i(B,{path:"/*",element:i(Ee,{})})]},g.pathname)})})]})};export{ni as default};