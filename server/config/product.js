const products = [
  {
    name: "Potato 500g",
    description: ["Fresh and organic", "Rich in carbohydrates", "Ideal for curries and fries"],
    category: "Vegetables",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745554710/bveyx0turcojtapg89z1.png"],
    rating: 0,
    instock: false,
    price: 25,
    offerPrice: 20,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Tomato 1 kg",
    description: ["Juicy and ripe", "Rich in Vitamin C", "Perfect for salads and sauces", "Farm fresh quality"],
    category: "Vegetables",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745554710/ublcjib52ogudhbssk0b.png"],
    rating: 0,
    instock: true,
    price: 40,
    offerPrice: 35,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Carrot 500g",
    description: ["Sweet and crunchy", "Good for eyesight", "Ideal for juices and salads"],
    category: "Vegetables",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745554710/aq5buqabedqbiqsfzuq4.png"],
    rating: 0,
    instock: true,
    price: 30,
    offerPrice: 28,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Spinach 500g",
    description: ["Rich in iron", "High in vitamins", "Perfect for soups and salads"],
    category: "Vegetables",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555164/vrghtjqovewzzrvqjmsd.png"],
    rating: 0,
    instock: true,
    price: 18,
    offerPrice: 15,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Onion 500g",
    description: ["Fresh and pungent", "Perfect for cooking", "A kitchen staple"],
    category: "Vegetables",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555165/si6kyrewemgclm7h3ckb.png"],
    rating: 0,
    instock: true,
    price: 22,
    offerPrice: 19,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Apple 1 kg",
    description: ["Crisp and juicy", "Rich in fiber", "Boosts immunity", "Perfect for snacking and desserts", "Organic and farm fresh"],
    category: "Fruits",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555164/iz04dzo8e3y8r8crjic4.png"],
    rating: 0,
    instock: true,
    price: 120,
    offerPrice: 110,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Orange 1 kg",
    description: ["Juicy and sweet", "Rich in Vitamin C", "Perfect for juices and salads"],
    category: "Fruits",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555550/d8flmll2o5d4chjxgjk9.png"],
    rating: 0,
    instock: true,
    price: 80,
    offerPrice: 75,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Banana 1 kg",
    description: ["Sweet and ripe", "High in potassium", "Great for smoothies and snacking"],
    category: "Fruits",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555551/zsijzx8aozqazu7kh42y.png"],
    rating: 0,
    instock: true,
    price: 50,
    offerPrice: 45,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Mango 1 kg",
    description: ["Sweet and flavorful", "Perfect for smoothies and desserts", "Rich in Vitamin A"],
    category: "Fruits",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555551/v7vtcqyyntwdmi3avnul.png"],
    rating: 0,
    instock: true,
    price: 150,
    offerPrice: 140,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Grapes 500g",
    description: ["Fresh and juicy", "Rich in antioxidants", "Perfect for snacking and fruit salads"],
    category: "Fruits",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555548/rnec6kuusyl109cn28q3.png"],
    rating: 0,
    instock: true,
    price: 70,
    offerPrice: 65,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Amul Milk 1L",
    description: ["Pure and fresh", "Rich in calcium", "Ideal for tea, coffee, and desserts", "Trusted brand quality"],
    category: "Dairy",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555919/juehrqp61osplfgf8ndx.png"],
    rating: 0,
    instock: true,
    price: 60,
    offerPrice: 55,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Paneer 200g",
    description: ["Soft and fresh", "Rich in protein", "Ideal for curries and snacks"],
    category: "Dairy",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555921/lqsykbavcy9mznv8empl.png"],
    rating: 0,
    instock: true,
    price: 90,
    offerPrice: 85,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Eggs 12 pcs",
    description: ["Farm fresh", "Rich in protein", "Ideal for breakfast and baking"],
    category: "Dairy",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555921/wpips74xudyfg7b1bfr5.png"],
    rating: 0,
    instock: true,
    price: 90,
    offerPrice: 85,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Cheese 200g",
    description: ["Creamy and delicious", "Perfect for pizzas and sandwiches", "Rich in calcium"],
    category: "Dairy",
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745555919/vlrtyxmfvq2kykbtz920.png"],
    rating: 0,
    instock: true,
    price: 140,
    offerPrice: 130,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Coca-Cola 1.5L",
    category: "Drinks",
    price: 80,
    offerPrice: 75,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745556459/vcvdzvcu513qgdiuli0x.png"],
    description: [
      "Refreshing and fizzy",
      "Perfect for parties and gatherings",
      "Best served chilled"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Pepsi 1.5L",
    category: "Drinks",
    price: 78,
    offerPrice: 73,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745556459/whhvj6ffurj7quxeokat.png"],
    description: [
      "Chilled and refreshing",
      "Perfect for celebrations",
      "Best served cold"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Sprite 1.5L",
    category: "Drinks",
    price: 79,
    offerPrice: 74,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745556458/napnxkhzv8gstchhr34q.png"],
    description: [
      "Refreshing citrus taste",
      "Perfect for hot days",
      "Best served chilled"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Fanta 1.5L",
    category: "Drinks",
    price: 77,
    offerPrice: 72,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745556460/o1f9lxer4q5looe6gha8.png"],
    description: [
      "Sweet and fizzy",
      "Great for parties and gatherings",
      "Best served cold"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "7 Up 1.5L",
    category: "Drinks",
    price: 76,
    offerPrice: 71,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745556458/o4bksn5wdvlewoml1wfj.png"],
    description: [
      "Refreshing lemon-lime flavor",
      "Perfect for refreshing",
      "Best served chilled"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Basmati Rice 5kg",
    category: "Grains",
    price: 550,
    offerPrice: 520,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557091/s2rutrpbkog3ysczsjhl.png"],
    description: [
      "Long grain and aromatic",
      "Perfect for biryani and pulao",
      "Premium quality"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Wheat Flour 5kg",
    category: "Grains",
    price: 250,
    offerPrice: 230,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557092/vdmqsyuufiqoqgtsjzsw.png"],
    description: [
      "High-quality whole wheat",
      "Soft and fluffy rotis",
      "Rich in nutrients"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Organic Quinoa 500g",
    category: "Grains",
    price: 450,
    offerPrice: 420,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557091/t8jrfndrlwniyesuuj1m.png"],
    description: [
      "High in protein and fiber",
      "Gluten-free",
      "Rich in vitamins and minerals"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Brown Rice 1kg",
    category: "Grains",
    price: 120,
    offerPrice: 110,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557090/jxoxvepunu1nvrzrnv1z.png"],
    description: [
      "Whole grain and nutritious",
      "Helps in weight management",
      "Good source of magnesium"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Barley 1kg",
    category: "Grains",
    price: 150,
    offerPrice: 140,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557092/fhqb2h3opfaobp2qhn0k.png"],
    description: [
      "Rich in fiber",
      "Helps improve digestion",
      "Low in fat and cholesterol"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Brown Bread 400g",
    category: "Bakery",
    price: 40,
    offerPrice: 35,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557573/sjhron0v9skazjlcutjt.png"],
    description: [
      "Soft and healthy",
      "Made from whole wheat",
      "Ideal for breakfast and sandwiches"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Butter Croissant 100g",
    category: "Bakery",
    price: 50,
    offerPrice: 45,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557573/kp5dupwvvtgwqee9ztdj.png"],
    description: [
      "Flaky and buttery",
      "Freshly baked",
      "Perfect for breakfast or snacks"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Chocolate Cake 500g",
    category: "Bakery",
    price: 350,
    offerPrice: 325,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557573/yajdb6sellgldsbtglad.png"],
    description: [
      "Rich and moist",
      "Made with premium cocoa",
      "Ideal for celebrations and parties"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Whole Bread 400g",
    category: "Bakery",
    price: 45,
    offerPrice: 40,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557573/rlwpxycb3atxhumcj596.png"],
    description: [
      "Healthy and nutritious",
      "Made with whole wheat flour",
      "Ideal for sandwiches and toast"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Vanilla Muffins 6 pcs",
    category: "Bakery",
    price: 100,
    offerPrice: 90,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745557574/atxr6irevad1nxtjgj1o.png"],
    description: [
      "Soft and fluffy",
      "Perfect for a quick snack",
      "Made with real vanilla"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Maggi Noodles 280g",
    category: "Instant",
    price: 55,
    offerPrice: 50,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745558152/iq2x8xttuprczg7avl8k.png"],
    description: [
      "Instant and easy to cook",
      "Delicious taste",
      "Popular among kids and adults"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Top Ramen 270g",
    category: "Instant",
    price: 45,
    offerPrice: 40,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745558153/wdaxcpgxrt9jsxo6pe04.png"],
    description: [
      "Quick and easy to prepare",
      "Spicy and flavorful",
      "Loved by college students and families"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Knorr Cup Soup 70g",
    category: "Instant",
    price: 35,
    offerPrice: 30,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745558154/un8gfalnxcb23axpmyni.png"],
    description: [
      "Convenient for on-the-go",
      "Healthy and nutritious",
      "Variety of flavors"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Yippee Noodles 260g",
    category: "Instant",
    price: 50,
    offerPrice: 45,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745558154/rjr7yp4xy5wswkjnisvg.png"],
    description: [
      "Non-fried noodles for healthier choice",
      "Tasty and filling",
      "Convenient for busy schedules"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  },
  {
    name: "Oats Noodles 72g",
    category: "Instant",
    price: 40,
    offerPrice: 35,
    images: ["https://res.cloudinary.com/dmcpn5wvu/image/upload/v1745558153/ei86ebqwogrrr60b261v.png"],
    description: [
      "Healthy alternative with oats",
      "Good for digestion",
      "Perfect for breakfast or snacks"
    ],
    instock: true,
    rating: 0,
    userid: "68dfc30a691439a0b549dc01"
  }
]

export default products

