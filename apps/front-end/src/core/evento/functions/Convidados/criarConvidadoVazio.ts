import Convidado from "../../model/Convidado";
import {Id} from "@/core/shared";
export default function criarConvidadoVazio(): Partial<Convidado> {
    return{
        id: Id.novo(),
        nome: "",
        email: "",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
    };
}