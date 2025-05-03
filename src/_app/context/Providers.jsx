"use client";
import { LogosProvider } from "./LogosContext";

export default function Providers({ children }) {
    return <LogosProvider>{children}</LogosProvider>;
}
