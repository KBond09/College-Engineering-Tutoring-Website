<!-- =====================================================
     JAVASCRIPT
     This is where all the interactivity lives.
     Each section is labeled so you can find it easily.
===================================================== -->
<script>

// =============================================================
// SECTION A: DATA
// This is the "database" for our site. In a real app you'd
// fetch this from a server (like Firebase or a C# API).
// =============================================================

// --- Engineering disciplines config ---
const DISC = {
  civil:      { label: '🏗️ Civil',      color: 'var(--civil)',      tag: 'tag-civil' },
  mechanical: { label: '⚙️ Mechanical', color: 'var(--mechanical)', tag: 'tag-mechanical' },
  electrical: { label: '⚡ Electrical', color: 'var(--electrical)', tag: 'tag-electrical' },
  computer:   { label: '💻 Computer',   color: 'var(--computer)',   tag: 'tag-computer' },
};

// --- Study Circles data ---
let circles = [
  { id:1, name:'Statics & Structures', disc:'civil',      desc:'Working through free body diagrams, truss analysis, and shear/moment diagrams.', members:['AJ','BK','CL'], max:5, status:'open' },
  { id:2, name:'Thermodynamics Deep Dive', disc:'mechanical', desc:'Covering all four laws, heat engines, refrigeration cycles, and entropy.', members:['DM','EN','FO','GP'], max:5, status:'live' },
  { id:3, name:'Circuits 101',          disc:'electrical', desc:'Ohm\'s law, Kirchhoff\'s laws, AC/DC analysis, and op-amps.', members:['HQ','IR'], max:4, status:'open' },
  { id:4, name:'Data Structures & Algo',disc:'computer',   desc:'Arrays, linked lists, trees, sorting algorithms, and Big-O complexity.', members:['JS','KT','LU','MV','NW'], max:5, status:'full' },
  { id:5, name:'Fluid Mechanics Group', disc:'civil',      desc:'Bernoulli\'s equation, pipe flow, Reynolds number, and open channel flow.', members:['OX','PY'], max:5, status:'open' },
  { id:6, name:'CAD & Machine Design',  disc:'mechanical', desc:'SolidWorks fundamentals, tolerances, gear trains, and bearing selection.', members:['QZ','RA','SB'], max:4, status:'open' },
  { id:7, name:'Digital Logic Design',  disc:'electrical', desc:'Boolean algebra, logic gates, flip-flops, FSMs, and VHDL basics.', members:['TC','UD','VE'], max:5, status:'live' },
  { id:8, name:'OS & Computer Architecture', disc:'computer', desc:'Processes, memory management, file systems, and CPU pipeline stages.', members:['WF','XG'], max:5, status:'open' },
];

// --- Tutors data ---
let tutors = [
  { id:1, name:'Maya Chen',    initials:'MC', disc:'civil',      color:'var(--civil)',      textColor:'#1a1000', tags:['Structural Analysis','FEA','Statics'], bio:'3rd-year civil engineering PhD. Specializes in structural mechanics and finite element analysis. Super patient with beginners.', rating:4.9, sessions:112, available:true },
  { id:2, name:'Darius Webb',  initials:'DW', disc:'mechanical', color:'var(--mechanical)', textColor:'#001a28', tags:['Thermodynamics','Fluid Mechanics','CAD'], bio:'Mechanical engineer with 2 years industry experience. Loves making thermo and fluids finally make sense.', rating:4.7, sessions:74,  available:false },
  { id:3, name:'Amara Osei',   initials:'AO', disc:'electrical', color:'var(--electrical)', textColor:'#001a05', tags:['Circuits','Signals','Power Systems'], bio:'EE undergrad senior with a talent for circuit intuition. Great for anyone struggling with AC analysis or op-amps.', rating:5.0, sessions:89,  available:true },
  { id:4, name:'Leo Nakamura', initials:'LN', disc:'computer',   color:'var(--computer)',   textColor:'#1a0028', tags:['Algorithms','Python','Systems Programming'], bio:'CS grad student. Teaches by building — every session includes live coding problems and walkthroughs.', rating:4.8, sessions:56,  available:true },
  { id:5, name:'Sofia Reyes',  initials:'SR', disc:'civil',      color:'var(--civil)',      textColor:'#1a1000', tags:['Geotechnics','Soil Mechanics','Transportation'], bio:'Civil PE candidate. Excellent at breaking down soil mechanics and transportation engineering for the FE exam.', rating:4.6, sessions:38,  available:false },
  { id:6, name:'Rin Tanaka',   initials:'RT', disc:'mechanical', color:'var(--mechanical)', textColor:'#001a28', tags:['Dynamics','Vibrations','Controls'], bio:'Robotics MS student. If it moves, rotates, or vibrates, she can explain it. Great for dynamics and control systems.', rating:4.9, sessions:61,  available:true },
];

