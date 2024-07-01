import { useCallback, useState } from "react";
// import { Handle, Position } from "reactflow";
// import { useNavigate } from "react-router-dom";

function RegistrationFormNode({ data, isConnectable }) {
    const [formData, setFormData] = useState({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        password: data.password || "",
        phoneNumber: data.phoneNumber || "",
        dob: data.dob || "",
        gender: data.gender || "",
    });

    // const navigate = useNavigate();

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("registrationData", JSON.stringify(formData));
        console.log("Registration data stored in local storage:", formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            dob: "",
            gender: "",
        });
        // navigate("/login");
    };

    return (
        <div className="registration-form-node">
            {/* <Handle type="target" position={Position.Top} isConnectable={isConnectable} /> */}
            <form onSubmit={handleSubmit}>
                <h3>Registration Form</h3>
                <div style={{ display: "flex", gap: 17 }}>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            id="firstName"
                            name="firstName"
                            onChange={onChange}
                            value={formData.firstName}
                            className="nodrag"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            id="lastName"
                            name="lastName"
                            onChange={onChange}
                            value={formData.lastName}
                            className="nodrag"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={onChange}
                        value={formData.email}
                        className="nodrag"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={onChange}
                        value={formData.password}
                        className="nodrag"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        onChange={onChange}
                        value={formData.phoneNumber}
                        className="nodrag"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        id="dob"
                        name="dob"
                        type="date"
                        onChange={onChange}
                        value={formData.dob}
                        className="nodrag"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        onChange={onChange}
                        value={formData.gender}
                        className="nodrag"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
            {/* <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                isConnectable={isConnectable}
            /> */}
        </div>
    );
}

export default RegistrationFormNode;
