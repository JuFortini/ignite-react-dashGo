import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const series = [
    {
        name: "Series 1",
        data: [64, 52, 78, 36, 29, 84, 52]
    }
];

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        foreColor: theme.colors.gray[500],
        zoom: {
            enabled: false,
        }
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    stroke: {
        colors: [theme.colors.cyan[400]]
    },
    fill: {
        colors: [theme.colors.cyan[400]],
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime" as const,
        axisBorder: {
            color: theme.colors.gray[500],
        },
        axisTicks: {
            color: theme.colors.gray[500],
        },
        categories: [
            "2022-04-16T00:00:00.000Z",
            "2022-04-17T00:00:00.000Z",
            "2022-04-18T00:00:00.000Z",
            "2022-04-19T00:00:00.000Z",
            "2022-04-20T00:00:00.000Z",
            "2022-04-21T00:00:00.000Z",
            "2022-04-22T00:00:00.000Z",
        ],
    },
}

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" maxWidth={1480} mx="auto" px="6" mt="6">

                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="360px" alignItems="flex-start" mr="8">
                    <Box p="8" borderRadius={8} bg="gray.800">
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart type="area" series={series} height="100%" options={options} />
                    </Box>
                    <Box p="8" borderRadius={8} bg="gray.800">
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart type="area" series={series} height="100%" options={options} />
                    </Box>
                </SimpleGrid>  

            </Flex>

        </Flex>
    )
}