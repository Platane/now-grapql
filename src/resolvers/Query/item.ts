import { QueryResolvers } from '../../schema/types'
import { Context } from '../../handlers/graphql/context'

export const item: QueryResolvers<Context>['item'] = (
  _,
  { itemId },
  { dataLoader },
) => dataLoader.itemLoader.load(itemId)
