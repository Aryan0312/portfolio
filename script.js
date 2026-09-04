const responsePanel = document.getElementById("responsePanel");
const endpointSelect = document.getElementById("endpointSelect");
const methodSelect = document.getElementById("methodSelect");
const executeBtn = document.getElementById("executeBtn");
const copyBtn = document.getElementById("copyBtn");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const terminalSwitch = document.getElementById("terminalSwitch");
const terminalOverlay = document.getElementById("terminalOverlay");
const terminalClose = document.getElementById("terminalClose");
const terminalScreen = document.getElementById("terminalScreen");
const terminalOutput = document.getElementById("terminalOutput");
const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");

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
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      organization: "E-Governance Cell, Parul University",
      location: "Vadodara, Gujarat",
      duration: "Oct 2025 - Present",
      stack: ["TypeScript", "Node.js", "PostgreSQL", "RBAC"],
      highlights: [
        "Architecting GateLogger backend workflows for visitor and vehicle management.",
        "Built request-based approvals and RBAC, reducing manual administrative effort by 60%.",
        "Developed type-safe APIs, validation pipelines, and database integrations for internal systems."
      ]
    },
    {
      role: "Backend Developer Intern",
      organization: "mavens.dev",
      location: "Vadodara, Gujarat",
      duration: "Mar 2026 - May 2026",
      stack: ["TypeScript", "Node.js", "Prisma", "PostgreSQL"],
      highlights: [
        "Designed backend services for real-time order processing and billing workflows in a production POS platform.",
        "Shipped REST APIs and modular services with cleaner database access patterns.",
        "Modeled relational schemas with ACID-aware transaction flows."
      ]
    }
  ]
};

const asciiArt = String.raw`
                      #           @ @
                *  /@@@# %   %         /
               ##@@@@@@@@@@# @    @@@
         @ # @@#@@@@@@@@@@@@@    @
         @@@@#@@@@@@@@@@@@@@@   #@ @@
      @@@@@@@@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@
      @@@@@@*@  @ @@@@@@@ @&@*@@@@@@@@
      @#@@@@# ##@ @@ ##@ # ## # @@#@@
       #@@@@  #    @           @@@ #@#
          #@#                    @@@
            @                 @ .@
            @#       @       @
             @       @@@@#     @
             @   @     ##      @
          @@@@   @          #@@@@
      @@@@@@@@     #@@@@#   @@@@@@@@
@@@@#@@@@@@@@@@@      @  # @@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@`.trim();

