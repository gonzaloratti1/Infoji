import * as React from "react";

interface CategoryProps {
  emoji: string;
  group: string;
  handleFilter: (group: string) => void;
}

const CategoryCard: React.FunctionComponent<CategoryProps> = ({
  emoji,
  group,
  handleFilter,
}) => {
  return (
    <React.Fragment>
      <button className="flex items-baseline justify-start pl-7 rounded-md bg-gray-400 py-2 hover:bg-gray" onClick={() => handleFilter(group)}>
        <span className="text-xl mr-4" role={"img"} aria-label={emoji}>
            {emoji}
        </span>
        <p>
            {group}
        </p>
      </button>
    </React.Fragment>
  );
};


export default CategoryCard