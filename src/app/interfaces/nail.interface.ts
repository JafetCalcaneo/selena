export interface Nail {
    id: number,
    image: string,
    nailType: string,
    price: number,
    title: string,
    category?: {name: string},
    description?: string,
    createdAt?: string,
    updatedAt: string,
}
