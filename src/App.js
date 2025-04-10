export default function App() {
  return (
    <div className="bg-blue-700 min-h-screen text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">EcoWise Móvil</h1>
      <div className="bg-white text-gray-800 w-full max-w-sm p-6 rounded-xl shadow space-y-4">
        <div>🌞 Generado hoy: 4.8 kWh</div>
        <div>🔋 Almacenado: 3.0 kWh</div>
        <div>⚡ Consumo: 2.6 kWh</div>
        <div>🌱 CO₂ evitado: 14.6 kg</div>
      </div>
    </div>
  );
}
