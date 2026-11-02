/* Library Dekho 👀 — Presented by Team Sandworm */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const wiki = t => 'https://en.wikipedia.org/w/index.php?search=' + encodeURIComponent(t);

/* ---------- DATA ---------- */
const GENRES = ['All', 'Fiction', 'History', 'Science', 'Literature', 'Competitive Exam'];
const BOOKS = [
  ['The Guide', 'R.K. Narayan', 'Fiction', '📖', 'A tourist guide turns into an accidental spiritual teacher in a small Indian village.'],
  ['The White Tiger', 'Aravind Adiga', 'Fiction', '🐯', 'A driver’s sharp, darkly funny rise through India’s class system.'],
  ['The Discovery of India', 'Jawaharlal Nehru', 'History', '🇮🇳', 'Nehru’s reflections on India’s history, culture and philosophy.'],
  ['India After Gandhi', 'Ramachandra Guha', 'History', '🏛️', 'History of the world’s largest democracy since independence.'],
  ['A Brief History of Time', 'Stephen Hawking', 'Science', '🌌', 'Black holes, the Big Bang and the nature of time explained simply.'],
  ['Wings of Fire', 'A.P.J. Abdul Kalam', 'Science', '🚀', 'Autobiography of India’s Missile Man and former President.'],
  ['Cosmos', 'Carl Sagan', 'Science', '🔭', 'A journey through the universe and humanity’s place in it.'],
  ['Gitanjali', 'Rabindranath Tagore', 'Literature', '🪷', 'Nobel-winning collection of devotional poems.'],
  ['Godaan', 'Munshi Premchand', 'Literature', '🐄', 'Classic Hindi novel about a poor farmer’s struggles.'],
  ['Hamlet', 'William Shakespeare', 'Literature', '🎭', 'The Prince of Denmark and his famous revenge tragedy.'],
  ['Indian Polity', 'M. Laxmikanth', 'Competitive Exam', '⚖️', 'Standard UPSC/State PCS book on the Indian Constitution.'],
  ['Quantitative Aptitude', 'R.S. Aggarwal', 'Competitive Exam', '🧮', 'Popular practice book for SSC, Banking and CAT.'],
  ['General Knowledge', 'Lucent', 'Competitive Exam', '🧠', 'Compact GK guide for railway, SSC and state exams.'],
  ['Concepts of Physics', 'H.C. Verma', 'Competitive Exam', '⚛️', 'Essential for JEE and NEET physics preparation.'],
  ['Train to Pakistan', 'Khushwant Singh', 'Fiction', '🚂', 'A human story set during the 1947 Partition.'],
  ['Midnight’s Children', 'Salman Rushdie', 'Fiction', '🌙', 'Magical-realist saga of children born at the moment of India’s independence.'],
  ['The God of Small Things', 'Arundhati Roy', 'Fiction', '🌧️', 'Family secrets and forbidden love in Kerala.'],
  ['Malgudi Days', 'R.K. Narayan', 'Fiction', '🏘️', 'Warm short stories from the fictional town of Malgudi.'],
  ['Sapiens', 'Yuval Noah Harari', 'History', '🦴', 'A brief history of humankind from the Stone Age to today.'],
  ['The Wonder That Was India', 'A.L. Basham', 'History', '🕌', 'Classic survey of early Indian civilisation.'],
  ['Modern India', 'Bipan Chandra', 'Competitive Exam', '📚', 'Core modern history text for UPSC aspirants.'],
  ['The Selfish Gene', 'Richard Dawkins', 'Science', '🧬', 'Evolution seen from the gene’s point of view.'],
  ['Astrophysics for People in a Hurry', 'Neil deGrasse Tyson', 'Science', '🪐', 'The universe explained in short, quick chapters.'],
  ['Pride and Prejudice', 'Jane Austen', 'Literature', '💌', 'Elizabeth Bennet, Mr Darcy and a sharp take on society.'],
  ['Kamayani', 'Jaishankar Prasad', 'Literature', '📜', 'Epic Hindi poem and a landmark of Chhayavad.'],
  ['Madhushala', 'Harivansh Rai Bachchan', 'Literature', '🍷', 'Famous Hindi quatrains full of philosophy.'],
  ['Objective General English', 'S.P. Bakshi', 'Competitive Exam', '📝', 'English practice for SSC and banking exams.'],
  ['Indian Economy', 'Ramesh Singh', 'Competitive Exam', '💹', 'Popular UPSC economy preparation guide.'],
  ['Verbal and Non-Verbal Reasoning', 'R.S. Aggarwal', 'Competitive Exam', '🧩', 'Reasoning practice for all major exams.']
].map(([title, author, genre, icon, desc]) => ({ title, author, genre, icon, desc, link: wiki(title) }));

