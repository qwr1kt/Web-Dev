export interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
    images: string[]; //array of images
    category: string; 
    likes: number;
    link: string;
}