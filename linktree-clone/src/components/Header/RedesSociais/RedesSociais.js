import './RedesSociais.css'

const RedesSociais = () => {

    const ListaSociais = [
        {id: 1, urlNome: 'Instagram' , url: 'https://www.instagram.com/rodrigueslucas062/'} ,
        {id: 2, urlNome: 'LinkedIn' , url: 'https://www.instagram.com/rodrigueslucas062/'} ,        
    ]

    const LinksRedes = ListaSociais.map((props) =>
        <div key = {props.id} className = 'conteudo_links'>
            <a href = {props.url}>{props.urlNome}</a>
        </div>
    )

    return(
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais;