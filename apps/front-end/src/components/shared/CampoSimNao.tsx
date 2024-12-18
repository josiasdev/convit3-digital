export interface CampoSimNaoProps {
  label?: string;
  value: boolean;
  onChange: (valor: boolean) => void;
  className?: string;
}

export default function CampoSimNao(props: CampoSimNaoProps) {
  function renderizarItem(valor: boolean) {
    return (
      <span
        className={`
        flex-1 flex items-center justify-center
        rounded-md cursor-pointer
        ${props.value === valor ? "bg-black font-bold" : "text-zinc-400"}  
      `}
        onClick={() => props.onChange(valor)}
      >
        {valor ? "Sim" : "Não"}
      </span>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      {props.label && (
        <label className="text-lg font-black">{props.label}</label>
      )}
      <div className="w-56 flex justify-start h-10 rounded-md bg-zinc-900 p-1">
        {renderizarItem(true)}
        {renderizarItem(false)}
      </div>
    </div>
  );
}
