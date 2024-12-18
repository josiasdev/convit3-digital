"use client";

import FormConvidado from "@/components/evento/FormConvidado";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import Janela from "@/components/shared/Janela";
import Processando from "@/components/shared/Processando";
import useEvento from "@/data/hooks/useEvento";
import { Evento } from "core";
import { use, useEffect } from "react";

export default function PaginaConvite(props: any) {
  const params: any = use(props.params);
  const {
    evento,
    convidado,
    alterarConvidado,
    adicionarConvidado,
    carregarEvento,
  } = useEvento();

  useEffect(() => {
    carregarEvento(params.alias);
  }, [params.alias]);

  return evento?.alias ? (
    <div>
      <Janela
        label="Você foi convidado para:"
        titulo={evento.nome}
        imagem={evento.imagem}
        background={evento.imagemBackground}
      >
        <InformacoesEvento esconderNome evento={evento as Evento} />
        <div className="flex flex-col gap-4 pt-10">
          <span className="text-xl font-bold">Insira seus dados</span>
          <div className="border-t border-zinc-800"></div>
          <FormConvidado
            convidado={convidado}
            convidadoMudou={alterarConvidado}
          />
          <button
            className={`botao self-center ${convidado.confirmado ? "verde" : "vermelho"}`}
            onClick={adicionarConvidado}
          >
            Confirmar {convidado.confirmado ? "Presença" : "Ausência"}
          </button>
        </div>
      </Janela>
    </div>
  ) : (
    <Processando />
  );
}