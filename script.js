const salas = [
  { id: 1, nome: "Sala 101", capacidade: 30, status: "livre", horario: "08:00 - 10:00" },
  { id: 2, nome: "Sala 102", capacidade: 25, status: "ocupada", horario: "10:00 - 12:00" },
  { id: 3, nome: "Auditório", capacidade: 100, status: "livre", horario: "14:00 - 16:00" },
  { id: 4, nome: "Sala 201", capacidade: 20, status: "livre", horario: "08:00 - 09:30" },
  { id: 5, nome: "Sala 202", capacidade: 35, status: "ocupada", horario: "11:00 - 13:00" },
  { id: 6, nome: "Laboratório A", capacidade: 15, status: "livre", horario: "09:00 - 11:00" },
  { id: 7, nome: "Sala 301", capacidade: 40, status: "ocupada", horario: "13:00 - 15:00" },
];

const listaSalas = document.getElementById("lista-salas");
const filtroCapacidade = document.getElementById("filtroCapacidade");

// Função para renderizar salas
function renderizarSalas(salasFiltradas) {
  listaSalas.innerHTML = ""; // limpa a lista

  salasFiltradas.forEach(sala => {
    const li = document.createElement("li");
    li.classList.add("sala");

    li.innerHTML = `
      <div class="info-sala">
        <h2>${sala.nome}</h2>
        <p>Capacidade: ${sala.capacidade}</p>
        <p>Status: <span class="status-${sala.status}">${sala.status === "livre" ? "🟢 Livre" : "🔴 Ocupada"}</span></p>
        <p>Horário: ${sala.horario}</p>
      </div>
      <button class="botao-selecionar">
        ${sala.status === "livre" ? "Selecionar" : "Cancelar"}
      </button>
    `;

    const botao = li.querySelector(".botao-selecionar");
    botao.addEventListener("click", () => {
      // Alterna o status da sala
      sala.status = sala.status === "livre" ? "ocupada" : "livre";
      renderizarSalas(filtrarSalas());
    });

    listaSalas.appendChild(li);
  });
}

// Função para aplicar filtro por capacidade
function filtrarSalas() {
  const valorFiltro = parseInt(filtroCapacidade.value) || 0;
  return salas.filter(sala => sala.capacidade >= valorFiltro);
}

// Atualiza a lista ao digitar no filtro
filtroCapacidade.addEventListener("input", () => {
  renderizarSalas(filtrarSalas());
});

// Renderiza inicialmente todas as salas
renderizarSalas(salas);
