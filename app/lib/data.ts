import question from "./question.json";

export const fetchQuestions = async (category: string, page: string) => {
  const allQuestions = question.questions;

  let filteredQuestions = allQuestions;
  console.log(category);
  
  if (category) {
    filteredQuestions = allQuestions.filter((q) => q.tags.includes(category));
  }
  const totalQuestions = filteredQuestions.length;
  const pageSize = 10;
  const startIndex = (parseInt(page) - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuestions = filteredQuestions.slice(startIndex, endIndex);

  return { data: paginatedQuestions, length: totalQuestions };
};
