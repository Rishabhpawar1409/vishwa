export const formTypeImage = [
    { name: "URL", images: ["url.png"] },
    { name: "Upload", images: ["upload.png"] },
    { name: "JSON", images: ["sampleJsonImg.png", "signUp.png"] },
];

export const formType = {
    URL: {
        schema: {
            type: "object",
            properties: {
                httpsUrl: {
                    type: "string",
                    format: "uri",
                    title: "Https URL",
                    pattern: "^https://.*$",
                    errorMessage:
                        "This field only accepts URLs with the HTTPS protocol.",
                    description:
                        "This field only accepts URLs with the HTTPS protocol.",
                },
                url: {
                    type: "string",
                    format: "uri",
                    title: "Https / Http URL",
                },
            },
            required: ["httpsUrl", "url"],
        },
        uiSchema: {
            httpsUrl: {
                "ui:autofocus": true,
            },
        },
    },
    Upload: {
        schema: {
            title: "Files",
            type: "object",
            properties: {
                file: {
                    type: "string",
                    format: "data-url",
                    title: "Profile picture",
                    description:
                        "You can select only one file in this input field, in either .png or .jpg formats",
                },
                files: {
                    type: "array",
                    title: "Certificates",
                    items: {
                        type: "string",
                        format: "data-url",
                    },
                    description:
                        "You can select multiple files in this input field",
                },
            },
        },
        uiSchema: {
            file: {
                "ui:options": {
                    accept: [".png", ".jpg"],
                },
            },
        },
    },
};
