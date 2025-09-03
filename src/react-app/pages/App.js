import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Pricing from "./Pricing";
import Schedule from "./Schedule";
import Enterprise from "./Enterprise";
import About from "./About";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import RefundPolicy from "./RefundPolicy";
import CookiePolicy from "./CookiePolicy";
import Disclaimer from "./Disclaimer";
import CodeOfConduct from "./CodeOfConduct";
export default function App() {
    return (_jsx(Router, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(Pricing, {}) }), _jsx(Route, { path: "/schedule", element: _jsx(Schedule, {}) }), _jsx(Route, { path: "/enterprise", element: _jsx(Enterprise, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/privacy-policy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "/terms-of-service", element: _jsx(TermsOfService, {}) }), _jsx(Route, { path: "/refund-policy", element: _jsx(RefundPolicy, {}) }), _jsx(Route, { path: "/cookie-policy", element: _jsx(CookiePolicy, {}) }), _jsx(Route, { path: "/disclaimer", element: _jsx(Disclaimer, {}) }), _jsx(Route, { path: "/code-of-conduct", element: _jsx(CodeOfConduct, {}) })] }) }) }));
}
