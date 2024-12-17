function App() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/flyer.png");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "event-flyer.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      console.log("Error downloading image:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        {/* Logo */}
        <div className="w-[90%] mx-auto mb-8">
          <img src="/logo.png" alt="Logo" className="w-full" />
        </div>

        {/* Title */}
        <h1 className="text-2xl text-center mb-8 font-light text-white">
          Presiona la imagen para descargar
        </h1>

        {/* Clickable Flyer Image */}
        <button
          onClick={handleDownload}
          className="w-full cursor-pointer transition-transform hover:scale-[0.99] active:scale-[0.97]"
          aria-label="Descargar flyer del evento"
        >
          <img
            src="/flyer.png"
            alt="Flyer del evento con detalles de música reggaeton y tech house"
            className="mx-auto w-[90%] rounded-lg shadow-lg"
          />
        </button>

        {/* Download Alert */}
        <div className="bg-red-600 text-white p-4 text-center text-xl font-medium rounded-lg">
          PRESIONA LA IMAGEN PARA DESCARGAR
        </div>
      </div>
    </div>
  );
}

export default App;
