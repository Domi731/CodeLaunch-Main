
import React, { useState } from 'react';
import { User, Lock, Mail, Github } from 'lucide-react';

const LoginSection = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Placeholder für zukünftige Authentifizierung
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="login" className="py-20 bg-tech-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-launch bg-clip-text text-transparent">
                {isLogin ? 'Anmelden' : 'Registrieren'}
              </span>
            </h2>
            <p className="text-gray-300">
              {isLogin 
                ? 'Melde dich an, um deine Projekte zu verwalten' 
                : 'Erstelle einen Account für erweiterte Features'
              }
            </p>
          </div>

          <div className="bg-tech-dark border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:border-launch-blue focus:outline-none transition-colors duration-300"
                      placeholder="Dein Name"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-Mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:border-launch-blue focus:outline-none transition-colors duration-300"
                    placeholder="deine@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Passwort
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:border-launch-blue focus:outline-none transition-colors duration-300"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full launch-button py-3 text-lg font-semibold"
              >
                {isLogin ? 'Anmelden' : 'Registrieren'}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-tech-dark text-gray-400">oder</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-gray-800 border border-gray-700 text-white py-3 px-4 rounded-lg hover:border-launch-blue transition-colors duration-300 flex items-center justify-center gap-3">
                <Github size={20} />
                Mit GitHub anmelden
              </button>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-400 hover:text-launch-blue transition-colors duration-300"
              >
                {isLogin 
                  ? 'Noch kein Account? Jetzt registrieren' 
                  : 'Bereits registriert? Hier anmelden'
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