const BRANCHES = [
  ['LPU Library, Phagwara', 'Lovely Professional University, Jalandhar–Delhi GT Road, Phagwara, Punjab', 1500, '8:00 AM – 10:00 PM'],
  ['Central City Library', 'Civil Lines, Main Market, City Centre', 250, '9:00 AM – 8:00 PM'],
  ['North Branch Library', 'Sector 12, Model Town', 120, '9:00 AM – 7:00 PM'],
  ['Railway Road Branch', 'Near Railway Station, Station Road', 80, '10:00 AM – 6:00 PM'],
  ['Senior Citizen Reading Hall', 'Gandhi Park, Old City', 60, '7:00 AM – 12:00 PM'],
  ['Student Study Hub', 'University Road, Near Bus Stand', 200, '7:00 AM – 11:00 PM']
].map(([name, addr, seats, hours]) => ({ name, addr, seats, hours }));

const STATES = {
  'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Kapurthala'],
  'Haryana': ['Gurugram', 'Faridabad', 'Karnal', 'Hisar', 'Ambala'],
  'Bihar': ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Prayagraj'],
  'Delhi': ['New Delhi', 'South Delhi', 'North Delhi', 'East Delhi', 'West Delhi'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
  'West Bengal': ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur', 'Asansol'],
  'Karnataka': ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi']
};

/* ---------- SPLASH + AUTH ---------- */
const show = (el, on = true) => el.classList.toggle('hidden', !on);
setTimeout(() => {
  $('#splash').classList.add('fade');
  setTimeout(() => $('#splash').remove(), 600);
  store.get('session') ? enterApp() : show($('#auth'));
}, 2600);

$$('.tab').forEach(t => t.onclick = () => {
  $$('.tab').forEach(x => x.classList.toggle('active', x === t));
  show($('#signupForm'), t.dataset.t === 'signup');
  show($('#loginForm'), t.dataset.t === 'login');
  $('#authMsg').textContent = '';
});

$('#signupForm').onsubmit = e => {
  e.preventDefault();
  const email = $('#suEmail').value.trim().toLowerCase();
  if (!/^[^@\s]+@gmail\.com$/.test(email)) return authMsg('Please enter a valid Gmail address.', true);
  const users = store.get('users', {});
  users[email] = { name: $('#suName').value.trim(), email, addr: $('#suAddr').value.trim() };
  store.set('users', users); store.set('session', email);
  enterApp();
};
$('#loginForm').onsubmit = e => {
  e.preventDefault();
  const email = $('#liEmail').value.trim().toLowerCase();
  if (!store.get('users', {})[email]) return authMsg('Account not found. Please sign up first.', true);
  store.set('session', email); enterApp();
};
const authMsg = (t, err) => { const m = $('#authMsg'); m.textContent = t; m.className = 'msg' + (err ? ' err' : ''); };
$('#logout').onclick = () => { localStorage.removeItem('session'); location.reload(); };

function enterApp() {
  const u = store.get('users', {})[store.get('session')] || { name: 'Reader' };
  $('#hello').textContent = 'Hi, ' + u.name.split(' ')[0];
  show($('#auth'), false); show($('#app'));
  initApp();
}

/* ---------- NAVIGATION ---------- */
function go(p) {
  $$('.page').forEach(s => show(s, s.id === p));
  $$('nav a').forEach(a => a.classList.toggle('active', a.dataset.p === p));
  window.scrollTo(0, 0);
}
$$('nav a').forEach(a => a.onclick = () => go(a.dataset.p));

/* ---------- CATALOG ---------- */
let genre = 'All';
function renderBooks() {
  const q = $('#q').value.toLowerCase();
  const list = BOOKS.filter(b => (genre === 'All' || b.genre === genre) &&
    (b.title + b.author).toLowerCase().includes(q));
  $('#grid').innerHTML = list.map(b => `
    <div class="card book" data-t="${esc(b.title)}">
      <div class="cover">${b.icon}</div><h4>${esc(b.title)}</h4>
      <small>${esc(b.author)}</small><br><span class="tag">${b.genre}</span></div>`).join('')
    || '<p>No books found.</p>';
  $$('.book').forEach(c => c.onclick = () => openBook(BOOKS.find(b => b.title === c.dataset.t)));
}
function openBook(b) {
  $('#bTitle').textContent = b.icon + ' ' + b.title;
  $('#bMeta').textContent = `${b.author} · ${b.genre}`;
  $('#bDesc').textContent = b.desc;
  $('#bGo').href = b.link;
  show($('#modal'));
}
$('#mClose').onclick = () => show($('#modal'), false);
$('#modal').onclick = e => { if (e.target.id === 'modal') show($('#modal'), false); };