// --- Bookings data ---
let bookings = [
  { id:1, tutorName:'Maya Chen',    disc:'civil',      day:'Wed May 7',  time:'10:00 AM', topic:'FEA mesh refinement strategies', past:false },
  { id:2, tutorName:'Amara Osei',   disc:'electrical', day:'Thu May 8',  time:'2:00 PM',  topic:'AC circuit phasor analysis',      past:false },
  { id:3, tutorName:'Darius Webb',  disc:'mechanical', day:'Mon Apr 28', time:'11:00 AM', topic:'Rankine cycle efficiency calc',   past:true },
];

// --- Notebook notes data ---
let notes = [
  {
    id: 1,
    title: 'Statics — Truss Analysis',
    disc: 'civil',
    date: 'Apr 29, 2026',
    tutor: 'Maya Chen',
    concepts: [
      'Method of Joints: isolate each joint and apply ΣFx=0, ΣFy=0',
      'Method of Sections: cut through the truss to find up to 3 unknown member forces',
      'Zero-force members occur at joints with two non-collinear members and no external load',
      'Compression members are typically thicker to resist buckling',
    ],
    actions: ['Complete truss problem set (pages 112–120)', 'Watch Prof. Hibbeler lecture on method of sections', 'Practice identifying zero-force members'],
    flashcards: [
      { q:'What does ΣFx=0 mean at a joint?', a:'The sum of all horizontal forces = 0 (equilibrium)' },
      { q:'When does a zero-force member exist?', a:'At a joint with 2 non-collinear members and no external load' },
      { q:'Method of Sections allows you to cut through how many members?', a:'Up to 3 unknown members at once' },
    ],
    mcq: [
      {
        q: 'In the Method of Joints, which equilibrium equations are applied at each joint?',
        options: ['ΣM=0 and ΣFx=0', 'ΣFx=0 and ΣFy=0', 'ΣFx=0, ΣFy=0, and ΣM=0', 'Only ΣFy=0'],
        answer: 1,
        explanation: 'At each joint we apply two equations: sum of horizontal forces = 0 and sum of vertical forces = 0. Moment equations aren\'t used at a pin joint.'
      },
      {
        q: 'A two-force member in a truss carries forces that are:',
        options: ['Perpendicular to the member axis', 'Along the member axis only', 'Applied at any angle', 'Always compressive'],
        answer: 1,
        explanation: 'Two-force members have loads applied only at the two end pins, so the resultant force must act along the line connecting those pins (tension or compression).'
      },
    ],
    shortAnswer: [
      { q: 'Explain the difference between the Method of Joints and the Method of Sections, including when you would prefer one over the other. Provide an example scenario for each method. (Minimum 250 words)' },
    ]
  },
  {
    id: 2,
    title: 'Circuits — Kirchhoff\'s Laws',
    disc: 'electrical',
    date: 'Apr 25, 2026',
    tutor: 'Amara Osei',
    concepts: [
      'KCL: Sum of currents entering a node = sum of currents leaving (conservation of charge)',
      'KVL: Sum of voltage drops around any closed loop = 0 (conservation of energy)',
      'Mesh analysis uses KVL with mesh currents as unknowns',
      'Node voltage method uses KCL with node voltages as unknowns',
    ],
    actions: ['Solve textbook problems 4.1–4.20', 'Build a simulation in Falstad\'s circuit simulator', 'Review superposition theorem'],
    flashcards: [
      { q:'What does KCL stand for and state?', a:'Kirchhoff\'s Current Law — currents into a node = currents out' },
      { q:'What does KVL state?', a:'Sum of all voltage drops in a closed loop = 0' },
      { q:'What are the unknowns in mesh analysis?', a:'Mesh currents (one per independent loop)' },
    ],
    mcq: [
      {
        q: 'Kirchhoff\'s Current Law (KCL) is based on conservation of:',
        options: ['Energy', 'Charge', 'Voltage', 'Power'],
        answer: 1,
        explanation: 'KCL is a consequence of charge conservation — charge cannot accumulate at a node, so current in must equal current out.'
      },
      {
        q: 'In mesh analysis, how many independent mesh equations can be written for a planar circuit with b branches, n nodes?',
        options: ['n - 1', 'b - n + 1', 'b + n', 'n + 1'],
        answer: 1,
        explanation: 'The number of independent meshes (and thus mesh equations) is b − n + 1, where b = branches and n = nodes.'
      },
    ],
    shortAnswer: [
      { q: 'Describe Kirchhoff\'s Voltage Law and Kirchhoff\'s Current Law in your own words. Then walk through how you would apply both laws to analyze a circuit with two loops and three resistors. Explain each step in detail. (Minimum 250 words)' },
    ]
  },
];

// Tracks the currently open note ID
let activeNoteId = null;

// Tracks which flashcards have been flipped
let flippedCards = {};

// Tracks MC answers per note: { noteId: { qIndex: selectedOption } }
let mcAnswers = {};

// Tracks short answer text per note: { noteId: { qIndex: text } }
let saText = {};

// Active filters
let circleFilter = 'all';
let tutorFilter  = 'all';

