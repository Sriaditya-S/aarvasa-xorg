import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];

        // Always show the first page
        if (currentPage > 3) {
            pages.push(1);
            if (currentPage !== 4) pages.push("...");
        }

        // Pages around current
        for (
            let i = Math.max(1, currentPage - 2);
            i <= Math.min(totalPages, currentPage + 2);
            i++
        ) {
            pages.push(i);
        }

        // Always show the last page
        if (currentPage < totalPages - 2) {
            if (currentPage !== totalPages - 3) pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <nav className="Page navigation mx-auto example w-[90%] flex items-center justify-center">
            <ul className="inline-flex flex-wrap lg:flex-nowrap -space-x-px mx-auto text-base h-10">
                {/* Previous Button */}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex text-md md:text-lg items-center justify-center p-1 md:px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Previous
                    </button>
                </li>

                {/* Page Numbers */}
                {getPageNumbers().map((num, index) => (
                    <li key={index}>
                        {num === "..." ? (
                            <span className="flex items-center text-md md:text-lg justify-center p-3 md:px-4 h-10 leading-tight text-gray-400">
                                ...
                            </span>
                        ) : (
                            <button
                                onClick={() => onPageChange(num)}
                                className={`flex items-center text-md md:text-lg justify-center p-1 md:px-4 h-10 leading-tight border border-gray-300 dark:border-gray-700 ${
                                    currentPage === num
                                        ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white"
                                        : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                }`}
                            >
                                {num}
                            </button>
                        )}
                    </li>
                ))}

                {/* Next Button */}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex text-md md:text-lg items-center justify-center p-1 md:px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
