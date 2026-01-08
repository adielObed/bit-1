
const modoBtn = document.getElementById("modo-btn");
modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


const appsList = document.getElementById("apps-list");
const addAppBtn = document.getElementById("add-app");


const removeAppBtn = document.getElementById("remove-app");

let apps = ["Correo electrónico", "Loom", "OBS Studio"];


function renderApps() {
  appsList.innerHTML = "";
  apps.forEach((app, index) => {
    const item = document.createElement("p");
    item.textContent = `✔️ ${app}`;
    appsList.appendChild(item);
  });
}


addAppBtn.addEventListener("click", () => {
  const nuevaApp = prompt("Ingresa el nombre de la aplicación:");
  if (nuevaApp) {
    apps.push(nuevaApp);
    renderApps();
  }
});


removeAppBtn.addEventListener("click", () => {
  const appABorrar = prompt("Ingresa el nombre de la aplicación a borrar:");
  if (appABorrar) {
    apps = apps.filter(app => app.toLowerCase() !== appABorrar.toLowerCase());
    renderApps();
  }
});


const btnGoogle = document.getElementById("btn-google");
btnGoogle.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=fuWyKQSg3J8", "_blank");
});


renderApps();
