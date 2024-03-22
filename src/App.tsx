import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
