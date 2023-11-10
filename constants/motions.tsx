// import React from "react";

// export  const navVariants = {
//   hidden: {
//     opacity: 0,
//     y: -50,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 140,
      
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       delay: 1,
//     },
//   },
// };
// export const sideBarVariants = {
 
//     hidden: {
//       opacity: 0,
//       x: 300,
//       transition: {
//         type: "tween",
//         stiffness: 300,
//         damping: 140,
//         delay: 1,
//       },
//     },
//     show: {
//       opacity: 1,
//       x:0,
//       transition: {
//         type: "tween",
//         stiffness: 80,
//         delay: 0.5,
//       },
//     },
//   };

//   export const textVariant = (delay) => ({
//     hidden: {
//       y: 50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay,
//       },
//     },
//   });

//   export const textContainer = {
//     hidden: {
//       opacity: 0,
//     },
//     show: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
//     }),
//   };

//   export const textVariant2 = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "tween",
//         ease: "easeIn",
//       },
//     },
//   };
//     export const staggerContainer = (
//       staggerChildren,
//       delayChildren
//     ) => ({
//       hidden: {},
//       show: {
//         transition: {
//           staggerChildren,
//           delayChildren,
//         },
//       },
//     });
  

//   export const fadeIn = (direction, type, delay, duration) => ({
//     hidden: {
//       x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type,
//         delay,
//         duration,
//         ease: "easeOut",
//       },
//     },
//   });
//     export const rotateVariants = (direction) => ({
//       hidden: {
//         x: direction === "left" ? "-100%" : "100%",
//         rotate: 150,
//       },
//       show: {
//         x: 0,
//         rotate: 0,
//         transition: {
//           type: "spring",
//           duration: 1.5,
//           delay: .5,
//         },
//       },
//     });
//    export const zoomIn = (delay, duration) => ({
//      hidden: {
//        scale: 0,
//        opacity: 0,
//      },
//      show: {
//        scale: 1,
//        opacity: 1,
//        transition: {
//          type: "tween",
//          delay,
//          duration,
//          ease: "easeOut",
//        },
//      },
//    });
import React from "react";

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};
export const sideBarVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
      delay: 1,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};
export const staggerContainer = (
  staggerChildren: React.ReactNode,
  delayChildren: React.ReactNode
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
}) as const;

export const fadeIn = (
  direction: string,
  type: String,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
export const rotateVariants = (direction: string) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 150,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.5,
    },
  },
});
export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});