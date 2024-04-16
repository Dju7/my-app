'use client'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const items = [1, 2, 3, 4, 5, 6, 7, 8];

// eslint-disable-next-line react/prop-types
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        // eslint-disable-next-line react/prop-types
        currentItems.map((item:string) => (
          
            <motion.div
            className=' w-full xl:w-[50%] h-[90%] flex justify-center items-center border border-black hover:bg-tertiary' key={item}
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5}}
            >
              <Link href={`/${item}`}>
              <h3>Image:<span className='text-4xl'>{item}</span></h3>
              </Link>
            </motion.div>
          
        ))}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Carrousel({ itemsPerPage }) {
   
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event: { selected: number; }) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div className='h-[70vh] xl:h-[60vh] w-[80%] flex flex-col xl:flex-row gap-4 mb-6'>
        <Items currentItems={currentItems}  />
        </div>
        
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className='bg-blue-200 flex gap-2' 
        />
        
      </>
    );
  }

  export default Carrousel