import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Schedule from "./pages/Schedule";
import Enterprise from "./pages/Enterprise";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import CodeOfConduct from "./pages/CodeOfConduct";
export default function App() {
    return (_jsx(Router, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(Pricing, {}) }), _jsx(Route, { path: "/schedule", element: _jsx(Schedule, {}) }), _jsx(Route, { path: "/enterprise", element: _jsx(Enterprise, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/privacy-policy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "/terms-of-service", element: _jsx(TermsOfService, {}) }), _jsx(Route, { path: "/refund-policy", element: _jsx(RefundPolicy, {}) }), _jsx(Route, { path: "/cookie-policy", element: _jsx(CookiePolicy, {}) }), _jsx(Route, { path: "/disclaimer", element: _jsx(Disclaimer, {}) }), _jsx(Route, { path: "/code-of-conduct", element: _jsx(CodeOfConduct, {}) })] }) }) }));
}
