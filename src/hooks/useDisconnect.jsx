import {useState} from "react";
import usePhantomWallet from "./usePhantomWallet";

export default function useDisconnect() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {publicKey, setPublicKey} = usePhantomWallet();
  const disconnect = async () => {
    setLoading(true);
    try {
      if (window && "phantom" in window) {
        const provider = window.phantom?.solana;
        provider.disconnect();
        provider.on("disconnect", () => {
          setPublicKey(null);
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {disconnect, error, loading};
}