/* ---------- BRANCHES ---------- */
function renderBranches() {
  const m = mine(), joins = store.get('joins', []);
  const all = [...BRANCHES, ...((m && m.libs) || []).map(l => ({ name: l.name, addr: l.addr, seats: 100, hours: '9:00 AM – 6:00 PM', mine: true }))];
  $('#branchList').innerHTML = all.map(b => {
    const j = m && joins.find(x => x.id === m.id && x.lib === b.name);
    return `<div class="card bcard"><div class="bhead"><span>🏛️</span><h3>${esc(b.name)}</h3>${b.mine ? '<em class="badge g">My Library</em>' : ''}</div>
      <p class="addr">📍 ${esc(b.addr)}</p>
      <div class="info"><span>💺 ${b.seats} seats</span><span>🕒 ${b.hours}</span></div>
      ${j ? `<p class="msg">✅ Joined · ${esc(j.date)} · ${esc(j.slot)}</p>` : `<button class="btn sm" data-j="${esc(b.name)}">Join</button>`}</div>`;
  }).join('');
  $$('#branchList [data-j]').forEach(x => x.onclick = () => openSlot(x.dataset.j));
}

/* ---------- MEMBERSHIP ---------- */
function msg(id, t, err) { const m = $(id); m.textContent = t; m.className = 'msg' + (err ? ' err' : ''); }
$('#memForm').onsubmit = e => {
  e.preventDefault();
  const id = 'LD-' + Math.floor(1000 + Math.random() * 9000);
  const mem = store.get('members', {});
  mem[id] = { name: $('#mName').value.trim(), email: $('#mEmail').value.trim(), plan: $('#mPlan').value };
  store.set('members', mem);
  setMine({ id, name: mem[id].name, plan: mem[id].plan, libs: [] });
  updateMemBtn(); renderBranches();
  msg('#memMsg', `🎉 Membership active! ${mem[id].name}, ${mem[id].plan} plan. ID: ${id}. Ab neeche se library add karo ya Branches mein join karo.`);
  e.target.reset();
};
function fillStates() {
  $('#stateSel').innerHTML += Object.keys(STATES).map(s => `<option>${s}</option>`).join('');
}
$('#stateSel').onchange = e => {
  const st = e.target.value, box = $('#distList');
  $('#joinMsg').textContent = '';
  if (!st) { box.innerHTML = ''; return; }
  const picks = [...STATES[st]].sort(() => Math.random() - .5).slice(0, 2)
    .map(d => `${d} District Central Library`);
  if (st === 'Punjab') picks.push('LPU Library, Phagwara');
  box.innerHTML = picks.map(p => `<div class="dist"><span>📚 ${esc(p)}</span>
    <button class="btn sm" data-l="${esc(p)}">Add to Branches</button></div>`).join('');
  $$('#distList button').forEach(b => b.onclick = () => {
    const m = mine();
    if (!m) return msg('#joinMsg', '⚠️ if you want to access this feature you need to buy membership.', true);
    m.libs = m.libs || [];
    if (!m.libs.some(l => l.name === b.dataset.l)) m.libs.push({ name: b.dataset.l, addr: st });
    setMine(m); renderBranches();
    msg('#joinMsg', `✅ ${b.dataset.l} added in the branches chosse your time slot from there.`);
  });
};

/* ---------- RESERVATION ---------- */
function fillReserve() {
  $('#rBook').innerHTML = BOOKS.map(b => `<option>${esc(b.title)}</option>`).join('');
  $('#rBranch').innerHTML = BRANCHES.map(b => `<option>${esc(b.name)}</option>`).join('');
  $('#rDate').min = new Date().toISOString().split('T')[0];
}
$('#resForm').onsubmit = e => {
  e.preventDefault();
  const id = $('#rId').value.trim().toUpperCase();
  const mem = store.get('members', {})[id];
  if (!mem) return msg('#resMsg', 'Membership ID not found. Register first.', true);
  const holds = store.get('holds', []);
  holds.push({ id, book: $('#rBook').value, branch: $('#rBranch').value, date: $('#rDate').value });
  store.set('holds', holds);
  msg('#resMsg', `📌 Hold placed for ${mem.name}. Pick it up by ${$('#rDate').value}.`);
  renderHolds();
};
function renderHolds() {
  const h = store.get('holds', []);
  $('#holds').innerHTML = h.length ? h.map(x =>
    `<li>📕 <b>${esc(x.book)}</b><br>${esc(x.branch)} · by ${esc(x.date)} · ${esc(x.id)}<br><a class="btn sm" href="${wiki(x.book)}" target="_blank" rel="noopener">Go &amp; Read →</a></li>`).join('')
    : '<li>No holds yet.</li>';
}

