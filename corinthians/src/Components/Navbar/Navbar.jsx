import './Navbar.css'
import Fiel from '../../../public/assets/Images/fiel.png';
import Escudo from '../../../public/assets/Images/corinthians.png';
import Home from '../../../public/assets/Icons/home.png'; 
import Star from '../../../public/assets/Icons/star.png';

function Navbar({contador}){
    return(
        <nav>
            <figure className='fielImage'>
                <img src={Fiel} alt="Logo do fiel torcedor do corinthians" />
            </figure>

            <a className='links' href="#"><img src={Home} alt="Ícone Casa" />Início</a>

            <div className='slotLogo'></div>
            <figure className='logoCorinthians'>
                <img src={Escudo} alt="Escudo do corinthians" />
            </figure>

            <a className='links' href="#legends"><img src={Star} alt="Ícone Estrela"/>Lendas</a>

            <article className='counter'>
                <h1 className='counterTitle'>Favoritos: {contador}</h1>
            </article>
        </nav>
    )
}

export default Navbar;