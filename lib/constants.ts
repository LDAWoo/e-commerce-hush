import { Color, Size } from "@prisma/client";
import { Box, Info, LayoutGrid, LayoutList, LogOut, Settings, UserRound } from "lucide-react";

export type DashBoardSideBarProps = {
    name: string;
    icon: string;
    link?: string;
    subItems?: { name: string; link: string }[];
};

export const DashBoardSideBar: DashBoardSideBarProps[] = [
    {
        name: "Page manager",
        icon: "homepage",
        link: "/dashboard",
    },
    {
        name: "Store",
        icon: "product",
        subItems: [
            { name: "Products", link: "/dashboard/products" },
            { name: "Collections", link: "/dashboard/collections" },
            { name: "Order", link: "/dashboard/orders" },
        ],
    },
    {
        name: "Business analytics",
        icon: "collections",
        link: "/dashboard/analytics",
    },
    {
        name: "Promotion",
        icon: "help",
        link: "/dashboard/promotion",
    },
    {
        name: "Message",
        icon: "user",
        link: "/dashboard/messages",
    },
    {
        name: "Settings",
        icon: "settings",
        link: "/dashboard/settings",
    },
    {
        name: "Log out",
        icon: "logout",
        link: "/dashboard/logout",
    },
];

export const icons = [
    {
        value: "homepage",
        label: "Home page",
        path: LayoutGrid,
    },
    {
        value: "user",
        label: "User",
        path: UserRound,
    },
    {
        value: "product",
        label: "Product",
        path: Box,
    },
    {
        value: "collections",
        label: "Collections",
        path: LayoutList,
    },
    {
        value: "help",
        label: "Help",
        path: Info,
    },
    {
        value: "settings",
        label: "Settings",
        path: Settings,
    },
    {
        value: "logout",
        label: "Logout",
        path: LogOut,
    },
];

export type CollectionsType = {
    id: number;
    name: string;
    description: string;
    productCount: number;
    link: string;
};

