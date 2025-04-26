import React from 'react'
const Home = () => {
  return (
    <>
<div
  className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-12 space-y-8"
  style={{ backgroundImage: `url('/background1.jpg')` }}
>
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