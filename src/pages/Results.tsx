import React from 'react';
import { BarChart, PieChart, Tag } from 'lucide-react';

function Results() {
  const mockKeyPhrases = [
    'artificial intelligence',
    'machine learning',
    'data analysis',
    'neural networks',
    'deep learning',
    'big data',
    'automation',
    'algorithms'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Analysis Results</h1>

      {/* Document Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Document Summary</h2>
        <p className="text-gray-600">
          This document discusses the implementation of artificial intelligence in modern business
          processes. It highlights the importance of machine learning algorithms in data analysis
          and decision-making. The text emphasizes how neural networks can improve automation
          and efficiency in various industries.
        </p>
      </div>

      {/* Key Phrases */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2 text-blue-600" />
          Key Phrases
        </h2>
        <div className="flex flex-wrap gap-2">
          {mockKeyPhrases.map((phrase, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <BarChart className="h-5 w-5 mr-2 text-blue-600" />
          Sentiment Analysis
        </h2>
        <div className="space-y-3">
          <SentimentBar label="Positive" percentage={75} />
          <SentimentBar label="Neutral" percentage={20} />
          <SentimentBar label="Negative" percentage={5} />
        </div>
      </div>

      {/* Keyword Frequency */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <PieChart className="h-5 w-5 mr-2 text-blue-600" />
          Keyword Frequency
        </h2>
        <div className="space-y-3">
          <KeywordBar word="artificial" count={15} />
          <KeywordBar word="intelligence" count={12} />
          <KeywordBar word="data" count={10} />
          <KeywordBar word="learning" count={8} />
          <KeywordBar word="analysis" count={6} />
        </div>
      </div>
    </div>
  );
}

function SentimentBar({ label, percentage }: { label: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function KeywordBar({ word, count }: { word: string; count: number }) {
  const maxCount = 15; // Maximum count for scaling
  const percentage = (count / maxCount) * 100;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{word}</span>
        <span className="text-sm font-medium text-gray-700">{count} occurrences</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Results;