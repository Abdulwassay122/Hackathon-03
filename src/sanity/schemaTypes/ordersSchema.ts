export const ordersSchema = {
    name: "orders",
    title: "Orders",
    type: "document",
    fields: [
      {
        name: "orderId",
        title: "Order id",
        type: "string",
      },
      {
        name: "userId",
        title: "User id",
        type: "string",
      },
      {
        name: "products",
        title: "Products list",
        type: "array",
        of: [{ 
          type: "object",
          fields:[
              {
                name: "orderStatus",
                title: "Order Status",
                type: "string",
              },
              {
                name: "orderDate",
                title: "Order Date",
                type: "string",
              },
              {
                name: "estimatedDelivery",
                title: "Estimated Delivery Date",
                type: "string",
              },
                {
                    name:"productId",
                    title:"Product id",
                    type:"string"
                },
                {
                    name:"color",
                    title:"Color",
                    type:"string"
                },
                {
                    name:"size",
                    title:"Size",
                    type:"string"
                },
                {
                    name:"quantity",
                    title:"Quantity",
                    type:"number"
                },
                {
                    name:"productName",
                    title:"Product Name",
                    type:"string"
                },
                {
                    name:"price",
                    title:"Product Rrice",
                    type:"number"
                },
                {
                    name:"totalprice",
                    title:"Total Rrice",
                    type:"number"
                },
                {
                    name:"image",
                    title:"Product image",
                    type:"string"
                },
                {
                    name:"category",
                    title:"Category",
                    type:"string"
                },
                {
                    name:"description",
                    title:"Description",
                    type:"string"
                },
            ]
         }],
      },
      ],
  };
  