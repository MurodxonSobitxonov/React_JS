const fruits = [
  { id: 1, name: "Watermelon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzpqgM87_FVQ6fibb_VEe2DmhzJxJd7LAWA&s" },
  { id: 2, name: "Orange", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tb9TNY2AX2kyMDEyi58WusljpVSqYiGXAw&s" },
  { id: 3, name: "Cherry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tb9TNY2AX2kyMDEyi58WusljpVSqYiGXAw&s" },
  { id: 4, name: "Lemon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOOL300iHQoUz8yAn7-wdu7pEIyhYB1poRA&s" },
  { id: 5, name: "Blueberry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOOL300iHQoUz8yAn7-wdu7pEIyhYB1poRA&s" },
  { id: 6, name: "Banana", img: "https://www.lovefoodhatewaste.com/sites/default/files/styles/open_graph_image/public/2022-07/Bananas.jpg.webp?itok=-9atP-ZB" },
  { id: 7, name: "Peach", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-IswcSxzeUy3VBIXW6hVl5RFdYqm41kFBg&s" },
  { id: 8, name: "Coconut", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS437WmdOeWPUr3ZexQLljWXnldkAncJPXdQ&s" },
  { id: 9, name: "Papaya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQpqRll8T3X9qgriB5q8Owz7jM1EsKduRdA&s" },
  { id: 10, name: "Dragon Fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhPvD2Ts4i9Q2U7VLPNq1FqX5ZDkOmYVOqQ&s" },
  { id: 11, name: "Grape", img: "https://www.shutterstock.com/image-photo/red-grapes-hanging-on-vine-600nw-2475929273.jpg" },
  { id: 12, name: "Mango", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1snHFE0hT462A_snC22z8OsQaURxbc_CEQQ&s" },
  { id: 13, name: "Mangosteen", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMS98OHWlOIJYhRxZsXe6OH5xclhY2lZ3QQ&s" },
  { id: 14, name: "Durian", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGqGSh1LuCtSNJfvTasX3LSU-Rf_Uccseaw&s" },
  { id: 15, name: "Avocado", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_IgnEpm3Qg3EzzoZjMa0Q3WI-Ammya_VEQ&s" },
];

function App() {
  return (
    <div className="container">
      <h1 className="title">Fruit</h1>

      <div className="grid">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="card">
            <div className="imgBox">
              <img src={fruit.img} alt={fruit.name} />
            </div>
            <p>{fruit.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
