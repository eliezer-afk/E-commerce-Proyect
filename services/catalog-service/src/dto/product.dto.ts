export class CreateProductDto {
    readonly name: string;
    readonly price: number;
    readonly description?: string;
    readonly stock?: number;
}

export class UpdateProductDto {
    readonly name?: string;
    readonly price?: number;
    readonly description?: string;
    readonly stock?: number;
}