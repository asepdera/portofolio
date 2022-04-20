import { React, useState } from 'react'
import dynamic from 'next/dynamic'
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import DarkModeSwitch from './DarkModeSwitch'
import ButtonGroup from './ButtonGroup'
import {
    Heading,
    Flex,
    useColorMode,
    useMediaQuery,
    Link,
    IconButton,
} from '@chakra-ui/react'


export default function Header(prop) {
    const [tigaRatus75] = useMediaQuery('(max-width: 375px)')
    const [dis,setDis] = useState(false)
    const {
        colorMode,
        toggleColorMode
    } = useColorMode()
    const isDark = colorMode === 'dark'
    const bg = isDark ? "blackAlpha.600" : "whiteAlpha.500"
    return (
        <>
        <Flex sx={{'@media print': {display:'none'}}} zIndex="9" as="header" w="100%" filter="auto" align="center" justify="space-between" px={3} py={4} bgColor={bg} position="fixed" backdropFilter='blur(4px)'>
            <Flex align="center">
                <Heading as='h3' fontSize={['xs','sm','sm','md']} bgClip="text" bgColor={isDark ? "#edd7dc" : "#1a202c"}> Asep Dera Purnama </Heading>
            </Flex>
            <Flex align="center" display={['none','none','none','flex']}>
                <Link aria-label='Home' href='/#home' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='3'>Home</Link>
                <Link aria-label='About' href='/#about' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='3'>About Me</Link>
                <Link aria-label='Pendidikan' href='/#pendidikan' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='3'>Education</Link>
                <Link aria-label='Projek' href='/#projek' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='3'>Project</Link>
            </Flex>
            <Flex align="center" >
                <DarkModeSwitch sr={tigaRatus75} />
                {prop.children}
                <IconButton size='sm'
                    icon={<HamburgerIcon />} align="center" _hover={{}} aria-label="Buka Menu"
                    ml='2' display={['flex','flex','flex','none']} 
                    bgGradient='linear(to-br,cyan.200,blue.400)' onClick={() => {setDis(v => !v)}}
                    color="#1a202c" borderRadius='full'></IconButton>
            </Flex>
        </Flex>
        <Flex display={dis ? 'flex' : 'none'} position='fixed' top='0' left='0' width="100%" bgColor="gray.300" color="#1a202c"
            direction='column' align="center" justify='center' height="100%" zIndex="9">
            <IconButton icon={<CloseIcon />} aria-label='close button' position='absolute' right="20px" top="20px" borderRadius='full'
                _hover={{'color' : 'red.300'}} onClick={() => {setDis(v => !v)}}
            ></IconButton>
            <Link my='5' onClick={() => {setDis(v => !v)}} fontWeight='semibold' aria-label='Home' href='/#home' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='2'>{"Home"}</Link>
            <Link my='5' onClick={() => {setDis(v => !v)}} fontWeight='semibold' aria-label='About' href='/#about' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='2'>{"About Me"}</Link>
            <Link my='5' onClick={() => {setDis(v => !v)}} fontWeight='semibold' aria-label='Pendidikan' href='/#pendidikan' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='2'>{"Education"}</Link>
            <Link my='5' onClick={() => {setDis(v => !v)}} fontWeight='semibold' aria-label='Projek' href='/#projek' _hover={{'textDecoration':'none', 'color': 'cyan.700'}} mx='2'>{"project"}</Link>
        </Flex>
    </>
    )
}