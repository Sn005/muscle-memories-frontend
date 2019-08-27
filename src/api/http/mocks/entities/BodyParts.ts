import { BodyPartsModel } from '@/interfaces/api/http/BodyParts'

const bodyPartsNames = ['胸', '腕', '肩', '背中', '脚']
export const bodyParts = bodyPartsNames.map(
  (v, i): BodyPartsModel => {
    return {
      id: i,
      name: v
    }
  }
)
