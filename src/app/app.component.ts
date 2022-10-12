import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Registro de usuarios';

    mensajeProperty = "";

    registradoProperty = false;

    nombreProp: String = "";
    emailProp: String = "";
    cargoProp: String = "";
    passwordProp: String = "";

    listaU: String[]= ["uno", "dos", "tres"];

    /* entradas: object[]; */
    entradas: Array<{tituloEntrada: String}>;

    constructor() {
        this.entradas = [
            {tituloEntrada: "esto es el titulo numero 1"},
            {tituloEntrada: "segundo texto2!!! segundo titulo"},
            {tituloEntrada: "Tercer titulo de entrada de blog"},
            {tituloEntrada: "Cuarto titulo 4º, cuarta entrada de blog title"},
        ]
    }

    registrarse(name: String, email: String, pass: String) {

        if (name.length >= 4) {
            this.registradoProperty = true;
        }
        
        this.mensajeProperty = `Usuario registrado exitosamente: ${name}, ${email} y su contraseña es: ${pass}`;


    }

}
