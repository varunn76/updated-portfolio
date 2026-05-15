import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";

const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-2 gap-6 pr-6",
          itemsWrapperClassName,
        )}
      >
        {[
          ...new Array(2).fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {items.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2.5 px-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 group cursor-default"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <TechIcon component={item.iconType} />
                  </div>
                  <span className="font-bold text-sm tracking-tight text-white/80 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </span>
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
};

export default ToolBoxItems;
