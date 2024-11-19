import Evento from "../model/Evento";
import validarEvento from "./validarEvento";
import { Id } from "@/core/shared";
import {Senha} from "@/core/shared";

export default function complementarEvento(eventoParcial: Partial<Evento> ) : Evento{
    const erros = validarEvento(eventoParcial);
    if (erros.length){
        throw new Error(erros.join("\n"));
    }

    const evento: Evento = {
        ...eventoParcial,
        id: eventoParcial.id ?? Id.novo(),
        senha: eventoParcial.senha ?? Senha.nova(20),
        publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
    } as Evento;

    return evento;
}