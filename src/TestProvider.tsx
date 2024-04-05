import { PropsWithChildren } from "react";
import { useConnect } from "wagmi";

export default function TestProvider({ children }: PropsWithChildren) {
  useConnect();

  return <>{children}</>;
}
