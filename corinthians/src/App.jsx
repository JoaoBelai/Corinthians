import './App.css'
import { useState } from 'react';
import Players from './fakedb.json'
import Card from './Components/Card/Card.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Carrossel from '../public/assets/Images/fraseneto.png';

function App() {
    const [totalFav, setTotalFav] = useState(0);

    const handleFav = (isFav) => {
        setTotalFav (prev => isFav ? prev + 1 : prev - 1);
    }

    return (
        <main>
            <header className='headerMain'>
                <Navbar contador = {totalFav}/>
            </header>

            <section className='carousel'>
                <figure className='imageCarousel'>
                    <img src={Carrossel} alt="Imagem Carrossel" />
                </figure>
            </section>

            <section className='legends' id='legends'>
                <h1 className='titleLegends'>LENDAS ALVINEGRAS</h1>

                <div className='cards'>
                    {Players.map((player) => (
                        <Card
                        key={player.name}
                        name = {player.name}
                        year = {player.year}
                        image = {player.image}
                        desc = {player.desc}
                        position = {player.position}
                        onFavChange={handleFav}
                        />
                    ))}
                </div>
            </section>
        </main>
        
    )
}

export default App
