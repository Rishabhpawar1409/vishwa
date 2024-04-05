export const dropdownOptions = [
    {
        name: "Login",
        uiSchema: {
            userEmail: {
                "ui:placeholder": "johndoe@gmail.com",
                "ui:autofocus": true,
            },
            password: {
                "ui:widget": "password",
            },
        },
        schema: {
            title: "Login",
            type: "object",
            required: ["userEmail", "password"],
            properties: {
                userEmail: {
                    type: "string",
                    format: "email",
                    title: "Email",
                },
                password: {
                    type: "string",
                    title: "Password",
                    minLength: 5,
                    maxLength: 10,
                },
            },
            mySpecialStringArray: {
                type: "array",
                items: {
                    $ref: "#/definitions/specialString",
                },
            },
        },
    },
    {
        name: "Signup",
        uiSchema: {
            firstName: {
                "ui:placeholder": "John",
                "ui:autofocus": true,
            },
            lastName: {
                "ui:placeholder": "Doe",
            },
            userEmail: {
                "ui:placeholder": "johndoe@gmail.com",
            },
            password: {
                "ui:widget": "password",
                "ui:help": "Hint: Make it strong!",
            },
        },
        schema: {
            title: "Sign up",
            type: "object",
            required: ["firstName", "lastName", "email", "password"],
            properties: {
                firstName: {
                    type: "string",
                    title: "First name",
                },
                lastName: {
                    type: "string",
                    title: "Last name",
                },
                userEmail: {
                    type: "string",
                    format: "email",
                    title: "Email",
                },
                password: {
                    type: "string",
                    title: "Password",
                    minLength: 5,
                    maxLength: 10,
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
        uiSchema: {
            firstName: {
                "ui:placeholder": "John",
                "ui:autofocus": true,
            },
            lastName: {
                "ui:placeholder": "Doe",
            },
            userEmail: {
                "ui:placeholder": "johndoe@gmail.com",
            },
            password: {
                "ui:widget": "password",
                "ui:help": "Hint: Make it strong!",
            },
            avatar: {
                "ui:options": {
                    accept: ".png",
                },
            },
        },
        schema: {
            title: "Complete your profile",
            type: "object",
            required: ["firstName", "lastName", "email"],
            properties: {
                firstName: {
                    type: "string",
                    title: "First name",
                },
                lastName: {
                    type: "string",
                    title: "Last name",
                },
                userEmail: {
                    type: "string",
                    format: "email",
                    title: "Email",
                },
                password: {
                    type: "string",
                    title: "Password",
                    minLength: 5,
                    maxLength: 10,
                },
                phoneNumber: {
                    type: "string",
                    title: "Phone no.",
                    minLength: 10,
                    maxLength: 10,
                },
                avatar: {
                    type: ["string", "null"],
                    title: "Avatar",
                    format: "data-url",
                    description: "Can only select PNG format file",
                },
            },
        },
    },
];
