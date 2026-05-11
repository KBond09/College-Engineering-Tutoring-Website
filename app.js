<!-- =====================================================
     JAVASCRIPT
     This is where all the interactivity lives.
     Each section is labeled so you can find it easily.
===================================================== -->
<script>
// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════
const DC={
  civil:{label:'🏗️ Civil',     color:'var(--civil)',tc:'#1a1000',tag:'t-civil'},
  mech: {label:'⚙️ Mechanical',color:'var(--mech)', tc:'#001a28',tag:'t-mech'},
  elec: {label:'⚡ Electrical',color:'var(--elec)', tc:'#001a05',tag:'t-elec'},
  comp: {label:'💻 Computer',  color:'var(--comp)', tc:'#1a0028',tag:'t-comp'},
};
const AVC=['#f5a623','#4fc3f7','#66bb6a','#ce93d8'];
const DAYS=['Mon May 5','Tue May 6','Wed May 7','Thu May 8','Fri May 9','Sat May 10'];
const TIMES=['9:00 AM','10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM'];
 
let circles=[
  {id:1,name:'Statics & Structures',    disc:'civil',desc:'Free body diagrams, truss analysis, shear/moment diagrams.',members:['AJ','BK','CL'],max:5,status:'open'},
  {id:2,name:'Thermodynamics Deep Dive',disc:'mech', desc:'Four laws, heat engines, refrigeration cycles, entropy.',   members:['DM','EN','FO','GP'],max:5,status:'live'},
  {id:3,name:'Circuits 101',            disc:'elec', desc:"Ohm's law, Kirchhoff's laws, AC/DC analysis, op-amps.",     members:['HQ','IR'],max:4,status:'open'},
  {id:4,name:'Data Structures & Algo',  disc:'comp', desc:'Arrays, trees, sorting algorithms, Big-O complexity.',      members:['JS','KT','LU','MV','NW'],max:5,status:'full'},
  {id:5,name:'Fluid Mechanics Group',   disc:'civil',desc:'Bernoulli, pipe flow, Reynolds number, open channel flow.',  members:['OX','PY'],max:5,status:'open'},
  {id:6,name:'Digital Logic Design',    disc:'elec', desc:'Boolean algebra, flip-flops, FSMs, VHDL basics.',           members:['TC','UD','VE'],max:5,status:'live'},
];
let tutors=[
  {id:1,name:'Maya Chen',   init:'MC',disc:'civil',tags:['Structural Analysis','FEA','Statics'],  bio:'3rd-year civil PhD. Patient, methodical — loves making complex topics click.',rating:4.9,sessions:112,avail:true},
  {id:2,name:'Darius Webb', init:'DW',disc:'mech', tags:['Thermodynamics','Fluid Mechanics','CAD'],bio:'Mechanical engineer with 2 years industry. Makes thermo finally make sense.',rating:4.7,sessions:74, avail:false},
  {id:3,name:'Amara Osei',  init:'AO',disc:'elec', tags:['Circuits','Signals','Power Systems'],   bio:'EE senior. Great talent for circuit intuition and AC analysis.',rating:5.0,sessions:89, avail:true},
  {id:4,name:'Leo Nakamura',init:'LN',disc:'comp', tags:['Algorithms','Python','Systems'],        bio:'CS grad student. Teaches by building — live coding every session.',rating:4.8,sessions:56, avail:true},
  {id:5,name:'Rin Tanaka',  init:'RT',disc:'mech', tags:['Dynamics','Vibrations','Controls'],     bio:'Robotics MS student. If it moves or vibrates, she can explain it.',rating:4.9,sessions:61, avail:true},
];
let bookings=[
  {id:1,tutorName:'Maya Chen', disc:'civil',day:'Wed May 7', time:'10:00 AM',topic:'FEA mesh refinement',past:false},
  {id:2,tutorName:'Amara Osei',disc:'elec', day:'Thu May 8', time:'2:00 PM', topic:'AC phasor analysis', past:false},
  {id:3,tutorName:'Darius Webb',disc:'mech',day:'Mon Apr 28',time:'11:00 AM',topic:'Rankine cycle calc',  past:true},
];
let notes=[
  {id:1,title:'Statics — Truss Analysis',disc:'civil',date:'Apr 29, 2026',tutor:'Maya Chen',
    concepts:['Method of Joints: isolate each joint, apply ΣFx=0, ΣFy=0','Method of Sections: cut through truss to find up to 3 unknowns','Zero-force members: 2 non-collinear members and no external load'],
    actions:['Complete truss problem set (pp. 112–120)','Watch Hibbeler lecture on method of sections'],
    flashcards:[{q:'What does ΣFx=0 mean at a joint?',a:'Sum of all horizontal forces = 0 (equilibrium)'},{q:'Zero-force member condition?',a:'2 non-collinear members, no external load at that joint'}],
    mcq:[{q:'In Method of Joints, which equations apply at each joint?',options:['ΣM=0 and ΣFx=0','ΣFx=0 and ΣFy=0','All three equilibrium equations','Only ΣFy=0'],ans:1,exp:"At a pin joint we apply two force equations only — moment equations aren't needed."}],
    sa:[{q:'Explain the difference between Method of Joints and Method of Sections. When would you prefer one over the other? Give a concrete example. (Minimum 250 words)'}]},
];
let tasks=[
  {id:1,title:'Review statics chapter 5',subject:'Civil Engineering',due:'2026-05-07',time:'2 hours',priority:'high',done:false},
  {id:2,title:'Complete circuits problem set',subject:'Electrical Engineering',due:'2026-05-09',time:'1 hour',priority:'med',done:false},
  {id:3,title:'Watch thermodynamics lecture',subject:'Mechanical Engineering',due:'2026-05-05',time:'1 hour',priority:'low',done:true},
];
const PROBLEMS=[
  {id:1,disc:'civil',tag:'Statics',diff:'Beginner',title:'Method of Joints — simple truss',
   summary:'Find forces in members AB and BC of a triangular truss.',
   statement:'A simple triangular truss has pin supports at A and a roller at C. A 10 kN load acts downward at joint B. Span AC = 4 m; joint B is at height 3 m above the midpoint. Find axial forces in AB and BC and state tension or compression.',
   steps:[
    {label:'Find support reactions',exp:'Apply ΣFx=0, ΣFy=0, and ΣM=0 to the whole truss. The symmetric load splits equally.',formula:'ΣFy = 0  →  R_A + R_C = 10 kN\nSymmetry: R_A = R_C = 5 kN',hint1:'Draw the whole truss as a free body first.',hint2:'Identify all external forces before cutting any members.',hint3:'A symmetric load on a symmetric structure always splits the reactions equally — use this to save time.'},
    {label:'Calculate member angles',exp:"Half-span = 2 m, height = 3 m. Find θ from trigonometry.",formula:'θ = arctan(3/2) ≈ 56.3°\nsin θ ≈ 0.832,  cos θ ≈ 0.555',hint1:'Use the geometry of the triangle to find the angle.',hint2:'Label the angle from the horizontal axis to the member.',hint3:'arctan(opposite/adjacent) = arctan(height/half-span) = arctan(3/2) ≈ 56.3°.'},
    {label:'Apply Method of Joints at A',exp:'Isolate joint A. Assume unknown member forces are in tension. Apply ΣFy=0.',formula:'ΣFy = 0: F_AB · sin θ = 5 kN\nF_AB = 5 / 0.832 ≈ 6.01 kN (COMPRESSION)',hint1:'Isolate joint A and draw all forces acting on it.',hint2:'Assume members in tension (pulling away from joint) and see if the sign confirms it.',hint3:'ΣFy: The vertical reaction is 5 kN upward. F_AB has a vertical component F_AB×sinθ. Set them equal.'},
    {label:'Apply Method of Joints at B and finalize',exp:'At joint B, by symmetry F_BC = F_AB. Verify ΣFy = 0.',formula:'F_BC = F_AB ≈ 6.01 kN (COMPRESSION)\nF_AB = F_BC ≈ 6.01 kN  →  COMPRESSION',hint1:'At joint B the 10 kN load acts downward.',hint2:'The two members at B push upward with their vertical components.',hint3:'2 × F_AB × sin θ = 10 kN → F_AB = 10/(2×0.832) ≈ 6.01 kN. Both members are in compression.'},
   ]},
  {id:2,disc:'mech',tag:'Thermodynamics',diff:'Intermediate',title:'Ideal Rankine cycle efficiency',
   summary:'Calculate thermal efficiency of a steam power cycle.',
   statement:'Steam enters turbine at 4 MPa, 400°C (h₁=3214 kJ/kg) and exhausts at 10 kPa (h₂=2115 kJ/kg, h_f=192 kJ/kg). Find pump work, turbine work, heat input, and thermal efficiency.',
   steps:[
    {label:'Identify the four cycle states',exp:'1→2: Turbine. 2→3: Condenser. 3→4: Pump. 4→1: Boiler.',formula:'1→2: Isentropic expansion (turbine)\n2→3: Heat rejection (condenser)\n3→4: Isentropic compression (pump)\n4→1: Heat addition (boiler)',hint1:'Draw the T-s diagram first.',hint2:'Each process is either isothermal, isentropic, or constant-pressure.',hint3:'In an ideal Rankine cycle, turbine and pump are isentropic; boiler and condenser are constant-pressure.'},
    {label:'Calculate pump work',exp:'Use v_f ≈ 0.00101 m³/kg at 10 kPa.',formula:'w_pump = v_f × (P_high − P_low)\nw_pump = 0.00101 × 3990 = 4.03 kJ/kg',hint1:'Pump work is much smaller than turbine work.',hint2:'v_f is the specific volume of saturated liquid at condenser pressure.',hint3:'w_pump = v_f(P_high − P_low) = 0.00101 × (4000−10) = 4.03 kJ/kg.'},
    {label:'Calculate turbine work and heat input',exp:'w_turbine = h₁ − h₂. h₄ = h_f + w_pump.',formula:'w_turbine = 3214 − 2115 = 1099 kJ/kg\nh₄ = 192 + 4.03 ≈ 196 kJ/kg\nq_in = 3214 − 196 = 3018 kJ/kg',hint1:'Turbine work is the enthalpy drop across the turbine.',hint2:'h₄ = h₃ + w_pump (pump raises enthalpy of liquid).',hint3:'w_turbine = h₁−h₂ = 1099 kJ/kg. q_in = h₁−h₄ = 3018 kJ/kg.'},
    {label:'Calculate thermal efficiency',exp:'η = net work / heat input.',formula:'η = (w_turbine − w_pump) / q_in\nη = (1099 − 4.03) / 3018 ≈ 36.3%',hint1:'Net work = turbine work minus pump work.',hint2:'Divide net work by heat input to get efficiency.',hint3:'η = (1099−4.03)/3018 = 1094.97/3018 ≈ 0.363 = 36.3%.'},
   ]},
  {id:3,disc:'elec',tag:'Circuits',diff:'Beginner',title:'Mesh analysis — two-loop circuit',
   summary:"Find mesh currents using Kirchhoff's Voltage Law.",
   statement:'Loop 1: 12 V source, 4 Ω, shared 2 Ω. Loop 2: shared 2 Ω, 6 Ω, 8 V source. Solve for I₁ and I₂.',
   steps:[
    {label:'Assign mesh currents and write KVL for loop 1',exp:'Clockwise I₁ in loop 1. Sum voltage drops.',formula:'12 − 4I₁ − 2(I₁ − I₂) = 0\n→  6I₁ − 2I₂ = 12',hint1:'Assign all mesh currents in the same direction (clockwise).',hint2:'Go around the loop and sum all voltage rises and drops.',hint3:'On the shared resistor use (I₁−I₂). Expanding: 12−4I₁−2I₁+2I₂=0 → 6I₁−2I₂=12.'},
    {label:'Write KVL for loop 2',exp:'Clockwise I₂ in loop 2. The 8V source opposes assumed direction.',formula:'−8 − 6I₂ − 2(I₂ − I₁) = 0\n→  −2I₁ + 8I₂ = −8',hint1:'Trace loop 2 clockwise — note the polarity of the 8V source.',hint2:'The shared resistor now carries (I₂−I₁).',hint3:'−8−6I₂−2I₂+2I₁=0 → 2I₁−8I₂=8 → −2I₁+8I₂=−8.'},
    {label:'Solve simultaneous equations',exp:'Use elimination — multiply equation 1 by 4 and add.',formula:'24I₁ − 8I₂ = 48\n−2I₁ + 8I₂ = −8\n─────────────────\n22I₁ = 40  →  I₁ ≈ 1.82 A\nI₂ = (6×1.818−12)/2 ≈ −0.55 A',hint1:'Pick one variable to eliminate.',hint2:"Multiply equation 1 by 4 so the I₂ terms cancel when added.",hint3:'I₁ = 40/22 ≈ 1.818 A. Substitute back: I₂=(6×1.818−12)/2=(10.91−12)/2=−0.545 A.'},
    {label:'Interpret results and verify',exp:'I₂ < 0 means it flows counter-clockwise. Verify by substituting back.',formula:'Loop 1: 12 − 4(1.818) − 2(1.818+0.545) ≈ 0 ✓\nI₁ ≈ 1.82 A (CW), I₂ ≈ 0.55 A (CCW)',hint1:'A negative current just means the direction is opposite to assumed.',hint2:'Always substitute back into both equations to verify.',hint3:'Loop 1 check: 12−7.27−2×2.36=12−7.27−4.73≈0 ✓'},
   ]},
  {id:4,disc:'comp',tag:'Algorithms',diff:'Beginner',title:'Binary search — full trace',
   summary:'Trace binary search step by step on a sorted array.',
   statement:'Array: [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]. Search for target = 23. Trace every step showing low, high, mid. Analyze time complexity.',
   steps:[
    {label:'Initialize and compute first mid',exp:'low=0, high=10. mid=floor((0+10)/2)=5. arr[5]=23 — target found!',formula:'low=0 (arr[0]=2),  high=10 (arr[10]=91)\nmid = ⌊(0+10)/2⌋ = 5\narr[5] = 23  →  TARGET FOUND 🎯',hint1:'Set low=0 and high=length−1.',hint2:'mid = floor((low+high)/2).',hint3:'We found the target immediately because 23 is exactly in the middle of this array.'},
    {label:'What if target > arr[mid]? (right half)',exp:'If target were 56: arr[5]=23 < 56 → move low up to 6.',formula:'low = mid + 1 = 6\nnew mid = ⌊(6+10)/2⌋ = 8\narr[8] = 56 ✓',hint1:'If target is bigger, it must be in the right half.',hint2:'Move low to mid+1 to discard the left half.',hint3:'new mid = floor((6+10)/2)=8. arr[8]=56. Found!'},
    {label:'What if target < arr[mid]? (left half)',exp:'If target were 8: arr[5]=23 > 8 → move high down to 4.',formula:'high = mid − 1 = 4\nnew mid = ⌊(0+4)/2⌋ = 2\narr[2] = 8 ✓',hint1:'If target is smaller, it must be in the left half.',hint2:'Move high to mid−1 to discard the right half.',hint3:'new mid = floor((0+4)/2)=2. arr[2]=8. Found!'},
    {label:'Analyze time complexity',exp:'Each step halves the search space. Maximum steps = ⌈log₂(n)⌉.',formula:'Worst case: O(log n)\nFor n=11: log₂(11) ≈ 3.46  →  4 comparisons max\nvs linear search: up to 11 comparisons',hint1:'How many times can you halve n before reaching 1?',hint2:'That number is log₂(n).',hint3:'2^k = n → k = log₂(n). For n=11: k≈3.46, round up to 4 comparisons worst case.'},
   ]},
];
 
