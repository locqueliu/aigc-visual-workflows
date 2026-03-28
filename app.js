async function loadWorkflows() {
  const index = await fetch("./workflows/index.json").then((response) => response.json());
  const files = await Promise.all(
    index.files.map((file) => fetch(`./workflows/${file}`).then((response) => response.json())),
  );
  return files;
}

function renderOverview(workflows) {
  const grid = document.querySelector("#workflow-grid");
  grid.innerHTML = workflows
    .map(
      (workflow) => `
        <article class="workflow-card">
          <p class="eyebrow">${workflow.category}</p>
          <h3>${workflow.title}</h3>
          <p>${workflow.summary}</p>
          <ul class="tag-list">
            ${workflow.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderDetails(workflows) {
  const details = document.querySelector("#details");
  details.innerHTML = workflows
    .map(
      (workflow) => `
        <article class="detail-block">
          <div class="detail-head">
            <div>
              <p class="eyebrow">${workflow.category}</p>
              <h3>${workflow.title}</h3>
              <p>${workflow.summary}</p>
            </div>
            <div class="detail-side">
              <div>Output: ${workflow.output}</div>
              <div>Primary mode: ${workflow.mode}</div>
            </div>
          </div>
          <ul class="detail-list">
            <li><strong>Inputs</strong>: ${workflow.inputs.join(", ")}</li>
            <li><strong>Generation stack</strong>: ${workflow.stack.join(", ")}</li>
            <li><strong>Quality checks</strong>: ${workflow.quality_checks.join(", ")}</li>
            <li><strong>Best use</strong>: ${workflow.best_for.join(", ")}</li>
          </ul>
        </article>
      `,
    )
    .join("");
}

function enableReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

const workflows = await loadWorkflows();
renderOverview(workflows);
renderDetails(workflows);
enableReveal();
