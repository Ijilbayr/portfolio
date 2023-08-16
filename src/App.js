import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./context/context";
import { Header } from "./layout/header";
import { Home } from "./components/Home";
import { Box } from "@mui/system";

function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
