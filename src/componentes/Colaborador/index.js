import { FaTrash } from "react-icons/fa";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, toDelete}) => {
    return (<div className="colaborador">
        <FaTrash 
            className='delete' 
            size={21} 
            onClick={() => (toDelete(colaborador.id))}>
                
        </FaTrash>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador


  /*
    what do we learn?
     - Adicionamos uma biblioteca do react, no qual importa icones, 
     essa lib, chamada react-icons, possui varios icones distintos,
     com isso, conseguimos colocar um icone de lixo acima dos cards de 
     colaboradores, para então, dar a entender que podemos apagar o determindo card,
     subistituimos a tag que envolve o "botao" do icone, ou seja, a onde esta com a classe
     'delete', pelo import que fizemos daquele icone na biblioteca,
     ou seja, se estava assim antes -> <div> uhul </div>
     ficaria assim agora -> <FaTrash> uhul </FaTrash>
     substituimos a tag envolvente, pela importada.

     - vale ressaltar, que o onClick ali no componente, serve para chamar
     uma função que criamos la em app.

     - esse toDelete, foi criado também como uma especie de props, em time e 
     colaboradores, pois sempre que eu for editar em colaboradores, ou seja, no card dele,
     eu preciso passar oq quero determinar para aquilo, ou seja,
     eu queria determinar que esse icone, aparecesse no card dos colaboradores, com isso
     tive que passar a 'props' toDelete, no componente time, para que eu pudesse adiconar algo ali.

    - o size={21} ali, ele serve somente para passar o tamanho daquele determinada coisa,
    ali, por exemplo foi o tamanho do icone, vale ressaltar que há muitas funcionalidades
    iguais ali, que fazem coisas muitas outras coisas.
  */
