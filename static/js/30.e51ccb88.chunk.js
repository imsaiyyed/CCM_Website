(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{2020:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(5),s=a(147),d=a(1477),l=e=>Array.from({length:e},(e,t)=>t).map(e=>({id:"item-".concat(e),content:"item ".concat(e)})),o=(e,t,a)=>{var r=Array.from(e),n=r.splice(t,1),i=Object(s.a)(n,1)[0];return r.splice(a,0,i),r},c=(e,t)=>Object(i.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:e?"lightgreen":"grey"},t),g=e=>({background:e?"lightblue":"lightgrey",padding:8,width:250});var p=class extends r.Component{constructor(e){super(e),this.onDragEnd=(e=>{if(e.destination){var t=o(this.state.items,e.source.index,e.destination.index);this.setState({items:t})}}),this.state={items:l(10)}}render(){return n.a.createElement(d.a,{onDragEnd:this.onDragEnd},n.a.createElement(d.c,{droppableId:"droppable"},(e,t)=>n.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:g(t.isDraggingOver)}),this.state.items.map((e,t)=>n.a.createElement(d.b,{key:e.id,draggableId:e.id,index:t},(t,a)=>n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:c(a.isDragging,t.draggableProps.style)}),e.content))),e.placeholder)))}},m=a(18),b=e=>Array.from({length:e},(e,t)=>t).map(e=>({id:"item-".concat(e),content:"item ".concat(e)})),h=(e,t,a)=>{var r=Array.from(e),n=r.splice(t,1),i=Object(s.a)(n,1)[0];return r.splice(a,0,i),r},E=(e,t)=>Object(i.a)({userSelect:"none",padding:16,margin:"0 ".concat(8,"px 0 0"),background:e?"lightgreen":"grey"},t),u=e=>({background:e?"lightblue":"lightgrey",display:"flex",padding:8,overflow:"auto"});var f=class extends r.Component{constructor(e){super(e),this.state={items:b(6)},this.onDragEnd=this.onDragEnd.bind(this)}onDragEnd(e){if(e.destination){var t=h(this.state.items,e.source.index,e.destination.index);this.setState({items:t})}}render(){return n.a.createElement(d.a,{onDragEnd:this.onDragEnd},n.a.createElement(d.c,{droppableId:"droppable",direction:"horizontal"},(e,t)=>n.a.createElement("div",Object.assign({ref:e.innerRef,style:u(t.isDraggingOver)},e.droppableProps),this.state.items.map((e,t)=>n.a.createElement(d.b,{key:e.id,draggableId:e.id,index:t},(t,a)=>n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:E(a.isDragging,t.draggableProps.style)}),e.content))),e.placeholder)))}},y=(e,t=0)=>Array.from({length:e},(e,t)=>t).map(e=>({id:"item-".concat(e+t),content:"item ".concat(e+t)})),v=(e,t,a)=>{var r=Array.from(e),n=r.splice(t,1),i=Object(s.a)(n,1)[0];return r.splice(a,0,i),r},D=(e,t,a,r)=>{var n=Array.from(e),i=Array.from(t),d=n.splice(a.index,1),l=Object(s.a)(d,1)[0];i.splice(r.index,0,l);var o={};return o[a.droppableId]=n,o[r.droppableId]=i,o},x=(e,t)=>Object(i.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:e?"lightgreen":"grey"},t),O=e=>({background:e?"lightblue":"lightgrey",padding:8,width:250});var I=class extends r.Component{constructor(...e){super(...e),this.state={items:y(10),selected:y(5,10)},this.id2List={droppable:"items",droppable2:"selected"},this.getList=(e=>this.state[this.id2List[e]]),this.onDragEnd=(e=>{var t=e.source,a=e.destination;if(a)if(t.droppableId===a.droppableId){var r=v(this.getList(t.droppableId),t.index,a.index),n={items:r};"droppable2"===t.droppableId&&(n={selected:r}),this.setState(n)}else{var i=D(this.getList(t.droppableId),this.getList(a.droppableId),t,a);this.setState({items:i.droppable,selected:i.droppable2})}})}render(){return n.a.createElement(d.a,{onDragEnd:this.onDragEnd},n.a.createElement("div",{className:"flex flex-space-around"},n.a.createElement(d.c,{droppableId:"droppable"},(e,t)=>n.a.createElement("div",{ref:e.innerRef,style:O(t.isDraggingOver)},this.state.items.map((e,t)=>n.a.createElement(d.b,{key:e.id,draggableId:e.id,index:t},(t,a)=>n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:x(a.isDragging,t.draggableProps.style)}),e.content))),e.placeholder)),n.a.createElement(d.c,{droppableId:"droppable2"},(e,t)=>n.a.createElement("div",{ref:e.innerRef,style:O(t.isDraggingOver)},this.state.selected.map((e,t)=>n.a.createElement(d.b,{key:e.id,draggableId:e.id,index:t},(t,a)=>n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:x(a.isDragging,t.draggableProps.style)}),e.content))),e.placeholder))))}};t.default=(()=>n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(m.a,{routeSegments:[{name:"others",path:"/drag-and-drop"},{name:"Drag and Drop"}]})),n.a.createElement(m.i,{title:"Simple List Drag and Drop"},n.a.createElement(p,null)),n.a.createElement("div",{className:"py-12"}),n.a.createElement(m.i,{title:"Simple Horizontal List Drag and Drop"},n.a.createElement(f,null)),n.a.createElement("div",{className:"py-12"}),n.a.createElement(m.i,{title:"Simple Two List Drag and Drop"},n.a.createElement(I,null))))}}]);
//# sourceMappingURL=30.e51ccb88.chunk.js.map