export default function Questions({ questions }: { questions: any[] }) {
  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="space-y-2">
          <p className="font-medium text-lg">{item.question}</p>
          <div className="flex gap-2 mt-2">
            {item.tags.map((tag: string, index: number) => (
              <span key={index} className="text-[#BDBCBC] text-xs rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
