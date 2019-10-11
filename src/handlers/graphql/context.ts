import { Dal } from '../../dal'
import { IDataLoader } from '../../dataLoader'

export type Context = {
  dal: Dal
  dataLoader: IDataLoader
}
