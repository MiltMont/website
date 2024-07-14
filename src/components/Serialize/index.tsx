import React from "react";

type Node = {
  children?: Node[];
  type: string;
  tag?: string;
  text?: string;
};

type SerializeFunction = React.FC<{
  content?: Node[];
}>;

export const RichText: React.FC<{
  className?: string;
  content: any;
}> = ({ className, content }) => {
  if (!content || !content.root.children) {
    return null;
  } else {
    return (
      <div className={[className].filter(Boolean).join(" ")}>
        {content.root?.children && (
          <Serialize content={content.root?.children} />
        )}
      </div>
    );
  }
};

export const Serialize: SerializeFunction = ({ content }) => {
  return (
    <>
      {content?.map((node, i) => {
        if (!node) {
          return null;
        }

        switch (node.type) {
          case "root":
            return <div>Root element</div>;

          case "heading":
            switch (node.tag) {
              case "h1":
                return (
                  <h1 key={i}>
                    <Serialize content={node.children} />
                  </h1>
                );
              case "h2":
                return (
                  <h2 key={i}>
                    <Serialize content={node.children} />
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={i}>
                    <Serialize content={node.children} />
                  </h3>
                );
              case "h4":
                return (
                  <h4 key={i}>
                    <Serialize content={node.children} />
                  </h4>
                );
            }
          case "paragraph":
            return (
              <p>
                <Serialize content={node.children} />{" "}
              </p>
            );

          case "text":
            return node.text;
        }
      })}
    </>
  );
};