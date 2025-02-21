import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const limite = 10;
  const [contador, setContador] = useState(0);
  const aumentar = () => {
    if (contador < limite) {
        setContador(contador + 1);
      }
    };

    useEffect(() => {
      if (limite === contador){
        alert('haz alcanzado el limite de 10');
      }
    }, [contador]);

    return(
        <div>
          <p>contador: {contador}</p>
          <button onClick={aumentar}>contador</button>
        </div>
    );
}
export default App