// The tutor ID we are currently scheduling
let schedulingTutorId = null;

// Counter for new IDs
let nextId = 50;


// =============================================================
// SECTION B: NAVIGATION
// =============================================================

function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Remove active from all nav buttons
  document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));

  // Show the target page
  document.getElementById('page-' + id).classList.add('active');

  // Highlight the correct nav button
  const pages = ['home','circles','private','bookings','notebook'];
  document.querySelectorAll('.nav-tabs button')[pages.indexOf(id)].classList.add('active');

  // Refresh data for that page
  if (id === 'circles')  renderCircles();
  if (id === 'private')  renderTutors();
  if (id === 'bookings') renderBookings();
  if (id === 'notebook') renderNotebook();
}


// =============================================================
// SECTION C: CIRCLES PAGE
// =============================================================

// Called from home page discipline cards
function filterByDisc(disc) {
  circleFilter = disc;
  // Update the chip buttons
  document.querySelectorAll('[data-filter]').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === disc);
  });
  renderCircles();
}

function setCircleFilter(el, f) {
  circleFilter = f;
  document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderCircles();
}

function renderCircles() {
  const q    = (document.getElementById('circle-search')?.value || '').toLowerCase();
  const grid = document.getElementById('circles-grid');

  // Filter circles by discipline and search query
  const list = circles.filter(c => {
    const matchDisc   = circleFilter === 'all' || c.disc === circleFilter;
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    return matchDisc && matchSearch;
  });

  if (!list.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="em">🔍</div><p>No circles match. Try creating one!</p></div>';
    return;
  }

  // Status badge mapping
  const statusMap = {
    live: ['tag-live','🟢 Live'],
    open: ['tag-open','Open'],
    full: ['tag-full','Full'],
  };

  grid.innerHTML = list.map(c => {
    const [tagCls, statusLabel] = statusMap[c.status] || ['tag-open','Open'];
    const disc = DISC[c.disc];
    const spots = c.max - c.members.length;

    // Build avatar cluster (show max 4, then "+N more")
    const avColors = ['#f5a623','#4fc3f7','#66bb6a','#ce93d8'];
    const avHTML = c.members.slice(0,4).map((m,i) =>
      `<div class="av" style="background:${avColors[i%4]}">${m}</div>`
    ).join('');
    const extra = c.members.length > 4
      ? `<div class="av" style="background:var(--surface);color:var(--muted)">+${c.members.length-4}</div>` : '';

    // Join button
    const joinBtn = c.status === 'full'
      ? `<button class="btn btn-outline btn-sm" disabled style="opacity:0.4">Full</button>`
      : `<button class="btn btn-sm" style="background:${disc.color};color:${disc.textColor}" onclick="joinCircle(${c.id})">Join${c.status==='live'?' Now':' →'}</button>`;

    return `
      <div class="circle-card">
        <div class="circle-card-top">
          <div>
            <span class="tag ${tagCls}" style="margin-bottom:6px;display:inline-block">${statusLabel}</span>
            <span class="tag ${disc.tag}">${disc.label}</span>
            <h3 style="margin-top:6px">${c.name}</h3>
          </div>
          ${joinBtn}
        </div>
        <p>${c.desc}</p>
        <div class="circle-footer">
          <div class="avatars">${avHTML}${extra}</div>
          <span>${c.members.length}/${c.max} · ${spots} spot${spots!==1?'s':''} left</span>
        </div>
      </div>`;
  }).join('');
}

function joinCircle(id) {
  const c = circles.find(x => x.id === id);
  if (!c || c.status === 'full') return;

  // Build a room name from circle name (URL-safe)
  const roomName = 'learnloop-' + c.name.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

  document.getElementById('circle-video-title').textContent = c.name;
  document.getElementById('circle-iframe').src = `https://whereby.com/${roomName}?embed&background=off`;
  document.getElementById('circle-video').classList.add('open');
  document.getElementById('circle-video').scrollIntoView({ behavior:'smooth', block:'start' });

  if (c.status !== 'live') { c.status = 'live'; renderCircles(); }
  toast('📹 Joined ' + c.name + '! Allow camera & mic when prompted.');
}

function leaveCircle() {
  document.getElementById('circle-video').classList.remove('open');
  document.getElementById('circle-iframe').src = '';
  toast('You left the circle. See you next time!');
}

function openCreateModal()    { document.getElementById('create-modal').classList.add('open'); }
function closeModal(id)       { document.getElementById(id).classList.remove('open'); }

function createCircle() {
  const name = document.getElementById('cm-name').value.trim();
  const disc = document.getElementById('cm-disc').value;
  const desc = document.getElementById('cm-desc').value.trim();
  const max  = parseInt(document.getElementById('cm-max').value);

  if (!name) { toast('Please enter a circle name.'); return; }

  circles.unshift({ id: nextId++, name, disc, desc: desc || 'New study circle.', members:['You'], max, status:'open' });
  closeModal('create-modal');
  document.getElementById('cm-name').value = '';
  document.getElementById('cm-desc').value = '';
  renderCircles();
  toast('✅ Circle created! Share the link to invite friends.');
}


