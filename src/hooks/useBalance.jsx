import {useEffect, useState} from "react";

export default function useBalance() {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      setLoading(true);
      try {
        if ("phantom" in window) {
          const provider = window.phantom?.solana;

          if (provider?.isPhantom && provider.isConnected) {
            setBalance(provider);
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getBalance(); // Call getBalance inside useEffect
  }, []);

  return {balance, error, loading};
}
