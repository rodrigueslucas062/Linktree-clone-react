import './RedesSociais.scss'

const RedesSociais = () => {

    const ListaSociais = [
        {id: 1, urlNome: 'Instagram' , url: 'https://www.instagram.com/rodrigueslucas062/'} ,
        {id: 2, urlNome: 'LinkedIn' , url: 'https://www.linkedin.com/in/rodrigueslucasdev/'} ,
        {id: 3, urlNome: 'Github' , url: 'https://github.com/rodrigueslucas062'} ,        
    ]

    const LinksRedes = ListaSociais.map((props) =>
        <div key = {props.id} className = 'conteudo_links'>
            <span>
                <a href = {props.url}>{props.urlNome}</a>
            </span>
        </div>
    )

    return(
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais;