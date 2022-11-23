function mostrarAsignaturas(){
    let asignaturas = document.getElementById('asignaturas');
    let endPoint = 'http://localhost:8000/api/asignaturas';
    asignaturas.innerHTML = '';
    fetch(endPoint)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((element) => {
                asignaturas.innerHTML += `
                <div class="col s12 m6">
                    <div>
                        <table class="striped">
                            <thead>
                                <tr>
                                    <th>Identificador</th>
                                    <th>Nombre asignatura</th>
                                    <th>cantidad creditos</th>
                                    <th>cantidad horas</th>
                                    <th>carrera</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <br>
                                    <td>${element.id}</td>
                                    <br>
                                    <td>${element.nombre}</td>
                                    <br>
                                    <td>${element.creditos}</td>
                                    <br>
                                    <td>${element.intensidad}</td>
                                    <br>
                                    <td>${element.carrera}</td>
                                    <br>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                `;
            });
        });     
}