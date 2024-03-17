import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
}
