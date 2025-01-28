import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { userSchema } from './userSchema'
import { ordersSchema } from './ordersSchema'
import { shipmentsSchema } from './shipmentSchemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, userSchema, ordersSchema, shipmentsSchema],
}
