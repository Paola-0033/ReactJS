import './PieComponente.css';

function PieComponente() {
  // componente de pie de página sencillo con nombre y marca registrada
  return (
    <footer className="pieDiv">
      <div className="pieIzqDiv">
        © {new Date().getFullYear()} Paola Rodriguez Hernandez
      </div>
      <div className="piederDiv">
        Marca registrada
      </div>
    </footer>
  );
}

export default PieComponente;