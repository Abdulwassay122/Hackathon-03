# Schemas

## **Products Schema**:
- **Product ID**: Unique identifier for the product (also used as SKU).
- **Name of Product**: Name of the product.
- **Description**: Detailed information about the product.
- **Price**: Regular price of the product.
- **Discounted Price**: The price after applying the discount.
- **Discount Percentage**: Percentage discount on the regular price.
- **Sizes**: Available sizes for the product.
- **Colors**: Available colors for the product.
- **Tags**: Related keywords or tags for the product.
- **Category**: Category to which the product belongs.
- **Review/Rating**: Average rating (0 to 5).
- **Review/Rating Count**: Total number of reviews/ratings.

---

## **Orders Schema**:
- **Order ID**: Unique identifier for the order.
- **Customer ID**: Links to the `Customer ID` in the Customer schema.
- **Order Status**: Current status of the order (e.g., pending, shipped, delivered).
- **Timestamp**: Date and time when the order was placed.
- **Product Details**:
  - **Product IDs**: List of product IDs in the order.
  - **Colors**: Selected color for each product.
  - **Sizes**: Selected size for each product.
  - **Quantity**: Selected size for each product.

---

## **Customer Schema**:
- **Customer ID**: Unique identifier assigned to the customer.
- **Name**: Name of the customer.
- **Gender**: Gender of the customer (Male/Female/Other).
- **Age**: Age of the customer (in years).
- **Email**: Email address of the customer.
- **Phone Number**: Phone number of the customer.
- **Address**: Complete address of the customer.
- **Order History**:
  - **Order ID**: Unique identifier for each order.
  - **Date**: Date when the order was placed.
  - **Products**: List of products in the order.
  - **Price**: Total price of the order.
  - **Quantity**: Quantity of each product in the order.

---

## **Shipment Schema**:
- **Shipment ID**: Unique identifier for the shipment.
- **Order ID**: Links to the `Order ID` in the Orders schema.
- **Status**: Current status of the shipment (e.g., in transit, delivered).
- **Delivery Date**: Expected delivery date of the shipment.
