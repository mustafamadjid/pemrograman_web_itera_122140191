import { Star } from "lucide-react";

const recBooks = [
  {
    id: 1,
    image:
      "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9780735211292.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    rating: "4.9",
  },
  {
    id: 2,
    image:
      "https://ebooks.gramedia.com/ebook-covers/46224/image_highres/ID_F10AD2019MTH02F10AD.jpg",
    title: "Factfulness",
    author: "Hans Rosling",
    rating: "4.5",
  },
  {
    id: 3,
    image: "https://cdn.gramedia.com/uploads/items/img183.jpg",
    title: "Mindset",
    author: "Dr. Carol S. Dweck",
    rating: "4.8",
  },
  {
    id: 4,
    image:
      "https://ebooks.gramedia.com/ebook-covers/47877/image_highres/ID_SWW2019MTH06SWW.jpg",
    title: "Start with Why",
    author: "Simon Sinek",
    rating: "5.0",
  },
  {
    id: 5,
    image:
      "https://ebooks.gramedia.com/ebook-covers/47982/image_highres/ID_TGR2019MTH06TGR.jpg",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    rating: "4.7",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX9ixRQHqjKiz3gL__Hta5KZnp4DHhp1Msg&s",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: "4.8",
  },
];

const RecommendedBooks = () => {
  return (
    <>
      <div className="px-[15%] py-[30px]">
        <div>
          <h1 className="text-4xl font-poppins  text-center mt-10 mb-20 text-[#0c3c5c]">
            Buku Rekomendasi Untuk Anda Baca
          </h1>
        </div>
        <div className=" grid grid-cols-3 gap-12 ">
          {recBooks.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-3 p-10 outline-dashed outline-2 outline-[#d76e5e] rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img src={item.image} alt="" className="w-[200px] h-[300px]" />
              <h1 className="font-poppins font-semibold">{item.title}</h1>
              <p className="font-poppins">{item.author}</p>
              <p className="font-poppins flex items-center gap-2 mt-2">
                {" "}
                <Star /> {item.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedBooks;
