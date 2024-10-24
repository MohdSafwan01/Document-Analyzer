import React, { useState } from 'react';
import { Search as SearchIcon, File, Calendar, User } from 'lucide-react';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const mockResults = [
    {
      title: 'Annual Report 2023',
      type: 'PDF',
      date: '2023-12-15',
      author: 'John Smith',
      preview: 'This annual report outlines the company\'s performance...'
    },
    {
      title: 'Project Proposal',
      type: 'DOCX',
      date: '2023-11-30',
      author: 'Sarah Johnson',
      preview: 'A comprehensive proposal for the new AI initiative...'
    },
    {
      title: 'Technical Documentation',
      type: 'PDF',
      date: '2023-10-25',
      author: 'Mike Wilson',
      preview: 'Detailed technical specifications for the system...'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Search Documents</h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for documents..."
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </form>

      {hasSearched && (
        <div className="space-y-6">
          {mockResults.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <File className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">{result.title}</h3>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                  {result.type}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{result.preview}</p>
              
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{result.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{result.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;