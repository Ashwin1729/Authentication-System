import React, { useEffect, useState } from "react";
import { Col, Row, Tabs } from "antd";
import { ExportOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Table, ExportTableButton } from "ant-table-extensions";
import {
  userColumnsData,
  rowUserData,
  columnsData,
  rowInvoiceData,
} from "./utils/testData";
import quantum_logo from "../assets/quantum_logo.png";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const HomePage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      navigate("/login");
    }
  });

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <div className={styles.transaction_layout}>
      <Row className={styles.logo}>
        <img src={quantum_logo} alt="Quantum_IT_Logo" />
      </Row>
      <Row className={styles.heading}>
        <Col md={20} xs={12} className={styles.transaction_heading}>
          Administrative Users
        </Col>
        <Col md={4} xs={12} className={styles.export_button}>
          <ExportTableButton
            dataSource={rowUserData}
            columns={userColumnsData}
            btnProps={{ type: "primary", icon: <ExportOutlined /> }}
          >
            Export
          </ExportTableButton>
        </Col>
      </Row>
      <Row className={styles.transaction_table_layout}>
        <Tabs defaultActiveKey="1" className={styles.tab}>
          <TabPane tab="Users" key="1">
            <Table
              pagination={ThunderboltOutlined}
              className={styles.transaction_table}
              rowSelection={rowSelection}
              rowClassName={(record, index) =>
                index % 2 === 0 ? styles.row_dark : styles.row_light
              }
              dataSource={rowUserData}
              columns={userColumnsData}
            />
          </TabPane>
          <TabPane tab="Transactions" key="2">
            <Table
              pagination={true}
              className={styles.transaction_table}
              rowSelection={rowSelection}
              rowClassName={(record, index) =>
                index % 2 === 0 ? styles.row_dark : styles.row_light
              }
              dataSource={rowInvoiceData}
              columns={columnsData}
            />
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default HomePage;
