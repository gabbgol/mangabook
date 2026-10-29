import { useState } from 'react'
import './App.css'

function App() {
  const [bookManga, setBookManga] = useState([
    {titulo: "Solo Leveling", autor: "Coreia", descricao: "Jin ho é boladao e fica forte toda hora", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmh3ueakivqo6m39-8Ozfad-Ajopu7Zk7bG_kwL3xsyw&s=10"},
    {titulo: "Tower", autor: "Coreia", descricao: "torre sobe briga", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2YSx5tnH9Qa-quVLEWDfMlDp4yFmywBS1GqzsVvcCw&s=10"},
    {titulo: "High", autor: "Coreia", descricao: "High school briga de estudante", capa: "https://m.media-amazon.com/images/I/91EKosxJIdL._AC_UF1000,1000_QL80_.jpg"}
  ])
  return(
    <section>
          <h1>Minha Biblioteca</h1>
          <button id="addButton" onClick={() => setBookManga(
            [...bookManga,{titulo: "Titulo", autor: "Autor", descricao: "descricao", capa:"https://cdn.dooca.store/121439/products/pyzzpnxxtp8oq0bfrdqtdj8wtnmd9ddyrxfq_640x640+fill_ffffff.png?v=1695341442&webp=0"}])}>+ Adicionar Manhwa</button>

          <div className='livros'>
              {bookManga.map((manga) => (
                <section key={manga.titulo}>
                  <img src={manga.capa} width={350} height={450} alt={`Imagem da capa do manga ${manga.titulo}`} />
                  <h1>{manga.titulo}</h1>
                  <h3>{manga.autor}</h3>
                  <p>{manga.descricao}</p>
                </section>
              ))}
          </div>



                  
    </section>
    
    
  )
}

export default App