// =============================================================
// SECTION D: PRIVATE TUTORING PAGE
// =============================================================

function setTutorFilter(el, f) {
  tutorFilter = f;
  document.querySelectorAll('[data-tfilter]').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderTutors();
}

function renderTutors() {
  const q    = (document.getElementById('tutor-search')?.value || '').toLowerCase();
  const grid = document.getElementById('tutors-grid');

  const list = tutors.filter(t => {
    const matchDisc   = tutorFilter === 'all' || t.disc === tutorFilter;
    const matchSearch = !q || t.name.toLowerCase().includes(q) || t.tags.join(' ').toLowerCase().includes(q);
    return matchDisc && matchSearch;
  });

  if (!list.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="em">🔍</div><p>No tutors found.</p></div>';
    return;
  }

  grid.innerHTML = list.map(t => {
    const disc = DISC[t.disc];
    const joinBtn = t.available
      ? `<button class="btn btn-sm" style="background:${t.color};color:${t.textColor}" onclick="joinPrivate(${t.id})">Join Now</button>`
      : '';
    return `
      <div class="tutor-card">
        <div class="tutor-top">
          <div class="tutor-av" style="background:${t.color};color:${t.textColor}">${t.initials}</div>
          <div>
            <div class="tutor-name">${t.name}</div>
            <div class="tutor-sub">${disc.label}</div>
            <div class="rating" style="color:${t.color}">⭐ ${t.rating} · ${t.sessions} sessions</div>
          </div>
        </div>
        <p class="tutor-bio">${t.bio}</p>
        <div style="margin-bottom:0.85rem">
          ${t.tags.map(tag => `<span class="tag ${disc.tag}">${tag}</span>`).join('')}
          ${t.available ? '<span class="tag tag-live">Available now</span>' : '<span class="tag tag-full">Offline</span>'}
        </div>
        <div class="tutor-actions">
          ${joinBtn}
          <button class="btn btn-outline btn-sm" onclick="openSchedule(${t.id})">📅 Schedule</button>
        </div>
      </div>`;
  }).join('');
}

function joinPrivate(id) {
  const t = tutors.find(x => x.id === id);
  if (!t) return;
  const roomName = 'learnloop-private-' + t.name.toLowerCase().replace(/\s+/g,'-');
  document.getElementById('private-video-title').textContent = 'Session with ' + t.name;
  document.getElementById('private-iframe').src = `https://whereby.com/${roomName}?embed&background=off`;
  document.getElementById('private-video').classList.add('open');
  document.getElementById('private-video').scrollIntoView({ behavior:'smooth', block:'start' });
  toast('📹 Connecting to ' + t.name + '...');
}

function leavePrivate() {
  document.getElementById('private-video').classList.remove('open');
  document.getElementById('private-iframe').src = '';
  toast('Session ended. Check your notebook!');
}


// =============================================================
// SECTION E: SCHEDULE / BOOKINGS
// =============================================================

