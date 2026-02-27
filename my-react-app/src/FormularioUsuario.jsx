import PropTypes from 'prop-types';
import './FormularioUsuario.css';

function FormularioUsuario({ 
  formData, 
  manejarCambio, 
  manejarSubmit, 
  manejarCancelar, 
  editando 
}) {
  return (
    <form className="formulario-usuario" onSubmit={manejarSubmit}>
      <div className="formulario-grid">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={manejarCambio}
          required
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={formData.apellidos}
          onChange={manejarCambio}
          required
        />
      
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={manejarCambio}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={manejarCambio}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={manejarCambio}
          required
        />
      </div>
      <div className="botones-formulario">
        <button type="submit" className="btn-guardar">
          {editando !== null ? 'Actualizar' : 'Guardar'}
        </button>
        <button type="button" className="btn-cancelar" onClick={manejarCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

FormularioUsuario.propTypes = {
  formData: PropTypes.shape({
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    direccion: PropTypes.string,
    telefono: PropTypes.string,
    correo: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  manejarCambio: PropTypes.func.isRequired,
  manejarSubmit: PropTypes.func.isRequired,
  manejarCancelar: PropTypes.func.isRequired,
  editando: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default FormularioUsuario;
