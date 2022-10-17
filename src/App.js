import React, { useState } from "react";
import TreeView from "@o2xp/react-tree-view";
import "./styles.css";

const data = [
  {
    children: [
      {
        children: [
          {
            id: "file_1_1_1",
            label: "File 1-1-1",
            children: [
              {
                id: "file_1_1_1-1",
                label: "File 1-1-1-1"
              }
            ]
          },

          {
            id: "file_1_1_2",
            label: "File 1-1-2"
          }
        ],
        id: "folder_1_1",
        label: "Folder 1-1"
      },
      {
        id: "folder_1_2",
        label: "Folder 1-2"
      }
    ],
    id: "folder_1",
    label: "Folder 1"
  },
  {
    children: [
      {
        id: "folder_2_1",
        label: "Folder 2-1"
      }
    ],
    id: "folder_2",
    label: "Folder 2"
  }
];

const App = () => {
  const [expanded, setExpanded] = useState([]);

  const onOpen = (node) => {
    return node.collapsed
      ? setExpanded([...expanded, node.id])
      : setExpanded(expanded.filter((id) => id !== node.id));
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <TreeView data={data} expanded={expanded} onClick={onOpen} />
    </div>
  );
};

export default App;
