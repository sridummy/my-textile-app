webpackJsonp([18],{351:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=l(0),i=l.n(r),c=l(4),s=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),p=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.toggle=l.toggle.bind(l),l.state={tooltipOpen:!1},l}return o(t,e),s(t,[{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){return i.a.createElement("span",null,i.a.createElement(c.e,{className:"mr-1",color:"secondary",id:"Tooltip-"+this.props.id},this.props.item.text),i.a.createElement(c._15,{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},"Tooltip Content!"))}}]),t}(i.a.Component),u=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.toggle=l.toggle.bind(l),l.state={tooltipOpen:[!1,!1],tooltips:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},l}return o(t,e),s(t,[{key:"toggle",value:function(e){var t=this.state.tooltipOpen.map(function(t,l){return l===e&&!t});this.setState({tooltipOpen:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(c.i,null,i.a.createElement(c.o,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Tooltips"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/tooltips/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(c.j,null,i.a.createElement("p",null,"Somewhere in here is a ",i.a.createElement("a",{href:"#",id:"TooltipExample"},"tooltip"),"."),i.a.createElement(c._15,{placement:"right",isOpen:this.state.tooltipOpen[0],target:"TooltipExample",toggle:function(){e.toggle(0)}},"Hello world!"))),i.a.createElement(c.i,null,i.a.createElement(c.o,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Tooltip"),i.a.createElement("small",null," disable autohide")),i.a.createElement(c.j,null,i.a.createElement("p",null,"Sometimes you need to allow users to select text within a ",i.a.createElement("a",{href:"#",id:"DisabledAutoHideExample"},"tooltip"),"."),i.a.createElement(c._15,{placement:"top",isOpen:this.state.tooltipOpen[1],autohide:!1,target:"DisabledAutoHideExample",toggle:function(){e.toggle(1)}},"Try to select this text!"))),i.a.createElement(c.i,null,i.a.createElement(c.o,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Tooltip"),i.a.createElement("small",null," list")),i.a.createElement(c.j,null,this.state.tooltips.map(function(e,t){return i.a.createElement(p,{key:t,item:e,id:t})}))),i.a.createElement(c.i,null,i.a.createElement(c.o,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Tooltip"),i.a.createElement("small",null," uncontrolled")),i.a.createElement(c.j,null,i.a.createElement("p",null,"Somewhere in here is a ",i.a.createElement("a",{href:"#",id:"UncontrolledTooltipExample"},"tooltip"),"."),i.a.createElement(c._17,{placement:"right",target:"UncontrolledTooltipExample"},"Hello world!"))))}}]),t}(r.Component);t.default=u}});
//# sourceMappingURL=18.f2203670.chunk.js.map