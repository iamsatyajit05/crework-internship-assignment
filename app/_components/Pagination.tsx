"use client";

import { generatePagination } from "@/app/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Pagination({
  totalQuestions,
}: {
  totalQuestions: number;
}) {
  const totalPages = Math.ceil(totalQuestions / 10);
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const startQuestion = currentPage === 1 ? 1 : (currentPage - 1) * 10 + 1;
  const endQuestion =
    currentPage === totalPages ? totalQuestions : currentPage * 10;

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex items-center justify-end gap-5">
      <p className="hidden sm:block text-right">
        Showing {startQuestion}-{endQuestion} of {totalQuestions} questions
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-[#FAAF3D] text-black px-2 py-1 sm:px-4 sm:py-2 rounded font-medium text-sm md:text-base"
          hidden={currentPage === 1}
        >
          Prev
        </button>

        <div className="flex items-center gap-2">
          {allPages.map((page, index) => {
            return (
              <div key={index}>
                {page === "..." ? (
                  <span className="text-white px-2">...</span>
                ) : (
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`border px-2 py-1 sm:px-4 sm:py-2 rounded font-medium text-sm md:text-base ${
                      currentPage === page
                        ? "border-[#FAAF3D] text-[#FAAF3D]"
                        : ""
                    }`}
                  >
                    {page}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-[#FAAF3D] text-black px-2 py-1 sm:px-4 sm:py-2 rounded font-medium text-sm md:text-base"
          hidden={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