// State
let cFilter='all',tFilter='all',solverDisc='all',activeNote=null,schedId=null,nxtId=50;
let flipped={},mcAns={},saText={},aiHist={};
let activeProblem=null,revealedSteps=0,openSteps={},stepAI={},stepHintLevel={};
// Daily.co call objects
let dailyCalls={circle:null,private:null};
let micState={circle:true,private:true},camState={circle:true,private:true};
// Timer state
let timerInterval=null,timerSeconds=25*60,timerTotal=25*60,timerRunning=false,timerMode='pomodoro',timerSessionsToday=0;
const TIMER_MODES={pomodoro:25*60,short:5*60,long:15*60};
 
// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links button, .nav-drawer button').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const pages=['home','hub','notebook','solver'];
  const idx=pages.indexOf(id);
  if(idx>=0){
    document.querySelectorAll('.nav-links button')[idx]?.classList.add('active');
    document.querySelectorAll('.nav-drawer button')[idx]?.classList.add('active');
  }
  if(id==='hub')     {renderCircles();renderTutors();renderBookings()}
  if(id==='notebook'){renderNotebook();renderPlanner()}
  if(id==='solver')  renderSolverPicker();
}
function toggleDrawer(){
  const h=document.getElementById('hamburger'),d=document.getElementById('nav-drawer');
  h.classList.toggle('open');d.classList.toggle('open');
}
function closeDrawer(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('nav-drawer').classList.remove('open');
}
function switchHub(btn,panel){
  document.querySelectorAll('.hub-tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.hub-panel').forEach(p=>p.classList.remove('on'));
  if(btn)btn.classList.add('on');
  document.getElementById(panel).classList.add('on');
  if(panel==='hub-bookings')renderBookings();
}
function switchNbTab(btn,panel){
  document.querySelectorAll('.nb-tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.nb-tabpanel').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');document.getElementById(panel).classList.add('on');
  if(panel==='nbt-planner'){renderPlanner();checkPlannerFeedback();}
}
 
