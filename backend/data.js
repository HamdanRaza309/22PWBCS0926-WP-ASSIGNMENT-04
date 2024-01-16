import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: 'Hamdan Raza',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user123@gmail.com',
      password: bcrypt.hashSync('user123'),
      isAdmin: false,
    }
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {

      name: "T-Shirt",
      slug: 'adidas-fit-pant',
      category: 'Pants',
      price: "$40.00",
      image: "/images/p5.png",
      countInStock: 5,
      brand: 'Outfitters',
      rating: 4.5,
      numReviews: 33,
      description: 'high quality product',
    },
    {

      name: "Oversize T-Shirt",
      slug: 'adidas-fit-pant',
      category: 'Pants',
      price: "$52.99",
      image: "/images/p6.jpg",
      countInStock: 5,
      brand: 'Sapphire',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {

      name: "Sweater",
      slug: 'adidas-fit-pant',
      category: 'Pants',
      price: "$69.99",
      price: "$52.99",
      image: "/images/p7.jpg",
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },

  ],
};
export default data;
