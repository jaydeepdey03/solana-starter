import PhantomWalletProvider from "@/Context/Solanawalletcontext";
import "@/styles/globals.css";
import {Toaster} from "@/components/ui/sonner";
import {useEffect, useMemo, useState} from "react";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import {clusterApiUrl} from "@solana/web3.js";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
export default function App({Component, pageProps}) {
  const [mounted, setMounted] = useState(false);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <PhantomWalletProvider>
            <Toaster />
            <Component {...pageProps} />
          </PhantomWalletProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
