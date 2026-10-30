import { useState } from 'react'
import './App.css'

function App() {
  const [bookManga, setBookManga] = useState([
    {titulo: "Solo Leveling", autor: "Coreia", descricao: "Jin ho é boladao e fica forte toda hora", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmh3ueakivqo6m39-8Ozfad-Ajopu7Zk7bG_kwL3xsyw&s=10"},
    {titulo: "Tower", autor: "Coreia", descricao: "torre sobe briga", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2YSx5tnH9Qa-quVLEWDfMlDp4yFmywBS1GqzsVvcCw&s=10"},
    {titulo: "High", autor: "Coreia", descricao: "High school briga de estudante", capa: "https://m.media-amazon.com/images/I/91EKosxJIdL._AC_UF1000,1000_QL80_.jpg"}
  ])
  const [tituloManga, setTituloManga] = useState("")
  const getRandomUUID = self.crypto.randomUUID();
  function abrirModal(){
    document.getElementById("meuModal")!.style.display = "flex";
  }
  function fecharModal(){
    document.getElementById("meuModal")!.style.display = "none";
  }
  return(
    
    <section>
          <h1>Minha Biblioteca</h1>
          <input value={tituloManga} onChange={(e) => setTituloManga(e.target.value)} />
          <p>Você digitou: {tituloManga}</p>
          <button id="addButton" onClick={() => abrirModal()}>+ Adicionar Manhwa</button>
          <div className='livros'>
              {bookManga.map((manga) => (
                <section key={getRandomUUID}>
                  <img src={manga.capa} width={300} height={450} alt={`Imagem da capa do manga ${manga.titulo}`} />
                  <div className='infosMangas'>
                    <h1>{manga.titulo}</h1>
                    <h3>{manga.autor}</h3>
                    <p>{manga.descricao}</p>
                  </div>
                  
                </section>
              ))}
          </div>
          <div id="meuModal" className='modal-overlay'>
            <div className='modal-content'>
              <button className='btn-fechar' onClick={() => fecharModal()}>&times;</button>
              <form id='formulario_adiciona_livro' action="">
                <div className='imagem_capa_form'>
                  <img src="" alt="" />
                </div>
                <div>
                  <label htmlFor="titulo_form">Titulo</label>
                  <input type="text" id='titulo_form' name='titulo_form' />
                </div>
                <div>
                  <label htmlFor="autor">Autor</label>
                  <input type="text" id='autor_form' name="autor_form"/>
                </div>
                <div>
                  <label htmlFor="descricao">Descrição</label>
                  <input type="text" name="descricao_form" id="descricao_form" />
                </div>
                <div>
                  <label htmlFor="capa">Capa</label>
                  <input type="url" src="" alt="" />
                </div>
                <button id='submit_forms'>Salvar</button>
              </form>
            </div>
          </div>


                  
    </section>
    
    
  )
}

export default App
