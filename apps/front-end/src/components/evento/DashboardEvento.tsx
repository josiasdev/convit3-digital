import { Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"

export interface DashboardEventoProps{
    evento: Evento;
}

export default function DashboardEvento(props: DashboardEventoProps){
    return(
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <InformacoesEvento evento={props.evento} className="flex-1"/>
            </div>
        </div>
    )
}