import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
<div
  className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-12 space-y-8"
  style={{ backgroundImage: `url('/background1.jpg')` }}
>
  <div className="flex gap-6 px-8 py-4 backdrop-blur-sm">
    <Link
      to="/signUp"
      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold"
    >
      🚀 Register
    </Link>
    <Link
      to="/signIn"
      className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition font-semibold"
    >
      🔐 Login
    </Link>
  </div>

  <div className="text-center max-w-2xl p-6  backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-purple-700 mb-4">
      Xush Kelibsiz Green Shop ilovasiga 👋
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed">
  Green Shop — bu tabiatdan ilhomlangan sog'lom hayot tarzi uchun mukammal joy.  
  Biz sizga eng sifatli, ekologik toza va foydali mahsulotlarni taqdim etamiz.  
  <br /> <br />
  🌿 Har kuni yangi mahsulotlar, sog'lomlik bo'yicha tavsiyalar va foydali aksiyalar bilan sizning xizmatdaman.
  <br />
  Yashil hayotni biz bilan boshlang. Tabiiy tanlov sizning qo'lingizda! 🍀
</p>
  </div>
</div>

    </>
   
  )
}

export default Home;