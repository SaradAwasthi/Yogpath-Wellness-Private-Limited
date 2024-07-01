import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import "./registration-form-node.css";
import RegistrationFormNode from "./components/RegistrationFormNode";

const rfStyle = {
    backgroundColor: "#B8CEFF",
};

const initialNodes = [
    {
        id: "register-1",
        type: "registrationForm",
        position: { x: 250, y: 100 },
        data: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            dob: "",
            gender: "",
        },
    },
];

const nodeTypes = { registrationForm: RegistrationFormNode };

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView style={rfStyle} />
        </div>
    );
}

export default Flow;
