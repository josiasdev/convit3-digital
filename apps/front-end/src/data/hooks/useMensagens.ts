import { useContext } from "react";
import ContextoMensagens from "../contexts/ContextoMensagens";

const useMensagens = () => useContext(ContextoMensagens);
export default useMensagens;