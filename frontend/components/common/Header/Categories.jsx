"use client";
import { useState } from "react";
import { ListItem } from "./ListItem";
import { categories } from "./links";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <ul className="grid w-52 border-r border-gray-300">
        {categories.map((category, index) => (
          <ListItem
            href={category.url}
            title={category.name}
            setSelectedCategory={setSelectedCategory}
            key={index}
          />
        ))}
      </ul>
      <ul className="grid items-start gap-0">
        {selectedCategory ? (
          categories
            .find((category) => category.name === selectedCategory)
            .children.map((child, index) => (
              <ListItem href={child.url} title={child.name} isChild={true} key={index}/>
            ))
        ) : (
          <>
            <ListItem href="/docs" title="Introduction" isChild={true} />
            <ListItem href="/docs" title="Introduction" isChild={true} />
            <ListItem href="/docs" title="Introduction" isChild={true} />
          </>
        )}
      </ul>
    </>
  );
}
