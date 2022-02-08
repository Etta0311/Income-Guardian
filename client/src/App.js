import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";

// Implimenting pages components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
// import Expenserecord from "./pages/Expenserecord";

// Construct main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Set up client to execute the `authLink` middleware prior to GraphQL API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            {/* <Route exact path="/expenserecord" element={<Expenserecord />} /> */}
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}
export default App;
