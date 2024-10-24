import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileUp, Search, BarChart } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Document Analysis Made Simple
        </h1>
        <p className="text-xl text-gray-600">
          Upload documents for text extraction, analysis, and summarization
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<FileUp className="h-8 w-8 text-blue-600" />}
          title="Easy Upload"
          description="Drag and drop your documents for instant analysis"
        />
        <FeatureCard
          icon={<BarChart className="h-8 w-8 text-blue-600" />}
          title="Smart Analysis"
          description="Get key insights, summaries, and sentiment analysis"
        />
        <FeatureCard
          icon={<Search className="h-8 w-8 text-blue-600" />}
          title="Quick Search"
          description="Search through your documents with ease"
        />
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate('/upload')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;