// import styles from "../styles/Pagination.module.css";
// import classnames from "classnames";
// import { usePagination, DOTS } from ".././usePagination";

// const Pagination = (props, index) => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className,
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize,
//   });

//   // If there are less than 2 times in pagination range we shall not render the component
//   if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];
//   return (
//     <ul
//       className={classnames(`${styles.paginationcontainer}`, {
//         [className]: className,
//       })}
//     >
//       {/* Left navigation arrow */}
//       <li
//         className={classnames(`${styles.paginationitem}`, {
//           disabled: currentPage === 1,
//         })}
//         onClick={onPrevious}
//       >
//         <div className={styles.arrowleft} />
//       </li>
//       {paginationRange.map((pageNumber) => {
//         // If the pageItem is a DOT, render the DOTS unicode character
//         if (pageNumber === DOTS) {
//           return <li className={styles.paginationitem.dots}>&#8230;</li>;
//         }

//         // Render our Page Pills
//         return (
//           <li
//             className={classnames(`${styles.paginationitem}`, {
//               selected: pageNumber === currentPage,
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       {/*  Right Navigation arrow */}
//       <li
//         className={classnames(`${styles.paginationitem}`, {
//           disabled: currentPage === lastPage,
//         })}
//         onClick={onNext}
//       >
//         <div className={styles.arrowright} />
//       </li>
//     </ul>
//   );
// };

// export default Pagination;
