d = document.querySelector(".propiedades")
let html = ""
for (let valor of propiedadesJSON) {
        html += `
    <div class="propiedades">
        <div class="propiedad">
            <div class="img" style="background-image: url('${valor.src}')"></div>
            <section>
                <h5>${valor.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${valor.rooms}</p>
                    <p>Metros: ${valor.m}</p>
                </div>
                <p class="my-3">${valor.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
        </div>
    </div>
  </section>
  `}
    d.innerHTML = html;
         
function calcular() {
    let cuartos = document.querySelector("#cuartos").value;
    let metrosDesde = document.querySelector("#desde").value;
    let metrosHasta = document.querySelector("#hasta").value;
    let parrafo = document.querySelector('#resultado');
    cuenta = 0
    if (cuartos == "" || metrosDesde == "" || metrosHasta == "") {
      alert("Faltan campos por llenar");
    }
    let html = ""
    for (let valor of propiedadesJSON) {
      if (cuartos <= valor.rooms && metrosDesde <= valor.m && metrosHasta >= valor.m) {
        cuenta = cuenta + 1
        html += `
    <div class="propiedades">
        <div class="propiedad">
            <div class="img" style="background-image: url('${valor.src}')"></div>
            <section>
                <h5>${valor.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${valor.rooms}</p>
                    <p>Metros: ${valor.m}</p>
                </div>
                <p class="my-3">${valor.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
        </div>
    </div>
  </section>
  `}
  if(cuenta==0){
    nhr= document.querySelector("#nhr")
    nhr.innerHTML ="No hay resultados para esta búsqueda"
    nhr.style.color = "red"
  }
      const d = document.querySelector(".propiedades");
      d.innerHTML = html;
      parrafo.innerHTML = cuenta
    }
  };
  button = document.querySelector("#button")
  button.addEventListener("click", calcular);
  