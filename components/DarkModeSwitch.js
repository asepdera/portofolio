import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react"
import { MoonIcon,SunIcon } from "@chakra-ui/icons"

const DarkModeSwitch = (prop) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Tooltip hasArrow label={colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}>
            <IconButton aria-label="toggle dark switch" icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} size={prop.sr ?  "xs" : "sm"} borderRadius={"full"} mx={prop.sr ? 1 : 2}/>
        </Tooltip>
    )
}

export default DarkModeSwitch