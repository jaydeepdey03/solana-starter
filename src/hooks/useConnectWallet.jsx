import {useState} from "react";
import {toast} from "sonner";

export default function useConnectWallet() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const connect = async () => {
    setLoading(true);
    try {
      if (window && "phantom" in window) {
        const provider = window.phantom?.solana;

        if (provider?.isPhantom) {
          await provider.connect();
          // console.log(res, "res");
        }
      }
    } catch (error) {
      setError(error);
    }
  };

  return {connect, error, loading};
}