export const collections: CollectionsType[] = [
    { id: 1, name: "Summer Essentials", description: "Hot weather must-haves", productCount: 25, link: "https://source.unsplash.com/random/800x600?summer" },
    { id: 2, name: "Winter Warmers", description: "Cozy cold-weather gear", productCount: 30, link: "https://source.unsplash.com/random/800x600?winter" },
    { id: 3, name: "Outdoor Adventure", description: "Gear for nature enthusiasts", productCount: 40, link: "https://source.unsplash.com/random/800x600?outdoor" },
    { id: 4, name: "Home Office", description: "Productivity boosting items", productCount: 20, link: "https://source.unsplash.com/random/800x600?office" },
    { id: 5, name: "Fitness Fanatics", description: "Equipment for workout lovers", productCount: 35, link: "https://source.unsplash.com/random/800x600?fitness" },
    { id: 6, name: "Kitchen Gadgets", description: "Tools for culinary creativity", productCount: 45, link: "https://source.unsplash.com/random/800x600?kitchen" },
    { id: 7, name: "Tech Accessories", description: "Enhance your devices", productCount: 50, link: "https://source.unsplash.com/random/800x600?tech" },
    { id: 8, name: "Pet Paradise", description: "Spoil your furry friends", productCount: 30, link: "https://source.unsplash.com/random/800x600?pet" },
    { id: 9, name: "Garden Oasis", description: "Create your backyard retreat", productCount: 25, link: "https://source.unsplash.com/random/800x600?garden" },
    { id: 10, name: "Travel Essentials", description: "Must-haves for globetrotters", productCount: 35, link: "https://source.unsplash.com/random/800x600?travel" },
    { id: 11, name: "Eco-Friendly", description: "Sustainable living products", productCount: 40, link: "https://source.unsplash.com/random/800x600?eco" },
    { id: 12, name: "Kids' Corner", description: "Fun and educational items for children", productCount: 45, link: "https://source.unsplash.com/random/800x600?kids" },
    { id: 13, name: "Beauty Basics", description: "Skincare and makeup essentials", productCount: 30, link: "https://source.unsplash.com/random/800x600?beauty" },
    { id: 14, name: "Bookworm's Delight", description: "Page-turners and reading accessories", productCount: 50, link: "https://source.unsplash.com/random/800x600?books" },
    { id: 15, name: "Gamer's Haven", description: "Level up your gaming setup", productCount: 40, link: "https://source.unsplash.com/random/800x600?gaming" },
    { id: 16, name: "DIY Projects", description: "Tools and supplies for creators", productCount: 35, link: "https://source.unsplash.com/random/800x600?diy" },
    { id: 17, name: "Wellness & Spa", description: "Self-care and relaxation items", productCount: 25, link: "https://source.unsplash.com/random/800x600?spa" },
    { id: 18, name: "Party Supplies", description: "Celebrate in style", productCount: 30, link: "https://source.unsplash.com/random/800x600?party" },
    { id: 19, name: "Automotive Care", description: "Keep your ride in top shape", productCount: 20, link: "https://source.unsplash.com/random/800x600?car" },
    { id: 20, name: "Smart Home", description: "Automate and modernize your living space", productCount: 35, link: "https://source.unsplash.com/random/800x600?smarthome" },
    { id: 21, name: "Vintage Finds", description: "Unique retro treasures", productCount: 15, link: "https://source.unsplash.com/random/800x600?vintage" },
    { id: 22, name: "Art Supplies", description: "Unleash your creativity", productCount: 40, link: "https://source.unsplash.com/random/800x600?art" },
    { id: 23, name: "Camping Gear", description: "Roughing it in comfort", productCount: 30, link: "https://source.unsplash.com/random/800x600?camping" },
    { id: 24, name: "Music Makers", description: "Instruments and accessories", productCount: 25, link: "https://source.unsplash.com/random/800x600?music" },
    { id: 25, name: "Gourmet Delights", description: "Specialty foods and snacks", productCount: 45, link: "https://source.unsplash.com/random/800x600?gourmet" },
    { id: 26, name: "Sustainable Fashion", description: "Eco-conscious clothing and accessories", productCount: 35, link: "https://source.unsplash.com/random/800x600?sustainablefashion" },
    { id: 27, name: "Board Game Bonanza", description: "Family fun night essentials", productCount: 30, link: "https://source.unsplash.com/random/800x600?boardgames" },
    { id: 28, name: "Outdoor Decor", description: "Spruce up your patio or balcony", productCount: 20, link: "https://source.unsplash.com/random/800x600?patio" },
    { id: 29, name: "Craft Beer Enthusiasts", description: "Brews and accessories for beer lovers", productCount: 25, link: "https://source.unsplash.com/random/800x600?craftbeer" },
    { id: 30, name: "Yoga & Meditation", description: "Find your zen", productCount: 30, link: "https://source.unsplash.com/random/800x600?yoga" },
    { id: 31, name: "Movie Night", description: "Enhance your home cinema experience", productCount: 15, link: "https://source.unsplash.com/random/800x600?movie" },
    { id: 32, name: "Coffee Connoisseur", description: "Elevate your caffeine routine", productCount: 20, link: "https://source.unsplash.com/random/800x600?coffee" },
    { id: 33, name: "Retro Gaming", description: "Nostalgia-inducing classics", productCount: 25, link: "https://source.unsplash.com/random/800x600?retrogaming" },
    { id: 34, name: "Minimalist Living", description: "Simplify your space", productCount: 30, link: "https://source.unsplash.com/random/800x600?minimalist" },
    { id: 35, name: "Bike Enthusiast", description: "Gear for cyclists", productCount: 35, link: "https://source.unsplash.com/random/800x600?bicycle" },
    { id: 36, name: "Plant Parent", description: "Green thumb essentials", productCount: 40, link: "https://source.unsplash.com/random/800x600?plants" },
    { id: 37, name: "Cocktail Hour", description: "Mix drinks like a pro", productCount: 25, link: "https://source.unsplash.com/random/800x600?cocktails" },
    { id: 38, name: "Cozy Bedding", description: "Upgrade your sleep sanctuary", productCount: 20, link: "https://source.unsplash.com/random/800x600?bedding" },
    { id: 39, name: "Podcast Pro", description: "Equipment for aspiring podcasters", productCount: 15, link: "https://source.unsplash.com/random/800x600?podcast" },
    { id: 40, name: "Sustainable Kitchen", description: "Eco-friendly cooking and dining", productCount: 30, link: "https://source.unsplash.com/random/800x600?sustainablekitchen" },
    { id: 41, name: "Stationery Lovers", description: "Pens, paper, and planners", productCount: 35, link: "https://source.unsplash.com/random/800x600?stationery" },
    { id: 42, name: "Puzzle Mania", description: "Brain teasers and jigsaw puzzles", productCount: 25, link: "https://source.unsplash.com/random/800x600?puzzle" },
    { id: 43, name: "Aromatherapy", description: "Scents for every mood", productCount: 20, link: "https://source.unsplash.com/random/800x600?aromatherapy" },
    { id: 44, name: "Picnic Perfect", description: "Outdoor dining essentials", productCount: 15, link: "https://source.unsplash.com/random/800x600?picnic" },
    { id: 45, name: "Stargazers", description: "Astronomy tools and accessories", productCount: 10, link: "https://source.unsplash.com/random/800x600?astronomy" },
    { id: 46, name: "Upcycled Treasures", description: "Repurposed and reimagined items", productCount: 20, link: "https://source.unsplash.com/random/800x600?upcycle" },
    { id: 47, name: "Language Learners", description: "Tools for mastering new tongues", productCount: 15, link: "https://source.unsplash.com/random/800x600?language" },
    { id: 48, name: "Tiny Home Living", description: "Space-saving solutions", productCount: 25, link: "https://source.unsplash.com/random/800x600?tinyhome" },
    { id: 49, name: "Vintage Vinyl", description: "Records and turntable accessories", productCount: 30, link: "https://source.unsplash.com/random/800x600?vinyl" },
    { id: 50, name: "Zero Waste Lifestyle", description: "Products for a plastic-free life", productCount: 35, link: "https://source.unsplash.com/random/800x600?zerowaste" },
];

