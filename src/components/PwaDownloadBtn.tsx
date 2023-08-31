import { Button } from "@chakra-ui/react";

export default function DownloadButton(props: any) {
  const handleDownload = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
          // Show a user prompt to install the PWA
          registration.update();
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  };

  return (
    <Button
      {...props.styles}
      onClick={handleDownload}
      borderRadius={"full"}
      size={"sm"}
    >
      DOWNLOAD PWA
    </Button>
  );
}
