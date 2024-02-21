import { FaTrash } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

import './colaborador.css'

const Colaborador = ({ aoFavoritar, colaborador, corDeFundo, toDelete}) => {

    const favoritar = () =>
    {
        aoFavoritar(colaborador.id)
    }

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
            <div className="favoritar">
                {colaborador.favorito ? <GoHeartFill size={25} onClick={favoritar} /> : <GoHeart size={25} onClick={favoritar}/>}
            </div>
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

  /*
    what do we learn?
     - Fizemos o favotirar nos cards, ou seja o like e o dislike, para isso,
       importamos os icones daquela biblioteca la do react-icons e então fizemos essa
       condição -> {colaborador.favorito ? <GoHeartFill size={25} onClick={favoritar} /> 
       : <GoHeart size={25} onClick={favoritar}/>}
        nessa condição nos fazemos um ternario para cada icone ali que pegamos daquela lib
        e na condição eles chamam uma função denominada como favoritar, essa função é a seguinte:
          const favoritar = () =>
          {
            aoFavoritar(colaborador.id)
          }
        essa função simplesmente chama a propriedade aoFavoritar que está em app.js, passando como parametros
        o colaborador.id, nos quais são usados em uma outra situação la dentro de app.js

        em App.js temos o seguinte:
          const resolverFavorito = (id) => 
          {
            setColaboradores(colaboradores.map(colaborador => {
            if (colaborador.id === id) (colaborador.favorito = !colaborador.favorito);
            return colaborador
            })) 
          }

          essa condição simplesmente verifica se quando clicamos no icone, o id bate com o colaborador.id
          que passamos naquela função favoritar, como disse que seria util, verificando isso, ele faz
          o que o IF pede ali, aquilo faz com que os icones troquem de like e dislike quando clicados
          e por fim, retornamos o colaborador.

          vale ressaltar que passamos o aoFavoritar{resolverFavorito} no componente <time> dentro de app
          para que possamos fazer funcionar o que fizemos.
           
          isso aqui -> aoFavoritar={aoFavoritar} também é passado dentro do index do componente Time,
          pois é em time onde se encontra os colaboradores (cards) e é nele a onde precisamos colocar 
          para que seja tudo executado como desenvolvido, pois é ali a onde se encontra toda a funcionalidade
          dos cards criados para os colaboradores.

  */
