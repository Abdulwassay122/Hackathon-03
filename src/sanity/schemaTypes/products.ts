export const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      description: "Rating of the product",
    },
    {
      name: "ratingCount",
      type: "number",
      title: "Rating Count",
      description: "Number of ratings",
    },
    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add sizes like S , M , L , XL , XXL",
    },
    {
      name: "image",
      title: "Image",
      type: "image", // Using Sanity's image type for image field
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
