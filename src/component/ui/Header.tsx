'use client';


export const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 영역 */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              혜택모아
            </h1>
          </div>
          
          {/* 우측 영역 - 테마 스위치 */}
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </div>
    </header>
  );
}; 