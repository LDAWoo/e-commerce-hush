import { Box, Info, LayoutGrid, LayoutList, LogOut, Settings, UserRound } from "lucide-react";

export type DashBoardSideBarProps = {
    name: string;
    icon: string;
    link: string;
};

export const DashBoardSideBar: DashBoardSideBarProps[] = [
    {
        name: "Home Page",
        icon: "homepage",
        link: "/dashboard",
    },
    {
        name: "User",
        icon: "user",
        link: "/dashboard/users",
    },
    {
        name: "Product",
        icon: "product",
        link: "/dashboard/products",
    },
    {
        name: "Collections",
        icon: "collections",
        link: "/dashboard/collections",
    },
    {
        name: "Help",
        icon: "help",
        link: "/dashboard/help",
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

export const colorOptions = [
    { id: "black", label: "Black", hex: "#000000", count: 12 },
    { id: "white", label: "White", hex: "#FFFFFF", count: 10 },
    { id: "red", label: "Red", hex: "#FF0000", count: 8 },
    { id: "blue", label: "Blue", hex: "#0000FF", count: 7 },
    { id: "green", label: "Green", hex: "#00FF00", count: 6 },
    { id: "yellow", label: "Yellow", hex: "#FFFF00", count: 5 },
    { id: "purple", label: "Purple", hex: "#800080", count: 4 },
    { id: "pink", label: "Pink", hex: "#FFC0CB", count: 3 },
    { id: "orange", label: "Orange", hex: "#FFA500", count: 2 },
    { id: "gray", label: "Gray", hex: "#808080", count: 1 },
];

export const sizeOptions = [
    { id: "xs", label: "XS", count: 1 },
    { id: "s", label: "S", count: 2 },
    { id: "m", label: "M", count: 6 },
    { id: "l", label: "L", count: 5 },
    { id: "xl", label: "XL", count: 2 },
    { id: "xxl", label: "2XL", count: 3 },
    { id: "xxxl", label: "3XL", count: 10 },
    { id: "xxxxl", label: "4XL", count: 11 },
    { id: "xxxxxl", label: "5XL", count: 1 },
];

export const discountOptions = [
    { id: "40", label: "40%", count: 9 },
    { id: "50", label: "50%", count: 22 },
    { id: "0", label: "No discount", count: 23 },
];
