import { Item_OneResolvers } from '../schema/types'
import { Context } from '../handlers/graphql/context'
import { DItem } from '../dal'

export const date: Item_OneResolvers<Context>['date'] = (
  { id }: DItem,
  _,
  { dataLoader },
) => Date.now()
