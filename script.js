const responsePanel = document.getElementById("responsePanel");
const endpointSelect = document.getElementById("endpointSelect");
const methodSelect = document.getElementById("methodSelect");
const executeBtn = document.getElementById("executeBtn");
const copyBtn = document.getElementById("copyBtn");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const EMAILJS_PUBLIC_KEY = "2cK3HBfS0r_q8JEof";
const EMAILJS_SERVICE_ID = "service_39n3vtf";
const EMAILJS_TEMPLATE_ID = "template_szchlhh";

const payloads = {
  developer: {
    id: "ARYAN-001",
    name: "Aryan Shrivastav",
    role: "Software Engineer",
    focus: "Building scalable systems, getting hands-on with real production problems, and learning software from the inside out",
    mindset: ["Understand fundamentals deeply", "Design before implementation", "Keep architecture clean", "Let consistency compound"],
    specialization: ["TypeScript Backend", "API Design", "System Design", "Automation"],
    location: "Vadodara, Gujarat",
    education: {
      degree: "B.Tech Computer Science & Engineering - Artificial Intelligence",
      institution: "Parul University, Vadodara",
      expected: 2028
    },
    contact: {
      email: "aryanshrivastav.dev@gmail.com",
      github: "https://github.com/Aryan0312",
      linkedin: "https://www.linkedin.com/in/aryan-shrivastav-274a51321/",
      leetcode: "https://leetcode.com/u/aryan5375/"
    },
    currentFocus: ["Building scalable systems", "Getting hands dirty with real software", "Learning engineering from the inside out", "Shipping reliable tools"]
  },
  skills: {
    languages: ["TypeScript", "JS", "Python", "C++", "SQL", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Prisma", "Session Auth", "RBAC"],
    frontend: ["React", "Responsive UI", "Accessible controls", "Framework-free HTML/CSS/JS"],
    infrastructure: ["Docker", "Linux", "Ubuntu", "NGINX", "Cloudflare", "Tailscale"],
    tools: ["Git", "GitHub", "Postman", "Browser DevTools"]
  },
  projects: [
    {
      name: "FormForge AI",
      type: "AI-powered Google Form generator for college events",
      repo: "https://github.com/Aryan0312/google_form_tool",
      stack: ["TypeScript", "Node.js", "Express.js", "Google Forms API", "Google Drive API", "Google Calendar API", "Groq", "Llama 3.3"],
      features: ["AI event parsing", "Google Form generation", "Smart team logic", "Custom fields", "Reminder drafts", "OAuth", "Rate limiting"],
      sourceOnly: true
    },
    {
      name: "Propelify",
      type: "Rental property and mobility platform",
      repo: "https://github.com/Aryan0312/propelify_backend",
      stack: ["TypeScript", "Express.js", "MongoDB", "Mongoose", "React", "Vite", "Socket.IO", "Cloudinary"],
      features: ["Authentication", "Property and vehicle discovery", "Owner listings", "Bookings", "Issue tracking", "Mechanic dispatch", "Notifications", "Admin dashboards", "OpenAPI validation"],
      sourceOnly: true
    }
  ]
};

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function colorize(json) {
  return json
    .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
    .replace(/: "([^"]*)"/g, ': <span class="json-str">"$1"</span>')
    .replace(/\b(\d+)\b/g, '<span class="json-num">$1</span>');
}

function typeHtml(html) {
  responsePanel.innerHTML = "";
  responsePanel.scrollTop = 0;
  let i = 0;
  const timer = setInterval(() => {
    responsePanel.innerHTML = html.slice(0, i) + '<span class="cursor"></span>';
    i += 180;
    if (i > html.length) {
      responsePanel.innerHTML = html;
      responsePanel.scrollTop = 0;
      clearInterval(timer);
    }
  }, 16);
}

executeBtn.addEventListener("click", () => {
  const key = endpointSelect.value;
  const isPost = methodSelect.value === "POST";
  const body = isPost ? {
    status: 201,
    message: "Resource initialized.",
    request_id: generateUUID()
  } : payloads[key];
  const status = isPost ? "201 Created" : "200 OK";
  const time = isPost ? "92ms" : `${key === "skills" ? 37 : 68}ms`;
  const json = JSON.stringify(body, null, 2);
  const html = `HTTP/1.1 <span class="ok">${status}</span>   ${time}\n` +
    "Content-Type: application/json\n\n" +
    colorize(json);
  typeHtml(html);
});

methodSelect.addEventListener("change", () => {
  if (methodSelect.value === "POST") executeBtn.textContent = "Execute";
});

copyBtn.addEventListener("click", async () => {
  const text = endpointSelect.options[endpointSelect.selectedIndex].text;
  try { await navigator.clipboard.writeText(text); } catch {}
  copyBtn.classList.add("copied");
  setTimeout(() => copyBtn.classList.remove("copied"), 700);
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  let index = 0;
  const slides = [...carousel.querySelectorAll(".carousel-slide")];
  const dots = [...carousel.querySelectorAll(".dot-indicator")];
  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }
  carousel.querySelectorAll(".carousel-btn").forEach((btn) => {
    btn.addEventListener("click", () => show(index + Number(btn.dataset.dir)));
  });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector(".btn-submit");
  const formData = new FormData(contactForm);
  const email = String(formData.get("from_email") || "").trim();

  contactForm.elements.reply_to.value = email;
  contactForm.elements.time.value = new Date().toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  });

  submitButton.disabled = true;
  submitButton.textContent = "Executing...";
  formStatus.className = "form-status";
  formStatus.textContent = "HTTP/1.1 102 Processing - sending request";

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: String(formData.get("from_name") || "").trim(),
          name: String(formData.get("from_name") || "").trim(),
          from_email: email,
          reply_to: email,
          message: String(formData.get("message") || "").trim(),
          time: contactForm.elements.time.value
        }
      })
    });

    if (!response.ok) {
      throw new Error(`EmailJS responded with ${response.status}`);
    }

    formStatus.textContent =
      `HTTP/1.1 202 Accepted - message delivered to Aryan (${response.status})`;
    contactForm.reset();
  } catch (error) {
    formStatus.className = "form-status form-status-error";
    formStatus.textContent =
      "HTTP/1.1 500 Failed - could not deliver request. Try email directly.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "▷ POST Request";
  }
});
