import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form/Form";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
    const [formData, setFormData] = useState("");
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main setFormData={setFormData} />} />
                <Route path="/form" element={<Form formData={formData} />} />
            </Routes>
        </div>
    );
}

export default App;
