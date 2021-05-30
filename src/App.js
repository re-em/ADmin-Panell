import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./components/Sidebar";

// function onClick(e, item) {
//   window.alert(JSON.stringify(item, null, 2));
// }

const items = [
  { name: "home", label: "Admin Panel", Icon: HomeIcon },
  
  "divider",
  {
    name: "categories",
    label: "categories",
    // Icon: SettingsIcon,
    items: [
     
     
      {
        name: "Preganancy",
        label: "preganancy",
        // Icon: NotificationsIcon,
        items: [
          {
            name: "first three months",
            label: "first three months",
            // Icon: DesktopWindowsIcon,
            
          },
          {
            name: "first six months",
            label: "first six months",
            // Icon: DesktopWindowsIcon,
            
          },
          {
            name: "last months",
            label: "last months",
            // Icon: DesktopWindowsIcon,
            
          },
        ]
      },
      {
        name: "Adolescence",
        label: "Adolescence",
        // Icon: NotificationsIcon,
        items: [
          {
            name: "Adolescence1",
            label: "Adolescence1",
            // Icon: DesktopWindowsIcon,
            
          },
          {
            name: "Adolescence2",
            label: "Adolescence2",
            // Icon: DesktopWindowsIcon,
            
          },
          
        ]
      }
    ]
  }
];

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default App;
