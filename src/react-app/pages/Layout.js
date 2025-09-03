import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "../components/Footer";
export default function Layout({ children }) {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx("main", { className: "flex-grow", children: children }), _jsx(Footer, {})] }));
}
