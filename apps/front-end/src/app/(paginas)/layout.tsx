import Pagina from "@/components/template/Pagina";
import { Toaster } from "@/components/ui/toaster";
import { ProvedorContextoEvento } from "@/data/contexts/ContextoEvento";
import { ProvedorContextoMensagens } from "@/data/contexts/ContextoMensagens";

export default function Layout(props: any) {
  return (
    <ProvedorContextoMensagens>
      <ProvedorContextoEvento>
        <Pagina>{props.children}</Pagina>
        <Toaster />
      </ProvedorContextoEvento>
    </ProvedorContextoMensagens>
  );
}