const DAYS  = ['Mon May 5','Tue May 6','Wed May 7','Thu May 8','Fri May 9','Sat May 10'];
const TIMES = ['9:00 AM','10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];

function openSchedule(tutorId) {
  schedulingTutorId = tutorId;
  const t = tutors.find(x => x.id === tutorId);
  document.getElementById('sched-title').textContent = 'Book a session with ' + t.name;

  // Render day slots
  document.getElementById('day-slots').innerHTML =
    DAYS.map(d => `<div class="slot" onclick="pickSlot(this,'day')">${d}</div>`).join('');

  // Render time slots
  document.getElementById('time-slots').innerHTML =
    TIMES.map(t => `<div class="slot" onclick="pickSlot(this,'time')">${t}</div>`).join('');

  document.getElementById('schedule-modal').classList.add('open');
}

function pickSlot(el, type) {
  // Deselect others in the same group
  el.closest('.slot-grid').querySelectorAll('.slot').forEach(s => s.classList.remove('sel'));
  el.classList.add('sel');
}

function confirmBooking() {
  const dayEl  = document.querySelector('#day-slots .sel');
  const timeEl = document.querySelector('#time-slots .sel');
  if (!dayEl || !timeEl) { toast('Please select a day AND a time.'); return; }

  const t     = tutors.find(x => x.id === schedulingTutorId);
  const topic = document.getElementById('sched-notes').value.trim() || 'General session';

  // Add booking to our data
  bookings.push({ id: nextId++, tutorName: t.name, disc: t.disc, day: dayEl.textContent, time: timeEl.textContent, topic, past: false });

  closeModal('schedule-modal');
  document.getElementById('sched-notes').value = '';
  toast(`✅ Booked! ${t.name} on ${dayEl.textContent} at ${timeEl.textContent}`);
}

function renderBookings() {
  const upcoming = bookings.filter(b => !b.past);
  const past     = bookings.filter(b => b.past);

  const upEl   = document.getElementById('bookings-upcoming');
  const pastEl = document.getElementById('bookings-past');

  if (!upcoming.length) {
    upEl.innerHTML = '<div class="bookings-empty"><div class="em">📅</div><p>No upcoming sessions yet.<br>Go to Private Tutoring to book one!</p></div>';
  } else {
    upEl.innerHTML = upcoming.map(b => bookingCard(b, false)).join('');
  }

  if (!past.length) {
    pastEl.innerHTML = '<div class="bookings-empty"><div class="em">📋</div><p>No past sessions yet.</p></div>';
  } else {
    pastEl.innerHTML = past.map(b => bookingCard(b, true)).join('');
  }
}

function bookingCard(b, isPast) {
  const disc  = DISC[b.disc];
  const color = disc ? disc.color : 'var(--accent)';
  return `
    <div class="booking-card">
      <div class="booking-dot" style="background:${color}"></div>
      <div class="booking-info">
        <div class="booking-title">${b.tutorName}</div>
        <div class="booking-meta">${disc ? disc.label : ''} · ${b.topic}</div>
      </div>
      <div>
        <div class="booking-time" style="color:${color}">${b.time}</div>
        <div style="font-size:0.75rem;color:var(--muted);text-align:right">${b.day}</div>
        ${!isPast ? `<button class="btn btn-danger btn-sm" style="margin-top:6px" onclick="cancelBooking(${b.id})">Cancel</button>` : ''}
      </div>
    </div>`;
}

function cancelBooking(id) {
  bookings = bookings.filter(b => b.id !== id);
  renderBookings();
  toast('Booking cancelled.');
}


// =============================================================
// SECTION F: NOTEBOOK — NOTES LIST
// =============================================================

function openAddNote() {
  document.getElementById('add-note-form').style.display = 'block';
  window.scrollTo({ top: 0, behavior:'smooth' });
}
function closeAddNote() {
  document.getElementById('add-note-form').style.display = 'none';
}

function saveNote() {
  const title    = document.getElementById('nf-title').value.trim();
  const disc     = document.getElementById('nf-disc').value;
  const concepts = document.getElementById('nf-concepts').value.trim().split('\n').filter(Boolean);
  const actions  = document.getElementById('nf-actions').value.trim().split('\n').filter(Boolean);

  if (!title) { toast('Please enter a title.'); return; }

  const today = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});

  // Auto-generate simple flashcards from concepts
  const flashcards = concepts.slice(0,3).map(c => ({
    q: 'Explain: ' + c.substring(0,45) + (c.length > 45 ? '...' : ''),
    a: c
  }));

  // Auto-generate a simple MCQ from concepts
  const mcq = concepts.length >= 2 ? [{
    q: `Which of the following is TRUE based on the concepts from this session?`,
    options: [
      concepts[0],
      'Forces can be ignored in static equilibrium',
      concepts[1] || 'All members carry the same force',
      'None of the above apply here'
    ],
    answer: 0,
    explanation: 'The first concept listed is a direct key takeaway from this session.'
  }] : [];

  const shortAnswer = [{
    q: `In at least 250 words, explain the key concepts you learned in this session. How do they connect to real-world engineering problems? Give a concrete example.`
  }];

  notes.unshift({ id: nextId++, title, disc, date: today, tutor: null, concepts, actions, flashcards, mcq, shortAnswer });
  closeAddNote();
  ['nf-title','nf-concepts','nf-actions'].forEach(id => document.getElementById(id).value = '');
  activeNoteId = notes[0].id;
  renderNotebook();
  toast('✅ Note saved! Quiz and flashcards auto-generated.');
}

function renderNotebook() {
  const list  = document.getElementById('note-list');
  const count = document.getElementById('note-count');
  count.textContent = notes.length + (notes.length === 1 ? ' note' : ' notes');

  if (!notes.length) {
    list.innerHTML = '<li style="padding:1rem;text-align:center;color:var(--muted);font-size:0.82rem">No notes yet</li>';
    return;
  }

  list.innerHTML = notes.map(n => {
    const disc = DISC[n.disc];
    return `
      <li class="${activeNoteId === n.id ? 'active' : ''}" onclick="openNote(${n.id})">
        <div class="nt">${n.title}</div>
        <div class="nm">${disc ? disc.label : ''} · ${n.date}</div>
      </li>`;
  }).join('');

  if (activeNoteId) {
    const n = notes.find(x => x.id === activeNoteId);
    if (n) renderNoteMain(n);
  }
}

function openNote(id) {
  activeNoteId = id;
  renderNotebook();
}


// =============================================================
// SECTION G: NOTEBOOK — NOTE DETAIL (Summary, Quiz, AI)
// =============================================================

