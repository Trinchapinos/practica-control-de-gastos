let saldo = 700;

const movimientos = [
  {
    concepto: "Alquiler",
    cantidad: 800,
    tipo: "gasto",
  },
  {
    concepto: "Compra mercadona",
    cantidad: 100,
    tipo: "gasto",
  },
  {
    concepto: "Venta online",
    cantidad: 300,
    tipo: "ingreso",
  },
  {
    concepto: "Nómina",
    cantidad: 2000,
    tipo: "ingreso",
  },
];

// CONSTANTES ENLAZADAS CON QUERYSELECTOR

const cantidadSaldo = document.querySelector("#cantidadSaldo");
const fraseSaldo = document.querySelector("#fraseSaldo");

const inputMovimiento = document.querySelector("#inputMovimiento");
const inputCantidad = document.querySelector("#inputCantidad");
const btnIngresos = document.querySelector("#btnIngresos");
const btnGastos = document.querySelector("#btnGastos");

const btnFiltroTodos = document.querySelector("#btnFiltroTodos");
const btnFiltroIngresos = document.querySelector("#btnFiltroIngresos");
const btnFiltroGastos = document.querySelector("#btnFiltroGastos");

const listaUltimos = document.querySelector("#listaUltimos");
const totalGastado = document.querySelector("#totalGastado");

// SALDO Y FRASE PANTALLA

const mostrarSaldo = () => {
  cantidadSaldo.textContent = `${saldo} €`;

  if (saldo > 500) {
    fraseSaldo.textContent = `Hay dinero, vas bien`;
  } else if (saldo >= 100) {
    fraseSaldo.textContent = `Cuidado, no queda mucho dinero`;
  } else {
    fraseSaldo.textContent = `¡¡NO GASTES MAS!!`;
  }
};

const pintarMovimientos = (lista) => {
  listaUltimos.innerHTML = "";

  lista.forEach((movimiento) => {
    const li = document.createElement("li");
    const signo = movimiento.tipo === "ingreso" ? "+" : "-";

    li.innerHTML = `
    <span class="concepto">${movimiento.concepto}</span>
    <span class="${movimiento.tipo}">${signo}${movimiento.cantidad} €</span>
    `;

    listaUltimos.appendChild(li);
  });
};

const calcularGastosTotales = () => {
  const gastos = movimientos.filter(
    (movimiento) => movimiento.tipo === "gasto",
  );
  const totalGastos = gastos.reduce(
    (suma, movimiento) => suma + movimiento.cantidad,
    0,
  );

  totalGastado.textContent = `${totalGastos} €`;
};

mostrarSaldo();
pintarMovimientos(movimientos);
calcularGastosTotales();
