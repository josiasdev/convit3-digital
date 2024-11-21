import { Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"
import AcessarViaQrCode from "./AcessarViaQrCode";

export interface DashboardEventoProps{
    evento: Evento;
}

export default function DashboardEvento(props: DashboardEventoProps){
    return(
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 self-stretch">
                <InformacoesEvento evento={props.evento} className="flex-1"/>
                <AcessarViaQrCode evento={props.evento}/>
            </div>
        </div>
    )
}