function renderNoteMain(n) {
  const main = document.getElementById('nb-main');
  const disc = DISC[n.disc] || {};

  main.innerHTML = `
    <div class="nb-note-head">
      <div>
        <h2>${n.title}</h2>
        <p>${n.date}${n.tutor ? ' · with ' + n.tutor : ''} · <span class="tag ${disc.tag || ''}" style="vertical-align:middle">${disc.label||''}</span></p>
      </div>
      <button class="btn btn-outline btn-sm" onclick="deleteNote(${n.id})">Delete</button>
    </div>

    <!-- Inner tab bar: Summary | Quiz | AI Practice -->
    <div class="note-tabs">
      <button class="note-tab active" onclick="switchNoteTab(this,'tab-summary-${n.id}')">📋 Summary</button>
      <button class="note-tab" onclick="switchNoteTab(this,'tab-quiz-${n.id}')">🧠 Quiz</button>
      <button class="note-tab" onclick="switchNoteTab(this,'tab-ai-${n.id}')">🤖 AI Practice</button>
    </div>

    <!-- TAB 1: SUMMARY -->
    <div class="note-tab-panel active" id="tab-summary-${n.id}">
      <p class="note-section-title">Key Concepts</p>
      <ul class="concept-list mb1">
        ${n.concepts.map(c => `<li>${c}</li>`).join('')}
      </ul>
      <p class="note-section-title">Action Items</p>
      <ul class="concept-list mb1">
        ${n.actions.map(a => `<li>${a}</li>`).join('')}
      </ul>
      ${n.flashcards.length ? `
        <p class="note-section-title" style="margin-top:1.25rem">Flashcards — tap to flip</p>
        <div class="flashcard-grid">
          ${n.flashcards.map((f,i) => {
            const flipped = (flippedCards[n.id] || {})[i];
            return `<div class="flashcard ${flipped?'flipped':''}" onclick="flipCard(${n.id},${i})">${flipped ? f.a : f.q}</div>`;
          }).join('')}
        </div>` : ''}
    </div>

    <!-- TAB 2: QUIZ (Multiple Choice + Short Answer) -->
    <div class="note-tab-panel" id="tab-quiz-${n.id}">
      ${renderQuizHTML(n)}
    </div>

    <!-- TAB 3: AI PRACTICE -->
    <div class="note-tab-panel" id="tab-ai-${n.id}">
      ${renderAIHTML(n)}
    </div>
  `;
}

