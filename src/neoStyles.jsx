import {createTheme} from '@mui/material'

export default function neoStyles(){
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                yellow: '#FFFF00',
                orange: '#FF5A00',
                green: '#5C881A',
                blue: '#705AFA'
            },
            secondary: {
                yellow:{
                    yellow900: '#727200',
                    yellow800: '#A1A100',
                    yellow700: '#C5C500',
                    yellow600: '#E4E400',
                    yellow500: '#FFFF00',
                    yellow400: '#FFFF72',
                    yellow300: '#FFFFA1',
                    yellow200: '#FFFFC5',
                    yellow100: '#FFFFE4',
                },
                orange:{
                    orange900: '#722800',
                    orange800: '#A13800',
                    orange700: '#C54500',
                    orange600: '#E45000',
                    orange500: '#FF5A00',
                    orange400: '#FF8B72',
                    orange300: '#FFFFA1',
                    orange200: '#FFCDC5',
                    orange100: '#FFE7E4',
                },
                green:{
                    green900: '#293C0B',
                    green800: '#3A5610',
                    green700: '#476914',
                    green600: '#527917',
                    green500: '#5C881A',
                    green400: '#8CA674',
                    green300: '#B0C0A2',
                    green200: '#CDD7C6',
                    green100: '#E7ECE4',
                },
                blue:{
                    blue900: '#32286F',
                    blue800: '#46399E',
                    blue700: '#5646C1',
                    blue600: '#6451DF',
                    blue500: '#705AFA',
                    blue400: '#978CFB',
                    blue300: '#B7B0FC',
                    blue200: '#D1CDFD',
                    blue100: '#E9E7FE',
                }                
            },
            success:{
                main: '#5CB176',
                secondary: '#C6F0C2',
                terciary: '#EAFBE7'
            },
            warning:{
                main: '#BE5D01',
                secondary: '#D9822F',
                terciary: '#F29D41'
            },
            danger:{
                main: '#B72B1A',
                secondary: '#D02B20',
                terciary: '#EE5E52'
            },
            neutral:{
                neutral900: '#212134',
                neutral800: '#32324D',
                neutral700: '#4A4A6A',
                neutral600: '#666687',
                neutral500: '#8E8EA9',
                neutral400: '#A5A5BA',
                neutral300: '#C0C0CF',
                neutral200: '#DCDCE4',
                neutral100: '#F6F6F9',
                neutral0: '#FFFFFF',
            }       
        }
    })
}