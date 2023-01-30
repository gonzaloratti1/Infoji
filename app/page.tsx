"use client";
import { Inter } from "@next/font/google";
import { NextPage } from "next";
import React, { useState } from "react";
import Layout from "<prefi>/components/layout";
import EmojiCard from "<prefi>/components/emojiCard";
import List from "<prefi>/components/list";
import emojisData from "<prefi>/data/emojis";
import CategoryCard from "<prefi>/components/categoryCard";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {


  const [filteredEmojis, setFilteredEmojis] = React.useState(
    emojisData.slice(0, 500)
  );
  const [currentSearch, setCurrentSearch] = React.useState('');
  
  
  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }

  function handleFilterBySearch(search: string) {
    setCurrentSearch(search.trim());
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData.slice(0, 500));
    }
  }
  
  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-gray-200 text-center tracking-wide">
        Welcome to Infoji
      </h1>
      <div className="flex justify-center">
        <input
          id="name"
          type={"text"}
          placeholder="Search for an Emoji"
          className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
      <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="😀"
              group={'Smileys & Emotion'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="👨🏻"
              group={'People & Body'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🐶"
              group={'Animals & Nature'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🍔"
              group={'Food & Drink'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="⚽️"
              group="Activities"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🏨"
              group={'Travel & Places'}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="💡"
              group="Objects"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="⚛️"
              group="Symbols"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🚩"
              group="Flags"
            />
      </div>
      <List emojis={filteredEmojis} />
    </Layout>
  );
};

export default Home;
