import { NowRequest, NowResponse } from '@now/node'
import { execute, parse } from 'graphql'
import { Context } from './context'
import { createSchema } from '../../schema'
import { createDataLoader } from '../../dataLoader'
import * as dal from '../../dal'

const schema = createSchema()

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const { query, variables } = req.body

    const document = parse(query)

    const context: Context = {
      dal,
      dataLoader: createDataLoader(dal),
    }

    const u = await execute({
      schema,
      document,
      contextValue: context,
      variableValues: variables,
    })

    res.json(u)
    res.end()
  } catch (err) {
    console.error(err)
  }
}
