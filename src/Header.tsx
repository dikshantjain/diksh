

export function Header () {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white shadow">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Dikshant Jain</h1>
          <p className="text-sm">
             ✉️ dikshantjain1997@gmail.com | 🔗 linkedin.com/in/dikshant
          </p>
        </div>
      </div>
    </div>
  );
};

