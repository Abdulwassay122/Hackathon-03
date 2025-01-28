export const userSchema = {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Customer Name",
        type: "string",
      },
      {
        name: "userId",
        title: "User Id",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "password",
        title: "Parrword",
        type: "string",
      },
      {
        name: "gender",
        title: "Gender",
        type: "string",
        options: {
            list: [
              { title: 'Male', value: 'male' },
              { title: 'Female', value: 'female' },
            ],
          },
      },
      {
        name: "DOB",
        title: "Date of Birth",
        type: "string",
      },
      {
        name: "phoneNo",
        title: "Phone Number",
        type: "number",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      }
    ]
  };
  