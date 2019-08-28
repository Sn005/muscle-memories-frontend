import { BodypartsModel } from '@/interfaces/api/http/Bodyparts'

const bodyPartsNames = ['胸', '腕', '肩', '背中', '脚']
export const bodyparts = bodyPartsNames.map(
  (v, i): BodypartsModel => {
    return {
      id: i + 1,
      name: v
    }
  }
)
