import {useEffect, useState} from "react";
import usePhantomWallet from "./usePhantomWallet";

export default function useAddress() {
  const {publicKey, setPublicKey, globalProvider} = usePhantomWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect for setting address
  useEffect(() => {
    (async function () {
      if ("phantom" in window) {
        setLoading(true);
        try {
          console.log(globalProvider, "provider");
          // await provider.connect({onlyIfTrusted: true});
          console.log(globalProvider.isConnected, "provider.isConnected");
          if (globalProvider.isConnected) {
            setPublicKey(globalProvider.publicKey.toString());
          } else {
            setPublicKey(undefined);
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);

  return {
    address: publicKey,
    loading,
    error,
  };
}
