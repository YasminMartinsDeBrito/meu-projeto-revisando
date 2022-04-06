import './App.css';
import PersonCard from './components/PersonCard';
import Card from './components/Card';
import Developer from './components/Developer';
import MeuComponente from './components/MeuComponent';
import Metodos from './components/Metodos';
import { FruitList } from './components/FruitList';
import { StudentsNames } from './components/StudentsNames';
import { OddNumbersList } from './components/OddNumbersList';
import { SumOfNumbers } from './components/SumOfNumbers';
import { FirstEvenNumber } from './components/FirstEvenNumber';

function App() {

  const users = { Jane:"jane", Joe:"Joe",Patrick:"Patrick"};
  const ages = {um:22, dois: 37, tres:43};

  return (
    <div className="App">
      <header className="App-header">
        <div>
           <PersonCard name={users.Jane} age={ages.um}/>
        <PersonCard name={users.Joe} age={ages.dois}/>
        <PersonCard name={users.Patrick}age={ages.tres}/>
        <PersonCard name="Yasmin" age="22"/>
        <Card/>
        <br/>
        </div>
       <div>
         <Developer name="Yasmin" age="22" country="Brasil"/>
        <Developer name={users.Jane} age={ages.um} country="Espanha"/>
        <Developer name={users.Joe} age={ages.dois} country="Estados Unidos"/>
        <Developer name={users.Patrick} age={ages.tres} country="Mexico"/>
        <MeuComponente />
       </div>
        
        <Metodos/>
        <FruitList/>
        <div>
        <StudentsNames/>
        </div>
        <OddNumbersList/>

        <SumOfNumbers/>
        <FirstEvenNumber/>

      </header>
    </div>
  );
}

export default App;
