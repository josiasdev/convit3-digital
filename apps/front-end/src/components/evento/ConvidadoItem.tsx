import { Convidado } from "@/core";

export interface ConvidadoItemProps{
    convidado: Convidado;
}

export default function ConvidadoItem(props: ConvidadoItemProps){
    return(
        <li>
            <div>
                <span>{props.convidado.nome}</span>
                <span>{props.convidado.email}</span>
            </div>
            <div>
                <span>Acompanhantes</span>
                <span>{props.convidado.qtdeAcompanhantes}</span>
            </div>
        </li>
    )
}