import { ItemResolvers } from '../schema/types'
import { Context } from '../handlers/graphql/context'

export const __resolveType: ItemResolvers<Context>['__resolveType'] = ({
  type,
}) => ('Item_' + type) as any
