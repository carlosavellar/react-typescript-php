(this.webpackJsonpsistemaphpreact=this.webpackJsonpsistemaphpreact||[]).push([[7],{162:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}},224:function(e,t,a){"use strict";a.r(t);var r=a(61),n=a(16),s=a(54),i=a.n(s),c=a(60),l=a(24),u=a(32),o=a(46),m=a(45),p=a(0),h=a.n(p),d=a(221),b=a(111),f=a(113),v=a(53),E=a(207),g=a(162),x=a(62),j=function(){function e(){Object(l.a)(this,e),this.service=new x.a}return Object(u.a)(e,[{key:"getPerfil",value:function(){return this.service.getJson("/perfil")}},{key:"updatePerfil",value:function(e){return this.service.putJson("/perfil",e)}}]),e}(),w=a(18),O=a(39),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).service=new j,s.submitValues=Object(c.a)(i.a.mark((function e(){var t,a,r,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.state,a=t.nome,r=t.empresa,n=t.email,Object(g.a)(n)&&a.trim()&&r.trim()){e.next=4;break}return s.setState({inputError:!0}),e.abrupt("return");case 4:return e.prev=4,e.next=7,s.service.updatePerfil(s.state);case 7:c=e.sent,s.context.dispatch(Object(O.b)("success",c.Message)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),s.context.dispatch(Object(O.b)("danger",e.t0));case 14:case"end":return e.stop()}}),e,null,[[4,11]])}))),s.setField=function(e){return function(t){s.setState(Object(n.a)({},s.state,Object(r.a)({},e,t.target.value)))}},s.componentDidMount=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.service.getPerfil();case 3:t=e.sent,s.setState(Object(n.a)({},s.state,{},t.Data)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),s.state={nome:"",empresa:"",email:"",password:"",newpassword:"",inputError:!1},s}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nome,a=e.empresa,r=e.email,n=e.inputError;return h.a.createElement(b.a,{style:{padding:20,width:"100%"}},h.a.createElement(f.a,{container:!0,direction:"row",alignItems:"center"},h.a.createElement(v.a,{variant:"h6"},"Atualizar dados")),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{width:"100%"},onSubmit:this.submitValues},h.a.createElement(f.a,{container:!0,spacing:2},h.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},h.a.createElement(d.a,{error:n&&!t.trim(),required:!0,helperText:n&&!t.trim()&&"Nome \xe9 obrigat\xf3rio",fullWidth:!0,label:"Nome",value:this.state.nome,onChange:this.setField("nome")})),h.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},h.a.createElement(d.a,{fullWidth:!0,error:n&&!a.trim(),required:!0,helperText:n&&!a.trim()&&"Empresa \xe9 obrigat\xf3rio",label:"Empresa",value:this.state.empresa,onChange:this.setField("empresa")})),h.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},h.a.createElement(d.a,{fullWidth:!0,label:"Email",error:n&&!Object(g.a)(r),required:!0,helperText:n&&!Object(g.a)(r)&&"Insira um e-mail v\xe1lido",value:this.state.email,onChange:this.setField("email")})),h.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},h.a.createElement(d.a,{fullWidth:!0,label:"Nova Senha",value:this.state.password,onChange:this.setField("password")}))),h.a.createElement(E.a,{size:"large",style:{marginTop:20},variant:"contained",color:"primary",onClick:this.submitValues},"Atualizar")))}}]),a}(h.a.PureComponent);k.contextType=w.a;var y=k;t.default=y}}]);