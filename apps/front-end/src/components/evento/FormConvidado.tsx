import { Convidado } from "core";
import CampoEntrada from "../shared/CampoEntrada";
import CampoSimNao from "../shared/CampoSimNao";

export interface FormConvidadoProps {
    convidado: Partial<Convidado>;
    convidadoMudou: (convidado: Partial<Convidado>) => void;
}

export default function FormConvidado(props: FormConvidadoProps) {
    return (
        <div className="flex flex-col gap-5">
            <CampoEntrada
                label="Nome"
                value={props.convidado.nome ?? ""}
                onChange={(e: any) =>
                    props.convidadoMudou({ ...props.convidado, nome: e.target.value })
                }
            />
            <CampoEntrada
                label="Email"
                value={props.convidado.email ?? ""}
                onChange={(e : any) =>
                    props.convidadoMudou({ ...props.convidado, email: e.target.value })
                }
            />
            <div className="flex gap-5">
                <CampoSimNao
                    label="Presença Confirmada?"
                    value={props.convidado.confirmado ?? true}
                    onChange={(valor: any) =>
                        props.convidadoMudou({ ...props.convidado, confirmado: valor })
                    }
                    className="flex-1"
                />
                {props.convidado.confirmado && (
                    <div className="flex-1 flex gap-5">
                        <CampoSimNao
                            label="Possui Acompanhantes?"
                            value={props.convidado.possuiAcompanhantes ?? false}
                            onChange={(valor: any) =>
                                props.convidadoMudou({
                                    ...props.convidado,
                                    possuiAcompanhantes: valor,
                                    qtdeAcompanhantes: valor ? 1 : 0,
                                })
                            }
                            className="flex-1"
                        />
                        {props.convidado.possuiAcompanhantes && (
                            <CampoEntrada
                                label="Quantos Acompanhantes?"
                                value={props.convidado.qtdeAcompanhantes ?? 1}
                                onChange={(e: any) =>
                                    props.convidadoMudou({
                                        ...props.convidado,
                                        qtdeAcompanhantes: +e.target.value,
                                    })
                                }
                                min={1}
                                type="number"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
