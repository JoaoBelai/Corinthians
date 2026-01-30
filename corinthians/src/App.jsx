import './App.css'
import Players from './fakedb.json'
import Card from './Components/Card/Card.jsx';
import Marcelinho from './assets/Images/marcelinho.png'

function App() {

return (
    <main>
        <section className='cards'>
            {Players.map((player) => (
                <Card
                    name = {player.name}
                    year = {player.year}
                    image = {Marcelinho}
                    desc = {player.desc}
                    position = {player.position}
                />
            ))}
        </section>
    </main>
    
)
}

export default App
