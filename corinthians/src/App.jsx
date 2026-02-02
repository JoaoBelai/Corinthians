import './App.css'
import { useState, useEffect } from 'react';
import Players from './fakedb.json'
import Card from './Components/Card/Card.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
    const CarouselImages =[
        '../public/assets/Images/torcida.png',
        '../public/assets/Images/democracia.png',
        '../public/assets/Images/liberta.png',
        '../public/assets/Images/fraseneto.png',
        '../public/assets/Images/chutecapetinha.png',
        '../public/assets/Images/mundial.png',
        '../public/assets/Images/porcada.png',
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const [favorites, setFavorites] = useState(() => {
        const saves = localStorage.getItem('favorite-legends');
        if (!saves || saves === "undefined") {
            return [];
        }
        return saves ? JSON.parse(saves) : [];
    });

    const [flippedCards, setFlippedCards] = useState(() => {
        const flippeds = localStorage.getItem('flipped-cards');
        if (!flippeds || flippeds === "undefined") {
            return [];
        }
        return flippeds ? JSON.parse(flippeds) : [];
    })

    useEffect(() => {
        localStorage.setItem('flipped-cards', JSON.stringify(flippedCards))
    }, [flippedCards])

    useEffect(() => {
        localStorage.setItem('favorite-legends', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFlip = (playername) =>{
        setFlippedCards(prev => {
            if (prev.includes(playername)){
                return prev.filter(name => name !== playername);
            } else {
                return [...prev, playername];
            }
        })
    }

    const toggleFav = (playername) => {
        setFavorites(prev => {
            if (prev.includes(playername)){
                return prev.filter(name => name !== playername);
            } else {
                return [...prev, playername];
            }
        });
    }

    useEffect(() => {
        const interval = setInterval (() =>{
            setCurrentIndex((prevIndex) =>{
                return prevIndex === CarouselImages.length - 1 ? 0 : prevIndex + 1;
            });
        }, 4000);

        return () => clearInterval(interval)
    }, [CarouselImages.length]);
 
    return (
        <main>
            <header className='headerMain'>
                <Navbar contador = {favorites.length}/>
            </header>

            <section className='carousel'>
                <div className='currentCarousel' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {CarouselImages.map((img, index) => (
                        <figure key={index} className="carouselImage">
                            <img src={img} alt={`Slide ${index}`} />
                        </figure>
                    ))}
                </div>
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
                            isFavorited = {favorites.includes(player.name)} 
                            onToggleFav = {() => toggleFav(player.name)}
                            isFlipped = {flippedCards.includes(player.name)}
                            onToggleFlip = {() => toggleFlip(player.name)}
                        />
                    ))}
                </div>
            </section>
        </main>
        
    )
}

export default App
