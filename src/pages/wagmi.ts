import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected(), coinbaseWallet({ appName: "Create Wagmi" })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
