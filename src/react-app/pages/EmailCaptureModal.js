import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
export default function EmailCaptureModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            // Check if script already exists
            if (!document.getElementById("hs-form-script")) {
                const script = document.createElement("script");
                script.id = "hs-form-script";
                script.src = "https://js.hsforms.net/forms/embed/v2.js";
                script.async = true;
                document.body.appendChild(script);
                script.onload = () => {
                    if (window.hbspt) {
                        window.hbspt.forms.create({
                            region: "na2",
                            portalId: "243758936",
                            formId: "865c2b39-c06e-4608-b45e-cbe104759d72",
                            target: "#hubspot-form",
                        });
                    }
                };
            }
            else {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        region: "na2",
                        portalId: "243758936",
                        formId: "865c2b39-c06e-4608-b45e-cbe104759d72",
                        target: "#hubspot-form",
                    });
                }
            }
        }
    }, [isOpen]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative", children: [_jsx("button", { onClick: onClose, className: "absolute top-2 right-2 text-gray-500 hover:text-gray-800", children: "\u2715" }), _jsx("div", { id: "hubspot-form" })] }) }));
}
