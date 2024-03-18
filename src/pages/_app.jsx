import PhantomWalletProvider from "@/Context/Solanawalletcontext";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner"
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <PhantomWalletProvider>
      <Toaster />
      <Component {...pageProps} />
    </PhantomWalletProvider>
  )
}