// Switch tab inside a note
function switchNoteTab(btn, panelId) {
  const container = btn.closest('.nb-main');
  container.querySelectorAll('.note-tab').forEach(t => t.classList.remove('active'));
  container.querySelectorAll('.note-tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

function flipCard(noteId, idx) {
  if (!flippedCards[noteId]) flippedCards[noteId] = {};
  flippedCards[noteId][idx] = !flippedCards[noteId][idx];
  const n = notes.find(x => x.id === noteId);
  if (n) renderNoteMain(n);
  switchNoteTab(document.querySelector('.note-tab.active'), 'tab-summary-' + noteId);
}

function deleteNote(id) {
  notes = notes.filter(x => x.id !== id);
  activeNoteId = null;
  document.getElementById('nb-main').innerHTML = '<div class="empty"><div class="em">📒</div><p>Select a note to get started.</p></div>';
  renderNotebook();
  toast('Note deleted.');
}


// =============================================================
// SECTION H: QUIZ — Multiple Choice + Short Answer
// =============================================================

function renderQuizHTML(n) {
  if ((!n.mcq || !n.mcq.length) && (!n.shortAnswer || !n.shortAnswer.length)) {
    return '<div class="empty"><div class="em">📝</div><p>No quiz questions for this note yet.</p></div>';
  }

  // Score banner
  const answers = mcAnswers[n.id] || {};
  const total   = (n.mcq || []).length;
  const correct = Object.entries(answers).filter(([i, v]) => v === n.mcq[i]?.answer).length;
  const scoreLine = total > 0
    ? `<div class="quiz-score">Multiple Choice Score: <strong>${correct}/${total}</strong> correct</div>` : '';

  // MCQ HTML
  const mcHTML = (n.mcq || []).map((q, qi) => {
    const chosen = answers[qi];
    return `
      <div class="mc-question">
        <div class="mc-q-text">Q${qi+1}. ${q.q}</div>
        <div class="mc-options">
          ${q.options.map((opt, oi) => {
            const isChosen  = chosen === oi;
            const isCorrect = q.answer === oi;
            const showResult = chosen !== undefined;
            let cls = '';
            if (showResult && isCorrect)              cls = 'correct';
            else if (showResult && isChosen && !isCorrect) cls = 'wrong';
            else if (isChosen)                        cls = 'selected';
            const letters = ['A','B','C','D'];
            return `
              <div class="mc-opt ${cls}" onclick="pickMC(${n.id},${qi},${oi})">
                <div class="mc-letter">${letters[oi]}</div>
                ${opt}
              </div>`;
          }).join('')}
        </div>
        ${chosen !== undefined ? `
          <div class="mc-feedback ${chosen === q.answer ? 'ok' : 'bad'}">
            ${chosen === q.answer ? '✅ Correct! ' : '❌ Incorrect. '}${q.explanation}
          </div>` : ''}
      </div>`;
  }).join('');

  // Short Answer HTML
  const saHTML = (n.shortAnswer || []).map((sa, si) => {
    const key   = n.id + '-' + si;
    const saved = (saText[n.id] || {})[si] || '';
    const wc    = countWords(saved);
    const pct   = Math.min(wc / 250, 1);
    const barColor = wc >= 250 ? 'var(--electrical)' : wc > 150 ? 'var(--civil)' : 'var(--danger)';
    return `
      <div class="sa-question">
        <div class="sa-q-text">Short Answer: ${sa.q}</div>
        <textarea class="sa-textarea"
          id="sa-${key}"
          placeholder="Write your answer here (minimum 250 words)..."
          oninput="updateWordCount('${key}',${n.id},${si})"
        >${saved}</textarea>
        <div class="wc-bar-bg"><div class="wc-bar" id="wcbar-${key}" style="width:${Math.round(pct*100)}%;background:${barColor}"></div></div>
        <div class="word-count ${wc >= 250 ? 'ok' : 'warn'}" id="wc-${key}">
          <span>${wc} / 250 words minimum</span>
          <span>${wc >= 250 ? '✅ Requirement met!' : Math.max(0,250-wc) + ' words to go'}</span>
        </div>
        ${wc >= 250 ? `<button class="btn btn-green btn-sm" style="margin-top:0.75rem" onclick="submitSA('${key}',${n.id},${si})">Submit Answer</button>` : ''}
      </div>`;
  }).join('');

  return `${scoreLine}${mcHTML}<hr>${saHTML}`;
}

// When a user clicks a multiple choice option
function pickMC(noteId, qIdx, optIdx) {
  if (!mcAnswers[noteId]) mcAnswers[noteId] = {};
  if (mcAnswers[noteId][qIdx] !== undefined) return; // already answered
  mcAnswers[noteId][qIdx] = optIdx;
  const n = notes.find(x => x.id === noteId);
  renderNoteMain(n);
  // Restore active tab to quiz
  const quizTab = document.querySelector('.note-tab:nth-child(2)');
  switchNoteTab(quizTab, 'tab-quiz-' + noteId);
}

// Count words in a string
function countWords(text) {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

// Live word count update for short answer
function updateWordCount(key, noteId, si) {
  const ta  = document.getElementById('sa-' + key);
  if (!ta) return;
  const text = ta.value;
  if (!saText[noteId]) saText[noteId] = {};
  saText[noteId][si] = text;

  const wc    = countWords(text);
  const pct   = Math.min(wc / 250, 1);
  const color = wc >= 250 ? 'var(--electrical)' : wc > 150 ? 'var(--civil)' : 'var(--danger)';

  const barEl = document.getElementById('wcbar-' + key);
  const wcEl  = document.getElementById('wc-' + key);
  if (barEl) { barEl.style.width = Math.round(pct*100) + '%'; barEl.style.background = color; }
  if (wcEl) {
    wcEl.className = 'word-count ' + (wc >= 250 ? 'ok' : 'warn');
    wcEl.innerHTML = `<span>${wc} / 250 words minimum</span><span>${wc >= 250 ? '✅ Requirement met!' : (250-wc) + ' words to go'}</span>`;
  }
  // Show/hide submit button by re-rendering the note
  if (wc >= 250 && !document.querySelector(`#sa-${key} + .wc-bar-bg + .word-count + .btn-green`)) {
    const n = notes.find(x => x.id === noteId);
    if (n) { renderNoteMain(n); switchNoteTab(document.querySelector('.note-tab:nth-child(2)'), 'tab-quiz-' + noteId); }
  }
}

function submitSA(key, noteId, si) {
  toast('✅ Short answer submitted!');
}


// =============================================================
// SECTION I: AI PRACTICE (Claude API)
// Calls the Anthropic Claude API to generate dynamic questions
// based on the note's concepts and have a conversation.
// =============================================================

// Stores conversation history per note: { noteId: [ {role, content} ] }
const aiHistory = {};

function renderAIHTML(n) {
  const history = aiHistory[n.id] || [];
  const bubbles = history.map(msg => `
    <div class="ai-bubble ${msg.role === 'assistant' ? 'ai' : 'user'}">
      ${msg.content.replace(/\n/g,'<br>')}
    </div>`).join('');

  return `
    <div class="ai-section">
      <div class="ai-controls">
        <button class="btn btn-blue btn-sm" onclick="startAI(${n.id})">
          ${history.length ? '🔄 New Question' : '🤖 Start AI Practice'}
        </button>
        ${history.length ? `<button class="btn btn-outline btn-sm" onclick="clearAI(${n.id})">Clear</button>` : ''}
        <span style="font-size:0.78rem;color:var(--muted)">AI asks you questions based on your note topics</span>
      </div>

      <div class="ai-thread" id="ai-thread-${n.id}">
        ${history.length ? bubbles : '<div class="ai-bubble ai">Click "Start AI Practice" and I\'ll ask you a question about your session topics to test your understanding! 🎓</div>'}
      </div>

      ${history.length ? `
        <div class="ai-input-row">
          <input class="ai-input" type="text" id="ai-input-${n.id}"
            placeholder="Type your answer..."
            onkeydown="if(event.key==='Enter')sendAI(${n.id})">
          <button class="btn btn-blue btn-sm" onclick="sendAI(${n.id})">Send ↗</button>
        </div>` : ''}
    </div>`;
}

// Starts a new AI conversation with a generated question
async function startAI(noteId) {
  const n = notes.find(x => x.id === noteId);
  if (!n) return;

  // Reset history and show loading
  aiHistory[noteId] = [];
  renderNoteMain(n);
  switchNoteTab(document.querySelector('.note-tab:nth-child(3)'), 'tab-ai-' + noteId);

  const thread = document.getElementById('ai-thread-' + noteId);
  thread.innerHTML = '<div class="ai-bubble ai loading">🤖 Generating a question for you...</div>';

  // The system prompt tells Claude what it should do
  const systemPrompt = `You are an engineering tutor helping a student review their session notes. 
The student's note is titled "${n.title}" and covers these concepts:
${n.concepts.map((c,i) => `${i+1}. ${c}`).join('\n')}

Your job:
1. Ask ONE focused, challenging question about these concepts.
2. When the student answers, give specific, encouraging feedback.
3. Then ask a follow-up question that goes deeper.
4. Keep your messages concise (2-4 sentences max per message).
5. Always relate back to real-world engineering applications.

Start by asking your first question now.`;

  try {
    // Call the Anthropic Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: 'Please ask me a question about this topic.' }]
      })
    });

    const data = await response.json();

    // Extract the text from Claude's response
    const aiMsg = data.content?.find(b => b.type === 'text')?.text || 'Error: no response.';

    // Save to history
    aiHistory[noteId] = [
      { role: 'user',      content: 'Please ask me a question about this topic.' },
      { role: 'assistant', content: aiMsg }
    ];

    renderNoteMain(n);
    switchNoteTab(document.querySelector('.note-tab:nth-child(3)'), 'tab-ai-' + noteId);
    scrollAIThread(noteId);

  } catch (err) {
    thread.innerHTML = '<div class="ai-bubble ai">⚠️ Could not connect to AI. Please check your connection and try again.</div>';
    console.error('AI error:', err);
  }
}

