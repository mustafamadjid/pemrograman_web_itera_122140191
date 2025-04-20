import { Link } from "react-router";

import Button from "../../elements/Button/button";

const Intro = () => {
  return (
    <>
      <div className="px-[15%] py-[30px] bg-[#faf4e1] h-[550px] flex justify-between items-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl font-poppins font-semibold text-center ">
            Tingkatkan Produktivitas Baca Anda Melalui Manajemen Buku Harian
            Yang Mudah
          </h1>
          <div>
            <Link to="/daftarbuku">
              <Button
                variant={
                  "bg-[#d76e5e] rounded-[40px] p-3 hover:scale-105 transition-all duration-300 ease-in-out"
                }
              >
                Mulai Sekarang
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://images.vexels.com/media/users/3/157518/isolated/preview/c54323942a5b08df8411e33e25680ab3-pile-of-books-vector.png"
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
