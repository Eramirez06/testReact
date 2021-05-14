import './App.css';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
    <img className="object-contain h-48 w-full mt-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo"/>
    <h1 className="text-4xl text-center mt-6 text-blue-800 " >¡Bienvenido a tu buscador Pokemon!</h1>
    <div class="flex justify-center mt-6">
        <div>
          <label for="first_name">First Name</label>
          <input type="text" name="first_name" id="first_name"/>
        </div>
</div>

    
    </>
  );
}

export default App;