// ═══════════════════════════════════════════
// VIDEO — Daily.co
// ═══════════════════════════════════════════
async function joinRoom(type, roomName, displayTitle){
  // Daily.co free tier: create a room URL then embed
  const wrap=document.getElementById('daily-'+type+'-wrap');
  wrap.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#7a90ad;font-size:.88rem;flex-direction:column;gap:10px"><div style="font-size:1.5rem">📹</div>Connecting to '+displayTitle+'…<div style="font-size:.75rem;color:#4a6278">Camera & mic controls below</div></div>';
 
  // Destroy previous call if any
  if(dailyCalls[type]){try{await dailyCalls[type].destroy()}catch(e){}}
 
  try{
    const call=window.DailyIframe.createFrame(wrap,{
      iframeStyle:{width:'100%',height:'100%',border:'none'},
      showLeaveButton:false,showFullscreenButton:true,showLocalVideo:true,showParticipantsBar:true,
    });
    dailyCalls[type]=call;
    await call.join({url:`https://thinkforge.daily.co/${roomName}`,startVideoOff:false,startAudioOff:false});
    micState[type]=true;camState[type]=true;
    updateCamUI(type);
    document.getElementById('cam-status-'+type).textContent='Connected · '+displayTitle;
  }catch(e){
    // Daily.co rooms require signup for real use; show a functional placeholder UI
    wrap.innerHTML=`<div style="width:100%;height:100%;background:#0a0f1a;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;color:#7a90ad">
      <div style="font-size:2.5rem">📹</div>
      <div style="font-size:.9rem;font-weight:600;color:#e2eaf5">${displayTitle}</div>
      <div style="font-size:.78rem;text-align:center;max-width:300px;line-height:1.6">To enable live video, sign up free at <a href="https://daily.co" style="color:#4fc3f7" target="_blank">daily.co</a> and add your domain. Camera & mic controls are ready below.</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
        <div style="background:#1b2a3f;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:8px 16px;font-size:.75rem;color:#66bb6a">🎤 Mic ready</div>
        <div style="background:#1b2a3f;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:8px 16px;font-size:.75rem;color:#4fc3f7">📹 Camera ready</div>
      </div>
    </div>`;
    document.getElementById('cam-status-'+type).textContent='Room: '+roomName;
    // Create a stub call object so controls still work visually
    dailyCalls[type]={destroy:()=>{},setLocalAudio:(v)=>{},setLocalVideo:(v)=>{},startScreenShare:()=>{},stopScreenShare:()=>{}};
    micState[type]=true;camState[type]=true;updateCamUI(type);
  }
}
function updateCamUI(type){
  const mb=document.getElementById('mic-btn-'+type),cb=document.getElementById('cam-btn-'+type);
  if(mb){mb.textContent=micState[type]?'🎤 Mic On':'🔇 Mic Off';mb.className='cam-btn'+(micState[type]?'':' off')}
  if(cb){cb.textContent=camState[type]?'📹 Cam On':'📷 Cam Off';cb.className='cam-btn'+(camState[type]?'':' off')}
}
function toggleMic(type){
  micState[type]=!micState[type];
  if(dailyCalls[type])dailyCalls[type].setLocalAudio(micState[type]);
  updateCamUI(type);
  toast(micState[type]?'🎤 Mic turned on':'🔇 Mic muted');
}
function toggleCam(type){
  camState[type]=!camState[type];
  if(dailyCalls[type])dailyCalls[type].setLocalVideo(camState[type]);
  updateCamUI(type);
  toast(camState[type]?'📹 Camera on':'📷 Camera off');
}
function toggleScreen(type){
  if(!dailyCalls[type])return;
  try{dailyCalls[type].startScreenShare()}catch(e){toast('Screen share: grant permission in your browser')}
}
function leaveRoom(type){
  if(dailyCalls[type])dailyCalls[type].destroy();dailyCalls[type]=null;
  document.getElementById(type==='circle'?'circle-video':'private-video').classList.remove('open');
  const wrap=document.getElementById('daily-'+type+'-wrap');if(wrap)wrap.innerHTML='';
  toast('You left the session.');
}
 
