import {Box, Flex} from "@chakra-ui/react";
import {Header} from "./header";
import {SearchPanel} from "./search-panel";

export function LeftPanel(props) {
    return (
        <Flex direction='column' w='30%' {...props}>
            <Box>
                <Header />
                <SearchPanel />
            </Box>
        </Flex>
    )
}