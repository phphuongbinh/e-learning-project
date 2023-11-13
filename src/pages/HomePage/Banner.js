import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner bg-[url('https://images.unsplash.com/photo-1585661417298-8236a5f449aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-full relative pt-60">
      <div className="max-w-7xl mx-auto px-6 relative z-20 text-white">
        <h1 className="text-6xl font-semibold mb-4">
          Thiên tài 1% là cảm hứng <br />
          và 99% là mồ hôi
        </h1>
        <p className="text-2xl mb-12">
          Kỹ năng kinh doanh, công nghệ và sáng tạo được giảng dạy bởi các
          chuyên gia trong ngành. <br /> Khám phá một loạt các kỹ năng với các
          hướng dẫn chuyên nghiệp của chúng tôi.
        </p>
        <button className="py-4 px-6 rounded-xl bg-white text-dark text-xl font-medium block mb-6 duration-300 hover:bg-gray-200">
          KHÁM PHÁ KHÓA HỌC
        </button>
        <button>Bạn là giáo viên?</button>
      </div>
      <div className="overlay absolute inset-0 z-10 bg-gray-800 bg-opacity-50"></div>
    </div>
  );
};

export default Banner;
