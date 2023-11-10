import { fadeIn, textContainer, textVariant2 } from "@/constants/motions";
import Styles from "@/app/styles/styles";
import { motion } from "framer-motion";
import Image from "next/image";
type TextProps = {
  title: String;
  textStyles: String;
};
type TitleProps = {
  title: String;
  direction?: string;
  img?: SVGAElement;
  animation?: string;
};
export const TitleText = ({ title, textStyles }: TextProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};
export const TypingText = ({ title, textStyles }: TextProps) => {
  return (
    <motion.p variants={textContainer} className={`${textStyles}  `}>
      {Array.from(title).map((letter, i) => (
        <motion.span key={i} variants={textVariant2}>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleWithImage = ({
  title,
  direction,
  img,
  animation,
}: TitleProps) => {
  return (
    <div className={`${Styles.itemsCenter} relative `}>
      <TypingText
        title={title}
        textStyles={
          "  text-main  tracking-widest   md:text-[32px] dark:text-white/80  mx-3 text-[30px]  font-extrabold "
        }
      />
      <div className="main-gradient left-[30rem] top-0  " />

      {img && animation && (
        <motion.div
          className={`absolute  -top-15 ${direction}-0 md:${direction}-[6rem]`}
          variants={fadeIn(animation, "tween", 0.6, 1)}
        >
          <Image
            src={(img as SVGAElement) || String}
            alt={title as string}
            className="lg:w-[300px] md:w-[220px] sm:w-[150px] w-[80px]"
          />
        </motion.div>
      )}
    </div>
  );
};
