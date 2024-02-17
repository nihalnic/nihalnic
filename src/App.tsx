import { Routes, Route } from "react-router-dom";

import "./globals.css";
import RootLayout from "./_root/RootLayout";
import { About, Home, Pricing, Projects, Resources } from "./_root/pages";


const App = () => {
  return (
    <main className="h-screen flex">
      {/* main routes */}
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
