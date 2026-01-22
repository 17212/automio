const connectors = [
  {
    title: 'WhatsApp Business API',
    desc: 'Verified templates, opt-ins, and two-way sync with your inventory/CRM.',
    tags: ['Meta-ready', 'Inventory sync', '24/7 bots'],
  },
  {
    title: 'Instagram Messaging',
    desc: 'DM automation with story replies, product queries, and human handoff.',
    tags: ['Story triggers', 'Lead capture', 'Handover'],
  },
  {
    title: 'Facebook Messenger',
    desc: 'Route inbox + comments to bots with SLA-aware escalations.',
    tags: ['Comments -> DM', 'Rules', 'SLA routing'],
  },
  {
    title: 'Telegram Bots',
    desc: 'Fast, scriptable bots for ops, support, and VIP communities.',
    tags: ['Communities', 'Ops alerts', 'APIs'],
  },
  {
    title: 'Web Chat',
    desc: 'Embed on site with session continuity into WhatsApp follow-ups.',
    tags: ['Session carryover', 'Lead enrichment', 'CSAT'],
  },
  {
    title: 'Shopify / HubSpot / Sheets',
    desc: 'Inventory-aware replies and CRM enrichment with zero-code routing.',
    tags: ['Stock-aware', 'CRM writeback', 'Sheets'],
  },
];

const flows = [
  {
    title: 'Lead-to-close autopilot',
    desc: 'Capture, qualify, and follow up across channels with intent-aware replies.',
    tags: ['Scoring', 'Sequencing', 'Reminders'],
  },
  {
    title: 'Inventory-aware support',
    desc: 'Bots know what’s in stock, recommend alternates, and auto-notify restock.',
    tags: ['Stock sync', 'Recommendations', 'Notify'],
  },
  {
    title: 'Cash-on-delivery guardrails',
    desc: 'Reduce COD returns with confirmations, address checks, and nudges.',
    tags: ['Address verify', 'NPS', 'Risk rules'],
  },
  {
    title: 'Post-purchase success',
    desc: 'Onboarding, how-tos, and CSAT collection with human-in-the-loop.',
    tags: ['Education', 'CSAT', 'Handoff'],
  },
  {
    title: 'Reactivation & win-back',
    desc: 'Target dormant users with compliant opt-ins and personalized offers.',
    tags: ['Segmentation', 'Offers', 'Compliance'],
  },
  {
    title: 'Ops & incidents',
    desc: 'Pager-style alerts, runbooks, and evidence logging over Telegram/WA.',
    tags: ['Runbooks', 'Alerts', 'Logs'],
  },
];

const team = [
  {
    name: 'Mahmoud Abo elros',
    role: 'Founder — Product & GTM',
    bio: 'Leads Automio to prove to Meta and customers that automation can be trustworthy.',
  },
  {
    name: 'Idris Ghamid',
    role: 'Co-Founder — Product & AI',
    bio: 'Designs AI playbooks, compliance guardrails, and pixel-perfect experiences.',
  },
  {
    name: 'Shady Ahmed',
    role: 'Co-Founder — Ops & Delivery',
    bio: 'Ensures every rollout hits SLAs, from pilots to scale programs.',
  },
  {
    name: 'Aymen Ali',
    role: 'Co-Founder — Engineering & Integrations',
    bio: 'Owns connectors, data reliability, and performance for all channels.',
  },
];

const connectorsGrid = document.getElementById('connectors-grid');
const flowsGrid = document.getElementById('flows-grid');
const teamGrid = document.getElementById('team-grid');

function createCard({ title, desc, tags }) {
  const el = document.createElement('div');
  el.className = 'card fade-up';
  el.innerHTML = `
    <p class="pill">${title}</p>
    <h3>${title}</h3>
    <p>${desc}</p>
    <div class="tag-row">
      ${tags.map((t) => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;
  return el;
}

function createTeamCard(member) {
  const el = document.createElement('div');
  el.className = 'team-card fade-up';
  el.innerHTML = `
    <p class="pill">${member.role.split('—')[0].trim()}</p>
    <h4>${member.name}</h4>
    <p class="team-role">${member.role}</p>
    <p class="muted">${member.bio}</p>
  `;
  return el;
}

connectors.forEach((c) => connectorsGrid.appendChild(createCard(c)));
flows.forEach((f) => flowsGrid.appendChild(createCard(f)));
team.forEach((m) => teamGrid.appendChild(createTeamCard(m)));

// Animations on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// Metric counters
const metricObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = target / 60;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = `${target}${suffix}`;
          clearInterval(interval);
        } else {
          el.textContent = `${current.toFixed(suffix === 'x' ? 1 : 0)}${suffix}`;
        }
      }, 20);
      metricObserver.unobserve(el);
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.metric-value').forEach((el) => metricObserver.observe(el));

// About modal
const aboutModal = document.getElementById('about-modal');
const openAbout = () => aboutModal.classList.add('open');
const closeAbout = () => aboutModal.classList.remove('open');

['about-btn', 'about-btn-footer', 'about-btn-mobile'].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', openAbout);
});

document.getElementById('about-close').addEventListener('click', closeAbout);
aboutModal.addEventListener('click', (e) => {
  if (e.target === aboutModal) closeAbout();
});

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  const open = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = open ? 'none' : 'flex';
});
