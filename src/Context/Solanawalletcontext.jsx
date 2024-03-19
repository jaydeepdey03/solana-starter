import {createContext, useEffect, useState} from "react";
import {toast} from "sonner";

export const PhantomContext = createContext();

const PhantomWalletProvider = ({children}) => {
  const [publicKey, setPublicKey] = useState("");
  const [globalProvider, setGlobalProvider] = useState(null);

  // const connect = async () => {
  //   try {
  //     if (window && "phantom" in window) {
  //       const provider = window.phantom?.solana;

  //       if (provider?.isPhantom) {
  //         await provider.connect();
  //         // console.log(res, "res");
  //       }
  //     }
  //   } catch (error) {}
  // };

  // const disconnect = async () => {
  //   try {
  //     if (window && "phantom" in window) {
  //       const provider = window.phantom?.solana;
  //       provider.disconnect();
  //     }
  //   } catch (error) {}
  // };

  useEffect(() => {
    //  set provider
    if ("phantom" in window) {
      // const provider = window.phantom?.solana;
      // console.log(provider, "context provider");
      // setGlobalProvider(provider);
      console.log(window.phantom.solana);
    }
  }, [window]);

  return (
    <PhantomContext.Provider value={{publicKey, setPublicKey, globalProvider}}>
      {children}
    </PhantomContext.Provider>
  );
};

export default PhantomWalletProvider;
