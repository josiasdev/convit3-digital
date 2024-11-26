import Evento from "./model/Evento";
import complementarEvento from "./functions/Eventos/complementarEvento";
import criarEventoVazio from "./functions/Eventos/criarEventoVazio";

import Convidado from "./model/Convidado";
import complementarConvidado from "./functions/Convidados/complementarConvidado";
import criarConvidadoVazio from "./functions/Convidados/criarConvidadoVazio";

export type {Evento, Convidado};

export{
    complementarConvidado,
    complementarEvento,
    criarConvidadoVazio,
    criarEventoVazio,
};