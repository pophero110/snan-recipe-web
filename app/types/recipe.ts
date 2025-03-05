export interface Recipe {
  _id: string
  name: string
  description: string
  imageUrl: string
  ingredients: string[]
  instructions: string[]
  cookTimeInMin: number
  servings: number
}