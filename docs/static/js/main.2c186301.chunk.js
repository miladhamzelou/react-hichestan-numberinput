(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),u=n(1),o=n(2),i=n(4),c=n(3),s=n(5),p=n(8),h=(n(14),"FARSI"),m="LATIN",d=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleKeyDown=function(e){8===e.keyCode?(e.preventDefault(),n.updateState(n.deleteValue(e.target,-1))):46===e.keyCode?(e.preventDefault(),n.updateState(n.deleteValue(e.target,1))):e.keyCode>=48&&e.keyCode<=57?(e.preventDefault(),n.updateState(n.updateValue(e.target,(e.keyCode-48).toString(),n.state.numberFormat))):e.keyCode>=36&&e.keyCode<=40||229===e.keyCode||e.preventDefault()},n.handlePaste=function(e){e.preventDefault();var t=f((e.clipboardData||window.clipboardData).getData("text"));n.updateState(n.updateValue(e.target,t),n.state.numberFormat)},n.handleInput=function(e){if(n.state.valueToShow!==e.target.value){var t=f(e.target.value);n.updateState(n.recheckValue(e.target,t,n.state.numberFormat))}},n.mapValue=function(e,t){return t===h?b(e):t===m?v(e):b(e)},n.updateState=function(e){e&&n.setState(e,function(){n.fireOnChange()})},n.updateValue=function(e,t,a){var r=n.mapValue(t,a),l=e.value,u=e.selectionStart,o=e.selectionEnd;return l=l.substring(0,u)+r+l.substring(o),o=u+=r.length,{value:v(l),valueToShow:l,selectionStart:u,selectionEnd:o}},n.recheckValue=function(e,t,a){var r=n.mapValue(t,a),l=e.selectionStart,u=e.selectionEnd;return{value:v(r),valueToShow:r,selectionStart:l,selectionEnd:u}},n.deleteValue=function(e,t){var n=e.value,a=e.selectionStart,r=e.selectionEnd;if(a===r)if(t<0){if(0===a)return;n=n.substring(0,a+t)+n.substring(r),a+=t}else{if(r===n.length)return;n=n.substring(0,a)+n.substring(r+t)}else n=n.substring(0,a)+n.substring(r);return r=a,{value:v(n),valueToShow:n,selectionStart:a,selectionEnd:r}},n.fireOnChange=function(){n.props.onChange&&n.props.onChange({target:{name:n.props.name,value:n.state.value}})},n.handleChange=function(){},n.inputRef=r.a.createRef();var a=e.value||"",l=e.numberFormat||h,o=n.mapValue(a,l);return n.state={value:a,valueToShow:o,numberFormat:l,selectionStart:void 0,selectionEnd:void 0},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){(this.state.selectionStart||0===this.state.selectionStart)&&this.inputRef.current.setSelectionRange(this.state.selectionStart,this.state.selectionEnd)}},{key:"render",value:function(){var e=this.props,t=(e.value,e.onChange,e.onInput,e.onPast,e.onKeyDown,e.pattern,e.inputMode,e.type,e.ref,e.numberFormat,Object(p.a)(e,["value","onChange","onInput","onPast","onKeyDown","pattern","inputMode","type","ref","numberFormat"])),n=this.state.valueToShow;return r.a.createElement("input",Object.assign({ref:this.inputRef,type:"text",inputMode:"numeric",pattern:"[0-9]*",value:n,onKeyDown:this.handleKeyDown,onPaste:this.handlePaste,onChange:this.handleChange,onInput:this.handleInput},t))}}]),t}(a.Component);function b(e){return e?e.toString().replace(/[1234567890]/gi,function(e){return String.fromCharCode(e.charCodeAt(0)+1728)}):e}function v(e){return e?e.toString().replace(/[\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0]/gi,function(e){return String.fromCharCode(e.charCodeAt(0)-1728)}):e}function f(e){return e?e.toString().replace(/[^1234567890\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0]/gi,""):e}var g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",Number1:void 0,Number2:"123"},n.handleChange=function(e){var t={},a=e.target;t[a.name]=a.value,n.setState(t,function(){console.log("after",n.state)})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\u062e\u0631\u0648\u062c\u06cc \u0639\u062f\u062f \u0644\u0627\u062a\u06cc\u0646",r.a.createElement("br",null),r.a.createElement("input",{type:"text",style:{width:250},value:this.state.Number1,placeholder:"\u0627\u0632 \u0627\u06cc\u0646\u062c\u0627 \u06a9\u0644\u06cc\u062f \u062a\u0628 \u0631\u0627 \u0686\u0646\u062f \u0628\u0627\u0631 \u0628\u0632\u0646\u06cc\u062f"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\u0646\u0645\u0648\u0646\u0647 \u0641\u0627\u0631\u0633\u06cc",r.a.createElement("br",null),r.a.createElement(d,{name:"Number1",value:this.state.Number1,onChange:this.handleChange,placeholder:"type/paste a number"}))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",null,"\u0646\u0645\u0648\u0646\u0647 \u0644\u0627\u062a\u06cc\u0646",r.a.createElement("br",null),r.a.createElement(d,{name:"Number2",value:this.state.Number2,numberFormat:m,onChange:this.handleChange,placeholder:"type/paste a number"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\u062e\u0631\u0648\u062c\u06cc",r.a.createElement("br",null),r.a.createElement("input",{type:"text",style:{width:250},value:this.state.Number2,placeholder:"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u062e\u0631\u0648\u062c\u06cc \u0627\u0633\u062a"})))}}]),t}(a.Component);Object(l.render)(r.a.createElement(function(){return r.a.createElement("div",{style:{width:640,margin:"15px auto"}},r.a.createElement("h1",null,"Hello React"),r.a.createElement(g,null))},null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.2c186301.chunk.js.map