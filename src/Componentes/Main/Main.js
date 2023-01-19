import {CardVideo} from "../CardVideo/CardVideo"
import {Nav} from "../Nav/Nav"
import{M} from "./style"



export function Main() {

    const card1 = {
        titulo: "Título do vídeo",
        imagemDoVideo: "https://picsum.photos/400/400?a=1",
        textoAlternativo: "descrição da imagem"
        
      };

    return(
        <M>
          <Nav className="menu-vertical"/>
          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </M>
    )
}