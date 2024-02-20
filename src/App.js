import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [times, setTimes] = useState( [
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const deleteCollaborator = (id) => 
  {
    console.log("deu certo my friend: ")
    setColaboradores (colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorDoTime = (cor, id) =>
  {
    setTimes(times.map(time => {
      if (time.id === id) 
      {
        time.cor = cor;
      }
      return time
    }));
  }

  const cadastrarTime = (novoTime) => 
  {
    setTimes([...times, { ...novoTime , id: uuidv4() }])
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
        <Time 
         mudarCor={mudarCorDoTime}
         key={indice}
         time={time}
         colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
         toDelete={deleteCollaborator}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;


{
  /*
    what do we learn?
      - primeiro de tudo, vamoa falar da mudança de uma constante para um state, como fizemos isso?
      bom, a constante de time, onde armazena as cores da nossa aplicação, era uma const, o que fizemos para 
      transformarmos ela num state, bom... fizemos o seguinte:
      era -> const time = [conteudo]
      ficou assim -> const [time, setTime] = ([conteudo])
      com isso, alteremos e podemos alterar o estado do conteudo da times

      feito isso, criamos a função ali chamada mudarCorDoTime, se verifica se os dados que estamos passando
      sao iguais, para então, mudar a cor do background do nosso card.

      o principal foi oq fizemos no index.js de Time, onde fizemos isso:
      <input onChange={event => mudarCor(event.target.value, time.nome)} value={time.corSecundaria} type='color' className='input-cor'/> 

      isso faz com que aquele pigmento de cor seja adicionada na nossa aplicação.
      o value={time.corSecundaria}, colocamos ele no codigo para decretar ou 'dizer' em qual valor, ou seja, a onde
      gostariamos de mexer, ou seja, qual cor gostariamos de alterar e a onde.

      e por fim, onChange={event => mudarCor(event.target.value, time.nome)}
      quando queremos alterar algo "pronto" digamos assim, precisamos colocar a função onChanged={}
      isso faz com que a alteração feita por nós, seja possível. essa função se espera um event, por isso
      colocamos ali, o mudarCor, é a mesmo prop que passamos ali em cima de <Time> e dai aquele, (event.targer.value)
      é essencial quando fazemos essa funcionalidade, por fim, passamos o valor da condição que fizemos ali na função
      mudarCorDoTime, isso faz com que a condição nesse função, possa ser validada, ou seja, tenha valor para então funcionar o IF.

      Outra coisa que fizemos dentro de index.js em Time, foi isso -> hexToRgba(time.cor, '0.6')  
      isso é uma biblioteca onde conseguimos passar uma cor e uma opacidade pra ela, ou seja,
      fazendo aquilo ali, nos decretemos uma cor para o card, e uma opacidade para o background daquele card
      o nome da biblioteca importada é essa -> import hexToRgba from 'hex-to-rgba'.
      Vale dizer aqui também que mudamos o nome que antes era corSecundaria para somente cor, e
      tiramos o corPrimaria, excluimos qualquer vestigio dele para fazer essa feature de opacidade, ja que
      a cor primaria ali, decretava o background para os cards.


      vale dizer aqui, que o uuidv4, é apenas outra biblioteca utlizada por devs, para nunca repetir ids (sim, é usada para isso mesmo)
  */
}

{
  /*
    what do we learn? nota importante, pois é a exclusão
      - bom, na função deleteColaborators, temos isso:
       setColaboradores (colaboradores.filter(colaborador => colaborador.id !== id))
       o setColaboradores, é para selecionar qual colaborador queremos, ou seja, precisamos
       pegar algum colaborador, e aqui, ele serve pra isso. Nele, fazemos um filter a onde
       filtramos que o ID do colaborador que pegamos (clicamos) tem que ser diferente do id que temos,
       feito isso, ele exclui somente um card, ou seja, o card que clicamos, mas, caso a gente colocasse
       === no lugar de !== ele excluiria todos os outros exceto aquele que clicamos, por isso, colocamos o diferente
       no lugar, inves de ser igual igual.

       E a onde crimos o unico de excluir, ou seja, a onde vai ser apertado para ser excluido o card, foi adicionado isso:
        onClick={() => (toDelete(colaborador.id))}> ou seja, no clique daquele icone, ele chama a propriedade toDelete, a onde
        armazena a nossa função que citamos acima ali, passando ele como uma função anonima, passando como parametro o colaborador.id
        ou seja, a validação e a verificação do nosso filter ali. (é necessário ser uma função, mais recomendado usar a anonima).

        Explicação do porque se necessita fazer uma funçao ali:

          tivemos que transformar um evento em uma arrow function para poder passar o 'id' do colaborador como parâmetro,
          mas por que precisamos fazer isto? não posso simplesmente fazer onClick={aoDeletar(id)}?

          caso acima, o aoDeletar será executado assim que o componente renderizar (pode tentar!) e isto não é o que esperamos!
          O onClick espera uma função, e ele recebe a execução dessa função, por isto ele executa assim que renderizado!

          Para resolver este problema, temos duas formas mais comuns, com a arrow function ou criando uma função no seu componente!
  */
}

{
  /*
      const cadastrarTime = (novoTime) => 
      {
        setTimes([...times, { ...novoTime , id: uuidv4() }])
      }

      essa função acima, faz jus ao nome, sendo responsável por criar um novo time.
      no componente formulario eu criei dois useState, nos quais sao:
        const [nomeTime, setNomeTime] = useState("");
        const [corTime, setCorTime] = useState("");

        e eu passo essas informações desses state, em aoAlterado, para então saber o que de literalmente, esta
        sendo alterado, ou, criado. e em valor, passo somente a propriedade de 'leitura'
        ou seja, passo o nomeTime e o corTime

        o que foi adicionado de codigo no componente formulario em index.js foi comentado também para melhor entendimento.
  */
}