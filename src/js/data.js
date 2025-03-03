const asignments_data = [
  {
    id: 1,
    title: "TP2_PEMWEB_HTML",
    description:
      "Struktur HTML Dasar, Tag, dan Atribut HTML. Halaman ini membuat bio link seperti linktree atau lynkid",
    due_date: "10 Feb 25",
    path: "pages/tp2_biolink/index.html",
  },
  {
    id: 2,
    title: "TP3_PEMWEB_FORM_LOGIN",
    description: "Membuat Halaman Login",
    due_date: "17 Feb 25",
    path: "pages/forms/auth_login.html",
  },
  {
    id: 3,
    title: "TP3_PEMWEB_FORM_REGISTER",
    description: "Membuat halaman register",
    due_date: "17 Feb 25",
    path: "pages/forms/auth_register.html",
  },
  {
    id: 4,
    title: "TP4_PEMWEB_STYLING_BIOLINK",
    description: "Mempercantik halaman bio link dengan CSS",
    due_date: "24 Feb 25",
    path: "pages/tp4_styling/biolink.html",
  },
  {
    id: 5,
    title: "TP5_PEMWEB_FLEXBOX",
    description: "On progress...",
    due_date: "3 Mar 25",
    path: "pages/tp5_responsive/biolink.html",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const projectsList = document.querySelector(".list_projects");

  asignments_data.forEach(function (project) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "card_project";

    projectDiv.innerHTML = `
            <div class="card_header">
              <a href="${project.path}" class="project_name" target="_blank">${project.title}</a>
              <span class="project_date">${project.due_date}</span>
            </div>
            <div class="card_body">
              <p class="project_desc">${project.description}</p>
            </div>
          `;

    projectsList.appendChild(projectDiv);
  });
});