// ═══════════════════════════════════════════
// CIRCLES
// ═══════════════════════════════════════════
function setCircleFilter(el,f){
  cFilter=f;
  document.querySelectorAll('[data-cf]').forEach(b=>b.classList.remove('on'));
  if(el)el.classList.add('on');
  renderCircles();
}
function renderCircles(){
  const q=(document.getElementById('circle-search')?.value||'').toLowerCase();
  const grid=document.getElementById('circles-grid');
  const list=circles.filter(c=>(cFilter==='all'||c.disc===cFilter)&&(!q||c.name.toLowerCase().includes(q)||c.desc.toLowerCase().includes(q)));
  if(!list.length){grid.innerHTML='<div class="empty" style="grid-column:1/-1"><div class="em">🔍</div><p>No circles match. Create one!</p></div>';return}
  const sm={live:['t-live','🟢 Live'],open:['t-open','Open'],full:['t-full','Full']};
  grid.innerHTML=list.map(c=>{
    const[tc,sl]=sm[c.status]||['t-open','Open'];const d=DC[c.disc];const sp=c.max-c.members.length;
    const avs=c.members.slice(0,4).map((m,i)=>`<div class="av" style="background:${AVC[i%4]}">${m}</div>`).join('')+(c.members.length>4?`<div class="av" style="background:var(--surf1);color:var(--muted)">+${c.members.length-4}</div>`:'');
    const jb=c.status==='full'?`<button class="btn btn-ghost btn-sm" disabled style="opacity:.4">Full</button>`:`<button class="btn btn-sm" style="background:${d.color};color:${d.tc}" onclick="joinCircle(${c.id})">Join${c.status==='live'?' Now':' →'}</button>`;
    return`<div class="circle-card"><div class="cc-top"><div><span class="tag ${tc}">${sl}</span> <span class="tag ${d.tag}">${d.label}</span><h3>${c.name}</h3></div>${jb}</div><p class="cc-p">${c.desc}</p><div class="cc-foot"><div class="avs">${avs}</div><span>${c.members.length}/${c.max} · ${sp} spot${sp!==1?'s':''} left</span></div></div>`;
  }).join('');
}
function joinCircle(id){
  const c=circles.find(x=>x.id===id);if(!c||c.status==='full')return;
  const rm='circle-'+c.name.toLowerCase().replace(/[^a-z0-9]/g,'-').replace(/-+/g,'-');
  document.getElementById('cv-title').textContent=c.name;
  document.getElementById('circle-video').classList.add('open');
  document.getElementById('circle-video').scrollIntoView({behavior:'smooth',block:'start'});
  joinRoom('circle',rm,c.name);
  if(c.status!=='live'){c.status='live';renderCircles();}
  toast('📹 Joining '+c.name+'...');
}
function openCreateModal(){document.getElementById('create-modal').classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}
function createCircle(){
  const name=document.getElementById('cm-name').value.trim();
  const disc=document.getElementById('cm-disc').value;
  const desc=document.getElementById('cm-desc').value.trim();
  const max=parseInt(document.getElementById('cm-max').value);
  if(!name){toast('Please enter a circle name.');return}
  circles.unshift({id:nxtId++,name,disc,desc:desc||'New study circle.',members:['You'],max,status:'open'});
  closeModal('create-modal');
  document.getElementById('cm-name').value='';document.getElementById('cm-desc').value='';
  renderCircles();toast('✅ Circle created!');
}
 
// ═══════════════════════════════════════════
// TUTORS
// ═══════════════════════════════════════════
function setTutorFilter(el,f){
  tFilter=f;document.querySelectorAll('[data-tf]').forEach(b=>b.classList.remove('on'));
  if(el)el.classList.add('on');renderTutors();
}
function renderTutors(){
  const q=(document.getElementById('tutor-search')?.value||'').toLowerCase();
  const grid=document.getElementById('tutors-grid');
  const list=tutors.filter(t=>(tFilter==='all'||t.disc===tFilter)&&(!q||t.name.toLowerCase().includes(q)||t.tags.join(' ').toLowerCase().includes(q)));
  if(!list.length){grid.innerHTML='<div class="empty" style="grid-column:1/-1"><div class="em">🔍</div><p>No tutors found.</p></div>';return}
  grid.innerHTML=list.map(t=>{
    const d=DC[t.disc];
    return`<div class="tutor-card"><div class="tc-top"><div class="tc-av" style="background:${d.color};color:${d.tc}">${t.init}</div><div><div class="tc-name">${t.name}</div><div class="tc-sub">${d.label}</div><div style="font-size:.74rem;font-weight:600;color:${d.color}">⭐ ${t.rating} · ${t.sessions} sessions</div></div></div><p class="tc-bio">${t.bio}</p><div style="margin-bottom:.75rem">${t.tags.map(tg=>`<span class="tag ${d.tag}">${tg}</span>`).join('')}${t.avail?'<span class="tag t-live">Available</span>':'<span class="tag t-full">Offline</span>'}</div><div class="tc-acts">${t.avail?`<button class="btn btn-sm" style="background:${d.color};color:${d.tc}" onclick="joinPrivate(${t.id})">Join Now</button>`:''}<button class="btn btn-ghost btn-sm" onclick="openSched(${t.id})">📅 Schedule</button></div></div>`;
  }).join('');
}
function joinPrivate(id){
  const t=tutors.find(x=>x.id===id);if(!t)return;
  const rm='private-'+t.name.toLowerCase().replace(/[^a-z0-9]/g,'-').replace(/-+/g,'-');
  document.getElementById('pv-title').textContent='Session with '+t.name;
  document.getElementById('private-video').classList.add('open');
  document.getElementById('private-video').scrollIntoView({behavior:'smooth',block:'start'});
  joinRoom('private',rm,'Session with '+t.name);
  toast('📹 Connecting to '+t.name+'...');
}
 
// ═══════════════════════════════════════════
// BOOKINGS
// ═══════════════════════════════════════════
function openSched(tid){
  schedId=tid;const t=tutors.find(x=>x.id===tid);
  document.getElementById('sched-title').textContent='Book a session with '+t.name;
  document.getElementById('day-slots').innerHTML=DAYS.map(d=>`<div class="slot" onclick="pickSlot(this)">${d}</div>`).join('');
  document.getElementById('time-slots').innerHTML=TIMES.map(t=>`<div class="slot" onclick="pickSlot(this)">${t}</div>`).join('');
  document.getElementById('sched-modal').classList.add('open');
}
function pickSlot(el){el.closest('.slot-grid').querySelectorAll('.slot').forEach(s=>s.classList.remove('sel'));el.classList.add('sel')}
function confirmBooking(){
  const de=document.querySelector('#day-slots .sel'),te=document.querySelector('#time-slots .sel');
  if(!de||!te){toast('Please select a day AND a time.');return}
  const t=tutors.find(x=>x.id===schedId);
  const topic=document.getElementById('sched-notes').value.trim()||'General session';
  bookings.push({id:nxtId++,tutorName:t.name,disc:t.disc,day:de.textContent,time:te.textContent,topic,past:false});
  closeModal('sched-modal');document.getElementById('sched-notes').value='';
  toast(`✅ Booked! ${t.name} on ${de.textContent} at ${te.textContent}`);
}
function cancelBooking(id){bookings=bookings.filter(b=>b.id!==id);renderBookings();toast('Booking cancelled.')}
function renderBookings(){
  const bkCard=(b,past)=>{
    const d=DC[b.disc]||{};
    return`<div class="booking-card"><div class="bk-dot" style="background:${d.color||'var(--civil)'}"></div><div class="bk-info"><div class="bk-title">${b.tutorName}</div><div class="bk-meta">${d.label||''} · ${b.topic}</div></div><div><div class="bk-time" style="color:${d.color||'var(--civil)'}">${b.time}</div><div style="font-size:.71rem;color:var(--muted);text-align:right">${b.day}</div>${!past?`<button class="btn btn-danger btn-sm" style="margin-top:6px" onclick="cancelBooking(${b.id})">Cancel</button>`:''}</div></div>`;
  };
  const up=bookings.filter(b=>!b.past),pa=bookings.filter(b=>b.past);
  document.getElementById('bk-upcoming').innerHTML=up.length?up.map(b=>bkCard(b,false)).join(''):'<div class="empty"><div class="em">📅</div><p>No upcoming sessions.<br>Go to Private Tutoring to book one!</p></div>';
  document.getElementById('bk-past').innerHTML=pa.length?pa.map(b=>bkCard(b,true)).join(''):'<div class="empty"><div class="em">📋</div><p>No past sessions yet.</p></div>';
}
 
