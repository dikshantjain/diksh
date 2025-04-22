
import myPic from './assets/my_pic.jpg';

export function Header () {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white shadow">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
          <img src={myPic} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Dikshant Jain</h1>
          <p className="text-sm">
             ✉️ dikshantjain1997@gmail.com | 🔗 www.linkedin.com/in/dikshant-jain-bb4142173
          </p>
        </div>
      </div>
    </div>
  );
};

