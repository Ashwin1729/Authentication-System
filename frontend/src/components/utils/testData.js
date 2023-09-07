import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import avatar_1 from "../../assets/avatar_1.jpg";
import avatar_2 from "../../assets/avatar_2.jpg";
import avatar_3 from "../../assets/avatar_3.jpeg";
import avatar_4 from "../../assets/avatar_4.jpg";
import avatar_5 from "../../assets/avatar_5.jpg";

export const columnsData = [
  {
    title: "Invoice Id",
    dataIndex: "Invoice",
    key: "invoice",
    render: (invoice) => {
      return (
        <div
          style={{
            fontWeight: "500",
          }}
        >
          {invoice}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : 0),
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    render: (date) => {
      return (
        <div
          style={{
            fontWeight: "500",
          }}
        >
          {date}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : 0),
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description",
    render: (description) => {
      return (
        <div
          style={{
            fontWeight: "500",
          }}
        >
          {description}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
  },
  {
    title: "status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "#F44336";
      if (status == "Completed") {
        color = "#00c800";
      } else if (status == "Pending") {
        color = "#FCB900";
      }
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: " 0 0.2rem",
            padding: "1px",
            fontSize: "small",
            color: "white",
            fontWeight: "400",
            borderRadius: "500px",
            width: "5rem",
            backgroundColor: color,
          }}
        >
          {status}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    render: (amount) => {
      return (
        <div
          style={{
            fontWeight: "500",
          }}
        >
          ${amount}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
  },
];

export const userColumnsData = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "name",
    render: (data) => {
      return (
        <div
          style={{
            fontWeight: "500",
          }}
        >
          <Avatar src={data.avatar} size={40} />
          <span
            style={{
              margin: "0 15px",
            }}
          >
            {data.name}
          </span>
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : 0),
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    render: (date) => {
      return (
        <div
          style={{
            fontWeight: "500",
          }}
        >
          {date}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : 0),
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "role",
    render: (role) => {
      return (
        <div
          style={{
            fontWeight: "500",
          }}
        >
          {role}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "status",
    render: (status) => {
      let color = "";
      if (status == "Active") {
        color = "#00c800";
      } else if (status == "Inactive") {
        color = "#FCB900";
      } else if (status == "Suspended") {
        color = "#F44336";
      }
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: " 0 0.2rem",
            padding: "1px",
            fontSize: "small",
            color: "white",
            fontWeight: "400",
            borderRadius: "500px",
            width: "5rem",
            backgroundColor: color,
          }}
        >
          {status}
        </div>
      );
    },
    sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    render: (action) => {
      return (
        <>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            <EditOutlined
              style={{
                margin: "0 6px",
                cursor: "pointer",
              }}
            />
            <DeleteOutlined
              style={{
                margin: "0 6px",
                cursor: "pointer",
              }}
            />
          </div>
        </>
      );
    },
  },
];

export const rowUserData = [
  {
    key: 1,
    Name: { name: "Michael Holz", avatar: avatar_1 },
    Date: "04.10.2013",
    Role: "Admin",
    Status: "Active",
    Action: "2500.00",
  },
  {
    key: 2,
    Name: { name: "Paula Wilson", avatar: avatar_2 },
    Date: "05.08.2014",
    Role: "Publisher",
    Status: "Active",
    Action: "2500.00",
  },
  {
    key: 3,
    Name: { name: "Antonio Moreno", avatar: avatar_3 },
    Date: "11.05.2015",
    Role: "Publisher",
    Status: "Inactive",
    Action: "2500.00",
  },
  {
    key: 4,
    Name: { name: "Mary Saveley", avatar: avatar_4 },
    Date: "06.09.2016",
    Role: "Reviewer",
    Status: "Active",
    Action: "2500.00",
  },
  {
    key: 5,
    Name: { name: "Martin Sommer", avatar: avatar_5 },
    Date: "12.08.2017",
    Role: "Moderator",
    Status: "Suspended",
    Action: "2500.00",
  },
];

export const rowInvoiceData = [
  {
    key: 1,
    Invoice: "AH09802HF99",
    Date: "12.08.2023",
    Description: "Code 8934AD73",
    status: "Pending",
    Amount: "5000.00",
  },
  {
    key: 2,
    Invoice: "AH09802HF99",
    Date: "12.08.2023",
    Description: "Code 8934AD73",
    status: "Completed",
    Amount: "5000.00",
  },
  {
    key: 3,
    Invoice: "AH09802HF99",
    Date: "12.08.2023",
    Description: "Code 8934AD73",
    status: "Pending",
    Amount: "5000.00",
  },
  {
    key: 4,
    Invoice: "AH09802HF99",
    Date: "12.08.2023",
    Description: "Code 8934AD73",
    status: "Completed",
    Amount: "5000.00",
  },
  {
    key: 5,
    Invoice: "AH09802HF99",
    Date: "12.08.2023",
    Description: "Code 8934AD73",
    status: "Completed",
    Amount: "5000.00",
  },
];
