"use client";

import { lazy, useEffect, useState } from "react";
const HotTable = lazy(() => import("@handsontable/react"));

export default function Gallery() {
  let [windowLoaded, setWindowLoaded] = useState(false);

  // as a result
  // I run it here and then start to render the table component
  useEffect(() => {
    const initTableConfigs = async () => {
      const {
        registerPlugin,
        ContextMenu,
        AutoColumnSize,
        DropdownMenu,
        BasePlugin,
        UndoRedo,
      } = await import("handsontable/plugins");
      registerPlugin(BasePlugin);
      registerPlugin(ContextMenu);
      registerPlugin(AutoColumnSize);
      registerPlugin(DropdownMenu);
      registerPlugin(UndoRedo);
      // will lead to hydration error randomly
      setWindowLoaded(true);
    };

    // Check if window is ready
    if (document.readyState === "complete") {
      initTableConfigs();
    } else {
      window.addEventListener("load", initTableConfigs);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", initTableConfigs);
    }
  }, []);

  return (
    <div>
      {windowLoaded && (
        <HotTable
          data={[
            ["", "Tesla", "Volvo", "Toyota", "Ford"],
            ["2019", 10, 11, 12, 13],
            ["2020", 20, 11, 14, 13],
            ["2021", 30, 15, 12, 13],
          ]}
          contextMenu={true}
          licenseKey="non-commercial-and-evaluation"
        />
      )}
    </div>
  );
}