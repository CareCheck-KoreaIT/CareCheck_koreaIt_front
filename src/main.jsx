import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       retry: 0,
//     },
//     mutations: {
//       retry: 0,
//     },
//   },
// });

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    {/* <QueryClientProvider client={queryClient}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </QueryClientProvider> */}
  </RecoilRoot>
);
