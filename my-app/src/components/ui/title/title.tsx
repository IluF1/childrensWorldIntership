import "./title.css";

type stylesTitle = "name" | "red" | "bold" | "small" | "price";

interface ITitle {
   style: stylesTitle;
   children: any;
}

export const Title = ({ children, style }: ITitle) => {
   const classNames = ["title"];
   if (style === "bold") {
      classNames.push("bold-title");
   }
   if (style === "name") {
      classNames.push("name-title");
   }
    if (style === "price") {
       classNames.push("price-title");
    }
   return <p className={classNames.join(" ")}>{children}</p>;
};
