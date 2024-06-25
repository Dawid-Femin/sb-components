import { CSSProperties, FC, useState } from "react";
import classes from "./header.module.scss";
import exampleImages from "../../utils/images";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface ImagesProps {
  imageUrl: string;
  imageAlt: string;
}

interface HeaderProps {
  images: ImagesProps[];
  title?: string[];
  titleColor?: string;
  subtitle?: string[];
  subtitleColor?: string;
  buttonText?: string;
  buttonLink?: string;
  customStyle?: CSSProperties;
  rounded?: boolean;
  arrowColor?: string;
}

export const Header: FC<HeaderProps> = ({
  images = exampleImages,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  rounded = false,
  customStyle,
  arrowColor,
}) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevState) => (prevState + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevState) => (prevState - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{ ...customStyle }}
      className={`${classes.root} ${rounded && classes.rounded}`}
    >
      {images && (
        <img
          className={`${rounded && classes.rounded}`}
          src={images[index].imageUrl}
          alt={images[index].imageAlt}
        />
      )}
      <div>
        {title && <h1 style={{ color: titleColor }}>{title[index]}</h1>}
        {subtitle && (
          <h3 style={{ color: subtitleColor }}>{subtitle[index]}</h3>
        )}
      </div>
      <div className={classes.arrows} style={{ color: arrowColor }}>
        <IoIosArrowBack onClick={prevImage} />
        <IoIosArrowForward onClick={nextImage} />
      </div>
    </div>
  );
};
