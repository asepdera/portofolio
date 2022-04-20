import React from "react";
import { IconButton, Flex, Link, useColorMode, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { FaHome, FaUser, FaGraduationCap, FaBook, FaProjectDiagram } from 'react-icons/fa'

const Sidebar = (prop) => {
    // console.log(prop.sx.home)
    const sidebar = {
        px: "2",
        py: "4",
        top: "200px",
        position: "fixed",
        bgColor: "teal.200",
        align: "center",
        justify: "center",
        left: "15px",
        flexDirection: "column",
        borderTopRadius: "19px",
        borderBottomRadius: "19px",
        my: "auto",
        zIndex: "9"
    }
    const ibtn = {
        borderRadius: "full", my: "2", color: "#1a202c", bgColor: "#fff"
    }
    return (
        <Flex sx={sidebar} >
            <Link href="/#home">
                <Tooltip hasArrow placement="right" label={prop.sx.home ? prop.sx.home : "Beranda"}>
                    <IconButton icon={<FaHome/>} sx={ibtn} size="sm" aria-label="home"></IconButton>
                </Tooltip>
            </Link>
            <Link href="/#about">
                <Tooltip hasArrow placement="right" label={prop.sx.about ? prop.sx.about : "Tentang Saya"}>
                    <IconButton icon={<FaUser/>} sx={ibtn} size="sm" aria-label="about"></IconButton>
                </Tooltip>
            </Link>
            <Link href="/#pendidikan">
                <Tooltip hasArrow placement="right" label={prop.sx.pendidikan ? prop.sx.pendidikan : "Pendidikan"}>
                    <IconButton icon={<FaGraduationCap/>} sx={ibtn} size="sm" aria-label="pendidikan"></IconButton>
                </Tooltip>
            </Link>
            <Link href="/#pel">
                <Tooltip hasArrow placement="right" label={prop.sx.pelajaran ? prop.sx.pelajaran : "Yang Sudah Dipelajari"}>
                    <IconButton icon={<FaBook/>} sx={ibtn} size="sm" aria-label="Yang telah dipelajari"></IconButton>
                </Tooltip>
            </Link>
            <Link href="/#project">
                <Tooltip hasArrow placement="right" label={prop.sx.projek ? prop.sx.projek : "projek"}>
                    <IconButton icon={<FaProjectDiagram/>} sx={ibtn} size="sm" aria-label="projek"></IconButton>
                </Tooltip>
            </Link>
        </Flex>
    )
}

export default Sidebar