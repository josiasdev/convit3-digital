import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';

@Module({
  controllers: [EventosController]
})
export class EventosModule {}
