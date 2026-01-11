const navLinks = [
    {
        id: "menu",
        title: "Menu",
    },
    {
        id: "about",
        title: "Our Story",
    },
    {
        id: "work",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Visit Us",
    },
];

const cocktailLists = [
    {
        name: "Madagascar Vanilla",
        country: "Classic",
        detail: "Double Scoop",
        price: "$6",
    },
    {
        name: "Belgian Chocolate",
        country: "Premium",
        detail: "Waffle Cone",
        price: "$8",
    },
    {
        name: "Salted Caramel",
        country: "Signature",
        detail: "Sea Salt",
        price: "$7",
    },
    {
        name: "Pistachio Dream",
        country: "Organic",
        detail: "Roasted Nut",
        price: "$9",
    },
];

const mockTailLists = [
    {
        name: "Wild Berry Sorbet",
        country: "Vegan",
        detail: "Fruit Mix",
        price: "$6",
    },
    {
        name: "Mango Gelato",
        country: "Tropical",
        detail: "Alphonso",
        price: "$7",
    },
    {
        name: "Lemon Zest",
        country: "Fresh",
        detail: "Palate Cleanser",
        price: "$5",
    },
    {
        name: "Minty Lime Sorbet",
        country: "Zesty",
        detail: "Infused Mint",
        price: "$6",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Hand-churned in small batches",
    "Garnished with fresh toppings",
    "Sub-zero served every time",
    "Expertly swirled & scooped",
];

const goodLists = [
    "Farm-to-creamery dairy",
    "Signature waffle cones",
    "Artisanal dessert crafting",
    "Freshly seasonal fruits",
];

const storeInfo = {
    heading: "Find the Sweet Spot",
    address: "123 Broadway, Suite 100, New York, NY 10012",
    contact: {
        phone: "(212) 555-0198",
        email: "hello@thescoopshop.com",
    },
};

const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "https://www.instagram.com",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "https://www.twitter.com",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "https://www.facebook.com",
    },
];

const sliderLists = [
    {
        id: 1,
        name: "Vanilla Bean Lush",
        image: "/images/drink1.png",
        title: "Pure Cream, Real Vanilla",
        description:
            "Crafted with organic cream and hand-scraped Madagascar vanilla beans. A timeless classic that serves as the perfect base for your favorite toppings.",
    },
    {
        id: 2,
        name: "Strawberry Swirl",
        image: "/images/drink2.png",
        title: "Summer in Every Scoop",
        description:
            "A vibrant blend of fresh orchard strawberries and silky sweet cream. It’s light, refreshing, and perfectly balanced for a sunny afternoon treat.",
    },
    {
        id: 3,
        name: "Chocolate Fudge",
        image: "/images/drink3.png",
        title: "Rich, Dark, and Decadent",
        description:
            "Indulge in our deep cocoa blend folded with chunks of house-made dark chocolate fudge. A must-have for the serious chocolate lover.",
    },
    {
        id: 4,
        name: "Mint Choco Chip",
        image: "/images/drink4.png",
        title: "Crisp Coolness in a Cone",
        description:
            "Each scoop is infused with garden-fresh mint and packed with bittersweet chocolate shavings, providing a satisfying crunch in every bite.",
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists as allCocktails,
};