export const filterCollections = [
    { value: "date-new-to-old", label: "Date: New to Old" },
    { value: "date-old-to-new", label: "Date: Old to New" },
    { value: "price-low-to-high", label: "Price: Low to High" },
    { value: "price-high-to-low", label: "Price: High to Low" },
    { value: "name-a-to-z", label: "Name: A to Z" },
    { value: "name-z-to-a", label: "Name: Z to A" },
    { value: "best-selling", label: "Best Selling" },
    { value: "trending", label: "Trending" },
    { value: "featured", label: "Featured" },
    { value: "rating-high-to-low", label: "Rating: High to Low" },
    { value: "rating-low-to-high", label: "Rating: Low to High" },
    { value: "relevance", label: "Relevance" },
];

export const colorOptions: Color[] = [
    { id: "black", name: "Black", hexCode: "#000000", count: 12 },
    { id: "white", name: "White", hexCode: "#FFFFFF", count: 10 },
    { id: "red", name: "Red", hexCode: "#FF0000", count: 8 },
    { id: "blue", name: "Blue", hexCode: "#0000FF", count: 7 },
    { id: "green", name: "Green", hexCode: "#00FF00", count: 6 },
    { id: "yellow", name: "Yellow", hexCode: "#FFFF00", count: 5 },
    { id: "purple", name: "Purple", hexCode: "#800080", count: 4 },
    { id: "pink", name: "Pink", hexCode: "#FFC0CB", count: 3 },
    { id: "orange", name: "Orange", hexCode: "#FFA500", count: 2 },
    { id: "gray", name: "Gray", hexCode: "#808080", count: 1 },
];

export const sizeOptions: Size[] = [
    { id: "1", code: "xs", name: "XS", count: 1 },
    { id: "2", code: "s", name: "S", count: 2 },
    { id: "3", code: "m", name: "M", count: 6 },
    { id: "4", code: "l", name: "L", count: 5 },
    { id: "5", code: "xl", name: "XL", count: 2 },
    { id: "6", code: "xxl", name: "2XL", count: 3 },
    { id: "7", code: "xxxl", name: "3XL", count: 10 },
    { id: "8", code: "xxxxl", name: "4XL", count: 11 },
    { id: "9", code: "xxxxxl", name: "5XL", count: 1 },
];

export const discountOptions = [
    { id: "40", label: "40%", count: 9 },
    { id: "50", label: "50%", count: 22 },
    { id: "0", label: "No discount", count: 23 },
];

export type ProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
    rating: number;
    stock: number;
    size: string[];
    color: string[];
};

