import {
    FilterIcon,
    SearchIcon,

} from "../assets/icons";
import {HStack, IconButton, Input, InputGroup, InputLeftElement, Tooltip} from "@chakra-ui/react";
import React from "react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export function SearchPanel(props) {

    const [isFocused, setIsFocused] = React.useState(false);
    const handleFocus = () => {
        setIsFocused(!isFocused);
    }

    return (
        <HStack
            spacing={2}
            px='4'
            py='2'
            justify='space-between'
            borderBottom='1px solid #e2e8f0'
            {...props}
            bg='#ffffff'
        >
            <InputGroup
                color='#54656f'
                bg='#f0f2f5'
                borderRadius='full'
                py='auto'
            >
                <InputLeftElement display='flex' alignItems='center' cursor='pointer' children={ isFocused? <ArrowBackIcon color='#42CBA5' /> : <SearchIcon color='gray.300'/>} />
                <Input
                    paddingLeft='50px'
                    placeholder={isFocused? '' : 'Search or start new chat'}
                    variant='filled'
                    bg='#f0f2f5'
                    _hover={{ bg: '#f0f2f5' }}
                    _placeholder={{
                        opacity: 0.6,
                        color: '#3b4a54',
                        paddingLeft: '3px',
                        fontSize: '15px',
                    }}
                    h='36px'
                    _focusVisible='None'
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                />
            </InputGroup>
            <Tooltip
                shouldWrapChildren
                label='Chats filter'
                fontSize='xs'
                bg='#2d3748'
                color='#f0f2f5'
            >
                <IconButton
                    variant='ghost'
                    aria-label='Filter search'
                    _hover={{ bg: 'none' }}
                >
                    <FilterIcon/>
                </IconButton>
            </Tooltip>
        </HStack>
        );
}