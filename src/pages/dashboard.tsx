import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header/index";
import { Sidebar } from "../components/Sidebar/index";

// carregando via browser para não dar erro pois ele precisa do método window do JS para funcionar
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [3100, 120, 10000, 28, 56, 10009] }];

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="4">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bgColor="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="8">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p={["6", "8"]} bgColor="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="8">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
