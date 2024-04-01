class DatosPersonales
{
    constructor(nombre, correo, telefono, imagen)
    {
        this._nombre = nombre;
        this._correo = correo;
        this._telefono = telefono;
        this._imagen = imagen;
    }

    get getNombre()
    {
        return this._nombre;
    }

    get getCorreo()
    {
        return this._correo;
    }

    get getTelefono()
    {
        return this._telefono;
    }

    get getImagen()
    {
        return this._imagen;
    }

    set setNombre(nombre)
    {
        this._nombre = nombre;
    }

    set setCorreo(correo)
    {
        this._correo = correo;
    }

    set setTelefono(telefono)
    {
        this._telefono = telefono;
    }

    set setImagen(imagen)
    {
        this._imagen = imagen;
    }
}

export { DatosPersonales }