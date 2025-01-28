export const shipmentsSchema = {
    name: "shipment",
    title: "Shipments",
    type: "document",
    fields: [
      {
        name: "shipId",
        title: "Shipping id",
        type: "string",
      },
      {
        name: "orderId",
        title: "Order id",
        type: "string",
      },
      {
        name: "status",
        title: "Status",
        type: "string",
      },
      {
        name: "exptDate",
        title: "Expected Delivery Date",
        type: "string",
      },
      {
        name:"customerName",
        title:"Cusomer Name",
        type:"string",
      },
      {
        name:"customerAddress",
        title:"Cusomer Address",
        type:"string",
      },
      {
        name:"postalcode",
        title:"Postal Code",
        type:"string",
      },
      {
        name:"locality",
        title:"Locality/City",
        type:"string",
      },
      {
        name:"state",
        title:"State/Province",
        type:"string",
      },
      {
        name:"country",
        title:"Locality/City",
        type:"string",
      },
      {
        name:"eamil",
        title:"Email",
        type:"string",
      },
      {
        name:"phone",
        title:"Phone No",
        type:"number",
      },
    ],
  };
  