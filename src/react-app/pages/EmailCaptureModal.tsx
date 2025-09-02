import { useEffect } from "react";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailCaptureModal({ isOpen, onClose }: EmailCaptureModalProps) {
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
          if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
              region: "na2",
              portalId: "243758936",
              formId: "865c2b39-c06e-4608-b45e-cbe104759d72",
              target: "#hubspot-form",
            });
          }
        };
      } else {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region: "na2",
            portalId: "243758936",
            formId: "865c2b39-c06e-4608-b45e-cbe104759d72",
            target: "#hubspot-form",
          });
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* HubSpot form will be injected here */}
        <div id="hubspot-form"></div>
      </div>
    </div>
  );
}

