import {
    Global
} from "@emotion/react";

const Fonts = () => {
    <Global styles={`
        @font-face: {
            font-family: 'Bogart',
            src: url('./font/Bogart-Black-trial.ttf')
        },
        @font-face: {
            font-family: 'montserrat',
            src: url('./font/Montserrat/Montserrat-VariableFont_wght.ttf')
        }
    ` } />
}

export default Fonts