import { DatosPersonales } from "../src/moduloUsuarios.mjs";

const datosUsuarios = async () =>
{
    const url = "https://randomuser.me/api/?results=5000";

    try 
    {
        const response = await fetch(url);
        const data = await response.json();

        let card = "";

        //Selecciono 10 Usuarios
        for(let i = 1; i <= 10; i++) 
        {
            //Creo Objeto Datos Personales
            let datosUsuarios = new DatosPersonales();

            //Ingreso Datos a modulos para armar la Card
            datosUsuarios.setNombre = data.results[i].name.first+' '+data.results[i].name.last;
            datosUsuarios.setCorreo = data.results[i].email;
            datosUsuarios.setTelefono = data.results[i].cell;
            datosUsuarios.setImagen = data.results[i].picture.large;

            //Armo Card con datos obtenidos desde el modulo
            card += `
                <div class="col-12 col-md-6 col-xl-6 pt-4">
                    <div class="card text-center">
                        <img src="${datosUsuarios.getImagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"><p>${datosUsuarios.getNombre}</p></h5>
                        </div>
                        <ul class="card-body list-group list-group-flush">
                            <li class="list-group-item"><p>${datosUsuarios.getCorreo}</p></li>
                            <li class="list-group-item"><p>${datosUsuarios.getTelefono}</p></li>
                        </ul>
                    </div>
                </div>
            `;

            //Envio Card a la WEB
            document.querySelector('#user-data').innerHTML = card;
        }
        
    } 
    catch (error) 
    {
        console.log("ERROR: ", error);
    }
}

//LLamo funcion datos Usuarios
datosUsuarios();