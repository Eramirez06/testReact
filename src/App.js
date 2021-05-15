import './App.css';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <img
        className="object-contain h-48 w-full mt-6"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="logo"
      />
      <h1 className="text-4xl text-center mt-6 text-white">
        ¡Bienvenido a tu buscador Pokémon!
      </h1>
      <div className="flex justify-center mt-6">
        <form className="mb-6" action="/" method="post">
          <div class="flex flex-col mb-4">
            <label
              className="mb-2 uppercase font-bold text-lg text-grey-darkest"
              for="pokemon"
            >
              Pokemon a buscar:
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              type="text"
              name="pokemon"
              id="pokemon"
            />
          </div>
          <input className="transform motion-safe:hover:scale-110"
          type="submit"
          value=" Buscar Pokémon" />
 
        </form>
      </div>
      
    </>
  );
}

export default App;
