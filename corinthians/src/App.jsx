import './App.css'
import Players from './fakedb.json'
import Card from './Components/Card/Card.jsx';

function App() {

return (
    <main>
        <section className='cards'>
            {Players.map((player) => (
                <Card
                    name = {player.name}
                    year = {player.year}
                    image = {player.image}
                    desc = {player.desc}
                    position = {player.position}
                />
            ))}
        </section>
    </main>
    
)
}

export default App