// ═══════════════════════════════════════════
// NOTEBOOK
// ═══════════════════════════════════════════
function openAddNote(){document.getElementById('add-note-form').style.display='block';window.scrollTo({top:0,behavior:'smooth'})}
function closeAddNote(){document.getElementById('add-note-form').style.display='none'}
function saveNote(){
  const title=document.getElementById('nf-title').value.trim();
  const disc=document.getElementById('nf-disc').value;
  const concepts=document.getElementById('nf-concepts').value.trim().split('\n').filter(Boolean);
  const actions=document.getElementById('nf-actions').value.trim().split('\n').filter(Boolean);
  if(!title){toast('Please enter a title.');return}
  const today=new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  const flashcards=concepts.slice(0,3).map(c=>({q:'Explain: '+c.substring(0,45)+(c.length>45?'...':''),a:c}));
  const mcq=concepts.length>=2?[{q:'Which is a key concept from this session?',options:[concepts[0],'Ignore all system constraints',concepts[1]||'None of the above','All forces can be ignored'],ans:0,exp:'The first concept listed is a direct takeaway from this session.'}]:[];
  notes.unshift({id:nxtId++,title,disc,date:today,tutor:null,concepts,actions,flashcards,mcq,sa:[{q:'In at least 250 words, explain the key concepts from this session and connect them to real-world engineering. Give a concrete example.'}]});
  closeAddNote();['nf-title','nf-concepts','nf-actions'].forEach(id=>document.getElementById(id).value='');
  activeNote=notes[0].id;renderNotebook();toast('✅ Note saved! Quiz and flashcards auto-generated.');
}
function renderNotebook(){
  const list=document.getElementById('note-list'),cnt=document.getElementById('note-count');
  cnt.textContent=notes.length+(notes.length===1?' note':' notes');
  list.innerHTML=notes.length?notes.map(n=>`<li class="${activeNote===n.id?'on':''}" onclick="openNote(${n.id})"><div class="nt">${n.title}</div><div class="nm">${(DC[n.disc]||{}).label||''} · ${n.date}</div></li>`).join(''):'<li style="padding:1rem;text-align:center;color:var(--muted);font-size:.78rem">No notes yet</li>';
  if(activeNote){const n=notes.find(x=>x.id===activeNote);if(n)renderNoteMain(n);}
}
function openNote(id){activeNote=id;renderNotebook()}
function deleteNote(id){
  notes=notes.filter(x=>x.id!==id);activeNote=null;
  document.getElementById('nb-main').innerHTML='<div class="empty"><div class="em">📒</div><p>Select a note to get started.</p></div>';
  renderNotebook();toast('Note deleted.');
}
function renderNoteMain(n){
  const d=DC[n.disc]||{};
  document.getElementById('nb-main').innerHTML=`
    <div class="nb-note-head">
      <div><h2>${n.title}</h2><p>${n.date}${n.tutor?' · with '+n.tutor:''} · <span class="tag ${d.tag||''}">${d.label||''}</span></p></div>
      <button class="btn btn-ghost btn-sm" onclick="deleteNote(${n.id})">Delete</button>
    </div>
    <div class="note-tabs">
      <button class="note-tab on" onclick="switchTab(this,'sum-${n.id}')">📋 Summary</button>
      <button class="note-tab"    onclick="switchTab(this,'quiz-${n.id}')">🧠 Quiz</button>
      <button class="note-tab"    onclick="switchTab(this,'ai-${n.id}')">🤖 AI Practice</button>
    </div>
    <div class="note-panel on" id="sum-${n.id}">
      <span class="overline">Key Concepts</span>
      <ul class="concept-list">${n.concepts.map(c=>`<li>${c}</li>`).join('')}</ul>
      <span class="overline">Action Items</span>
      <ul class="concept-list">${n.actions.map(a=>`<li>${a}</li>`).join('')}</ul>
      ${n.flashcards.length?`<span class="overline" style="margin-top:1rem">Flashcards — tap to flip</span><div class="fc-grid">${n.flashcards.map((f,i)=>{const fl=(flipped[n.id]||{})[i];return`<div class="fc ${fl?'flipped':''}" onclick="flipCard(${n.id},${i})">${fl?f.a:f.q}</div>`}).join('')}</div>`:''}
    </div>
    <div class="note-panel" id="quiz-${n.id}">${buildQuiz(n)}</div>
    <div class="note-panel" id="ai-${n.id}">${buildAI(n)}</div>`;
}
function switchTab(btn,pid){
  btn.closest('.nb-main').querySelectorAll('.note-tab').forEach(t=>t.classList.remove('on'));
  btn.closest('.nb-main').querySelectorAll('.note-panel').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');document.getElementById(pid).classList.add('on');
}
function flipCard(nid,i){
  if(!flipped[nid])flipped[nid]={};flipped[nid][i]=!flipped[nid][i];
  const n=notes.find(x=>x.id===nid);renderNoteMain(n);
  switchTab(document.querySelector('.note-tab'),'sum-'+nid);
}
function buildQuiz(n){
  if(!n.mcq?.length&&!n.sa?.length)return'<div class="empty"><div class="em">📝</div><p>No quiz for this note yet.</p></div>';
  const ans=mcAns[n.id]||{};
  const correct=Object.entries(ans).filter(([i,v])=>v===n.mcq[i]?.ans).length;
  const score=n.mcq.length?`<div class="quiz-score">Score: <strong>${correct}/${n.mcq.length}</strong> correct</div>`:'';
  const L=['A','B','C','D'];
  const mcHtml=(n.mcq||[]).map((q,qi)=>{
    const ch=ans[qi];
    return`<div class="mc-q"><div class="mc-q-text">Q${qi+1}. ${q.q}</div><div class="mc-opts">${q.options.map((opt,oi)=>{const sh=ch!==undefined;const cls=sh&&oi===q.ans?'correct':sh&&oi===ch?'wrong':'';return`<div class="mc-opt ${cls}" onclick="pickMC(${n.id},${qi},${oi})"><div class="mc-letter">${L[oi]}</div>${opt}</div>`}).join('')}</div>${ch!==undefined?`<div class="mc-fb ${ch===q.ans?'ok':'bad'}">${ch===q.ans?'✅ Correct! ':'❌ Incorrect. '}${q.exp}</div>`:''}</div>`;
  }).join('');
  const saHtml=(n.sa||[]).map((sa,si)=>{
    const key=`${n.id}-${si}`,saved=(saText[n.id]||{})[si]||'',wc=countWords(saved);
    const pct=Math.min(wc/250,1),col=wc>=250?'var(--elec)':wc>150?'var(--civil)':'var(--danger)';
    return`<div class="sa-q"><div class="sa-q-text">${sa.q}</div><textarea class="sa-ta" id="sa-${key}" placeholder="Write your answer here (minimum 250 words)..." oninput="updateWC('${key}',${n.id},${si})">${saved}</textarea><div class="wc-bg"><div class="wc-fill" id="wcf-${key}" style="width:${Math.round(pct*100)}%;background:${col}"></div></div><div class="wc-lbl ${wc>=250?'ok':'warn'}" id="wcl-${key}"><span>${wc} / 250 words minimum</span><span>${wc>=250?'✅ Done!':(250-wc)+' to go'}</span></div>${wc>=250?`<button class="btn btn-green btn-sm" style="margin-top:.6rem" onclick="toast('✅ Short answer submitted!')">Submit</button>`:''}</div>`;
  }).join('');
  return`${score}${mcHtml}<hr>${saHtml}`;
}
function pickMC(nid,qi,oi){
  if(!mcAns[nid])mcAns[nid]={};if(mcAns[nid][qi]!==undefined)return;
  mcAns[nid][qi]=oi;const n=notes.find(x=>x.id===nid);renderNoteMain(n);
  switchTab(document.querySelectorAll('.note-tab')[1],'quiz-'+nid);
}
function countWords(t){return t.trim()===''?0:t.trim().split(/\s+/).length}
function updateWC(key,nid,si){
  const ta=document.getElementById('sa-'+key);if(!ta)return;
  if(!saText[nid])saText[nid]={};saText[nid][si]=ta.value;
  const wc=countWords(ta.value),pct=Math.min(wc/250,1);
  const col=wc>=250?'var(--elec)':wc>150?'var(--civil)':'var(--danger)';
  const f=document.getElementById('wcf-'+key),l=document.getElementById('wcl-'+key);
  if(f){f.style.width=Math.round(pct*100)+'%';f.style.background=col}
  if(l){l.className='wc-lbl '+(wc>=250?'ok':'warn');l.innerHTML=`<span>${wc} / 250 words minimum</span><span>${wc>=250?'✅ Done!':(250-wc)+' to go'}</span>`}
}
function buildAI(n){
  const h=aiHist[n.id]||[];
  const bubs=h.map(m=>`<div class="ai-bub ${m.role==='assistant'?'ai':'user'}">${m.content.replace(/\n/g,'<br>')}</div>`).join('');
  return`<div><div class="ai-ctrl"><button class="btn btn-blue btn-sm" onclick="startAI(${n.id})">${h.length?'🔄 New Question':'🤖 Start AI Practice'}</button>${h.length?`<button class="btn btn-ghost btn-sm" onclick="clearAI(${n.id})">Clear</button>`:''}<span style="font-size:.74rem;color:var(--muted)">AI quizzes you on your note topics</span></div><div class="ai-thread" id="ait-${n.id}">${h.length?bubs:'<div class="ai-bub ai">Click "Start AI Practice" — I\'ll quiz you on your session topics! 🎓</div>'}</div>${h.length?`<div class="ai-row"><input class="ai-in" type="text" id="aiin-${n.id}" placeholder="Type your answer..." onkeydown="if(event.key==='Enter')sendAI(${n.id})"><button class="btn btn-blue btn-sm" onclick="sendAI(${n.id})">Send ↗</button></div>`:''}</div>`;
}
async function callClaude(system,messages){
  const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system,messages})});
  const d=await r.json();return d.content?.find(b=>b.type==='text')?.text||'No response.';
}
async function startAI(nid){
  const n=notes.find(x=>x.id===nid);if(!n)return;
  aiHist[nid]=[];renderNoteMain(n);switchTab(document.querySelectorAll('.note-tab')[2],'ai-'+nid);
  document.getElementById('ait-'+nid).innerHTML='<div class="ai-bub ai load">🤖 Generating a question...</div>';
  try{
    const msg=await callClaude(`You are an engineering tutor. Note: "${n.title}". Concepts: ${n.concepts.join('; ')}. Ask ONE focused question. 2–3 sentences. Relate to real-world engineering.`,[{role:'user',content:'Ask me a question.'}]);
    aiHist[nid]=[{role:'user',content:'Ask me a question.'},{role:'assistant',content:msg}];
    renderNoteMain(n);switchTab(document.querySelectorAll('.note-tab')[2],'ai-'+nid);scrollAI(nid);
  }catch{document.getElementById('ait-'+nid).innerHTML='<div class="ai-bub ai">⚠️ Could not connect. Check your connection.</div>';}
}
async function sendAI(nid){
  const input=document.getElementById('aiin-'+nid);const text=input?.value.trim();if(!text)return;
  const n=notes.find(x=>x.id===nid);aiHist[nid].push({role:'user',content:text});input.value='';
  renderNoteMain(n);switchTab(document.querySelectorAll('.note-tab')[2],'ai-'+nid);
  const thread=document.getElementById('ait-'+nid);
  thread.insertAdjacentHTML('beforeend','<div class="ai-bub ai load">🤖 Thinking...</div>');scrollAI(nid);
  try{
    const msg=await callClaude(`Engineering tutor reviewing "${n.title}". Concepts: ${n.concepts.join('; ')}. Give brief feedback then a deeper follow-up. 3–4 sentences.`,aiHist[nid]);
    aiHist[nid].push({role:'assistant',content:msg});
    renderNoteMain(n);switchTab(document.querySelectorAll('.note-tab')[2],'ai-'+nid);scrollAI(nid);
  }catch{thread.lastChild.textContent='⚠️ Network error. Try again.';}
}
function clearAI(nid){aiHist[nid]=[];const n=notes.find(x=>x.id===nid);renderNoteMain(n);switchTab(document.querySelectorAll('.note-tab')[2],'ai-'+nid);}
function scrollAI(nid){const el=document.getElementById('ait-'+nid);if(el)setTimeout(()=>{el.scrollTop=el.scrollHeight},50)}
 
