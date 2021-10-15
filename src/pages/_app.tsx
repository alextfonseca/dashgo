import { AppProps } from "next/app";

// contexto do chakra par que todos os components do react tenha acesso aos estilos
import { ChakraProvider } from "@chakra-ui/react";
// importação do arquivo de configuração do tema
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";

// importando o provider do react query
import { QueryClientProvider } from "react-query";

// importando o devTools do react query
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";

// executando o servidor do miragejs

// verificando se o local que estamos executando o projeto é de desenvolvimento
if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
