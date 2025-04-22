

interface DynamicDataProps {
  content:  Record<string, any>;
  selected: string;
}

export function DynamicData({ content, selected }: DynamicDataProps) {
    const section = content[selected]
    return (
        <div className="flex-grow p-6 space-y-6">
          {section?.header_one && (
            <p className="text-lg whitespace-pre-line">{section.header_one}</p>
          )}
    
          {section?.work_items &&
            section.work_items.map((job: { title: string; points: string[] }, idx: number) => (
              <div key={idx} className="text-left space-y-2">
                <h2 className="text-md font-semibold">{job.title}</h2>
                <ul className="list-disc list-inside space-y-1 text-base">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      );
};

