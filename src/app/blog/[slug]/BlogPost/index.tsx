"use client";
import React from "react";
import Image from "next/image";
import { Post } from "@types";
import { RichTextLexicalRenderer } from "@webiny/react-rich-text-lexical-renderer";
import { Gutter } from "@components/Gutter";

import classes from "./classes.module.scss";

const BlogPost: React.FC<Post> = (props) => {
  const { title, image, summary } = props;
  return (
    <Gutter className={classes.postContainer}>
      <section className={classes.heroContainer}>
        <div className={[classes.postInfo, "grid"].filter(Boolean).join(" ")}>
          <div
            className={[classes.postTitle, "start-1 cols-8 start-m-1 cols-m-8"]
              .filter(Boolean)
              .join(" ")}
          >
            {title}
          </div>
          <div
            className={[classes.postSummary, "start-13 cols-4 start-m-1 cols-8"]
              .filter(Boolean)
              .join(" ")}
          >
            <RichTextLexicalRenderer value={summary} />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <div className={classes.imageWrapper}>
            {typeof image !== "string" && (
              <Image
                src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.url}`}
                alt={"sphere"}
                fill
                className={classes.image}
              />
            )}
          </div>
        </div>
      </section>
    </Gutter>
  );
};

export default BlogPost;