/* ---------- HELP ---------- */
function initStars() {
  const box = $('#stars'), saved = store.get('rating', 0);
  box.innerHTML = [1, 2, 3, 4, 5].map(n => `<span data-n="${n}">★</span>`).join('');
  const paint = n => $$('span', box).forEach(s => s.classList.toggle('on', s.dataset.n <= n));
  paint(saved);
  $$('span', box).forEach(s => s.onclick = () => { store.set('rating', +s.dataset.n); paint(+s.dataset.n); });
}

/* ---------- INIT ---------- */
let ready = false;
function initApp() {
  if (ready) return; ready = true;
  $('#filters').innerHTML = GENRES.map(g => `<button class="chip${g === 'All' ? ' active' : ''}">${g}</button>`).join('');
  $$('.chip').forEach(c => c.onclick = () => {
    genre = c.textContent; $$('.chip').forEach(x => x.classList.toggle('active', x === c)); renderBooks();
  });
  $('#q').oninput = renderBooks;
  const libs = Object.keys(STATES).length * STATES.Delhi.length + BRANCHES.length;
  $('#stats').innerHTML = `<div><b>${BOOKS.length}</b>Books</div><div><b>${libs}</b>Libraries Connected</div>
    <div><b>${Object.keys(STATES).length}</b>States</div><div><b>${BRANCHES.length}</b>City Branches</div>`;
  $('#netInfo').textContent = `${libs} libraries across ${Object.keys(STATES).length} states (Punjab, Haryana, Bihar, UP, Delhi, Maharashtra and more)`;
  renderBooks(); renderBranches(); fillStates(); fillReserve(); renderHolds(); initStars(); initExtras();
}

/* ---------- THEME (dark / light) ---------- */
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  store.set('theme', t);
  $$('.theme-btn').forEach(b => b.textContent = t === 'dark' ? '☀️ Light' : '🌙 Dark');
}
setTheme(store.get('theme', 'dark'));
$$('.theme-btn').forEach(b => b.onclick = () =>
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

/* ---------- MEMBER STATE / JOIN SLOTS / FEATURED BOOK ---------- */
const mine = () => store.get('mine_' + store.get('session'), null);
const setMine = m => store.set('mine_' + store.get('session'), m);
function updateMemBtn() {
  const m = mine(), b = $('#memBtn');
  b.textContent = m ? '✔ Member' : 'Buy Membership';
  b.className = 'btn sm ' + (m ? 'green' : 'red');
  if (m) $('#rId').value = m.id;
}
const SLOTS = ['9:00 – 10:00 AM', '10:00 – 11:00 AM', '11:00 AM – 12:00 PM', '2:00 – 3:00 PM', '4:00 – 5:00 PM', '6:00 – 7:00 PM'];
let slotLib = '', slotPick = '';
function openSlot(lib) {
  if (!mine()) { go('member'); msg('#memMsg', '⚠️ firstly buy membership,after that you access our this feature.', true); return; }
  slotLib = lib; slotPick = '';
  $('#sTitle').textContent = '🕒 Join ' + lib;
  $('#sDate').min = new Date().toISOString().split('T')[0]; $('#sDate').value = '';
  $('#slots').innerHTML = SLOTS.map(s => `<button type="button" class="chip">${s}</button>`).join('');
  $$('#slots .chip').forEach(c => c.onclick = () => {
    slotPick = c.textContent; $$('#slots .chip').forEach(x => x.classList.toggle('active', x === c));
  });
  msg('#sMsg', '');
  show($('#slotModal'));
}
$('#sConfirm').onclick = () => {
  if (!slotPick || !$('#sDate').value) return msg('#sMsg', 'Date aur time slot dono choose karo.', true);
  const j = store.get('joins', []);
  j.push({ id: mine().id, lib: slotLib, slot: slotPick, date: $('#sDate').value });
  store.set('joins', j);
  msg('#sMsg', `🎉 Join completed! ${slotLib} · ${$('#sDate').value} · ${slotPick}`);
  renderBranches();
  setTimeout(() => show($('#slotModal'), false), 1800);
};
$('#sClose').onclick = () => show($('#slotModal'), false);
$('#slotModal').onclick = e => { if (e.target.id === 'slotModal') show($('#slotModal'), false); };

function initExtras() {
  updateMemBtn();
  $('#memBtn').onclick = () => go('member');
  const tb = $('#tbook');
  tb.onclick = () => tb.classList.toggle('straight');
  $('#tArrow').onclick = e => {
    e.stopPropagation();
    openBook({ title: 'The Art of Reading', author: 'Library Dekho Picks', genre: 'Featured', icon: '📖',
      desc: 'Stories, ideas and knowledge — featured book of this week. Available at Central Library.',
      link: 'https://en.wikipedia.org/wiki/Reading' });
  };
}
