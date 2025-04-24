

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
           {section?.header_two && (
            <p className="text-lg whitespace-pre-line">{section.header_two}</p>
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
             {section?.skill_groups && (
        <div className="space-y-4">
          {section.skill_groups.map(
            (group: { type: string; skills: string[] }, idx: number) => (
              <div key={idx}>
                <h3 className="text-md font-semibold mb-2">{group.type}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      )}
        </div>
      );
};

