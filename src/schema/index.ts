import { makeExecutableSchema } from 'graphql-tools'
import * as resolvers from '../resolvers'

import documentgql from './document'

const typeDefs = [documentgql]

export const createSchema = () =>
  makeExecutableSchema({
    typeDefs,

    // @ts-ignore
    resolvers,
  })
