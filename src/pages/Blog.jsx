import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaRegCommentDots, FaRegHeart, FaSearch } from "react-icons/fa";
import ModalAuth from "../modalPopUp/ModalAuth";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isRegistered] = useState(localStorage.getItem("token") !== null && localStorage.getItem("token") !== "");
  const [modalOpen, setModalOpen] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://green-shop-backend.onrender.com/api/user/blog`,
        {
          params: {
            access_token: "6803b89df2a99d0247959d1a",
            search: search,
          },
        }
      );
      setBlogs(response.data?.data || []);
    } catch (error) {
      console.error("Bloglarni olishda xatolik:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceFetch = setTimeout(fetchBlogs, 500);
    return () => clearTimeout(debounceFetch);
  }, [search]);

  const handleJoinGreenshop = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {!isRegistered && (
        <div className="text-center mb-6">
          <div className="w-full h-96 bg-gray-200 mb-6">
            <img
              src="https://learn.microsoft.com/en-us/mesh/resources/media/avatar-wardrobe-update.png"
              alt="Greenshop banner"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-5xl font-semibold mb-4">
              Monetize your content with <span className="text-green-500">GreenShop</span>
            </h1>
            <p className="text-lg font-semibold">
              Greenshop - a platform for buying and selling, publishing and
              monetizing all types of flowers: articles, notes, video, photos,
              podcasts, or songs.
            </p>
            <p className="text-lg mt-4">
              Join Greenshop and start monetizing your content today!
            </p>
          </div>

          <button
            className="text-green-500 text-xl font-semibold px-6 py-3 rounded-lg hover:bg-green-100 transition duration-300"
            onClick={handleJoinGreenshop}
          >
            Join Greenshop
          </button>
        </div>
      )}

      {isRegistered && (
        <div className="flex items-center gap-2 mb-6">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Blog qidiring..."
            className="w-full p-2 border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {loading ? (
        <div className="text-center p-4">Yuklanmoqda...</div>
      ) : blogs.length === 0 ? (
        <div className="text-center p-4">Blog topilmadi</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition duration-300 bg-white"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.short_description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaEye /> <span>{blog.views || 0}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCommentDots /> <span>0</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegHeart /> <span>0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ModalAuth open={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Blog;
