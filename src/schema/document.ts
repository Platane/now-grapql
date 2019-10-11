export default `
schema {
  query: Query
  mutation: Mutation
}

type Query {
  item(itemId: ID!): Item
}

type Mutation {
  addItem(item: InputAddItem!): Boolean
}

input InputAddItem {
  type: ItemType!
}

enum ItemType {
  one
  two
}

interface Item {
  type: ItemType!
  id: ID!
}
type Item_one implements Item {
  type: ItemType!
  id: ID!
  date: Int
}
type Item_two implements Item {
  type: ItemType!
  id: ID!
}
`
