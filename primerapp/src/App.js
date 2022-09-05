
import './App.css';
import Testimonio from './componentes/Testimonio.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='contenedor-principal'>
          
        <h1 className='titulo'>Simpsons</h1>
       
        <Testimonio
        nombre='Homero Simpson'
        cargo='Trabaja'
        imagen='homero'
        empresa='Planta nuclear'
        audio="vocodes_2e7d1976-d7bb-4338-927b-4d72983773ca.wav"
        alt='Homero'
        testimonio='"Homero, un mentiroso empedernido, carece de justicia y de razonamiento práctico, de estabilidad y de virtudes, pero no es malicioso, sino amable y valiente."' 
        
        />
        <Testimonio
        nombre='Marge Simpson'
        cargo='Trabaja'
        imagen='marge'
        empresa='La casa'
        audio="vocodes_2e7d1976-d7bb-4338-927b-4d72983773ca.wav"
        alt='Marge'
        testimonio='"Marge se dedica a hacer de ama de casa a tiempo completo. Suele estar todo el día en casa, limpiando, cocinando o cuidando de Maggie y por regla general no sale más que para hacer las compras."' />
        
        <Testimonio
        nombre='Bart Simpson'
        cargo='No Trabaja'
        imagen='bart'
        empresa='Ningun lado'
        audio="vocodes_2e7d1976-d7bb-4338-927b-4d72983773ca.wav"
        alt='Bart'
        testimonio='"Bart es un niño de diez años​ travieso, simpático, un poco egoísta y malcriado con una gran energía. En la escuela, discrimina a los niños más inteligentes que él y se junta con los más gamberros, cosa que le provoca numerosos castigos."' />
        
        <Testimonio
        nombre='Lisa Simpson'
        cargo='No Trabaja'
        imagen='lisa'
        empresa='Ningun lado'
        audio="vocodes_2e7d1976-d7bb-4338-927b-4d72983773ca.wav"
        alt='Lisa'
        testimonio='"Lisa la niñita de ocho años superdotada, activista, idealista, responsable y frustrada; cuyas ganas de hacerse mayor y querer ser tratada como una persona adulta chocan constantemente con su edad y crecimiento."' />
        
        <Testimonio
        nombre='Maggie Simpson'
        cargo='No Trabaja'
        imagen='maggie'
        empresa='Ningun lado'
        audio="vocodes_2e7d1976-d7bb-4338-927b-4d72983773ca.wav"
        alt='Maggie'
        testimonio='"Maggie un bebé desatendido en una familia disfuncional, que ha tenido que desarrollar una forzada autosuficiencia. De todas maneras, como bebé, siente un gran apego por su madre, en contraste con su padre, quien le presta muy poca atención, llegando a olvidar que existe."' />
       
        </div>
      </header>
      
    </div>
  );
}

export default App;
