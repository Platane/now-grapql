import fs from 'fs'
import path from 'path'
import { DItem } from '../type'
const DATA_DIR = path.resolve(__dirname, '../../../.data')

export const set = (key: string, item: any) => {
  const filename = path.join(DATA_DIR, `${key}`)

  try {
    fs.mkdirSync(DATA_DIR)
  } catch (err) {}

  fs.writeFileSync(filename, JSON.stringify(item))
}

export const get = (key: string) => {
  const filename = path.join(DATA_DIR, `${key}`)

  try {
    return JSON.parse(fs.readFileSync(filename).toString())
  } catch (err) {
    return null
  }
}
export const getItemsByIds = async (ids: string[]) =>
  ids.map(get).filter(Boolean)

export const setItem = async (item: DItem) => {
  set(item.id, item)
}
