import{d as N,r as n,K as R,c as z,w as l,a,o as H,b as e,f as d,e as r}from"./index-DSDDmaAt.js";const O=d("span",{class:"text-large font-600 mr-3"}," 文章发布 ",-1),P={class:"mt-4 text-sm font-bold"},T={class:"mt-4"},j={class:"mt-4"},L=N({__name:"PublishPage",setup(D){const i=n(""),c=n(""),_=n(""),m=n(""),v=n(""),f=n(),V=n("<h2>推文内容</h2>"),w=n({UEDITOR_HOME_URL:"/UEditor/",serverUrl:"//ueditor.zhenghaochuan.com/cos"}),h=R(),g=()=>{h.push("/index")};return(I,t)=>{const u=a("el-input"),s=a("el-card"),U=a("vue-ueditor-wrap"),y=a("el-rate"),p=a("el-option"),x=a("el-select"),b=a("Upload"),B=a("el-icon"),k=a("el-button"),C=a("el-space"),E=a("el-page-header");return H(),z(s,{style:{margin:"10px"}},{default:l(()=>[e(E,{onBack:g},{content:l(()=>[O]),default:l(()=>[d("div",P,[e(C,{direction:"vertical",style:{width:"100%"}},{default:l(()=>[e(s,{style:{width:"97vw"}},{default:l(()=>[d("div",null,[e(u,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=o=>i.value=o),placeholder:"标题"},{prepend:l(()=>[r("标题")]),_:1},8,["modelValue"])])]),_:1}),e(s,{class:"ueditor",style:{width:"97vw"}},{default:l(()=>[e(U,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=o=>V.value=o),config:w.value,"editor-id":"editor-demo-01"},null,8,["modelValue","config"])]),_:1}),e(s,{style:{width:"97vw",display:"flex","justify-content":"center"}},{default:l(()=>[e(y,{modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=o=>f.value=o),"show-score":"","allow-half":"",size:"large","score-template":"为这篇文章定级"},null,8,["modelValue"])]),_:1}),e(s,{style:{width:"97vw"}},{default:l(()=>[d("div",null,[e(u,{modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=o=>c.value=o),placeholder:"网站地址或本机文件地址"},{prepend:l(()=>[e(x,{modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=o=>v.value=o),placeholder:"协议",style:{width:"115px"}},{default:l(()=>[e(p,{label:"Http://",value:"1"}),e(p,{label:"https://",value:"2"}),e(p,{label:"file://",value:"3"}),e(p,{label:"其他（自行输入）",value:"4"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),d("div",T,[e(u,{modelValue:m.value,"onUpdate:modelValue":t[5]||(t[5]=o=>m.value=o),class:"input-with-select"},{prepend:l(()=>[r("标签")]),_:1},8,["modelValue"])]),d("div",j,[e(u,{modelValue:_.value,"onUpdate:modelValue":t[6]||(t[6]=o=>_.value=o),placeholder:"输入备注信息"},{prepend:l(()=>[r("备注")]),_:1},8,["modelValue"])])]),_:1}),e(k,{style:{width:"97vw"},type:"primary",round:""},{default:l(()=>[r(" 发布"),e(B,{class:"el-icon--right"},{default:l(()=>[e(b)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})}}});export{L as default};
