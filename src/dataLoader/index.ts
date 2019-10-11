import DataLoader from 'dataloader'
import { Dal, DItem } from '../dal'

export const createDataLoader = (dal: Dal) => {
  const itemLoader = new DataLoader(async (itemIds: string[]) => {
    const res = await dal.getItemsByIds(itemIds)

    return itemIds.map((id) => res.find((u) => u.id === id))
  })

  const setItem = (item: DItem) => {
    itemLoader.prime(item.id, item)
    return dal.setItem(item)
  }

  return { setItem, itemLoader }
}

export type IDataLoader = ReturnType<typeof createDataLoader>
