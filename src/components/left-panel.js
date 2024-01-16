import {Box, Flex} from "@chakra-ui/react";
import {Header} from "./header";
import {SearchPanel} from "./search-panel";
import {ChatList} from "./chat-list";
import {useEffect, useState} from "react";

export function LeftPanel(props) {

    const [margin, setMargin] = useState(0);

    useEffect(() => {
        const elementH = document.getElementById('left-corner')
        if (elementH){
            const height = elementH.offsetHeight
            setMargin(height)
        }
    }, []);

    return (
        <Flex direction='column' w='30%' {...props}>
            <Box
                h='100vh'
                overflowY='auto'
                overflowX='hidden'
                css={{
                     "&::-webkit-scrollbar": {
                         display: "none",
                     },
                }}
            >
                <Box
                    position='fixed'
                    zIndex='20'
                    id='left-corner'
                    w='30%'
                >
                    <Header/>
                    <SearchPanel />
                </Box>
                <ChatList mt={`${margin}px`}/>
            </Box>
        </Flex>
    )
}