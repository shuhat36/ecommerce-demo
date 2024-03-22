import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
            </Routes>
          </Router>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
