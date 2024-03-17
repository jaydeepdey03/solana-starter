import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import {clusterApiUrl} from "@solana/web3.js";
require("@solana/wallet-adapter-react-ui/styles.css");
export default function Provider({children}) {
  const wallets = [new PhantomWalletAdapter()];
  const endpoint = `https://solana-devnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_API_KEY}`;
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
