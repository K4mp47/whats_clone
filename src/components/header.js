import {
    MenuIcon,
    CommunityIcon,
    StatusIcon,
    NewChatIcon,
} from '../assets/icons';
import {Avatar, Flex, HStack, IconButton, Tooltip} from "@chakra-ui/react";

const iconsData = [
    { icon: <CommunityIcon />, label: 'Community chat' },
    { icon: <StatusIcon />, label: 'Status' },
    { icon: <NewChatIcon />, label: 'New chat' },
    { icon: <MenuIcon />, label: 'Menu' },
];

function CustomToolTip({ icon, label }) {
    return (
        <Tooltip label={label} placement="bottom">
            <IconButton variant='ghost'>{icon}</IconButton>
        </Tooltip>
        );
}

export function Header(props) {
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
                    <CustomToolTip key={index} icon={item.icon} label={item.label} />
                ))}
            </HStack>
        </Flex>
    )
}