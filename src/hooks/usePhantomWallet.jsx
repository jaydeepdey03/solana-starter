import {PhantomContext} from "@/Context/Solanawalletcontext";
import {useContext} from "react";

export default function usePhantomWallet() {
  return useContext(PhantomContext);
}
