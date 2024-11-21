import Image from "next/image";

export interface EstatisticaProps{
    texto: string;
    valor: any;
    imagem: string;
}

export default function Estatistica(props: EstatisticaProps){
    return(
        <div>
            <div>
                <span>{props.texto}</span>
                <span>{props.valor}</span>
            </div>
            <Image src={props.imagem} width={80} height={80} alt="icone"/>
        </div>
    )
}