// ═══════════════════════════════════════════
// STUDY PLANNER
// ═══════════════════════════════════════════
function renderPlanner(){
  const cal=document.getElementById('planner-cal');
  const today=new Date();
  const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  // Show next 7 days
  let html='';
  for(let i=0;i<7;i++){
    const d=new Date(today);d.setDate(today.getDate()+i);
    const ds=d.toISOString().split('T')[0];
    const isToday=i===0;
    const dayTasks=tasks.filter(t=>t.due===ds&&!t.done);
    const dots=dayTasks.slice(0,3).map(t=>`<div class="plan-task-dot" style="background:${t.priority==='high'?'var(--danger)':t.priority==='med'?'var(--warn)':'var(--elec)'}"></div>`).join('');
    html+=`<div class="plan-day ${isToday?'today':''} ${dayTasks.length?'has-task':''}"><div class="plan-day-label">${days[d.getDay()]}</div><div class="plan-day-num">${d.getDate()}</div>${dots}</div>`;
  }
  cal.innerHTML=html;
 
  // Tasks list
  const tl=document.getElementById('tasks-list');
  if(!tasks.length){tl.innerHTML='<div class="empty"><div class="em">✅</div><p>No tasks yet. Add one above!</p></div>';return}
  const sorted=[...tasks].sort((a,b)=>{
    const po={high:0,med:1,low:2};
    if(a.done!==b.done)return a.done?1:-1;
    return po[a.priority]-po[b.priority];
  });
  tl.innerHTML=sorted.map(t=>{
    const overdue=!t.done&&t.due&&new Date(t.due)<new Date(new Date().toDateString());
    return`<div class="plan-task"><div class="task-check ${t.done?'done':''}" onclick="toggleTask(${t.id})">${t.done?'✓':''}</div><div class="task-info"><div class="task-title ${t.done?'done':''}">${t.title}${overdue?` <span style="color:var(--danger);font-size:.7rem">(overdue)</span>`:''}</div><div class="task-meta">${t.subject} · ${t.time} · Due ${t.due||'—'}</div></div><span class="task-priority tp-${t.priority}">${t.priority}</span><button class="task-del" onclick="deleteTask(${t.id})">✕</button></div>`;
  }).join('');
}
function checkPlannerFeedback(){
  const feed=document.getElementById('rt-feed-planner');
  const overdue=tasks.filter(t=>!t.done&&t.due&&new Date(t.due)<new Date(new Date().toDateString()));
  const high=tasks.filter(t=>!t.done&&t.priority==='high');
  if(overdue.length>0){
    feed.className='rt-feed show error';
    feed.innerHTML=`<span class="rt-feed-icon">⚠️</span><div class="rt-feed-text"><strong>Overdue tasks detected</strong>You have ${overdue.length} overdue task${overdue.length>1?'s':''}: ${overdue.map(t=>t.title).join(', ')}. Consider rescheduling or completing them first.</div>`;
  }else if(high.length>=3){
    feed.className='rt-feed show warn';
    feed.innerHTML=`<span class="rt-feed-icon">🔥</span><div class="rt-feed-text"><strong>Heavy workload detected</strong>You have ${high.length} high-priority tasks. Consider breaking them into smaller sessions using the Focus Timer.</div>`;
  }else if(tasks.filter(t=>t.done).length===tasks.length&&tasks.length>0){
    feed.className='rt-feed show success';
    feed.innerHTML=`<span class="rt-feed-icon">🎉</span><div class="rt-feed-text"><strong>All tasks complete!</strong>Great work — you've finished everything on your list. Add new tasks to keep the momentum going.</div>`;
  }else{
    feed.className='rt-feed show info';
    feed.innerHTML=`<span class="rt-feed-icon">💡</span><div class="rt-feed-text"><strong>Real-time detection active</strong>ThinkForge monitors your tasks for overdue items, overloaded schedules, and priority conflicts.</div>`;
  }
}
function openAddTask(){
  const today=new Date().toISOString().split('T')[0];
  document.getElementById('tk-date').value=today;
  document.getElementById('task-modal').classList.add('open');
}
function addTask(){
  const title=document.getElementById('tk-title').value.trim();
  if(!title){toast('Please enter a task title.');return}
  tasks.push({id:nxtId++,title,subject:document.getElementById('tk-subject').value||'General',due:document.getElementById('tk-date').value,time:document.getElementById('tk-time').value,priority:document.getElementById('tk-priority').value,done:false});
  closeModal('task-modal');document.getElementById('tk-title').value='';
  renderPlanner();checkPlannerFeedback();toast('✅ Task added!');
}
function toggleTask(id){
  const t=tasks.find(x=>x.id===id);if(t)t.done=!t.done;
  renderPlanner();checkPlannerFeedback();
}
function deleteTask(id){tasks=tasks.filter(x=>x.id!==id);renderPlanner();checkPlannerFeedback();toast('Task removed.')}
 
