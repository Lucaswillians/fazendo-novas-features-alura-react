import './campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input type={type} value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default Campo


    /*
        what do we learn?
         - Adicionamos o campo de pigmento de cor para colocar a cor do card de time
           para que pudessemos fazer isso, colocamos ali nos parametros, a propriedade chamada
           type{}, no entanto, tivemos que colocar ela desse jeito aqui -> type = 'text'
           para que nao desse problema com as outras declarações de type duranto o resto do 
           codido da aplicação.
           feito isso, precisamos passar esse type dentro do input, pois, assim falamos a onde queremos
           que ele atue.
           com isso, feito alteramos entao o componente formulario no index.js dele, setando esse mesmo
           type, como color, ou seja, colocamos isso aqui no componente <campo> que exite naquele arquivo
           type='color', isso faz com que o tipo daquele campo, seja literalmente uma cor, ou seja
           aquele pigmemto de escolher a cor.
    */