export const products: ProductType[] = [
    { id: 1, name: "Classic T-Shirt", description: "Comfortable cotton t-shirt", price: 19.99, category: "Tops", images: ["https://picsum.photos/seed/tshirt1/400/300", "https://picsum.photos/seed/tshirt2/400/300"], rating: 4.5, stock: 100, size: ["S", "M", "L", "XL"], color: ["White", "Black", "Gray"] },
    { id: 2, name: "Slim Fit Jeans", description: "Stylish slim fit denim jeans", price: 59.99, category: "Bottoms", images: ["https://picsum.photos/seed/jeans1/400/300", "https://picsum.photos/seed/jeans2/400/300"], rating: 4.3, stock: 80, size: ["28", "30", "32", "34"], color: ["Blue", "Black"] },
    { id: 3, name: "Hooded Sweatshirt", description: "Warm and cozy hoodie", price: 39.99, category: "Tops", images: ["https://picsum.photos/seed/hoodie1/400/300", "https://picsum.photos/seed/hoodie2/400/300"], rating: 4.6, stock: 75, size: ["S", "M", "L", "XL"], color: ["Gray", "Navy", "Red"] },
    { id: 4, name: "Leather Jacket", description: "Classic leather biker jacket", price: 199.99, category: "Outerwear", images: ["https://picsum.photos/seed/leatherjacket1/400/300", "https://picsum.photos/seed/leatherjacket2/400/300"], rating: 4.8, stock: 30, size: ["S", "M", "L"], color: ["Black", "Brown"] },
    { id: 5, name: "Floral Dress", description: "Summer floral print dress", price: 49.99, category: "Dresses", images: ["https://picsum.photos/seed/floraldress1/400/300", "https://picsum.photos/seed/floraldress2/400/300"], rating: 4.4, stock: 60, size: ["XS", "S", "M", "L"], color: ["Blue", "Pink"] },
    { id: 6, name: "Chino Shorts", description: "Casual chino shorts", price: 34.99, category: "Bottoms", images: ["https://picsum.photos/seed/shorts1/400/300", "https://picsum.photos/seed/shorts2/400/300"], rating: 4.2, stock: 90, size: ["28", "30", "32", "34"], color: ["Khaki", "Navy", "Olive"] },
    { id: 7, name: "Polo Shirt", description: "Classic polo shirt", price: 29.99, category: "Tops", images: ["https://picsum.photos/seed/poloshirt1/400/300", "https://picsum.photos/seed/poloshirt2/400/300"], rating: 4.5, stock: 85, size: ["S", "M", "L", "XL"], color: ["White", "Blue", "Black"] },
    { id: 8, name: "Maxi Skirt", description: "Flowing maxi skirt", price: 44.99, category: "Bottoms", images: ["https://picsum.photos/seed/maxiskirt1/400/300", "https://picsum.photos/seed/maxiskirt2/400/300"], rating: 4.3, stock: 50, size: ["XS", "S", "M", "L"], color: ["Black", "Floral"] },
    { id: 9, name: "Denim Jacket", description: "Classic denim jacket", price: 69.99, category: "Outerwear", images: ["https://picsum.photos/seed/denimjacket1/400/300", "https://picsum.photos/seed/denimjacket2/400/300"], rating: 4.6, stock: 70, size: ["S", "M", "L", "XL"], color: ["Blue", "Black"] },
    { id: 10, name: "Knit Sweater", description: "Warm knit sweater", price: 54.99, category: "Tops", images: ["https://picsum.photos/seed/sweater1/400/300", "https://picsum.photos/seed/sweater2/400/300"], rating: 4.4, stock: 65, size: ["S", "M", "L"], color: ["Cream", "Gray", "Navy"] },
    { id: 11, name: "Cargo Pants", description: "Versatile cargo pants", price: 49.99, category: "Bottoms", images: ["https://picsum.photos/seed/cargopants1/400/300", "https://picsum.photos/seed/cargopants2/400/300"], rating: 4.2, stock: 75, size: ["30", "32", "34", "36"], color: ["Khaki", "Olive", "Black"] },
    { id: 12, name: "Blazer", description: "Tailored blazer", price: 89.99, category: "Outerwear", images: ["https://picsum.photos/seed/blazer1/400/300", "https://picsum.photos/seed/blazer2/400/300"], rating: 4.7, stock: 40, size: ["S", "M", "L"], color: ["Black", "Navy"] },
    { id: 13, name: "Sundress", description: "Light summer sundress", price: 39.99, category: "Dresses", images: ["https://picsum.photos/seed/sundress1/400/300", "https://picsum.photos/seed/sundress2/400/300"], rating: 4.5, stock: 55, size: ["XS", "S", "M", "L"], color: ["Yellow", "White"] },
    { id: 14, name: "Swim Shorts", description: "Quick-dry swim shorts", price: 29.99, category: "Swimwear", images: ["https://picsum.photos/seed/swimshorts1/400/300", "https://picsum.photos/seed/swimshorts2/400/300"], rating: 4.3, stock: 80, size: ["S", "M", "L", "XL"], color: ["Blue", "Red", "Green"] },
    { id: 15, name: "Button-Up Shirt", description: "Casual button-up shirt", price: 44.99, category: "Tops", images: ["https://picsum.photos/seed/buttonupshirt1/400/300", "https://picsum.photos/seed/buttonupshirt2/400/300"], rating: 4.4, stock: 70, size: ["S", "M", "L", "XL"], color: ["White", "Blue", "Striped"] },
    { id: 16, name: "Yoga Pants", description: "Stretchy yoga pants", price: 39.99, category: "Activewear", images: ["https://picsum.photos/seed/yogapants1/400/300", "https://picsum.photos/seed/yogapants2/400/300"], rating: 4.6, stock: 90, size: ["XS", "S", "M", "L"], color: ["Black", "Gray", "Navy"] },
    { id: 17, name: "Windbreaker", description: "Lightweight windbreaker jacket", price: 59.99, category: "Outerwear", images: ["https://picsum.photos/seed/windbreaker1/400/300", "https://picsum.photos/seed/windbreaker2/400/300"], rating: 4.2, stock: 60, size: ["S", "M", "L", "XL"], color: ["Red", "Blue", "Black"] },
    { id: 18, name: "Formal Dress", description: "Elegant formal dress", price: 129.99, category: "Dresses", images: ["https://picsum.photos/seed/formaldress1/400/300", "https://picsum.photos/seed/formaldress2/400/300"], rating: 4.8, stock: 35, size: ["XS", "S", "M", "L"], color: ["Black", "Navy", "Red"] },
    { id: 19, name: "Beanie", description: "Warm knit beanie", price: 14.99, category: "Accessories", images: ["https://picsum.photos/seed/beanie1/400/300", "https://picsum.photos/seed/beanie2/400/300"], rating: 4.3, stock: 100, size: ["One Size"], color: ["Gray", "Black", "Red"] },
    { id: 20, name: "Dress Shirt", description: "Crisp dress shirt", price: 49.99, category: "Tops", images: ["https://picsum.photos/seed/dressshirt1/400/300", "https://picsum.photos/seed/dressshirt2/400/300"], rating: 4.5, stock: 75, size: ["S", "M", "L", "XL"], color: ["White", "Blue", "Pink"] },
    { id: 21, name: "Pencil Skirt", description: "Sleek pencil skirt", price: 39.99, category: "Bottoms", images: ["https://picsum.photos/seed/pencilskirt1/400/300", "https://picsum.photos/seed/pencilskirt2/400/300"], rating: 4.4, stock: 55, size: ["XS", "S", "M", "L"], color: ["Black", "Navy", "Gray"] },
    { id: 22, name: "Puffer Jacket", description: "Warm puffer jacket", price: 79.99, category: "Outerwear", images: ["https://picsum.photos/seed/pufferjacket1/400/300", "https://picsum.photos/seed/pufferjacket2/400/300"], rating: 4.6, stock: 65, size: ["S", "M", "L", "XL"], color: ["Black", "Red", "Blue"] },
    { id: 23, name: "Tank Top", description: "Casual tank top", price: 14.99, category: "Tops", images: ["https://picsum.photos/seed/tanktop1/400/300", "https://picsum.photos/seed/tanktop2/400/300"], rating: 4.2, stock: 95, size: ["XS", "S", "M", "L"], color: ["White", "Black", "Gray"] },
    { id: 24, name: "Cardigan", description: "Cozy knit cardigan", price: 49.99, category: "Tops", images: ["https://picsum.photos/seed/cardigan1/400/300", "https://picsum.photos/seed/cardigan2/400/300"], rating: 4.5, stock: 70, size: ["S", "M", "L", "XL"], color: ["Beige", "Gray", "Navy"] },
    { id: 25, name: "Denim Shorts", description: "Classic denim shorts", price: 29.99, category: "Bottoms", images: ["https://picsum.photos/seed/denimshorts1/400/300", "https://picsum.photos/seed/denimshorts2/400/300"], rating: 4.3, stock: 85, size: ["28", "30", "32", "34"], color: ["Blue", "Black", "White"] },
    { id: 26, name: "Trench Coat", description: "Stylish trench coat", price: 99.99, category: "Outerwear", images: ["https://picsum.photos/seed/trenchcoat1/400/300", "https://picsum.photos/seed/trenchcoat2/400/300"], rating: 4.7, stock: 45, size: ["S", "M", "L"], color: ["Beige", "Black", "Navy"] },
    { id: 27, name: "Crop Top", description: "Trendy crop top", price: 24.99, category: "Tops", images: ["https://picsum.photos/seed/croptop1/400/300", "https://picsum.photos/seed/croptop2/400/300"], rating: 4.4, stock: 75, size: ["XS", "S", "M", "L"], color: ["White", "Black", "Red"] },
    { id: 28, name: "Leggings", description: "Comfortable leggings", price: 34.99, category: "Bottoms", images: ["https://picsum.photos/seed/leggings1/400/300", "https://picsum.photos/seed/leggings2/400/300"], rating: 4.5, stock: 100, size: ["XS", "S", "M", "L"], color: ["Black", "Gray", "Navy"] },
    { id: 29, name: "Bomber Jacket", description: "Classic bomber jacket", price: 69.99, category: "Outerwear", images: ["https://picsum.photos/seed/bomberjacket1/400/300", "https://picsum.photos/seed/bomberjacket2/400/300"], rating: 4.6, stock: 60, size: ["S", "M", "L", "XL"], color: ["Green", "Black", "Navy"] },
    { id: 30, name: "Turtleneck", description: "Cozy turtleneck sweater", price: 44.99, category: "Tops", images: ["https://picsum.photos/seed/turtleneck1/400/300", "https://picsum.photos/seed/turtleneck2/400/300"], rating: 4.3, stock: 70, size: ["S", "M", "L", "XL"], color: ["Black", "Cream", "Gray"] },
    { id: 31, name: "Palazzo Pants", description: "Flowy palazzo pants", price: 54.99, category: "Bottoms", images: ["https://picsum.photos/seed/palazzopants1/400/300", "https://picsum.photos/seed/palazzopants2/400/300"], rating: 4.4, stock: 65, size: ["XS", "S", "M", "L"], color: ["Black", "White", "Navy"] },
    { id: 32, name: "Denim Skirt", description: "Versatile denim skirt", price: 39.99, category: "Bottoms", images: ["https://picsum.photos/seed/denimskirt1/400/300", "https://picsum.photos/seed/denimskirt2/400/300"], rating: 4.2, stock: 80, size: ["XS", "S", "M", "L"], color: ["Blue", "Black"] },
    { id: 33, name: "Parka", description: "Warm winter parka", price: 129.99, category: "Outerwear", images: ["https://picsum.photos/seed/parka1/400/300", "https://picsum.photos/seed/parka2/400/300"], rating: 4.7, stock: 50, size: ["S", "M", "L", "XL"], color: ["Green", "Black", "Navy"] },
    { id: 34, name: "Wrap Dress", description: "Flattering wrap dress", price: 59.99, category: "Dresses", images: ["https://picsum.photos/seed/wrapdress1/400/300", "https://picsum.photos/seed/wrapdress2/400/300"], rating: 4.5, stock: 70, size: ["XS", "S", "M", "L"], color: ["Black", "Red", "Blue"] },
    { id: 35, name: "Pleated Skirt", description: "Elegant pleated skirt", price: 49.99, category: "Bottoms", images: ["https://picsum.photos/seed/pleatedskirt1/400/300", "https://picsum.photos/seed/pleatedskirt2/400/300"], rating: 4.4, stock: 60, size: ["XS", "S", "M", "L"], color: ["Black", "Navy", "Burgundy"] },
];

export const productDetails = { id: 8, name: "Maxi Skirt", description: "Flowing maxi skirt", price: 44.99, category: "Bottoms", images: ["https://picsum.photos/seed/maxiskirt1/400/300", "https://picsum.photos/seed/maxiskirt2/400/300"], rating: 4.3, stock: 50, sizes: ["XS", "S", "M", "L"], colors: ["Black", "Floral"] };
