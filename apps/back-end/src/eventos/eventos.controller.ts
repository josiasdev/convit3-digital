import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Convidado, Data, Evento, eventos, Id } from 'core';

@Controller('eventos')
export class EventosController {

    @Post(':alias/convidado')
    async salvarConvidado(@Param('alias') alias: string,
        @Body() convidado: Convidado,
    ) {
        const evento = eventos.find((evento) => evento.alias === alias);
        if (!evento)
            {
                throw new Error('Evento não encontrado.');
            }
        evento.convidados.push(convidado);
        return this.serializar(evento);

    }

    @Post('acessar')
    async acessarEvento(@Body() dados: { id: string, senha: string }) {
        const evento = eventos.find((evento) => evento.id === dados.id && evento.senha === dados.senha);

        if (!evento) {
            throw new Error('Senha não corresponde ao evento.');
        }
        return this.serializar(evento);
    }

    @Get()
    async buscarEventos() {
        return eventos.map(this.serializar);
    }

    @Get(':idOuAlias')
    async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
        if (Id.valido(idOuAlias)) {
            return this.serializar(eventos.find((evento) => evento.id === idOuAlias));
        }
        else {
            return this.serializar(eventos.find((evento) => evento.alias === idOuAlias),
            );
        }
    }

    @Get('validar/:alias/:id')
    async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
        const evento = eventos.find((evento) => evento.alias === alias);
        return { valido: !evento || evento.id === id };
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
