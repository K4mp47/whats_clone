import {
    MenuIcon,
    CommunityIcon,
    StatusIcon,
    NewChatIcon,
} from '../assets/icons';

import {
    Avatar,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    Tooltip
} from "@chakra-ui/react";

import React from 'react';

const iconsData = [
    { icon: <CommunityIcon />, label: 'Community chat' },
    { icon: <StatusIcon />, label: 'Status' },
    { icon: <NewChatIcon />, label: 'New chat' },
    { icon: <MenuIcon />, label: 'Menu' },
];

function CustomToolTip({ icon, label }) {
    return (
        <Tooltip label={label} placement="bottom">
            <IconButton variant='ghost' aria-label={label}>{icon}</IconButton>
        </Tooltip>
        );
}

export function Header(props) {

    const [color, setColor] = React.useState(false);

    const changeColor = () => {
        setColor(!color);
    }

    return (
        <Flex
            justifyContent='space-between'
            py='2'
            px='4'
            color='#54656f'
            bg='#f0f2f5'
            borderRight='1px solid #f2f2f2'
        >
            <Avatar
                boxsize='40px'
                name='Jo Mama'
                src='https://plus.unsplash.com/premium_photo-1664267832588-650cc54fcea6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D:w'
            />
            <HStack>
                {iconsData.map((item, index) => (
                    (item.label === 'Menu') ?
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<CustomToolTip icon={item.icon} label={item.label}/>}
                            />
                            <MenuList>
                                <MenuItem>New Chat</MenuItem>
                                <MenuItem>New Group</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuItem onClick={changeColor} color={color?'#42CBA5':'#54656f'}>Change Theme</MenuItem>
                                <MenuItem>
                                    <Spinner
                                        color='#54656f'
                                        emptyColor='#f0f2f5'
                                        size='sm'
                                        speed='0.65s'
                                    />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    :
                        <CustomToolTip key={index} icon={item.icon} label={item.label}/>
                ))}
            </HStack>
        </Flex>
    )
}