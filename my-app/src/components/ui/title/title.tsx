import "./title.css";

type stylesTitle = "name" | "red" | "bold" | "small" | "classic";

interface ITitle {
   style: stylesTitle;
   children: string;
}

export const Title = ({ children, style }: ITitle) => {
   const classNames = ["title"];
   if (style === "bold") {
      classNames.push("bold-title");
   }
   return <p className={classNames.join(" ")}>{children}</p>;
};
