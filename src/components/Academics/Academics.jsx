import { Card, Layout } from "antd";

import "antd/dist/antd.css";
import { useState } from "react";
import { AcademicCard } from "./AcademicCard/AcademicCard";
// const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

export function Academics() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Layout
        style={{
          transition: "linear 0.15s",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "initial",
        }}
      >
        <AcademicCard  />
      </Layout>
    </Layout>
  );
}
