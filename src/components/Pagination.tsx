import React from 'react';

    interface PaginationProps {
      currentPage: number;
      totalPages: number;
      onPageChange: (page: number) => void;
    }

    export default function Pagination({
      currentPage,
      totalPages,
      onPageChange,
    }: PaginationProps) {
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }

      return (
        <div className="flex justify-center mt-8">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 mx-1 rounded-md transition-colors duration-300 ${
                currentPage === page
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      );
    }
