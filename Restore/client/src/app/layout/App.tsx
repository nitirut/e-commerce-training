import { useEffect, useState } from "react"
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [darkMode, setDarkMode] = useState(false);
    const pallateType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: pallateType,
            background: {
                default: pallateType === 'light' ? '#baecf9' : '#1e3aBa'
            }
        }
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Box
                sx={{
                    minhheight: '100vh',
                    backgroud: darkMode
                        ? 'radial-gradient(circle, #1e3aBa : #111B27)'
                        : 'radial-gradient(circle, #baecf9 : #f0f9ff)',
                    pt: 6
                }}>
                <Container maxWidth='xl' sx={{ mt: 8 }}>
                    <Catalog products={products} />
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default App