const terminalCommands = {
  help: {
    description: "Show available commands",
    run: () => [
      "Available commands:",
      "  neofetch    Show the profile system card",
      "  whoami      Print Aryan's profile summary",
      "  about       Show current focus and mindset",
      "  skills      List languages, backend, frontend, infra, and tools",
      "  projects    Show featured projects with source links",
      "  experience  Show internship timeline",
      "  contact     Show email and social links",
      "  github      Open GitHub profile",
      "  linkedin    Open LinkedIn profile",
      "  leetcode    Open LeetCode profile",
      "  clear       Clear terminal output",
      "  exit        Return to GUI portfolio"
    ].join("\n")
  },
  neofetch: {
    description: "Show profile system card",
    run: () => renderNeofetch()
  },
  whoami: {
    description: "Print profile summary",
    run: () => [
      `${payloads.developer.name} - ${payloads.developer.role}`,
      payloads.developer.focus,
      "",
      `Location: ${payloads.developer.location}`,
      `Education: ${payloads.developer.education.degree}`,
      `Institution: ${payloads.developer.education.institution}`
    ].join("\n")
  },
  about: {
    description: "Show current focus",
    run: () => [
      "Backend-focused Software Engineer fired up about building scalable systems,",
      "getting hands-on with real production problems, and learning software from the inside out.",
      "",
      "Current focus:",
      ...payloads.developer.currentFocus.map((item) => `  - ${item}`)
    ].join("\n")
  },
  skills: {
    description: "List skills",
    run: () => Object.entries(payloads.skills)
      .map(([group, items]) => `${group}: ${items.join(", ")}`)
      .join("\n")
  },
  projects: {
    description: "Show projects",
    run: () => payloads.projects
      .map((project, index) => [
        `${index + 1}. ${project.name}`,
        `   ${project.type}`,
        `   Stack: ${project.stack.join(", ")}`,
        `   Source: ${project.repo}`
      ].join("\n"))
      .join("\n\n")
  },
  experience: {
    description: "Show experience",
    run: () => payloads.experience
      .map((item) => [
        `${item.duration} - ${item.role}`,
        `${item.organization}, ${item.location}`,
        `Stack: ${item.stack.join(", ")}`,
        ...item.highlights.map((highlight) => `  - ${highlight}`)
      ].join("\n"))
      .join("\n\n")
  },
  contact: {
    description: "Show contact links",
    run: () => [
      `Email: ${payloads.developer.contact.email}`,
      `GitHub: ${payloads.developer.contact.github}`,
      `LinkedIn: ${payloads.developer.contact.linkedin}`,
      `LeetCode: ${payloads.developer.contact.leetcode}`
    ].join("\n")
  },
  github: {
    description: "Open GitHub profile",
    run: () => {
      window.open(payloads.developer.contact.github, "_blank", "noopener");
      return "Opening GitHub...";
    }
  },
  linkedin: {
    description: "Open LinkedIn profile",
    run: () => {
      window.open(payloads.developer.contact.linkedin, "_blank", "noopener");
      return "Opening LinkedIn...";
    }
  },
  leetcode: {
    description: "Open LeetCode profile",
    run: () => {
      window.open(payloads.developer.contact.leetcode, "_blank", "noopener");
      return "Opening LeetCode...";
    }
  }
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function linkify(value) {
  const escaped = escapeHtml(value);
  return escaped.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}

function renderNeofetch() {
  const info = [
    ["user", payloads.developer.name],
    ["role", payloads.developer.role],
    ["focus", "Scalable systems, backend engineering, useful tools"],
    ["stack", "TypeScript, Node.js, Express, PostgreSQL, MongoDB"],
    ["infra", "Docker, Linux, NGINX, Cloudflare, Tailscale"],
    ["projects", payloads.projects.map((project) => project.name).join(", ")],
    ["experience", payloads.experience.map((item) => item.organization).join(", ")],
    ["email", payloads.developer.contact.email],
    ["github", payloads.developer.contact.github]
  ];
  return `
    <div class="neofetch-block">
      <pre class="neofetch-art">${escapeHtml(asciiArt)}</pre>
      <div class="neofetch-info">
        <p><span class="terminal-success">${escapeHtml(payloads.developer.name)}</span>@portfolio</p>
        <p>---------------------------</p>
        ${info.map(([key, value]) => `<p><span>${escapeHtml(key)}</span>: ${linkify(value)}</p>`).join("")}
      </div>
    </div>
    <pre class="terminal-hint">Type <span>help</span> to list commands.
Try <span>whoami</span>, <span>skills</span>, <span>projects</span>, <span>experience</span>, <span>contact</span>, <span>github</span>, <span>clear</span>, or <span>exit</span>.</pre>
  `;
}

function openTerminal() {
  terminalOverlay.classList.add("active");
  terminalOverlay.setAttribute("aria-hidden", "false");
  terminalSwitch.setAttribute("aria-expanded", "true");
  terminalSwitch.textContent = "Terminal Active";
  document.body.classList.add("terminal-active");
  terminalOutput.innerHTML = renderNeofetch();
  terminalScreen.scrollTop = terminalScreen.scrollHeight;
  requestAnimationFrame(() => terminalInput.focus());
}

function closeTerminal() {
  terminalOverlay.classList.remove("active");
  terminalOverlay.setAttribute("aria-hidden", "true");
  terminalSwitch.setAttribute("aria-expanded", "false");
  terminalSwitch.textContent = "Shift to Terminal";
  document.body.classList.remove("terminal-active");
  terminalSwitch.focus();
}

function writeTerminal(command, result, isError = false) {
  const entry = document.createElement("div");
  entry.className = "terminal-entry";
  entry.innerHTML = `
    <div class="terminal-line"><span class="terminal-prompt">aryan@portfolio:~$</span><pre>${escapeHtml(command)}</pre></div>
    <div class="terminal-result ${isError ? "terminal-error" : ""}">${typeof result === "string" && result.includes("<") ? result : linkify(result)}</div>
  `;
  terminalOutput.appendChild(entry);
  terminalScreen.scrollTop = terminalScreen.scrollHeight;
}

function runTerminalCommand(rawCommand) {
  const commandText = rawCommand.trim();
  if (!commandText) return;
  const [command] = commandText.toLowerCase().split(/\s+/);

  if (command === "clear") {
    terminalOutput.innerHTML = "";
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
    return;
  }

  if (command === "exit" || command === "gui") {
    writeTerminal(commandText, "Returning to GUI portfolio...");
    setTimeout(closeTerminal, 180);
    return;
  }

  const handler = terminalCommands[command];
  if (!handler) {
    writeTerminal(commandText, `Command not found: ${command}. Type help for available commands.`, true);
    return;
  }

  writeTerminal(commandText, handler.run(commandText));
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

const terminalHistory = [];
let terminalHistoryIndex = 0;

terminalSwitch.addEventListener("click", openTerminal);
terminalClose.addEventListener("click", closeTerminal);
terminalOverlay.addEventListener("click", (event) => {
  if (event.target === terminalOverlay) terminalInput.focus();
});
terminalScreen.addEventListener("click", () => terminalInput.focus());

terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = terminalInput.value.trim();
  if (command) {
    terminalHistory.push(command);
    terminalHistoryIndex = terminalHistory.length;
    runTerminalCommand(command);
  }
  terminalInput.value = "";
});

terminalInput.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    terminalHistoryIndex = Math.max(0, terminalHistoryIndex - 1);
    terminalInput.value = terminalHistory[terminalHistoryIndex] || "";
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    terminalHistoryIndex = Math.min(terminalHistory.length, terminalHistoryIndex + 1);
    terminalInput.value = terminalHistory[terminalHistoryIndex] || "";
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if ((event.metaKey || event.ctrlKey) && key === "t") {
    event.preventDefault();
    openTerminal();
  }

  if (event.key === "Escape" && terminalOverlay.classList.contains("active")) {
    closeTerminal();
  }
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
