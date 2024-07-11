import React from "react";
import BlogCard from "./BlogCard";
const blogDatas = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/15045083/pexels-photo-15045083/free-photo-of-woman-in-hat-posing-by-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Linane Cunine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandaeperspiciatis facilis voluptas neque fugiat voluptates nullainventore rem ipsum nobis delectus ducimus et quidem accusantium",
    author: "Pexel",
    date: "08/26/2019",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/14664613/pexels-photo-14664613.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Linane Cunine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandaeperspiciatis facilis voluptas neque fugiat voluptates nullainventore rem ipsum nobis delectus ducimus et quidem accusantium",
    author: "Pexel",
    date: "08/26/2019",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/15045083/pexels-photo-15045083/free-photo-of-woman-in-hat-posing-by-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Linane Cunine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandaeperspiciatis facilis voluptas neque fugiat voluptates nullainventore rem ipsum nobis delectus ducimus et quidem accusantium",
    author: "Pexel",
    date: "08/26/2019",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/21855798/pexels-photo-21855798/free-photo-of-a-man-walking-his-dog-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Linane Cunine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandaeperspiciatis facilis voluptas neque fugiat voluptates nullainventore rem ipsum nobis delectus ducimus et quidem accusantium",
    author: "Pexel",
    date: "08/26/2019",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/24960095/pexels-photo-24960095/free-photo-of-cherry-lady.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Linane Cunine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandaeperspiciatis facilis voluptas neque fugiat voluptates nullainventore rem ipsum nobis delectus ducimus et quidem accusantium",
    author: "Pexel",
    date: "08/26/2019",
  },
];
const BlogComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <div className="containe">
          <h1 className="my-8 border-l-8 border-purple-400/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          {/* blog card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogDatas.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="btn-primary">View All Posts</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
