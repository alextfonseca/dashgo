import { AppProps } from "next/app";

// contexto do chakra par que todos os components do react tenha acesso aos estilos
import { ChakraProvider } from "@chakra-ui/react";
// importação do arquivo de configuração do tema
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
