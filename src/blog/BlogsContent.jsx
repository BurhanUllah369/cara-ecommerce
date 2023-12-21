import React from "react";
import { images } from "../data";
import Blog from "./Blog";

function BlogsContent() {
  return (
    <section className="blogs-content">
      <Blog
        image={images.blog[0].url}
        number="13/01"
        heading="The Cotton-Jersey Zip-Up Hoodie"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a voluptates fugit natus quasi labore quam numquam explicabo, quidem debitis aut ipsa in quibusdam perspiciatis inventore? Molestiae excepturi deleniti suscipit?"
      />
      <Blog
        image={images.blog[1].url}
        number="11/08"
        heading="How to Style a Quiff"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a voluptates fugit natus quasi labore quam numquam explicabo, quidem debitis aut ipsa in quibusdam perspiciatis inventore? Molestiae excepturi deleniti suscipit?"
      />
      <Blog
        image={images.blog[2].url}
        number="13/04"
        heading="Must-Have Skater Girl Items"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a voluptates fugit natus quasi labore quam numquam explicabo, quidem debitis aut ipsa in quibusdam perspiciatis inventore? Molestiae excepturi deleniti suscipit?"
      />
      <Blog
        image={images.blog[3].url}
        number="12/01"
        heading="Runway-Inspired Trends"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a voluptates fugit natus quasi labore quam numquam explicabo, quidem debitis aut ipsa in quibusdam perspiciatis inventore? Molestiae excepturi deleniti suscipit?"
      />
      <Blog
        image={images.blog[4].url}
        number="16/04"
        heading="AW20 Menwear Trends"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a voluptates fugit natus quasi labore quam numquam explicabo, quidem debitis aut ipsa in quibusdam perspiciatis inventore? Molestiae excepturi deleniti suscipit?"
      />
    </section>
  );
}

export default BlogsContent;
