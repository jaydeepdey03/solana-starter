import {Button} from "@/components/ui/button";
import useAddress from "@/hooks/useAddress";
import useConnectWallet from "@/hooks/useConnectWallet";
import useDisconnect from "@/hooks/useDisconnect";
import usePhantomWallet from "@/hooks/usePhantomWallet";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const {connect} = useConnectWallet();
  const {disconnect} = useDisconnect();
  const {address, loading, error} = useAddress();
  const {publicKey} = usePhantomWallet();
  // console.log(address, loading, error, "all");
  return (
    <div className="h-screen w-full grid place-items-center">
      <div>
        <Button onClick={connect}>Connect</Button>
        <Button onClick={disconnect}>Disconnect</Button>
        {/* <p>{publicKey}</p> */}
      </div>
    </div>
  );
}
