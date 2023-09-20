import "./Nav.css";

function Nav({ fnSubmit, fnClick, fnOnChange, dataOptions }) {
  return (
    <nav>
      <form onSubmit={fnSubmit}>
        <label htmlFor="name">
          Escribe el nombre específico de un pokemon:
        </label>
        <input type="text" className="inputs" />
        <button type="submit" className="botones">
          Buscar
        </button>
      </form>
      <div>
        <label>Filtra según escribes:</label>
        <div id="options">
          <input type="text" onChange={fnOnChange} className="inputs" />
          <ul>
            {dataOptions?.map((pokemon, i) => (
              <li key={i}>
                <button
                  value={pokemon.name}
                  onClick={fnClick}
                  className="botones"
                >
                  {pokemon.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <button onClick={fnClick} value="pikachu" className="botones">
            Pikachu
          </button>
        </div>
        <div>
          <button onClick={fnClick} value="charizard" className="botones">
            Charizard
          </button>
        </div>
       
      </div>
      <div>
          <img
            src="/public/titulopokemon.png"
            alt="imagen"
            className="title"
          />
        </div>
    </nav>
  );
}

export default Nav;
