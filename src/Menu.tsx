
type MenuProps = {
    sections: string[];
    selected: string;
    setSelected: (value: string) => void;
  };

export function Menu ({sections, selected,setSelected}:MenuProps) {
  return (
    <div className="flex justify-center space-x-4 p-3 border-b bg-gray-50">
      {sections.map((sec) => (
        <button
          key={sec}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selected === sec ? "bg-blue-600 text-white" : "bg-white border border-gray-300"
          }`}
          onClick={() => setSelected(sec)}
        >
          {sec}
        </button>
      ))}
    </div>
  );
};

