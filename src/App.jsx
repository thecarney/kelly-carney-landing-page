import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
