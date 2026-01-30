import './App.css'
import Card from './Components/Card/Card.jsx';
import Marcelinho from './assets/Images/marcelinho.png'

function App() {

return (
    <main>
        <Card
            name="Marcelinho Carioca"
            year="1990'"
            position="Meio-Campista"
            desc="O Pé de Anjo, é sinônimo de Corinthians. Com faltas mágicas 
                e raça de sobra, decidiu jogos e enlouqueceu a Fiel. 
                Ídolo eterno, foi peça-chave em títulos como o mundial de 2000, 
                marcou seu nome para sempre no coração do torcedor."
            image={Marcelinho}
        />
    </main>
    
)
}

export default App
