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
                    title: "URL",
                    pattern: "^https://.*$",
                    errorMessage:
                        "This field only accepts URLs with the HTTPS protocol.",
                    description:
                        "This field only accepts URLs with the HTTPS protocol.",
                },
                url: {
                    type: "string",
                    format: "uri",
                    title: "URL",
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
                    title: "Single file",
                },
                files: {
                    type: "array",
                    title: "Multiple files",
                    items: {
                        type: "string",
                        format: "data-url",
                    },
                },
            },
        },
        uiSchema: {
            file: {
                "ui:options": {
                    accept: [".png", ".pdf", ".webp"],
                },
            },
        },
    },
};
