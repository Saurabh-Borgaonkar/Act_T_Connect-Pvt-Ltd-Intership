import { useState } from "react";

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/60",
      name: "iPhone 15",
      price: 70000,
      category: "Mobile",
      stock: 15,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/60",
      name: "Dell Inspiron",
      price: 55000,
      category: "Laptop",
      stock: 8,
    },
  ]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Products
          </h1>
          <p className="text-slate-500">
            Manage all products
          </p>
        </div>

        <button
          className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-lg transition"
        >
          + Add Product
        </button>

      </div>

      {/* Search */}
      <div className="mb-6">

        <input
          type="text"
          placeholder="Search Product..."
          className="w-full md:w-80 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Products Table */}

      <div className="bg-white rounded-xl shadow border border-slate-200 overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Image
              </th>

              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Price
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Stock
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded object-cover"
                  />

                </td>

                <td className="px-6 py-4">
                  {item.name}
                </td>

                <td className="px-6 py-4">
                  ₹ {item.price}
                </td>

                <td className="px-6 py-4">
                  {item.category}
                </td>

                <td className="px-6 py-4">
                  {item.stock}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <button
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Edit
                    </button>

                    <button
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Product Form */}

      <div className="bg-white rounded-xl shadow border border-slate-200 p-6 mt-8">

        <h2 className="text-2xl font-semibold mb-6">
          Add Product
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value,
              })
            }
            className="border border-slate-300 rounded-lg px-4 py-3"
          />

          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value,
              })
            }
            className="border border-slate-300 rounded-lg px-4 py-3"
          />

          <input
            type="text"
            placeholder="Category"
            value={product.category}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.target.value,
              })
            }
            className="border border-slate-300 rounded-lg px-4 py-3"
          />

          <input
            type="number"
            placeholder="Stock"
            value={product.stock}
            onChange={(e) =>
              setProduct({
                ...product,
                stock: e.target.value,
              })
            }
            className="border border-slate-300 rounded-lg px-4 py-3"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={product.image}
            onChange={(e) =>
              setProduct({
                ...product,
                image: e.target.value,
              })
            }
            className="border border-slate-300 rounded-lg px-4 py-3 md:col-span-2"
          />

        </div>

        <button
          className="mt-6 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg transition"
        >
          Save Product
        </button>

      </div>

    </div>
  );
};

export default Products;