// Sends the user's answer and gets Claude's follow-up
async function sendAI(noteId) {
  const input = document.getElementById('ai-input-' + noteId);
  const text  = input?.value.trim();
  if (!text) return;

  const n = notes.find(x => x.id === noteId);
  if (!n) return;

  // Add user's message to history
  aiHistory[noteId].push({ role: 'user', content: text });
  input.value = '';

  renderNoteMain(n);
  switchNoteTab(document.querySelector('.note-tab:nth-child(3)'), 'tab-ai-' + noteId);

  // Show loading indicator
  const thread = document.getElementById('ai-thread-' + noteId);
  const loadDiv = document.createElement('div');
  loadDiv.className = 'ai-bubble ai loading';
  loadDiv.textContent = '🤖 Thinking...';
  thread.appendChild(loadDiv);
  scrollAIThread(noteId);

  const systemPrompt = `You are an engineering tutor reviewing the topic "${n.title}". 
Concepts covered: ${n.concepts.join('; ')}.
Give feedback on the student's answer, then ask a deeper follow-up question. 
Be encouraging, specific, and keep responses to 3-5 sentences.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: aiHistory[noteId]
      })
    });

    const data = await response.json();
    const aiMsg = data.content?.find(b => b.type === 'text')?.text || 'No response received.';

    aiHistory[noteId].push({ role: 'assistant', content: aiMsg });

    renderNoteMain(n);
    switchNoteTab(document.querySelector('.note-tab:nth-child(3)'), 'tab-ai-' + noteId);
    scrollAIThread(noteId);

  } catch (err) {
    loadDiv.textContent = '⚠️ Network error. Try again.';
    console.error(err);
  }
}

function clearAI(noteId) {
  aiHistory[noteId] = [];
  const n = notes.find(x => x.id === noteId);
  renderNoteMain(n);
  switchNoteTab(document.querySelector('.note-tab:nth-child(3)'), 'tab-ai-' + noteId);
}

// Auto-scroll the AI chat thread to the bottom
function scrollAIThread(noteId) {
  const thread = document.getElementById('ai-thread-' + noteId);
  if (thread) setTimeout(() => { thread.scrollTop = thread.scrollHeight; }, 50);
}


// =============================================================
// SECTION J: TOAST NOTIFICATION
// Small popup message at the bottom right of the screen
// =============================================================
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}


// =============================================================
// SECTION K: INITIALIZE
// Run these when the page first loads
// =============================================================
renderCircles();
renderTutors();
renderBookings();
renderNotebook();

</script>
