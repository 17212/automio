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
    name: 'محمود عبدالعزيز عبدالغني رجب ابو الروس',
    role: 'Founder — +201063200566',
    bio: 'Founder leading automation, compliance, and delivery. Reach him directly at the number above.',
  },
  {
    name: 'Idris Ghamid',
    role: 'Product & AI Lead',
    bio: 'Designs intelligent playbooks, compliance guardrails, and product experience.',
  },
  {
    name: 'Shady Ahmed',
    role: 'Ops & Delivery Lead',
    bio: 'Runs operations and launches automation while keeping SLAs healthy.',
  },
  {
    name: 'Aymen Ali',
    role: 'Engineering & Integrations Lead',
    bio: 'Builds connectors and ensures data reliability and performance across channels.',
  },
];

const faqs = [
  {
    q: 'How do you satisfy platform messaging policies?',
    a: 'We design opt-ins, tags, and notification types to match channel rules. Domain (automio.jo3.org) is verified and every journey is auditable.',
  },
  {
    q: 'Can you integrate my inventory and CRM?',
    a: 'Yes. Shopify, HubSpot, Sheets, custom APIs. Bots only propose items that are in stock, and write back orders and lead status.',
  },
  {
    q: 'What about Arabic/English bilingual flows?',
    a: 'We ship bilingual intents, fallbacks, and templates. Region-aware escalation routes to the right human team.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Pilot in 10–14 days: connect channels, map data, ship playbooks, and monitor weekly.',
  },
];

const connectorsGrid = document.getElementById('connectors-grid');
const flowsGrid = document.getElementById('flows-grid');
const teamGrid = document.getElementById('team-grid');
const faqList = document.getElementById('faq-list');
const logosGrid = document.getElementById('logos-grid');
const testimonialCard = document.getElementById('testimonial-card');
const tName = document.getElementById('t-name');
const tRole = document.getElementById('t-role');
const testimonialDots = document.getElementById('testimonial-dots');

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

if (connectorsGrid) connectors.forEach((c) => connectorsGrid.appendChild(createCard(c)));
if (flowsGrid) flows.forEach((f) => flowsGrid.appendChild(createCard(f)));
if (teamGrid) team.forEach((m) => teamGrid.appendChild(createTeamCard(m)));
if (faqList)
  faqs.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <div class="faq-question">
        <span>${item.q}</span>
        <span class="pill">${idx === 0 ? 'Meta' : 'Answer'}</span>
      </div>
      <div class="faq-answer">${item.a}</div>
    `;
    faqList.appendChild(el);
  });

if (logosGrid) {
  const logos = ['Noor Retail', 'Forsa Telecom', 'Luma Beauty', 'Atlas Foods', 'Helio Market', 'Northwind Ecom'];
  logos.forEach((name) => {
    const chip = document.createElement('div');
    chip.className = 'logo-chip fade-up';
    chip.textContent = name;
    logosGrid.appendChild(chip);
  });
}

if (testimonialCard && testimonialDots && tName && tRole) {
  const testimonials = [
    {
      quote: 'Automio cut our COD returns by 18% with automated confirmations on WhatsApp + IG.',
      name: 'Mariam K.',
      role: 'COO, Noor Retail (KSA)',
    },
    {
      quote: 'Meta reviewers passed our templates in one go. The audit trail was the clincher.',
      name: 'Ali F.',
      role: 'Head of CX, Forsa Telecom (UAE)',
    },
    {
      quote: 'Inventory-aware replies stopped 90% of “is this available?” tickets overnight.',
      name: 'Rania S.',
      role: 'Growth Lead, Luma Beauty (EG)',
    },
  ];

  let testimonialIndex = 0;
  function renderTestimonial(index) {
    const item = testimonials[index];
    testimonialCard.querySelector('.testimonial-quote').textContent = `“${item.quote}”`;
    tName.textContent = item.name;
    tRole.textContent = item.role;
    testimonialDots.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  testimonials.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      testimonialIndex = i;
      renderTestimonial(testimonialIndex);
    });
    testimonialDots.appendChild(dot);
  });
  renderTestimonial(testimonialIndex);
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial(testimonialIndex);
  }, 5500);
}

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
const openAbout = () => aboutModal && aboutModal.classList.add('open');
const closeAbout = () => aboutModal && aboutModal.classList.remove('open');

['about-btn', 'about-btn-footer', 'about-btn-mobile'].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn && aboutModal) btn.addEventListener('click', openAbout);
});

const aboutClose = document.getElementById('about-close');
if (aboutClose && aboutModal) aboutClose.addEventListener('click', closeAbout);
if (aboutModal)
  aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) closeAbout();
  });

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
  });
}

// Close mobile menu on nav click
if (mobileMenu)
  mobileMenu.querySelectorAll('a, button').forEach((el) =>
    el.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    })
  );

// FAQ accordion
if (faqList) {
  faqList.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      const active = item.classList.contains('active');
      faqList.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));
      if (!active) item.classList.add('active');
    });
  });
}

// Contact form mailto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent('Automio brief');
    const body = encodeURIComponent(
      `Name/Company: ${formData.get('name')}\nEmail: ${formData.get('email')}\nChannels: ${formData.get(
        'channels'
      )}\nVolume: ${formData.get('volume')}\nAutomation needs: ${formData.get('message')}`
    );
    window.location.href = `mailto:hello@automio.jo3.org?subject=${subject}&body=${body}`;
  });
}
