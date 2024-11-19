import { Id } from "@/core/shared";
import Evento from "../model/Evento";


export default function criarEventoVazio(): Partial<Evento> {
    return {
        id: Id.novo(),
        nome: "",
        descricao: "",
        data: new Date(),
        local: "",
        publicoEsperado: 100,
        imagem: "",
        imagemBackground: "",
    };
}