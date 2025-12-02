import { useEffect } from "react";

export default function SEO({ title, description, keywords }) {

  useEffect(() => {
    if (title) document.title = title;

    // description
    const descTag = document.querySelector("meta[name='description']");
    if (descTag) descTag.setAttribute("content", description);
    else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // keywords
    const keyTag = document.querySelector("meta[name='keywords']");
    if (keyTag) keyTag.setAttribute("content", keywords);
    else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  return null;
}