// ═══════════════════════════════════════════
// FOCUS TIMER with real-time feedback
// ═══════════════════════════════════════════
function setTimerMode(btn,mode){
  document.querySelectorAll('.t-mode-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
  timerMode=mode;
  const cf=document.getElementById('custom-field');
  if(mode==='custom'){cf.style.display='block'}else{cf.style.display='none'}
  resetTimer();
}
function getTimerTotal(){
  if(timerMode==='custom'){const v=parseInt(document.getElementById('custom-mins')?.value)||25;return v*60;}
  return TIMER_MODES[timerMode]||25*60;
}
function startTimer(){
  if(timerRunning)return;
  timerTotal=getTimerTotal();timerRunning=true;
  const disp=document.getElementById('timer-display');disp.className='timer-display running';
  updateTimerFeed('running');
  timerInterval=setInterval(()=>{
    timerSeconds--;if(timerSeconds<0){clearInterval(timerInterval);timerRunning=false;timerSessionsToday++;
      document.getElementById('timer-sessions').textContent='Sessions completed today: '+timerSessionsToday;
      timerSeconds=getTimerTotal();disp.className='timer-display';updateRing(1);
      updateTimerFeed('complete');toast('⏰ Session complete! Take a break.');return;}
    updateRing(timerSeconds/timerTotal);
    document.getElementById('timer-display').textContent=fmt(timerSeconds);
  },1000);
}
function pauseTimer(){
  clearInterval(timerInterval);timerRunning=false;
  document.getElementById('timer-display').className='timer-display';
  updateTimerFeed('paused');
}
function resetTimer(){
  clearInterval(timerInterval);timerRunning=false;timerSeconds=getTimerTotal();timerTotal=timerSeconds;
  document.getElementById('timer-display').textContent=fmt(timerSeconds);
  document.getElementById('timer-display').className='timer-display';
  updateRing(1);updateTimerFeed('idle');
}
function fmt(s){return`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
function updateRing(frac){
  const r=document.getElementById('ring-fill');if(!r)return;
  const circ=2*Math.PI*60;r.style.strokeDashoffset=circ*(1-frac);
  r.style.stroke=timerMode==='short'||timerMode==='long'?'var(--civil)':'var(--elec)';
}
function updateTimerFeed(state){
  const f=document.getElementById('rt-feed-timer');if(!f)return;
  const msgs={
    idle:{cls:'info',icon:'💡',title:'Ready to focus',msg:'Start the timer to begin a focused study session. ThinkForge will track your progress and give you feedback.'},
    running:{cls:'success',icon:'🔥',title:'Session in progress',msg:`Stay focused! You're working on a ${timerMode==='pomodoro'?'25-minute Pomodoro':timerMode==='custom'?'custom':timerMode==='short'?'5-minute':'15-minute'} session. Avoid distractions and close unnecessary tabs.`},
    paused:{cls:'warn',icon:'⏸',title:'Session paused',msg:'Your session is paused. Resume when you\'re ready — try to keep breaks short to maintain your focus momentum.'},
    complete:{cls:'success',icon:'🎉',title:'Session complete!',msg:`Great work! You've completed ${timerSessionsToday} session${timerSessionsToday!==1?'s':''} today. Take a ${timerSessionsToday%4===0?'long (15 min)':'short (5 min)'} break before your next session.`},
  };
  const m=msgs[state]||msgs.idle;
  f.className=`rt-feed show ${m.cls}`;
  f.innerHTML=`<span class="rt-feed-icon">${m.icon}</span><div class="rt-feed-text"><strong>${m.title}</strong>${m.msg}</div>`;
}
 
