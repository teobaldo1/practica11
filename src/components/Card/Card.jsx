import "./Card.css";

function Card({ data }) {
  return (
    <section>
      <div>
        <img src={data.sprites?.other.home.front_default} alt={data.name} />
      </div>
      <table>
        <thead >
          <tr >
            <th className="titulo">Propiedad</th>
            <th className="titulo">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titulo">ID</td>
            <td className="titulo">{data.id}</td>
          </tr>
          <tr>
            <td className="titulo">Nombre</td>
            <td className="titulo">{data.name}</td>
          </tr>
          <tr>
            <td className="titulo">Altura</td>
            <td className="titulo">{data.height}</td>
          </tr>
          <tr>
            <td className="titulo">Peso</td>
            <td className="titulo">{data.weight}</td>
          </tr>
          <tr>
            <td className="titulo">Experiencia base</td>
            <td className="titulo">{data.base_experience}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Card;
