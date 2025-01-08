import{c as d,j as e}from"./index-C-omLiZr.js";import{g as U,d as P,s as v,P as Z,f,u as W,n as ee,o as $,p as oe,i as A,j as D,q as se,B as u,C as M,S as N,T as p,r as F,E as te,m as re,b as G,L as E}from"./App-EwTczY0u.js";import{C as ne}from"./Card-v-G96fXJ.js";import{M as ae}from"./Meta-DUYk44Ou.js";import"./index-lGXde6oY.js";import"./index.esm-DsEAXa2k.js";const O=d.createContext({});function ie(o){return P("MuiAccordion",o)}const k=U("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),ce=o=>{const{classes:s,square:r,expanded:t,disabled:n,disableGutters:i}=o;return D({root:["root",!r&&"rounded",t&&"expanded",n&&"disabled",!i&&"gutters"],heading:["heading"],region:["region"]},ie,s)},le=v(Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:r}=o;return[{[`& .${k.region}`]:s.region},s.root,!r.square&&s.rounded,!r.disableGutters&&s.gutters]}})(f(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${k.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${k.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}}),f(({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${k.expanded}`]:{margin:"16px 0"}}}]}))),de=v("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(o,s)=>s.heading})({all:"unset"}),ue=d.forwardRef(function(s,r){const t=W({props:s,name:"MuiAccordion"}),{children:n,className:i,defaultExpanded:a=!1,disabled:l=!1,disableGutters:h=!1,expanded:I,onChange:m,square:b=!1,slots:w={},slotProps:j={},TransitionComponent:S,TransitionProps:x,...g}=t,[c,B]=ee({controlled:I,default:a,name:"Accordion",state:"expanded"}),T=d.useCallback(X=>{B(!c),m&&m(X,!c)},[c,m,B]),[R,...V]=d.Children.toArray(n),L=d.useMemo(()=>({expanded:c,disabled:l,disableGutters:h,toggle:T}),[c,l,h,T]),C={...t,square:b,disabled:l,disableGutters:h,expanded:c},q=ce(C),Q={transition:S,...w},z={transition:x,...j},H={slots:Q,slotProps:z},[Y,_]=$("heading",{elementType:de,externalForwardedProps:H,className:q.heading,ownerState:C}),[J,K]=$("transition",{elementType:oe,externalForwardedProps:H,ownerState:C});return e.jsxs(le,{className:A(q.root,i),ref:r,ownerState:C,square:b,...g,children:[e.jsx(Y,{..._,children:e.jsx(O.Provider,{value:L,children:R})}),e.jsx(J,{in:c,timeout:"auto",...K,children:e.jsx("div",{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region",className:q.region,children:V})})]})});function pe(o){return P("MuiAccordionDetails",o)}U("MuiAccordionDetails",["root"]);const he=o=>{const{classes:s}=o;return D({root:["root"]},pe,s)},me=v("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(f(({theme:o})=>({padding:o.spacing(1,2,2)}))),xe=d.forwardRef(function(s,r){const t=W({props:s,name:"MuiAccordionDetails"}),{className:n,...i}=t,a=t,l=he(a);return e.jsx(me,{className:A(l.root,n),ref:r,ownerState:a,...i})});function ge(o){return P("MuiAccordionSummary",o)}const y=U("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),ye=o=>{const{classes:s,expanded:r,disabled:t,disableGutters:n}=o;return D({root:["root",r&&"expanded",t&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},ge,s)},fe=v(se,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(f(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${y.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${y.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${y.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${y.expanded}`]:{minHeight:64}}}]}})),ve=v("span",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(f(({theme:o})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{margin:"20px 0"}}}]}))),be=v("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(f(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{transform:"rotate(180deg)"}}))),we=d.forwardRef(function(s,r){const t=W({props:s,name:"MuiAccordionSummary"}),{children:n,className:i,expandIcon:a,focusVisibleClassName:l,onClick:h,...I}=t,{disabled:m=!1,disableGutters:b,expanded:w,toggle:j}=d.useContext(O),S=c=>{j&&j(c),h&&h(c)},x={...t,expanded:w,disabled:m,disableGutters:b},g=ye(x);return e.jsxs(fe,{focusRipple:!1,disableRipple:!0,disabled:m,"aria-expanded":w,className:A(g.root,i),focusVisibleClassName:A(g.focusVisible,l),onClick:S,ref:r,ownerState:x,...I,children:[e.jsx(ve,{className:g.content,ownerState:x,children:n}),a&&e.jsx(be,{className:g.expandIconWrapper,ownerState:x,children:a})]})});function je(){return e.jsx(u,{id:"faq-top",sx:o=>({width:"100%",backgroundRepeat:"no-repeat",backgroundImage:"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",...o.applyStyles("dark",{backgroundImage:"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)"})}),children:e.jsxs(M,{sx:{display:"flex",flexDirection:"column",alignItems:"center",pt:{xs:14,sm:20},pb:{xs:8,sm:3}},children:[e.jsx(N,{spacing:2,useFlexGap:!0,sx:{alignItems:"center",width:{xs:"100%",sm:"70%"}},children:e.jsx(p,{variant:"h1",sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},flexWrap:"wrap",alignItems:"center",fontSize:"clamp(3rem, 10vw, 3.5rem)",justifyContent:"center",textAlign:"center"},children:"Frequently Asked Questions (FAQ)"})}),e.jsx(N,{spacing:2,useFlexGap:!0,sx:{alignItems:"center",width:{xs:"100%",sm:"100%"},pt:5},children:e.jsxs(u,{sx:{display:"flex",width:"inherit",flexDirection:{xs:"column",md:"row"},gap:2,alignItems:{xs:"center"}},children:[e.jsx(u,{sx:{display:"flex",width:{xs:"100%",md:"50%"},height:"var(--items-image-height)",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",textAlign:"center"},children:e.jsx(p,{sx:{textAlign:"left",color:"text.secondary",width:"100%"},children:"At Care Beyond ICU, we understand that recovering from an ICU stay can bring many questions and uncertainties. To help guide you through the process, we've compiled answers to some of the most common questions we receive. If you don't see your question here, feel free to contact us—we're here to help!"})}),e.jsx(u,{sx:{display:"flex",width:{xs:"100%",md:"50%"},height:"var(--items-image-height)"},children:e.jsx(ne,{variant:"outlined",sx:{height:"100%",width:"100%",display:"flex",border:"none",backgroundColor:"inherit",justifyContent:"center"},children:e.jsx(u,{component:"img",src:"/faq_top.png",sx:{width:{xs:"100%"},height:{xs:"auto"},transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.05)"}},alt:"Future"})})})]})})]})})}const Ce=[{id:"panel1",question:"1. What services do you offer?",answer:e.jsxs(e.Fragment,{children:["We offer a range of virtual telehealth services designed to support ICU survivors and improve post-ICU recovery, including: ",e.jsx("br",{}),e.jsx("br",{}),"•	Virtual consultations with healthcare professionals (including intensivists)",e.jsx("br",{}),"•	Medication reconciliation to ensure the safe and effective use of medications",e.jsx("br",{}),"•	Post-ICU recovery support, including mental health resources and rehabilitation guidance",e.jsx("br",{}),"•	Assistance with creating advanced directives and healthcare planning",e.jsx("br",{}),"•	Collaboration with primary care physicians for continued care",e.jsx("br",{}),"•	Educational resources for patients and caregivers",e.jsx("br",{})]})},{id:"panel2",question:"2. How does your virtual consultation process work?",answer:e.jsxs(e.Fragment,{children:["Our virtual consultations are designed to be convenient and flexible. Here's how it works:",e.jsx("br",{}),e.jsx("br",{}),"1.	Schedule a Consultation: Book a virtual appointment at a time that works for you through our online booking system.",e.jsx("br",{}),"2.	Meet with a Healthcare Professional: During the consultation, you'll meet with one of our healthcare team members (including intensivists or other specialists) via video call.",e.jsx("br",{}),"3.	Receive Personalized Advice: We'll assess your recovery progress, answer any questions, and provide guidance on next steps.",e.jsx("br",{}),"4.	Follow-Up Care: Based on your needs, we'll arrange follow-up appointments to ensure you stay on track with your recovery.",e.jsx("br",{}),e.jsx("br",{}),"Our goal is to make your care as easy and accessible as possible from the comfort of your home.",e.jsx("br",{})]})},{id:"panel3",question:"3. How can I book an appointment?",answer:e.jsxs(e.Fragment,{children:["You can book an appointment by visiting our ",e.jsx(F,{href:"/contact",children:"Booking Page"}),". Simply choose a time that works for you and complete the required information. Once your appointment is confirmed, you'll receive a link to join the virtual consultation."]})},{id:"panel4",question:"4. Is my consultation covered by insurance?",answer:e.jsx(e.Fragment,{children:"We work with various insurance providers, and many of our services are eligible for reimbursement. We recommend checking with your insurance company to confirm coverage for virtual consultations, medication reconciliation, and post-ICU support services. Our team can assist you with any paperwork or documentation needed for insurance claims."})},{id:"panel5",question:"5. What is medication reconciliation, and why is it important?",answer:e.jsx(e.Fragment,{children:"Medication reconciliation is the process of reviewing all the medications you are taking to ensure there are no discrepancies or potential interactions. This step is crucial, especially after an ICU stay, as medication errors or confusion can lead to complications and readmissions. Our team works with you to review your medications and make sure you're taking them correctly for the best possible recovery outcomes."})},{id:"panel6",question:"6. How do you assist with advanced directives and healthcare planning?",answer:e.jsxs(e.Fragment,{children:["Advanced directives are legal documents that outline your healthcare preferences in the event you are unable to communicate them. We provide guidance on completing these documents, including:",e.jsx("br",{}),e.jsx("br",{}),"•	Living wills",e.jsx("br",{}),"•	Healthcare power of attorney",e.jsx("br",{}),"•	Do-not-resuscitate (DNR) orders",e.jsx("br",{}),e.jsx("br",{}),"Our team will help you understand your options, explain each document's purpose, and guide you in making decisions that reflect your values and wishes."]})},{id:"panel7",question:"7. How can I support my loved one who is recovering after an ICU stay?",answer:e.jsxs(e.Fragment,{children:["Supporting a loved one after an ICU stay can be challenging. Here are some tips to help:",e.jsx("br",{}),e.jsx("br",{}),"•	Be patient: Recovery takes time, and both physical and mental challenges are common after an ICU stay.",e.jsx("br",{}),"•	Stay informed: Use our educational resources to understand their recovery process and what to expect.",e.jsx("br",{}),"•	Encourage communication: Let your loved one know that it's okay to ask for help, whether they need emotional support or practical assistance.",e.jsx("br",{}),"•	Access our caregiver resources: We offer guides specifically for family members and caregivers to provide the best possible care.",e.jsx("br",{}),e.jsx("br",{}),"For more detailed resources, visit our ",e.jsx(F,{href:"/contact",children:"Family and Caregiver Support Page"}),"."]})},{id:"panel8",question:"8. What should I do if I have a question during my recovery?",answer:e.jsxs(e.Fragment,{children:["If you have a question or concern at any point during your recovery, don't hesitate to reach out to us. You can schedule a virtual consultation, contact our team directly through our ",e.jsx(F,{href:"/contact",children:"Contact Page"}),", or access our educational resources for more information. We're here to help you every step of the way."]})},{id:"panel9",question:"9. Can I access your services if I live outside the United States?",answer:e.jsx(e.Fragment,{children:"Currently, we are focusing our services on patients within the United States. However, if you live outside the U.S. and are interested in receiving care, please contact us to discuss potential options. We are always looking for ways to expand our reach and support more individuals in their recovery."})},{id:"panel10",question:"10. What should I expect during my first consultation?",answer:e.jsxs(e.Fragment,{children:["During your first consultation, you'll meet with one of our healthcare professionals who will:",e.jsx("br",{}),e.jsx("br",{}),"•	Review your health history and recovery progress",e.jsx("br",{}),"•	Discuss any concerns or questions you have about your health or recovery process",e.jsx("br",{}),"•	Create a personalized plan to guide your recovery",e.jsx("br",{}),"•	Provide recommendations for next steps, including follow-up appointments and additional resources",e.jsx("br",{}),e.jsx("br",{}),"Our goal is to ensure you feel confident, informed, and supported during your recovery journey."]})},{id:"panel11",question:"11. How do I know if your services are right for me?",answer:e.jsx(e.Fragment,{children:"Our services are designed to support anyone who has recently been discharged from the ICU and is seeking comprehensive, virtual care. If you are managing multiple medications, facing challenges in your recovery, or need help navigating the post-ICU care process, our team is here to assist you. If you're unsure, we encourage you to schedule an initial consultation so we can assess your specific needs."})}],ke=({id:o,question:s,answer:r,expanded:t,handleChange:n})=>e.jsxs(ue,{expanded:t,onChange:n(o),children:[e.jsx(we,{expandIcon:e.jsx(te,{}),"aria-controls":`${o}-content`,id:`${o}-header`,children:e.jsx(p,{component:"span",variant:"subtitle2",children:s})}),e.jsx(xe,{children:e.jsx(p,{variant:"body2",gutterBottom:!0,sx:{maxWidth:{sm:"100%",md:"90%"}},children:r})})]});function Ae(){const[o,s]=d.useState([]),r=t=>(n,i)=>{s(a=>i?[...a,t]:a.filter(l=>l!==t))};return e.jsxs(M,{id:"faq",sx:{pt:{xs:4,sm:12},pb:{xs:8,sm:16},position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:{xs:3,sm:6}},children:[e.jsx(u,{sx:{width:"100%"},children:Ce.map(t=>e.jsx(ke,{id:t.id,question:t.question,answer:t.answer,expanded:o.includes(t.id),handleChange:r},t.id))}),e.jsxs(p,{sx:{textAlign:"left",color:"text.secondary",width:"100%"},children:["This ",e.jsx("b",{children:"FAQ Page"})," is designed to answer common questions while providing a reassuring, helpful tone to your visitors."]})]})}const Ie="/banner.png";function Se(){return e.jsx(u,{sx:{display:"flex",backgroundImage:`url(${Ie})`,backgroundSize:"cover",color:"#fff",height:300},children:e.jsx(M,{id:"faq-banner",sx:{pt:{xs:4,sm:12},pb:{xs:8,sm:16},position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",WebkitAlignItems:"flex-start",gap:{xs:3,sm:6}},children:e.jsxs(re.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:1,delay:.1,ease:[.215,.61,.355,1]},children:[e.jsx(p,{component:"h2",variant:"h3",gutterBottom:!0,sx:{color:"text.primary",fontWeight:700,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",textAlign:"center"},children:"Still Have Questions?"}),e.jsx(p,{sx:{textAlign:"left",color:"text.secondary",width:"70%"},children:"If you have a question that isn't answered here, don't hesitate to reach out to us. Our team is always ready to help and guide you through your recovery process."}),e.jsx(G,{variant:"contained",color:"primary",size:"small",component:E,to:"/contact",sx:{flexShrink:0,mr:2,mt:2},children:"Book a Consultation Now"}),e.jsx(G,{variant:"contained",color:"primary",size:"small",component:E,to:"/contact",sx:{flexShrink:0,mt:2},children:"Contact Us"})]})})})}function De(){return e.jsxs(e.Fragment,{children:[e.jsx(ae,{title:"FAQ"}),e.jsx(je,{}),e.jsxs("div",{children:[e.jsx(Ae,{}),e.jsx(Se,{})]})]})}export{De as default};
