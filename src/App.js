
import './App.css';
import { blog } from './Data/blog';
import Container from './components/Container';



function App() {
  return(
  
    <div className="App">
  

<Container>
{
  blog.map((v,i)=>{
    return(
      <Card pitems={v}/>
    )
  })
}
</Container>

    </div>
    
)
}




 function Card({pitems}) {
  return (
    <div>


<div class="card ci">
  <div class="card-body">
    <h5 class="card-title">{pitems.price}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{pitems.name}</h6>
    <p class="card-text">{pitems.id}</p>

  </div>

    </div>
    </div>
  )
}



export default App;
