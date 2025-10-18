import React from 'react'

const Menu = () => {
 

  const dishes = [
    {
      name: "Veggie Tempura",
      description: "Deep fried vegetables ",
      price: "$10.00",
      image: "/VeggieTempura.jpg",
      
    },
    {
      name: "Shrimp Tempura",
      description: "Deep Fried shrimps",
      price: "$13.50",
      image: "/SHRIMPTEMPURA.jpg",
    },
    {
      name: "Gyoza",
      description: "Deep Fried Dumpling",
      price: "$14.99",

      
    },
    {
      name: "Takoyaki",
      description: "Fried Octopus ball ",
      price: "$12.50",
      image: "/",
     
    },  
  ];

  return (
    <section id="menu" className="p-10 bg-base-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary">Our Menu</h2>
        <p className="text-gray-500 mt-2">A taste of authentic japanese cuisine .</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {dishes.map((dish, index) => (
          <div key={index} className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
            <figure>
              <img
                src={dish.image}
                alt={dish.name}
                className="h-40 w-full object-cover rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{dish.name}</h3>
              <p>{dish.description}</p>
              <div className="card-actions justify-end">
                <span className="text-lg font-semibold text-primary">{dish.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Menu