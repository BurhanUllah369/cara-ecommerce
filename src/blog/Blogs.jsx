import React from "react";
import { images } from "../data";
import ReusableHeader from "../header/ReusableHeader";
import BlogsContent from "./BlogsContent";
import "./blog.css"
import Pagination from "../pagination/Pagination";

function Blog() {
  return (
    <section className="blogs">
      <ReusableHeader
        heading="#readmore"
        description="Read all case studies about our products!"
        image={images.banner[9].url}
      />
      <BlogsContent />
      <Pagination/>
    </section>
  );
}

export default Blog;
