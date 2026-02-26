import './RegistrarProducto.css';

function Registrarroducto() {
    return (
        <div className="registro-form">
            <h1>Registrar Producto Nuevo</h1>
            <form>
                <label htmlFor="titulo">Titulo:</label>
                <input type="text" id="titulo" name="titulo" required />

                <label htmlFor="descripcion">Descripción:</label>
                <textarea id="descripcion" name="descripcion" required></textarea>

                <label htmlFor="categoria">Categoría:</label>
                <input type="text" id="categoria" name="categoria" required />

                <label htmlFor="precio">Precio:</label>
                <input type="number" id="precio" name="precio" required />

                <label htmlFor="imagen">URL de la imagen:</label>
                <input type="text" id="imagen" name="imagen" required />

                <button type="submit">Registrar producto</button>
            </form>
        </div>
    );
}
export default Registrarroducto;