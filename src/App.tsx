import './global.css'
import logo from './assets/logo.png'
import { Instagram, Youtube } from 'lucide-react';

function App() {
  return (
    <>
  <div className="bg-gray-900 text-white min-h-screen flex flex-col">
    <main className="flex-1 flex flex-col gap-8 items-center justify-start py-8 w-full">
      <section className="w-full max-w-xs md:max-w-md lg:max-w-lg flex flex-col items-center">
        <img src={logo} alt="" className="border-2 border-gray-700 rounded-lg w-24 h-24 object-cover" />
        <h1 className="text-gray-200 text-2xl font-bold mt-4 text-center">João Pedro</h1>
        <p className="text-base mt-2 text-gray-400 text-center">Dev Full-Stack</p>
      </section>

      <section className="w-full max-w-2xl bg-gray-950 bg-opacity-90 rounded-lg border-2 border-gray-700 shadow-xl p-6 flex flex-col items-center">
        <h2 className="text-gray-200 text-xl font-semibold text-center mb-4">Sobre Mim</h2>
        <p className="text-sm text-gray-400 text-center">
          Olá! Meu nome é João Pedro, tenho 14 anos e estou aprendendo programação. Sou um desenvolvedor Full-Stack apaixonado por tecnologia e inovação, onde tenho aprimorado minhas habilidades em programação e desenvolvimento de software. Tenho experiência com diversas tecnologias, incluindo JavaScript, React, Node.js, TypeScript e C#. Sou dedicado, curioso e sempre busco aprender algo novo para me manter atualizado no campo da tecnologia. Estou entusiasmado para contribuir com projetos desafiadores e crescer profissionalmente na área de desenvolvimento de software.
        </p>
      </section>

      <section className="w-full max-w-2xl bg-gray-950 bg-opacity-90 rounded-lg border-2 border-gray-700 shadow-xl p-6 flex flex-col items-center">
        <h2 className="text-gray-200 text-xl font-semibold text-center mb-4">Portfólio</h2>
        <p className="text-sm text-gray-400 text-center">
          Atualmente, esse e meu portfólio estão em desenvolvimento. Em breve, estarei compartilhando meus projetos e trabalhos aqui. Fique atento para novidades em breve!
        </p>
        <p className="text-blue-400 text-center mt-2">⚠️ AVISO: Em breve estará funcionando</p>
        <button className="bg-white text-gray-900 px-4 py-2 mt-4 rounded hover:bg-gray-200 transition" onClick={() => alert('Em breve estará funcionando!')}>
          Visitar o Portfólio
        </button>
        <div className="flex flex-col items-center mt-6 w-full">
          <h3 className="text-lg font-medium mb-2">Redes Sociais:</h3>
          <div className="flex justify-center items-center space-x-6">
            <a href="https://www.instagram.com/myjoao__/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
              <Instagram color="white" size={32} />
            </a>
            <a href="https://www.youtube.com/@ejoaodev" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <Youtube color="white" size={32} />
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-gray-950 text-gray-300 text-center py-4 border-t border-gray-800 w-full">
      <p className="text-base">2025 &copy; Todos os direitos reservados para
        <a href="https://github.com/joaodev274" className="underline hover:text-blue-400 ml-1" target="_blank"rel="noopener noreferrer">
          joaodev274
        </a>
      </p>
    </footer>
  </div>
    </>
  );
}

export default App;
