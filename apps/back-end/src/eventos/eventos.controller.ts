import { Controller, Get, Param } from '@nestjs/common';
import { Data, Evento, eventos, Id } from 'core';

@Controller('eventos')
export class EventosController {
    @Get()
    async buscarEventos() {
        return eventos.map(this.serializar);
    }

    @Get(':idOuAlias')
    async buscarEvento(@Param('idOuAlias') idOuAlias: string){
        if (Id.valido(idOuAlias)) {
            return this.serializar(eventos.find((evento) => evento.id === idOuAlias));
        }
        else{
            return this.serializar(eventos.find((evento) => evento.alias === idOuAlias));
        }

    }

    private serializar(evento: Evento) {
        if (!evento) {
            return null;
        }
        return {
            ...evento,
            date: Data.formatar(evento.data),
        };
    }
    private deserializar(evento: any): Evento {
        if (!evento) {
            return null;
        }
        return {
            ...evento,
            data: Data.desformatar(evento.data),
        };
    }
}
