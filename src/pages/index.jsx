import CustomwalletComponent from "@/components/ui/Customwallet";
import Wallets from "@/components/ui/Wallet";
import {Button} from "@/components/ui/button";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  // console.log(address, loading, error, "all");
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <WalletMultiButton />
    </div>
  );
}
