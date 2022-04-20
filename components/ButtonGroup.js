import { IconButton, Link, Tooltip } from "@chakra-ui/react"
import { FaEnvelope,FaWhatsapp,FaGithub } from "react-icons/fa"

const ButtonGroup = (prop) => {
    return (
        <>
            <Tooltip hasArrow label="asepderaxrpla.17@gmail.com">
                <Link href="mailto:asepderaxrpla.17@gmail.com" isExternal>
                    <IconButton mx={.5} aria-label="Gmail" icon={<FaEnvelope />} size={prop.sr ? "xs" : "sm"} borderRadius={"full"} />
                </Link>
            </Tooltip>
            <Tooltip hasArrow label="081394773107">
                <Link href="https://wa/081394773107" isExternal>
                    <IconButton mx={.5} aria-label="Telepon" icon={<FaWhatsapp />} size={prop.sr ? "xs" : "sm"} borderRadius={"full"} />
                </Link>
            </Tooltip>
            <Tooltip hasArrow label="github/asepdera">
                <Link href="https://github.com/asepdera" isExternal>
                    <IconButton mx={.5} aria-label="Git" icon={<FaGithub />} size={prop.sr ? "xs" : "sm"} borderRadius={"full"}/>
                </Link>
            </Tooltip>
        </>
    )
}

export default ButtonGroup