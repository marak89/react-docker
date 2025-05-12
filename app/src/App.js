import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Witaj w React + Tailwind</h1>
        <p className="text-gray-700">To jest przyklad stylowania bez CSS – tylko z klasami Tailwind.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Kliknij mnie
        </button>
      </div>
    </div>
  );
}