// ═══════════════════════════════════════════
// STEP SOLVER with Adaptive Hints
// ═══════════════════════════════════════════
function renderSolverPicker(){
  const dr=document.getElementById('solver-disc-row');
  dr.innerHTML=['all',...Object.keys(DC)].map(d=>{
    const lbl=d==='all'?'All disciplines':DC[d].label;
    return`<button class="chip ${solverDisc===d?'on':''}" ${d!=='all'?`data-d="${d}"`:''}onclick="setSolverDisc('${d}')">${lbl}</button>`;
  }).join('');
  const grid=document.getElementById('solver-prob-grid');
  const list=PROBLEMS.filter(p=>solverDisc==='all'||p.disc===solverDisc);
  const dcls={Beginner:'diff-beg',Intermediate:'diff-int',Advanced:'diff-adv'};
  grid.innerHTML=list.map(p=>{
    const d=DC[p.disc];
    return`<div class="sp-card ${activeProblem?.id===p.id?'sel':''}" onclick="loadProblem(${p.id})"><span class="sp-tag" style="background:rgba(255,255,255,.06);color:${d.color}">${d.label} · ${p.tag}</span> <span class="diff-badge ${dcls[p.diff]||'diff-beg'}">${p.diff}</span><div class="sp-title">${p.title}</div><div class="sp-sub">${p.summary} · ${p.steps.length} steps</div></div>`;
  }).join('');
}
function setSolverDisc(d){solverDisc=d;renderSolverPicker()}
function loadProblem(id){
  activeProblem=PROBLEMS.find(p=>p.id===id);
  revealedSteps=1;openSteps={0:true};stepAI={};stepHintLevel={};
  document.getElementById('solver-picker').style.display='none';
  document.getElementById('solver-view').style.display='block';
  document.getElementById('sv-complete').classList.remove('open');
  showSolverFeed('info','🧩 Problem loaded','Work through each step in order. Use "Hint" for adaptive guidance, and "Explain with AI" for deeper intuition at any step.');
  renderSolverView();
}
function backToPicker(){
  document.getElementById('solver-picker').style.display='block';
  document.getElementById('solver-view').style.display='none';
  activeProblem=null;renderSolverPicker();
}
function showSolverFeed(type,title,msg){
  const f=document.getElementById('sv-rt-feed');if(!f)return;
  const icons={info:'💡',warn:'⚠️',success:'✅',error:'❌'};
  f.className=`rt-feed show ${type}`;
  f.innerHTML=`<span class="rt-feed-icon">${icons[type]||'💡'}</span><div class="rt-feed-text"><strong>${title}</strong>${msg}</div>`;
}
function renderSolverView(){
  const p=activeProblem;const d=DC[p.disc];
  document.getElementById('sv-badge').textContent=`${d.label} · ${p.tag} · ${p.diff}`;
  document.getElementById('sv-stmt').innerHTML=`<strong>${p.title}</strong><br><br>${p.statement}`;
  const pct=Math.round((revealedSteps/p.steps.length)*100);
  document.getElementById('sv-prog').style.width=pct+'%';
  document.getElementById('sv-prog-lbl').textContent=`Step ${Math.min(revealedSteps,p.steps.length)} of ${p.steps.length}`;
  const col=document.getElementById('sv-steps');
  col.innerHTML=p.steps.map((s,i)=>{
    const done=i<revealedSteps-1,active=i===revealedSteps-1,locked=i>=revealedSteps;
    const nCls=done?'done':active?'active':'locked';
    const isOpen=openSteps[i]&&!locked;
    const hl=stepHintLevel[i]||0;
 
    // Adaptive hint HTML — shows progressively deeper hints
    let hintHTML='';
    if(isOpen&&hl>0){
      const hints=[s.hint1,s.hint2,s.hint3].filter(Boolean).slice(0,hl);
      const levelLabels=['Level 1 — Gentle nudge','Level 2 — Direction','Level 3 — Full hint'];
      hintHTML=`<div class="adaptive-hint show"><div class="ah-header"><span class="ah-level ah-${hl}">${levelLabels[hl-1]||'Hint'}</span></div>${hints.map((h,hi)=>`<div class="ah-text" style="margin-bottom:${hi<hints.length-1?'8px':'0'}">${hi>0?'<span style="color:var(--muted);font-size:.72rem">▶ Going deeper: </span>':''}${h}</div>`).join('')}<div class="ah-actions">${hl<3&&[s.hint1,s.hint2,s.hint3].filter(Boolean).length>hl?`<button class="hint-btn deeper" onclick="deeperHint(${i})">Go deeper →</button>`:''}<button class="hint-btn" onclick="hideHint(${i})">Hide</button></div></div>`;
    }
 
    const aiBox=stepAI[i]?`<div class="step-ai-box open ${stepAI[i]==='loading'?'load':''}">${stepAI[i]==='loading'?'AI is thinking...':stepAI[i]}</div>`:`<div class="step-ai-box"></div>`;
    const acts=isOpen?`<div class="step-acts">${active&&i<p.steps.length-1?`<button class="s-btn" onclick="nextStep()">Next step →</button>`:''}${i===p.steps.length-1&&active?`<button class="s-btn" onclick="markComplete()">Mark complete ✓</button>`:''}<button class="s-btn ai" onclick="getStepAI(${i})">Explain with AI ↗</button>${hl===0?`<button class="s-btn" onclick="showHint(${i})">💡 Hint</button>`:''}</div>`:'';
    return`<div class="step-item"><div class="step-hd" onclick="${locked?'':` toggleStep(${i})`}"><div class="step-num ${nCls}">${done?'✓':i+1}</div><div class="step-lbl ${locked?'locked':''}"">Step ${i+1}: ${s.label}${locked?' 🔒':''}</div></div><div class="step-body ${isOpen?'open':''}" id="sb-${i}"><p>${s.exp}</p><code class="step-formula">${s.formula}</code>${hintHTML}${aiBox}${acts}</div></div>`;
  }).join('');
}
function toggleStep(i){if(i>=revealedSteps)return;openSteps[i]=!openSteps[i];renderSolverView()}
function nextStep(){
  if(revealedSteps<activeProblem.steps.length){
    revealedSteps++;openSteps[revealedSteps-1]=true;
    const pct=Math.round((revealedSteps/activeProblem.steps.length)*100);
    if(pct===50)showSolverFeed('info','Halfway there! 🎯',"You've unlocked half the steps. Keep going — you're building real understanding.");
    renderSolverView();
    setTimeout(()=>{const el=document.getElementById('sb-'+(revealedSteps-1));if(el)el.scrollIntoView({behavior:'smooth',block:'nearest'})},100);
  }
}
function markComplete(){
  document.getElementById('sv-complete').classList.add('open');
  showSolverFeed('success','Problem complete! 🎉','Excellent work — you solved the entire problem step by step. Try a harder problem or revisit your notebook to reinforce these concepts.');
}
// Adaptive hint system
function showHint(i){
  stepHintLevel[i]=1;
  renderSolverView();
  showSolverFeed('warn','Hint unlocked 💡',"A level-1 hint has been shown. If you still need more help, click 'Go deeper' for progressively more detailed guidance.");
}
function deeperHint(i){
  stepHintLevel[i]=Math.min((stepHintLevel[i]||0)+1,3);
  renderSolverView();
  const lvl=stepHintLevel[i];
  const msgs=['','Level 2: A more specific direction has been revealed.','Level 3: The full solution approach is now shown. Try to understand the why, not just the answer.'];
  if(lvl>1)showSolverFeed('warn',`Hint level ${lvl} unlocked`,msgs[lvl]||'');
}
function hideHint(i){stepHintLevel[i]=0;renderSolverView()}
async function getStepAI(i){
  const p=activeProblem,s=p.steps[i];stepAI[i]='loading';renderSolverView();
  try{
    const msg=await callClaude(`Engineering tutor. Problem: "${p.statement}" Student on Step ${i+1}: "${s.label}". Explanation: "${s.exp}". Formula: "${s.formula}". Give 3–5 sentences of deeper intuition about WHY this step works. Real-world analogy if helpful. Add insight beyond what's shown.`,[{role:'user',content:'Explain this step more deeply.'}]);
    stepAI[i]=msg;
  }catch{stepAI[i]='Could not connect to AI. Check your connection and try again.'}
  renderSolverView();
}
 
// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastT;
function toast(msg){
  const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');
  clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove('show'),3500);
}
 
// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
renderCircles();renderTutors();renderBookings();renderNotebook();renderPlanner();renderSolverPicker();
document.getElementById('rt-feed-planner').classList.add('show');
updateRing(1);updateTimerFeed('idle');
</script>
