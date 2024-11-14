import './Join.css'
import collaborator from '../../../public/assents/imagecom.svg'


function Join() {
    return (
        <div className="containerJoin">
            <div className="titleJoin">
                <h1>Join the Brazilian Team!</h1>
            </div>
            <div className="textJoin">
                <p>
                Na Brazilian Hands Co-operative, acreditamos <br/>
                que um ambiente de trabalho colaborativo e <br/>
                inclusivo é a base para oferecer serviços de <br/>
                excelência. Fundada há 1 ano por um <br/>
                empreendedor brasileiro na Irlanda, nossa <br/>
                missão é conectar profissionais qualificados <br/>
                com clientes que buscam serviços de limpeza <br/>
                rápidos, discretos e de alta qualidade.
                </p>
                <p>
                <b>Por que fazer parte da nossa equipe?</b> <br/>
                Aqui, você será parte de uma cooperativa que <br/>
                não apenas valoriza o trabalho que você<br/>
                realiza, mas também se compromete com seu<br/>
                desenvolvimento e bem-estar. Estamos em<br/>
                constante crescimento e buscamos <br/>
                profissionais que compartilhem dos nossos<br/>
                valores e estejam prontos para fazer a <br/>
                diferença.
                </p>
            </div>
            <div className="imageJoin">
                <img src={collaborator}></img>
            </div>
    
        </div>
    )
}

export default Join