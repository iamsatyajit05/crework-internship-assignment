"use client";
import { useEffect, useState } from "react";
import Category from "./_components/Category";
import Questions from "./_components/Questions";
import Pagination from "./_components/Pagination";
import { fetchQuestions } from "./lib/data";

interface IQuestion {
  question: string;
  tags: string[];
}

export default function Home({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    page?: string;
  };
}) {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const { data, length } = await fetchQuestions(
        searchParams?.category || "",
        searchParams?.page || "1"
      );
      setQuestions(data);
      setTotalQuestions(length);
    };
    getQuestions();
  }, [searchParams?.category, searchParams?.page]);

  return (
    <section className="max-w-screen-lg m-auto px-5 xl:px-0 py-10">
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-b from-white to-[#FAAF3E] bg-clip-text text-transparent">
            Product Management Interview Questions
          </h1>
          <p>Browse 1000+ questions from top tech companies</p>
          <Category />
        </div>
        <Questions questions={questions} />
        <Pagination totalQuestions={totalQuestions} />
      </div>
    </section>
  );
}
