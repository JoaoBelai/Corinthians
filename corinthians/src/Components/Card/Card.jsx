import './Card.css'
import { useState } from 'react';
import Coracao from '../../assets/Icons/coracao.png'
import Anos70 from '../../assets/Images/anos70.png';
import Anos80 from '../../assets/Images/anos80.png';
import Anos90 from '../../assets/Images/anos90.png';
import Anos2000 from '../../assets/Images/anos2000.png';
import Anos2010 from '../../assets/Images/anos2010.png';
import Anos2020 from '../../assets/Images/anos2020.png';

function Card({name, desc, year, position, image}){
    const [isFlipped, setIsFliepped] = useState(false);

    const handleFlip = () =>{
        setIsFliepped(!isFlipped);
    };

    return(
        <article className='flipCard' onClick={handleFlip}>

            <div className={`flipCardInner ${isFlipped ? 'flip' : ''}`}>
                <div className='cardBack'>
                    <figure className='shirtImage'>
                        <img src={Anos70} alt="Imagem da camisa do jogador" />
                    </figure>
                </div>

                <div className='cardFront'>
                    <div className='topCard'>
                        <figure className='playerImage'>
                            <img src={image} alt="Imagem do jogador" />
                        </figure>
                    </div>

                    <article className='playerInfo'>
                        <h1 className='playerName'>{name}</h1>

                        <div className='infoContainer'>
                            <h2 className='year'>{year}</h2>
                            <h2 className='position'>{position}</h2>
                        </div>

                        <p className='playerDesc'>{desc}</p>

                        <button className='favButton'>FAVORITAR <img src={Coracao} alt="ícone de coração" /></button>
                    </article>
                </div>

            </div>

        </article>
    )
}

export default Card;