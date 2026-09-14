const fs = require('fs');
const path = require('path');
const P = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(P, 'utf8');

// Pull the data arrays out of the page so the noscript block can never drift from them.
const grab = (name) => {
  const m = html.match(new RegExp('const ' + name + ' = (\\[[\\s\\S]*?\\n\\];)'));
  if (!m) throw new Error('could not find ' + name);
  return eval(m[1].replace(/;$/, ''));
};
const COMPETENCIES = grab('COMPETENCIES');
const DATA = grab('DATA');
const STACK = grab('STACK');
const PERSONAL = grab('PERSONAL');

const entry = (e) => `      <div class="entry">
        <div class="dot"></div>
        <div class="entry-head">
          <h3 class="company">${e.company}</h3>
          <div class="dates">${e.dates}</div>
        </div>
        <div class="title-role">${e.role}</div>
${e.context ? `        <div class="context-line">${e.context}</div>\n` : ''}${e.scope && e.scope.length ? `        <div class="scope-chips">${e.scope.map(s => `<span class="scope-chip">${s}</span>`).join('')}</div>\n` : ''}${e.note ? `        <div class="entry-note">${e.note}</div>\n` : ''}        <ul class="bullets">
${e.bullets.map(b => `          <li>${b.text}</li>`).join('\n')}
        </ul>
      </div>`;

const block = `<noscript>
  <div class="section">
    <h2 class="section-title">Core Competencies</h2>
    <div class="comp-grid">
${COMPETENCIES.map(c => `      <div class="comp-card"><h3>${c.title}</h3><p>${c.text}</p></div>`).join('\n')}
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">Experience</h2>
    <div class="rail">
${DATA.map(entry).join('\n')}
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">Tech Stack</h2>
    <div class="stack-grid">
${STACK.map(s => `      <div class="stack-cat"><h3>${s.cat}</h3><div class="stack-pills">${s.tools.map(t => `<span class="pill">${t}</span>`).join('')}</div></div>`).join('\n')}
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">Beyond the Title</h2>
    <div class="personal-grid">
${PERSONAL.map(p => `      <div class="p-card"><div class="p-label">${p.label}</div><p>${p.text}</p></div>`).join('\n')}
    </div>
  </div>
</noscript>`;

const marker = /<!--NOSCRIPT-->|<noscript>[\s\S]*?<\/noscript>/;
if (!marker.test(html)) throw new Error('no noscript placeholder found');
html = html.replace(marker, block);
fs.writeFileSync(P, html);
console.log('noscript block injected:', block.split('\n').length, 'lines');
