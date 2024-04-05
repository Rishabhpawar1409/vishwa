export const dropdownOptions = [
    {
        name: "Login",
        schema: {
            title: "Login",
            type: "object",
            properties: {
                userEmail: {
                    type: "string",
                    title: "Email",
                },
                password: {
                    type: "string",
                    title: "Password",
                    minLength: 10,
                },
            },
        },
    },
    {
        name: "Signup",
        schema: {
            title: "Sign up",
            type: "object",
            properties: {
                firstName: {
                    type: "string",
                    title: "First name",
                },
                lastName: {
                    type: "string",
                    title: "Last name",
                },
                password: {
                    type: "string",
                    title: "Password",
                    minLength: 10,
                },
                phoneNumber: {
                    type: "string",
                    title: "Phone no.",
                    minLength: 10,
                    maxLength: 10,
                },
            },
        },
    },
    {
        name: "Profile",
        schema: {
            title: "Complete your profile",
            type: "object",
            properties: {
                firstName: {
                    type: "string",
                    title: "First name",
                },
                lastName: {
                    type: "string",
                    title: "Last name",
                },
                password: {
                    type: "string",
                    title: "Password",
                    minLength: 10,
                },
                phoneNumber: {
                    type: "string",
                    title: "Phone no.",
                    minLength: 10,
                    maxLength: 10,
                },
                avatar: {
                    type: "string",
                    title: "Avatar",
                    format: "data-url",
                },
            },
        },
    },
];
