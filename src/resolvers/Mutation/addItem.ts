import { MutationResolvers } from '../../schema/types'
import { Context } from '../../handlers/graphql/context'

export const addItem: MutationResolvers<Context>['addItem'] = async (
  _0,
  { item },
  { dataLoader },
) => {
  const id = Math.random().toString()

  await dataLoader.setItem({ ...item, id })

  return true
}
