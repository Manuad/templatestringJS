const url = 'src/api/database.json';
const productContainer = document.querySelector('#product-container');

fetch(url).then(response => response.json()).
then(
    (data) => {
    const products = data.productos.slice(0, 10);

    products.forEach(product => {
        const datosProducto = {
            id: product.id,
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: parseFloat(product.precio),
            materiales: product.materiales,
            funcionalidad: product.funcionalidad,
            cuidados: product.cuidados,
            imagen_frontal: product.imagen_frontal,
            imagen_lateral : product.imagen_lateral,
            imagen_extra: product.imagen_general,
        }

        const templateString = 
        `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card">
                <img class="card-img-top" src="${datosProducto.imagen_frontal}" alt="..."/>
                <div class="card-body">
                    <div class="d-flex flex-row">
                        <h5 class="card-title text-truncate">${datosProducto.nombre}</h5>
                        <a id="salas" class="ml-auto card-title" href="#"></a>
                    </div>
                    <p class="card-text text-truncate" style="max-height: 200px">
                        ${datosProducto.descripcion}
                    </p>
                    <input class="btn btn-dark btn-block" type="button" value="Saber más" data-toggle="modal" data-target="#${datosProducto.id}exampleModal"/>
                </div>
            </div>
        </div>
        `;

        const modalTemplateString = 
        `
        <div class="modal fade bd-example-modal-lg" id="${datosProducto.id}exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header bg-dark text-light">
                  <h5 class="modal-title" id="exampleModalLabel">${datosProducto.nombre}</h5>
                  <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="img-fluid" src="${datosProducto.imagen_frontal}" alt="..."/>
                        </div>
                        <div class="col-12 col-md-6">
                            <table class="table table-striped">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">
                                            <div>Precio</div>
                                        </th>
                                        <th scope="col">
                                            <div >Funcionalidad</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>$${datosProducto.precio}</td>
                                        <td>${datosProducto.funcionalidad}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>${datosProducto.materiales}</p>
                            <p>${datosProducto.cuidados}</p>
                            <input class="btn btn-block btn-outline-dark" type="button" value="Agregar al carrito"/>
                        </div>
                        
                        <div class="d-flex flex-lg-row flex-column justify-content-around">
                            <div class="p-1">
                                <img class="w-100 h-auto" src="${datosProducto.imagen_frontal}" alt="">
                            </div>
                            <div class="p-1">
                                <img class="w-100 h-auto" src="${datosProducto.imagen_lateral}" alt="">
                            </div>
                            <div class="p-1">
                                <img class="w-100 h-auto" src="${datosProducto.imagen_extra}" alt="">
                            </div>
                        </div>

                    </div>
                    <p>
                        ${datosProducto.descripcion}
                    </p>
                </div>
                <div class="modal-footer bg-dark text-light">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
        </div>
        `;

        productContainer.innerHTML += templateString;
        productContainer.innerHTML += modalTemplateString;
    });
});